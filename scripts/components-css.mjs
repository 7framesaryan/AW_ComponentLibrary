/**
 * Component styling loader.
 *
 * One file per component: components/<id>.html. Each file is self-contained — open it in a browser
 * and you see the component — and it is also the SOURCE of that component's styling. The rules live
 * in its <style> block under the marker line "component" (between COMPONENT_MARK and the next
 * marked section), indented by two spaces.
 *
 * Everything that needs the component styles — this repo's check.mjs and the Foundations library's
 * build.mjs and check-system.mjs — reads them through here, so extraction and cascade order have
 * one definition. Cascade order lives in cascade.mjs.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { root } from "./foundations.mjs";
import { CASCADE } from "../cascade.mjs";

const COMPONENT_MARK = "/* — component — */";
const NEXT_SECTION = /\n[ \t]*\/\* — /;

/** The component's own CSS, lifted out of its self-contained file. */
export function componentCss(file) {
  const html = readFileSync(file, "utf8");
  const start = html.indexOf(COMPONENT_MARK);
  if (start < 0) throw new Error(`${file}: no "${COMPONENT_MARK}" marker — every component file must carry one`);
  const after = html.slice(start + COMPONENT_MARK.length);
  const end = after.search(NEXT_SECTION);
  const styleEnd = after.indexOf("</style>");
  const body = after.slice(0, end >= 0 && (styleEnd < 0 || end < styleEnd) ? end : styleEnd);
  // files indent their <style> contents by two spaces; give back plain CSS
  return body.split("\n").map((l) => (l.startsWith("  ") ? l.slice(2) : l)).join("\n").trim() + "\n";
}

/**
 * Ordered component files: [{ id, path, file }].
 *   path  display path, relative to this repo's root (components/<id>.html)
 *   file  absolute path on disk
 */
export function componentCssFiles() {
  return CASCADE.map((id) => ({ id, path: `components/${id}.html`, file: join(root, `components/${id}.html`) }));
}

/** All component styling, in cascade order — what a screen build ships. */
export function readComponentsCss() {
  const header = `/* ============================================================================
   AuctionWire Component Library — COMPONENT STYLING
   Extracted from components/<id>.html (one self-contained file per component), in the
   cascade order set by cascade.mjs. Styling only: every value resolves to a Foundations
   token. Depends on the Foundations src/tokens.css + src/base.css.
   Generated at build time — edit the component's own file, never the built output.
   ========================================================================== */`;
  return [header, ...componentCssFiles().map((f) => componentCss(f.file))].join("\n");
}
