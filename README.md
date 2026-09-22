# AuctionWire Component Library

The **coded** half of the AuctionWire design system: one self-contained HTML file per component. Each
file is both the drop-in you can open in a browser and the source of the styling that gives every
`aw-*` class its appearance.

It is styling only. It defines no colours, sizes or spacing of its own — every value resolves to a
token from the **Foundations library** ([AW_DesignLanguage](https://github.com/onkarpreetsinghkapoor/AW_Design_Language),
`02-design-system/`), which also holds each component's written guideline (`components/<id>.md`),
`components.json`, `tokens.json` and the icon sprite.

| | Foundations library | This repo |
|---|---|---|
| Design values (colour, type, spacing, radius, effects, grid, icons) | ✅ | — |
| Written guideline per component (`<id>.md`) | ✅ | — |
| `tokens.json`, `components.json` | ✅ | — |
| Component code, one self-contained file each | — | ✅ `components/<id>.html` |

## Layout

```
components/<id>.html    ONE file per component, and the only file it has. Self-contained:
                        open it in a browser and you see the component, with the tokens,
                        rules and icons it uses. The rules under its "component" marker
                        ARE the styling — screens are built from that block.
cascade.mjs             the order those blocks are concatenated in, and the small parts
                        that sit inside a parent's file (nav-item, gated-pill, calendar-day)
scripts/
  foundations.mjs       finds the Foundations library
  components-css.mjs    lifts each component's styling out of its file, in cascade order
  check.mjs             integrity check
```

## It needs the Foundations library

Nothing here builds or checks without it. `scripts/foundations.mjs` looks, in order:

1. `$AW_FOUNDATIONS` — an explicit path to `<AW_DesignLanguage>/02-design-system`
2. `../` — when this repo is mounted as the submodule `02-design-system/component-library/`
3. `../../AW_DesignLanguage/02-design-system` — a sibling clone

The normal setup is (2): the Foundations repo mounts this one as a submodule, so both halves are on
disk together and a screen records the exact component commit it was built from.

## Commands

Node.js, no dependencies.

```sh
node scripts/check.mjs          # must pass after any change
```

## Changing a component

1. Edit **one** file: `components/<id>.html`, in the rules under its `component` marker. Use
   Foundations tokens, never raw values. Keep the demo markup below it in step, and if you use a new
   token, add it to the `:root` block at the top so the file stays self-contained.
2. `node scripts/check.mjs` — must pass.
3. Update the component's guideline `components/<id>.md` **in the Foundations repo** so the written
   contract matches what the component now does, and rebuild the screens there (`node build.mjs`).

`coded/*.html` is generated. Never edit it by hand — the check fails if you do.

## Adding a component

A component only exists once it is registered in the Foundations `components.json` and has a
guideline there. Add `components/<id>.css`, add its `@import` to `components.css` in the right
cascade position, add a specimen to `scripts/specimens.mjs`, then do the Foundations side.

## Known gap

`.aw-photo--aaron|cobb|mantels|slab|hero` point at `--aw-img-*` tokens that nothing defines, so those
sample card photos render blank. `scripts/check.mjs` reports it as a named gap rather than passing
over it. Recorded in the Foundations repo, `decisions/2026-09-22-component-library-removal.md` §7.

---

Split out of `AW_DesignLanguage/02-design-system/` (`src/components/`, `components/coded/`) on
2026-09-22, from commit `81bb8a3`.
