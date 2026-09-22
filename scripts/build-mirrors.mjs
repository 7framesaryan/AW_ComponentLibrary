#!/usr/bin/env node
/**
 * Generates coded/<id>.html — one self-contained coded file per component. Each file carries
 * ONLY what that component uses, so it drops straight into a Claude artifact:
 *   - :root with just the tokens referenced (values copied from the Foundations src/tokens.css)
 *   - the foundations base.css primitives it leans on, and rules of components it sits with
 *   - its own rules, copied VERBATIM from components/<id>.css (exact source slices)
 *   - only the icon <symbol>s it references (from the Foundations icon sprite)
 *   - a specimen scaffold (scripts/specimens.mjs) showing variants and states
 *
 * Composes BOTH libraries: styling from this repo, tokens/base/icons/registry from Foundations
 * (see scripts/foundations.mjs for how that is located). The files are derived mirrors: edit the
 * component CSS or the specimens, then rerun. Never edit them by hand; check.mjs fails if they
 * are out of date.
 *
 *   node scripts/build-mirrors.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SPECIMENS } from "./specimens.mjs";
import { componentCssFiles } from "./components-css.mjs";
import { foundationsDir, root } from "./foundations.mjs";

export const CODED_DIR = "coded";

/** read from the Foundations library (tokens, base.css, the sprite, the registry, assets) */
const readF = (p) => readFileSync(join(foundationsDir(), p), "utf8");

