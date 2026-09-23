# AuctionWire Component Library

**Every AuctionWire UI component lives in this repo:** its code, its written guideline and its entry
in the registry. Screens are always built from the components here.

It holds no design values of its own. Every colour, size and spacing value is a token from the
**Foundations repo** ([intelligaia/auctionwire-mobile-design](https://github.com/intelligaia/auctionwire-mobile-design)),
which also holds the icons, the patterns, the screen templates and the build. The two repos are
cloned **side by side**; neither is inside the other.

> **AI agents:** start with [CLAUDE.md](CLAUDE.md).

| | This repo | Foundations repo |
|---|---|---|
| Component code, one self-contained file each | ✅ `components/<id>.html` | — |
| Component guideline, one per component | ✅ `components/<id>.md` | — |
| Component registry | ✅ `components.json` | — |
| Design values (colour, type, spacing, radius, effects, grid, icons, motion) | — | ✅ |
| Utility classes (text styles, glass, grid) | — | ✅ `base.css` + `utilities.json` |
| Patterns, screen templates, the build, finished screens | — | ✅ |

## Setup

Clone both repos into the same folder:

```sh
git clone https://github.com/7framesaryan/AW_ComponentLibrary.git
git clone https://github.com/intelligaia/auctionwire-mobile-design.git
```

`scripts/foundations.mjs` finds the Foundations repo next to this one (as
`AW_DesignLanguage/` or `auctionwire-mobile-design/`), or wherever `$AW_FOUNDATIONS` points.

## What every file does

| File | What it does |
|---|---|
| `README.md` | This page, for people |
| `CLAUDE.md` | The map for AI: which file to open for which task |
| `AGENTS.md` | Points other AI tools to `CLAUDE.md` |
| `components.json` | **The registry:** every component's name, category, status, class, variants, guideline and code file |
| `cascade.mjs` | The order the components' styling is joined in for a screen build, and the small parts that sit inside a parent's file (`nav-item` in `bottom-nav`, `gated-pill` in `listing-card`, `calendar-day` in `calendar-strip`) |
| `components/<id>.html` | **The code**, one self-contained file per component. Open it in a browser to see every variant. The rules under its `component` marker are the styling every screen uses; the specimens in its `<body>` are the markup to copy |
| `components/<id>.md` | **The guideline**, one per component: what it is, when to use it and when not to, anatomy, variants, states, tokens, grid, accessibility, dos and don'ts |
| `components/INDEX.md` | Every component with its class, status, code file and purpose. Generated from `components.json`; never edit by hand |
| `components/_utilities.html` | Shared photo classes (`.aw-photo--*`), joined last so photos win over component surfaces |
| `scripts/check.mjs` | The integrity check: registry, guidelines, code, index, links, icons, colours and tokens all agree |
| `scripts/build-index.mjs` | Regenerates `components/INDEX.md` |
| `scripts/components-css.mjs` | Reads each component's styling out of its file, in cascade order. The Foundations build uses it |
| `scripts/foundations.mjs` | Finds the Foundations repo next door |

## Commands

Node.js, no dependencies.

```sh
node scripts/check.mjs          # must pass after any change
node scripts/build-index.mjs    # after editing components.json or a guideline's first sentence
```

## Changing a component

1. Edit **one** file, `components/<id>.html`, in the rules under its `component` marker. Use
   Foundations tokens, never raw values. Keep its specimens in step, and if you use a new token, add
   it to the `:root` block at the top so the file stays self-contained.
2. Update its guideline `components/<id>.md` so it matches what the component now does.
3. `node scripts/check.mjs` must pass. Then rebuild the screens in the Foundations repo
   (`node 02-design-system/build.mjs`).

## Adding a component

1. `components/<id>.html`, modelled on an existing one, and its line in `cascade.mjs`.
2. Its entry in `components.json` (name, category, status, class, variants, `guide`, `files`).
3. Its guideline `components/<id>.md`, with the sections the check requires: When to use, When not to
   use, Variants, States, Example.
4. `node scripts/build-index.mjs`, then `node scripts/check.mjs`.

## Known gap

`.aw-photo--aaron|cobb|mantels|slab|hero` point at `--aw-img-*` tokens that nothing defines, so those
sample card photos render blank. `scripts/check.mjs` reports it as a named gap rather than passing
over it.
