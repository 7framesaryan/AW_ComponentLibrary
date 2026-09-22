/**
 * Component CSS loader. components.css is a manifest of @import lines, one per
 * components/<registry-id>.css, in cascade order. Everything that needs the component styles
 * — this repo's build-mirrors.mjs and check.mjs, and the Foundations library's build.mjs and
 * check-system.mjs — reads them through here, so the cascade order has one definition.
 */
import { readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { root } from "./foundations.mjs";

const MANIFEST = "components.css";

/**
 * Ordered component CSS files: [{ id, path, file }].
 *   path  display path, relative to this repo's root (components/<id>.css)
 *   file  absolute path on disk
 */
export function componentCssFiles() {
  const manifest = readFileSync(join(root, MANIFEST), "utf8");
  const withoutComments = manifest.replace(/\/\*[\s\S]*?\*\//g, "");
  const rest = withoutComments.replace(/@import\s+"([^"]+)";/g, "").trim();
  if (rest) throw new Error(`${MANIFEST} may only contain @import lines (found: ${rest.slice(0, 60)})`);
  return [...withoutComments.matchAll(/@import\s+"([^"]+)";/g)].map(([, p]) => ({
    id: basename(p, ".css"),
    path: p,
    file: join(root, p),
  }));
}

/** All component CSS, imports inlined in manifest order (what a screen build ships). */
export function readComponentsCss() {
  const header = readFileSync(join(root, MANIFEST), "utf8").match(/^\/\*[\s\S]*?\*\//)?.[0] ?? "";
  return [header, ...componentCssFiles().map((f) => readFileSync(f.file, "utf8"))].join("\n");
}
