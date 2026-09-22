/**
 * Locates the AuctionWire Foundations library (tokens, base.css, the icon sprite and
 * components.json). The coded components are styling only — every value they use is a
 * foundations token, so nothing here can be built or checked without it.
 *
 * Resolution order:
 *   1. $AW_FOUNDATIONS                      explicit path to <repo>/02-design-system
 *   2. ../                                  mounted as a submodule at 02-design-system/component-library/
 *   3. ../../AW_DesignLanguage/02-design-system   sibling clone
 */
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const MARKERS = ["src/tokens.css", "src/base.css", "components.json"];
const isFoundations = (dir) => !!dir && MARKERS.every((m) => existsSync(join(dir, m)));

let cached;
export function foundationsDir() {
  if (cached) return cached;
  const candidates = [
    process.env.AW_FOUNDATIONS && resolve(process.env.AW_FOUNDATIONS),
    resolve(root, ".."),
    resolve(root, "../../AW_DesignLanguage/02-design-system"),
  ].filter(Boolean);
  const found = candidates.find(isFoundations);
  if (!found) {
    throw new Error(
      `Foundations library not found. The coded components need it for tokens, base.css, the icon sprite and components.json.\n` +
        `  Looked in:\n${candidates.map((c) => `    ${c}`).join("\n")}\n` +
        `  Fix: mount this repo as the submodule 02-design-system/component-library/ of AW_DesignLanguage,\n` +
        `       or run with AW_FOUNDATIONS=/path/to/AW_DesignLanguage/02-design-system`
    );
  }
  return (cached = found);
}
