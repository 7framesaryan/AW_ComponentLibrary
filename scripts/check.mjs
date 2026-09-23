#!/usr/bin/env node
/**
 * AuctionWire Component Library — integrity check.
 *
 *   node scripts/check.mjs          (needs the Foundations library; see scripts/foundations.mjs)
 *
 * Fails (exit 1) when this library has drifted:
 *   - structure: unexpected top-level items; components/ holds only <id>.html, <id>.md and INDEX.md
 *   - the cascade.mjs order and components/ disagree, or a file is listed twice
 *   - components.json: a component file or guideline that isn't registered, a registered component
 *     with no code file or no guideline, a guideline missing its required sections or its class
 *   - components/INDEX.md is out of date (run node scripts/build-index.mjs)
 *   - a class this CSS defines that is neither a registered component nor a Foundations utility
 *   - a markdown link that goes nowhere, or a `02-design-system/...` path missing from the Foundations
 *   - an #aw-i-* icon that the Foundations sprite (icons/sprite/) doesn't have
 *   - a component file has no "component" marker, so its styling can't be read out of it
 *   - a raw hex or deny-listed colour (every value must be a Foundations token)
 *   - a var(--aw-*) this CSS uses that the Foundations tokens.css / assets.css does not define
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { componentCssFiles, componentCss } from "./components-css.mjs";
import { FOLDED } from "../cascade.mjs";
import { foundationsDir, foundationsRoot, root } from "./foundations.mjs";
import { renderComponentIndex } from "./build-index.mjs";

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
const reg = JSON.parse(read("components.json"));
const utilityClasses = new Set(Object.values(JSON.parse(readFileSync(join(fnd, "utilities.json"), "utf8")).utilities).flat());

// ── Structure ────────────────────────────────────────────────────────────
const TOP = ["README.md", "CLAUDE.md", "AGENTS.md", "cascade.mjs", "components.json", "components", "scripts"];
for (const n of readdirSync(root))
  if (![".git", ".gitignore", ".DS_Store", ...TOP].includes(n)) fail(`unexpected top-level item: ${n}`);
for (const n of TOP) if (!existsSync(join(root, n))) fail(`missing ${n}`);
for (const n of readdirSync(join(root, "components")))
  if (n !== ".DS_Store" && !/\.(html|md)$/.test(n)) fail(`components/${n}: components/ holds only <id>.html (code), <id>.md (guideline) and INDEX.md`);

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
    if (!ids.includes(id) && !FOLDED.has(id)) fail(`component "${id}" is registered in components.json but has no components/${id}.html`);
} catch (e) {
  fail(`component CSS: ${e.message}`);
}

// ── Registry ↔ guidelines ────────────────────────────────────────────────
const categorised = new Set(Object.values(reg.categories ?? {}).flat());
for (const [id, c] of Object.entries(reg.components)) {
  for (const field of ["name", "category", "status", "guide", "class"]) if (!c[field]) fail(`components.json "${id}": missing "${field}"`);
  if (!categorised.has(id)) fail(`components.json "${id}": not listed in any category`);
  if (c.status && !reg.statusKey?.[c.status]) fail(`components.json "${id}": unknown status "${c.status}"`);
  const want = `components/${FOLDED.get(id) ?? id}.html`;
  if (!(c.files ?? []).includes(want)) fail(`components.json "${id}": files must list ${want}`);
  if (c.guide !== `components/${id}.md`) fail(`components.json "${id}": guide must be components/${id}.md`);
  if (!existsSync(join(root, `components/${id}.md`))) { fail(`component "${id}" has no guideline components/${id}.md`); continue; }
  const g = read(`components/${id}.md`);
  if (!g.includes(`.${c.class}`)) fail(`components/${id}.md: doesn't name its class .${c.class}`);
  for (const h of ["## When to use", "## When not to use", "## Variants", "## States", "## Example"])
    if (!g.includes(h)) fail(`components/${id}.md: missing section "${h}"`);
}
for (const f of readdirSync(join(root, "components")).filter((f) => f.endsWith(".md") && f !== "INDEX.md"))
  if (!reg.components[basename(f, ".md")]) fail(`components/${f} has no entry in components.json`);
try {
  if (!existsSync(join(root, "components/INDEX.md")) || read("components/INDEX.md") !== renderComponentIndex())
    fail("components/INDEX.md is out of date: run node scripts/build-index.mjs");
} catch (e) {
  fail(`components/INDEX.md: ${e.message}`);
}
const provisional = Object.entries(reg.components).filter(([, c]) => c.status === "provisional").map(([id]) => id);
if (provisional.length) notes.push(`provisional components (screenshot-based, verify in Figma): ${provisional.join(", ")}`);

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
  // every variant class is styled (here or in the Foundations base.css), and every class this CSS
  // defines is a registered component block or a Foundations utility
  const base = readFileSync(join(fnd, "src/base.css"), "utf8");
  const defined = new Set([...stripComments(allCss + "\n" + base).matchAll(/\.(aw-[\w-]+)/g)].map(([, c]) => c));
  const block = (c) => c.replace(/(__|--).*$/, "");
  const blocks = new Set();
  for (const [id, c] of Object.entries(reg.components))
    for (const cls of new Set([c.class, ...Object.values(c.variants ?? {}).flatMap((v) => v.match(/aw-[\w-]+/g) ?? [])])) {
      blocks.add(block(cls));
      if (!defined.has(cls)) fail(`components.json "${id}": .${cls} is styled nowhere (components/*.html or the Foundations base.css)`);
    }
  for (const b of new Set([...stripComments(allCss).matchAll(/\.(aw-[\w-]+)/g)].map(([, c]) => block(c))))
    if (!blocks.has(b) && !utilityClasses.has(b)) fail(`CSS class .${b} is neither a registered component (components.json) nor a Foundations utility (02-design-system/utilities.json)`);
} catch (e) {
  fail(`component styling: ${e.message}`);
}

// ── Links and paths in markdown ─────────────────────────────────────────
// Relative links stay inside this repo. A Foundations file is written as a backticked path from the
// Foundations repo root (`02-design-system/foundations/grid.md`) and checked against it.
const mdFiles = [...readdirSync(root).filter((f) => f.endsWith(".md")), ...readdirSync(join(root, "components")).filter((f) => f.endsWith(".md")).map((f) => `components/${f}`)];
for (const f of mdFiles) {
  const text = read(f);
  for (const [, target] of text.matchAll(/\]\(([^)\s#]+)(?:#[^)]*)?\)/g)) {
    if (/^[a-z]+:/i.test(target)) continue;
    if (!existsSync(resolve(root, dirname(f), target))) fail(`${f}: broken link → ${target}`);
  }
  for (const [, path] of text.matchAll(/`((?:01-product-context|02-design-system|03-UI designs)\/[^`\s]*)`/g)) {
    if (/[<>*{}…]/.test(path)) continue;
    if (!existsSync(join(foundationsRoot(), path))) fail(`${f}: dead Foundations path → ${path}`);
  }
}

// ── Icons: every #aw-i-* exists in the Foundations sprite ───────────────
const iconIds = new Set(readdirSync(join(fnd, "icons/sprite")).filter((f) => f.endsWith(".svg")).map((f) => `aw-i-${basename(f, ".svg")}`));
for (const f of readdirSync(join(root, "components")).filter((f) => /\.(md|html)$/.test(f)))
  for (const [, id] of read(`components/${f}`).matchAll(/#(aw-i-[a-z0-9-]+)/g))
    if (!iconIds.has(id) && !id.endsWith("-")) fail(`components/${f}: uses #${id}, which the Foundations sprite has no icons/sprite/${id.slice(5)}.svg for`);

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
console.log(`✓ component library consistent (${Object.keys(reg.components).length} components: code, guideline and registry in step)`);
