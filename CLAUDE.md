# AuctionWire Component Library: AI router

The coded half of the design system. **Styling only** — no design values live here.

**Read the Foundations library first.** Colour, type, spacing, radius, effects, grid, icons, the
written guideline for every component (`components/<id>.md`), `tokens.json` and `components.json`
are all there, in `AW_DesignLanguage/02-design-system/`. Come here only for the code.

## What to open

| You need | Open |
|---|---|
| How one component looks (the source of truth) | `components/<id>.css` — that one file only |
| A drop-in coded component for an artifact | `coded/<id>.html` — that one file only, it is self-contained |
| The cascade order / the list of components | `components.css` |
| What a coded file demonstrates | `scripts/specimens.mjs` |

Never read the whole of `components/` or `coded/`. Never open `coded/*.html` to *edit* it — it is
generated from `components/<id>.css` + `scripts/specimens.mjs`.

## Rules

- Every value is a Foundations token (`var(--aw-*)`). A raw hex fails the check.
- Editing a component means editing **one** `components/<id>.css`, then
  `node scripts/build-mirrors.mjs`, then `node scripts/check.mjs`.
- After changing how a component looks or behaves, update its guideline
  `components/<id>.md` in the Foundations repo in the same pass. The `.md` and the CSS must agree.
- If the system doesn't cover something, stop and flag the gap. Don't invent a component.

## Done means

`node scripts/check.mjs` passes here, and `node scripts/check-system.mjs` passes in the Foundations
repo.

## Needs the Foundations library on disk

Usually mounted as `02-design-system/component-library/` inside AW_DesignLanguage, so `../` is the
Foundations root. Otherwise set `AW_FOUNDATIONS=/path/to/AW_DesignLanguage/02-design-system`.
