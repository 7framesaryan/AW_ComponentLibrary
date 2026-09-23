# AuctionWire Component Library: AI router

**Every AuctionWire UI component lives here, and only here:** its code, its written guideline and
its entry in the registry. When a screen needs a button, a card or a nav bar, it comes from this repo.

This repo holds no design values. Colour, type, spacing, radius, effects, grid, icons and motion live
in the **Foundations repo**, cloned **next to** this one. Nothing is nested inside the other.

## The two repos

| | This repo: AW_ComponentLibrary | Foundations repo, next door |
|---|---|---|
| Holds | `components/<id>.html` (code) · `components/<id>.md` (guideline) · `components/INDEX.md` · `components.json` (registry) · `cascade.mjs` | tokens, `base.css` and its utility classes (`utilities.json`), icons, foundation rules and motion, patterns, screen templates, `build.mjs`, finished screens |
| GitHub | [7framesaryan/AW_ComponentLibrary](https://github.com/7framesaryan/AW_ComponentLibrary) | [intelligaia/auctionwire-mobile-design](https://github.com/intelligaia/auctionwire-mobile-design) (the local folder may be named `AW_DesignLanguage`) |

A path written as `02-design-system/…` is a file in the Foundations repo.

## What to open

| Task needs | Open |
|---|---|
| Which component fits, its variants, states, grid and copy rules | `components/INDEX.md` → `components/<id>.md` |
| The markup, to build a screen or drop a component into an artifact | `components/<id>.html`: the variant specimens in its `<body>`. Copy the component element itself, not the specimen wrappers (`.spec`, `.row`, `.cap`) |
| Change how a component looks | `components/<id>.html`: the rules under its `component` marker. Update `components/<id>.md` in the same pass |
| The cascade order, or which small parts sit inside a parent's file | `cascade.mjs` |
| A token, type style, icon or grid rule | the Foundations repo: `02-design-system/foundations/tokens.md` |

Never read the whole of `components/`: open only the one component you need.

## Rules

- **Decide from the guideline, build from the code.** `<id>.md` says when and how to use a
  component; the markup always comes from `<id>.html`. Never copy markup from a guideline's Example.
- Every value is a Foundations token (`var(--aw-*)`). A raw hex fails the check.
- A component's `.md` and `.html` must agree. Change one, change the other in the same pass.
- Icons come from the Foundations sprite (`#aw-i-<name>`).
- **Adding a component:** `components/<id>.html`, its line in `cascade.mjs`, its entry in
  `components.json` and its guideline `components/<id>.md`; then `node scripts/build-index.mjs`.
- If the system doesn't cover something, stop and flag the gap. Don't invent a component.

## Done means

`node scripts/check.mjs` passes here, and `node 02-design-system/scripts/check-system.mjs` passes in
the Foundations repo (it runs this check too).
