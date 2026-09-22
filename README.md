# AuctionWire Component Library

The **coded** half of the AuctionWire design system: the CSS that gives every `aw-*` class its
appearance, and one self-contained HTML file per component for dropping into an artifact.

It is styling only. It defines no colours, sizes or spacing of its own — every value resolves to a
token from the **Foundations library** ([AW_DesignLanguage](https://github.com/onkarpreetsinghkapoor/AW_Design_Language),
`02-design-system/`), which also holds each component's written guideline (`components/<id>.md`),
`components.json`, `tokens.json` and the icon sprite.

| | Foundations library | This repo |
|---|---|---|
| Design values (colour, type, spacing, radius, effects, grid, icons) | ✅ | — |
| Written guideline per component (`<id>.md`) | ✅ | — |
| `tokens.json`, `components.json` | ✅ | — |
| Component CSS | — | ✅ `components/<id>.css` |
| Coded component HTML | — | ✅ `coded/<id>.html` |

## Layout

```
components.css          manifest: the @import list that fixes CASCADE ORDER
components/<id>.css     one file per component — the source of truth for how it looks
coded/<id>.html         GENERATED self-contained drop-in (tokens + rules + icons it uses)
scripts/
  foundations.mjs       finds the Foundations library
  components-css.mjs    reads the manifest in cascade order
  build-mirrors.mjs     regenerates coded/ from components/ + Foundations
  specimens.mjs         the variants/states each coded/<id>.html demonstrates
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
node scripts/build-mirrors.mjs  # regenerate coded/ after editing components/ or specimens
```

## Changing a component

1. Edit **one** file: `components/<id>.css`. Use Foundations tokens, never raw values.
2. `node scripts/build-mirrors.mjs` — regenerates `coded/<id>.html`.
3. `node scripts/check.mjs` — must pass.
4. Update the component's guideline `components/<id>.md` **in the Foundations repo** so the written
   contract matches what the CSS now does, and rebuild the screens there (`node build.mjs`).

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
