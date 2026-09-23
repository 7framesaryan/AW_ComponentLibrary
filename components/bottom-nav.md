# Bottom nav

`.aw-bottom-nav` · navigation-and-chrome · status: **catalogued** · registry id `bottom-nav`

The floating glass pill at the bottom of every top-level screen, holding the five app destinations with exactly one active.

## When to use
- Every top-level tab screen: Home, Watchlist, Saved, Portfolio, More.
- Always composed with the glass utility: `class="aw-glass-nav aw-bottom-nav"`.

## When not to use
- Detail and task screens with one dominant action (Card detail, checkout) → use [Bottom action bar](action-bar.md)
- Switching views inside one screen (List / Chart) → use [Segmented](segmented.md)
- Filtering a list → use [Filter chip row](filter-row.md)

## Where it's used
- Home — `templates/home.template.html`
- Watchlist — `templates/watchlist.template.html`
- Portfolio — `templates/portfolio.template.html`
- Saved searches — `templates/saved-searches.template.html`
- Component gallery (specimen only) — `templates/gallery.template.html`

## Anatomy
```text
.float-nav (template-local)         absolute wrapper, centres the pill near the bottom
└── nav.aw-glass-nav.aw-bottom-nav  glass pill, items spaced evenly
    └── a.aw-nav-item × 5           icon over label; one .is-active (see nav-item.md)
```

## Variants
| Class | Use |
|---|---|
| `.aw-bottom-nav` | The only variant. Pair with `.aw-glass-nav`. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | The pill has no states; the active destination is set on the item with `.aw-nav-item.is-active`. |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-row` (8px) |
| Gap between items | `--aw-space-tight` (4px) |
| Corner radius | `--aw-radius-nav-pill` (16px) |
| Fill (from `.aw-glass-nav`) | `--aw-surface-nav-pill` (#4b4b4b66) |
| Backdrop blur | `--aw-glass-blur-nav` (20px) |
| Border | 1px `--aw-border-glass-bright` (#ffffff38) |

## Layout & grid
- Glass chrome is exempt from the column grid. The CSS sets no width or position.
- Templates set `style="width:370px"` (matching the 4-column content width) and wrap the pill in a template-local `.float-nav { position:absolute; left:0; right:0; bottom:20px; display:flex; justify-content:center }` placed inside `.aw-device`, outside the scroll area.
- Content must clear the floating pill: use `--aw-inset-bottom-nav` (100px). The templates instead pad the scroll stage by 120px.
- Order is fixed: Home · Watchlist · Saved · Portfolio · More, with icons `home`, `heart`, `bookmark`, `portfolio`, `more`.

## Accessibility
- Use a `<nav aria-label="Primary">` element; each item is a link.
- Mark the current destination with `aria-current="page"` as well as `.is-active`, so the state is not colour-only.
- Each item keeps its visible text label; do not remove labels.
- Per the product rules, a badge on a nav item means new alerts or activity, never a total count.

## Do / Don't
- ✅ Keep the pill floating and translucent; content scrolls underneath.
- ✅ Show all five destinations in the fixed order, exactly one active.
- ❌ Never a solid opaque bar, and never colour the whole pill green.
- ❌ Don't show the bottom nav and a bottom action bar on the same screen.
- ❌ Don't use Inter for labels; `.aw-nav-item` sets `--aw-font-nav`.

## Example
```html
<div class="float-nav">
  <nav class="aw-glass-nav aw-bottom-nav" style="width:370px">
    <a class="aw-nav-item is-active"><svg class="aw-icon" style="width:22px;height:22px"><use href="#aw-i-home"/></svg>Home</a>
    <a class="aw-nav-item"><svg class="aw-icon" style="width:22px;height:22px"><use href="#aw-i-heart"/></svg>Watchlist</a>
    <a class="aw-nav-item"><svg class="aw-icon" style="width:22px;height:22px"><use href="#aw-i-bookmark"/></svg>Saved</a>
    <a class="aw-nav-item"><svg class="aw-icon" style="width:22px;height:22px"><use href="#aw-i-portfolio"/></svg>Portfolio</a>
    <a class="aw-nav-item"><svg class="aw-icon" style="width:22px;height:22px"><use href="#aw-i-more"/></svg>More</a>
  </nav>
</div>
```

## Related
- [Nav item](nav-item.md) · [Badge](badge.md) · [Bottom action bar](action-bar.md) · [Device frame](device.md) · [Screen](screen.md)
- effects (`02-design-system/foundations/effects.md`) · layout (`02-design-system/foundations/layout.md`) · icons (`02-design-system/foundations/icons.md`)

## Open questions
- Width (370px) and bottom offset (20px) live in inline / template-local CSS. The old Figma spec said 16px off the bottom. Which offset is canonical, and should the component own positioning?
- Bottom clearance: token `--aw-inset-bottom-nav` is 100px but templates use 120px.
- The old spec had a taller green glass backing that extends above the pill and filled (bold) icons on the active item; the CSS only tints the item. Not specified whether that is still wanted.
- Nav badge placement and markup on an item: not specified.