// ── CSS: top-level rules as exact source slices ─────────────────────────
function parseRules(text) {
  const items = [];
  let i = 0;
  while (i < text.length) {
    while (i < text.length && /\s/.test(text[i])) i++;
    if (i >= text.length) break;
    const start = i;
    if (text.startsWith("/*", i)) {
      const end = text.indexOf("*/", i) + 2;
      items.push({ type: "comment", text: text.slice(start, end), start, end });
      i = end;
      continue;
    }
    const brace = text.indexOf("{", i);
    let depth = 0, j = brace;
    for (; j < text.length; j++) {
      if (text[j] === "{") depth++;
      else if (text[j] === "}" && --depth === 0) break;
    }
    let end = j + 1;
    const trailing = /^[ \t]*\/\*[^\n]*?\*\//.exec(text.slice(end)); // same-line comment belongs to the rule
    if (trailing) end += trailing[0].length;
    const selector = text.slice(start, brace).trim();
    items.push({ type: selector.startsWith("@") ? "at" : "rule", selector, text: text.slice(start, end), start, end });
    i = end;
  }
  // an adjacent, non-banner comment right above a rule travels with it
  for (let k = 1; k < items.length; k++) {
    const it = items[k], prev = items[k - 1];
    if (it.type !== "rule" || prev.type !== "comment" || /──|====/.test(prev.text)) continue;
    const gap = text.slice(prev.end, it.start);
    if (/^[ \t]*\n[ \t]*$/.test(gap)) it.lead = prev.text + gap;
  }
  return items.filter((x) => x.type === "rule");
}
const block = (c) => c.replace(/(__|--).*$/, "");
const classesOf = (sel) => [...sel.matchAll(/\.(aw-[\w-]+)/g)].map((m) => m[1]);
const varsIn = (s) => new Set([...s.matchAll(/var\(\s*(--aw-[\w-]+)/g)].map((m) => m[1]));
const indent = (s) => s.split("\n").map((l) => (l ? "  " + l : l)).join("\n");

export function renderComponentMirrors() {
  const reg = JSON.parse(readF("components.json"));
  const compRules = componentCssFiles().flatMap((f) => parseRules(readFileSync(f.file, "utf8")).map((r) => ({ ...r, file: f.path })));
  const baseRules = parseRules(readF("src/base.css"));
  const tokens = new Map();
  for (const m of readF("src/tokens.css").matchAll(/(--aw-[\w-]+)\s*:\s*([^;]+);/g)) tokens.set(m[1], m[2].trim());
  const symbols = new Map([...readF("src/icons.svg.html").matchAll(/<symbol id="(aw-i-[\w-]+)"[\s\S]*?<\/symbol>/g)].map((m) => [m[1], m[0]]));
  const asset = (p) => "data:image/svg+xml;base64," + readFileSync(join(foundationsDir(), p)).toString("base64");

  const folded = new Map(Object.entries(SPECIMENS).flatMap(([id, s]) => (s.fold ?? []).map((f) => [f, id])));
  const ownerOf = new Map(Object.entries(SPECIMENS).flatMap(([id, s]) => s.owns.map((b) => [b, id])));
  const missing = Object.keys(reg.components).filter((id) => !SPECIMENS[id] && !folded.has(id));
  if (missing.length) throw new Error(`no specimen (and not folded) for: ${missing.join(", ")}`);

  const out = new Map();
  for (const [id, spec] of Object.entries(SPECIMENS)) {
    const c = reg.components[id];
    if (!c) throw new Error(`scripts/specimens.mjs: "${id}" is not in the Foundations components.json`);
    const markup = spec.sections.map(([, h]) => h).join("\n");
    const used = new Set([...markup.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((x) => x.startsWith("aw-")));
    const owns = new Set(spec.owns);
    const isOwned = (r) => classesOf(r.selector).some((cl) => owns.has(block(cl)));
    // a rule another component owns comes along when every class in one of its selectors is on the page
    const isNeeded = (r) => r.selector.split(",").some((s) => { const cl = classesOf(s); return cl.length && cl.every((x) => used.has(x)); });

    const own = compRules.filter(isOwned);
    if (!own.length) throw new Error(`${id}: no rules in components/*.css for ${spec.owns.join(", ")}`);
    const deps = compRules.filter((r) => !isOwned(r) && isNeeded(r));
    const base = baseRules.filter((r) =>
      r.selector.startsWith("*") || r.selector === ".aw-root" ||
      (r.selector === "button" ? /<button/.test(markup) : r.selector === ".aw-root img" ? /<img/.test(markup) : isNeeded(r) || isOwned(r)));
    const fmt = (r) => indent((r.lead ?? "") + r.text);

    const scaffold = [
      "body { margin: 0; padding: 28px; min-height: 100vh; }",
      "h1 { font-size: 15px; font-weight: 600; margin: 0 0 20px; color: #a1a1aa; letter-spacing: .02em; }",
      ".spec { display: grid; gap: 22px; max-width: 402px; }",
      ".row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }",
      ".stack { display: flex; flex-direction: column; gap: 12px; }",
      ".cap { font-size: 11px; color: #71717a; margin-bottom: 8px; }",
      ...(id === "screen" ? [".demo-col { margin-top: 8px; height: 32px; border-radius: 4px; background: #27272a; color: #a1a1aa; font-size: 11px; display: grid; place-items: center; }"] : []),
      ...(spec.scaffoldCss ? [spec.scaffoldCss] : []),
    ].map((l) => "  " + l).join("\n");

    const css = [...base, ...deps, ...own].map((r) => r.text).join("\n") + (spec.localCss ?? "") + scaffold;
    const vars = new Set([...varsIn(css), ...varsIn(markup)]);
    const undefinedVars = [...vars].filter((v) => !tokens.has(v));
    if (undefinedVars.length) throw new Error(`${id}: uses tokens the Foundations src/tokens.css does not define: ${undefinedVars.join(", ")}`);
    const tokenLines = [...tokens.keys()].filter((t) => vars.has(t)).map((t) => `    ${t}: ${tokens.get(t)};`);

    const icons = [...symbols.keys()].filter((k) => markup.includes(`#${k}"`));
    const unknownIcons = [...markup.matchAll(/#(aw-i-[\w-]+)"/g)].map((m) => m[1]).filter((k) => !symbols.has(k));
    if (unknownIcons.length) throw new Error(`${id}: icons not in the sprite: ${unknownIcons.join(", ")}`);
    const sprite = icons.length ? `  <!-- icon sprite: only the ${icons.length} symbol${icons.length > 1 ? "s" : ""} this component uses (from the Foundations icons/sprite/) -->
  <svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <defs>
${icons.map((k) => "      " + symbols.get(k)).join("\n")}
    </defs>
  </svg>

` : "";

    const ownClasses = [...new Set(own.flatMap((r) => classesOf(r.selector)))];
    const depBlocks = [...new Set(deps.flatMap((r) => classesOf(r.selector)).map(block))];
    const header = [
      `  AuctionWire · ${c.name}  (registry id: ${id} · class: .${c.class} · status: ${c.status})`,
      "  Coded component — self-contained. Carries ONLY the tokens, primitives and icons it uses,",
      "  so it drops straight into a Claude artifact without the whole token file.",
      `  Classes: ${ownClasses.map((x) => "." + x).join(" ")}`,
      ...(spec.fold?.length ? [`  Folded sub-part${spec.fold.length > 1 ? "s" : ""}: ${spec.fold.map((f) => `${f} (.${reg.components[f].class}, contract ${f}.md)`).join(", ")} — included here, no separate file.`] : []),
      ...(depBlocks.length ? [`  Composes (rules copied for the specimen): ${depBlocks.map((b) => `.${b}${ownerOf.has(b) ? ` (${ownerOf.get(b)})` : ""}`).join(", ")}`] : []),
      `  Contract: Foundations components/${id}.md  ·  Styling source: ${[...new Set(own.map((r) => r.file))].join(" + ")} (this repo) + Foundations src/tokens.css, src/base.css${icons.length ? ", icons/sprite/" : ""}`,
      "  GENERATED by scripts/build-mirrors.mjs — rules are byte-identical to the component CSS; edit that, never this file.",
    ].join("\n");

    out.set(`${CODED_DIR}/${id}.html`, `<!doctype html>
<!--
${header}
-->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AuctionWire · ${c.name}</title>
<style>
  /* — tokens this component actually uses — */
  :root {
${tokenLines.join("\n")}
  }

  /* — shared primitives this component leans on (Foundations base.css) — */
${base.map(fmt).join("\n")}
${deps.length ? `
  /* — composed components it sits with (from components/) — */
${deps.map(fmt).join("\n")}
` : ""}
  /* — component — */
${own.map(fmt).join("\n")}
${spec.localCss ? `\n${indent(spec.localCss)}\n` : ""}
  /* — specimen scaffold (not part of the component) — */
${scaffold}
</style>
</head>
<body class="aw-root">
${sprite}  <h1>AuctionWire · ${c.name}</h1>
  <div class="spec">
${spec.sections.map(([cap, h]) => `    <div>
      <div class="cap">${cap}</div>
      ${h.replace(/src="ASSET:([^"]+)"/g, (_, p) => `src="${asset(p)}"`)}
    </div>`).join("\n")}
  </div>
</body>
</html>
`);
  }
  return out;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const files = renderComponentMirrors();
  for (const [path, html] of files) writeFileSync(join(root, path), html);
  console.log(`wrote ${files.size} component mirrors to ${CODED_DIR}/`);
}
