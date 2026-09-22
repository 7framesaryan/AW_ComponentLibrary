#!/usr/bin/env node
/**
 * AuctionWire Component Library — integrity check.
 *
 *   node scripts/check.mjs          (needs the Foundations library; see scripts/foundations.mjs)
 *
 * Fails (exit 1) when this library has drifted:
 *   - folder hygiene: components/ holds only <id>.html files
 *   - the cascade.mjs order and components/ disagree, or a file is listed twice
 *   - a component file is not a component registered in the Foundations components.json,
 *     or a registered component has no file here
 *   - a component file has no "component" marker, so its styling can't be read out of it
 *   - a raw hex or deny-listed colour (every value must be a Foundations token)
 *   - a var(--aw-*) this CSS uses that the Foundations tokens.css / assets.css does not define
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { basename, join } from "node:path";
import { componentCssFiles, componentCss } from "./components-css.mjs";
import { FOLDED } from "../cascade.mjs";
import { foundationsDir, root } from "./foundations.mjs";

const errors = [];
const notes = [];
const fail = (m) => errors.push(m);
const read = (p) => readFileSync(join(root, p), "utf8");
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "");

let fnd;
try {
  fnd = foundationsDir();
} catch (e) {
  console.error(`✗ ${e.message}`);
  process.exit(1);
}
notes.push(`foundations: ${fnd}`);
const reg = JSON.parse(readFileSync(join(fnd, "components.json"), "utf8"));


// ── Folder hygiene ───────────────────────────────────────────────────────
for (const n of readdirSync(join(root, "components")))
  if (n !== ".DS_Store" && !n.endsWith(".html")) fail(`components/${n}: components/ holds only <id>.html files`);

// ── Manifest ↔ files ↔ registry ──────────────────────────────────────────
let listed = [];
try {
  listed = componentCssFiles();
  const ids = listed.map((f) => f.id);
  if (new Set(ids).size !== ids.length) fail("cascade.mjs lists a component more than once");
  for (const { id, path, file } of listed) {
    if (!existsSync(file)) fail(`cascade.mjs lists ${path}, which doesn't exist`);
    else {
      try {
        if (!componentCss(file).trim()) fail(`${path}: the "component" section is empty`);
      } catch (e) {
        fail(`${path}: ${e.message.replace(`${file}: `, "")}`);
      }
    }
    if (!id.startsWith("_") && !reg.components[id]) fail(`${path} is not a registered component (prefix helper files with "_")`);
  }
  for (const f of readdirSync(join(root, "components")).filter((f) => f.endsWith(".html")))
    if (!ids.includes(basename(f, ".html"))) fail(`components/${f} is not listed in cascade.mjs`);
  for (const id of Object.keys(reg.components))
    if (!ids.includes(id) && !FOLDED.has(id)) fail(`component "${id}" is registered in the Foundations components.json but has no components/${id}.html here`);
} catch (e) {
  fail(`component CSS: ${e.message}`);
}

// ── Every registered class is actually styled somewhere ──────────────────
try {
  const allCss = listed.map(({ file }) => componentCss(file)).join("\n");
  const styled = new Set([...allCss.matchAll(/\.(aw-[\w-]+)/g)].map(([, c]) => c));
  for (const [id, c] of Object.entries(reg.components)) {
    if (!c.class) continue;
    if (!styled.has(c.class)) {
      const where = FOLDED.get(id);
      fail(`.${c.class} (component "${id}") is styled nowhere${where ? `, but should sit inside components/${where}.html` : ""}`);
    }
  }
  for (const [id, parent] of FOLDED)
    if (!componentCss(join(root, `components/${parent}.html`)).includes(`.${reg.components[id]?.class}`))
      fail(`component "${id}" is folded into components/${parent}.html, but its styling isn't there`);
} catch (e) {
  fail(`component styling: ${e.message}`);
}

// ── Colours: Foundations tokens only ─────────────────────────────────────
const DENY = ["#16a34a", "#2563eb", "#4773b9", "#89afed", "#09090b", "#22c55e", "#ef4444"];
for (const { path, file } of listed) {
  const text = stripComments(componentCss(file)).toLowerCase();
  for (const hex of DENY) if (text.includes(hex)) fail(`${path}: uses deny-listed colour ${hex}`);
  for (const [, hex] of text.matchAll(/(?<![\w-])(#[0-9a-f]{3,8})\b/g)) fail(`${path}: raw colour ${hex} (use a Foundations token)`);
}

// ── Every var(--aw-*) resolves in the Foundations tokens ─────────────────
// Known open gap, recorded in AW_DesignLanguage decisions/2026-09-22-component-library-removal.md §7:
// the sample card photos point at image tokens nothing defines, so those photos render blank.
const KNOWN_UNDEFINED = new Set(["--aw-img-aaron", "--aw-img-cobb", "--aw-img-mantels", "--aw-img-slab", "--aw-img-hero"]);
const defined = new Set(
  ["src/tokens.css", "src/assets.css"] // assets.css defines the embedded-image tokens
    .flatMap((f) => [...readFileSync(join(fnd, f), "utf8").matchAll(/(--aw-[\w-]+)\s*:/g)].map(([, k]) => k))
);
const stillMissing = new Set();
for (const { path, file } of listed) {
  const text = stripComments(componentCss(file));
  const local = new Set([...text.matchAll(/(--aw-[\w-]+)\s*:/g)].map(([, k]) => k));
  for (const [, v] of text.matchAll(/var\(\s*(--aw-[\w-]+)/g)) {
    if (defined.has(v) || local.has(v)) continue;
    if (KNOWN_UNDEFINED.has(v)) stillMissing.add(v);
    else fail(`${path}: uses ${v}, which the Foundations src/tokens.css or src/assets.css does not define`);
  }
}
if (stillMissing.size)
  notes.push(
    `known gap — ${stillMissing.size} image token(s) undefined, so those sample photos render blank: ` +
      `${[...stillMissing].join(", ")} (AW_DesignLanguage decisions/2026-09-22-component-library-removal.md §7)`
  );

if (notes.length) console.log(notes.map((n) => `• ${n}`).join("\n"));
if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`✓ component library consistent (${listed.length} component files, one per component)`);
