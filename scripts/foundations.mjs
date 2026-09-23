/**
 * Locates the AuctionWire Foundations library (tokens, base.css, utilities.json, the icon sprite).
 * The components are styling only — every value they use is a Foundations token — so nothing here
 * can be built or checked without it.
 *
 * The two repos sit side by side (nothing is nested inside the other). Resolution order:
 *   1. $AW_FOUNDATIONS                                   explicit path to <foundations repo>/02-design-system
 *   2. ../AW_DesignLanguage/02-design-system             sibling clone, local folder name
 *   3. ../auctionwire-mobile-design/02-design-system     sibling clone, GitHub default folder name
 */
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** This repo's root (the Component library). */
export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const MARKERS = ["src/tokens.css", "src/base.css", "utilities.json"];
const isFoundations = (dir) => !!dir && MARKERS.every((m) => existsSync(join(dir, m)));

export const FOUNDATIONS_REPO = "https://github.com/intelligaia/auctionwire-mobile-design";

let cached;
/** <foundations repo>/02-design-system */
export function foundationsDir() {
  if (cached) return cached;
  const candidates = [
    process.env.AW_FOUNDATIONS && resolve(process.env.AW_FOUNDATIONS),
    resolve(root, "../AW_DesignLanguage/02-design-system"),
    resolve(root, "../auctionwire-mobile-design/02-design-system"),
  ].filter(Boolean);
  const found = candidates.find(isFoundations);
  if (!found) {
    throw new Error(
      `Foundations library not found. The components need it for tokens, base.css, utilities.json and the icon sprite.\n` +
        `  Looked in:\n${candidates.map((c) => `    ${c}`).join("\n")}\n` +
        `  Fix: clone ${FOUNDATIONS_REPO} next to this repo,\n` +
        `       or run with AW_FOUNDATIONS=/path/to/<foundations repo>/02-design-system`
    );
  }
  return (cached = found);
}

/** The Foundations repo root: paths written as `02-design-system/...` resolve against it. */
export const foundationsRoot = () => dirname(foundationsDir());
