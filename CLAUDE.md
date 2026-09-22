# AuctionWire Component Library: AI router

The coded half of the design system. **Styling only** — no design values live here.

**Read the Foundations library first.** Colour, type, spacing, radius, effects, grid, icons, the
written guideline for every component (`components/<id>.md`), `tokens.json` and `components.json`
are all there, in `AW_DesignLanguage/02-design-system/`. Come here only for the code.

## What to open

| You need | Open |
|---|---|
| How one component looks, or to change it | `components/<id>.html` — that one file only. Its `component` block is the styling |
| A drop-in coded component for an artifact | the same `components/<id>.html` — it is self-contained |
| The cascade order / the list of components | `cascade.mjs` |

There is **one file per component**, and it is both the drop-in and the source. Never read the whole
of `components/` — open only the one you need.

## Rules

- Every value is a Foundations token (`var(--aw-*)`). A raw hex fails the check.
- Editing a component means editing **one** `components/<id>.html` — the rules under its `component`
  marker, keeping its demo markup and `:root` token list in step — then `node scripts/check.mjs`.
- After changing how a component looks or behaves, update its guideline
  `components/<id>.md` in the Foundations repo in the same pass. The `.md` and the file must agree.
- If the system doesn't cover something, stop and flag the gap. Don't invent a component.

## Done means

`node scripts/check.mjs` passes here, and `node scripts/check-system.mjs` passes in the Foundations
repo.

## Needs the Foundations library on disk

Usually mounted as `02-design-system/component-library/` inside AW_DesignLanguage, so `../` is the
Foundations root. Otherwise set `AW_FOUNDATIONS=/path/to/AW_DesignLanguage/02-design-system`.
