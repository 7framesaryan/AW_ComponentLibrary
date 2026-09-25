# Tabs

`.aw-tabs` · navigation-and-chrome · status: **verified** · registry id `tabs`

A row of tabs that switches between views of the same screen: small chips on a dark track, or text tabs with a green underline.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, page **Tabs**): component
set **Tabs** `7026:8517` (Style = Chips | Tab), built from the chip set **Main** `5711:5443` and the
tab set **Tabs** `6861:1767`, each with Default · Selected · Hover. Every value below is measured
from those sets, and a render was pixel-diffed against Figma's 2x export.

## When to use
- Switching between sibling views of one screen's content, where each view is its own list or panel.
- `--chips` for compact segment filters over one list: Watchlist All · Matches · Ending · No match.
- `--tab` for a screen split into sections with their own content: Portfolio Owned Cards · Sold History.

## When not to use
- Switching how the same data is displayed (List / Grid, a chart timeframe) → use [Segmented](segmented.md)
- Narrowing search results by a filter value → use [Filter chip](filter-chip.md)
- Moving between the app's top-level areas → use [Bottom nav](bottom-nav.md)

## Anatomy
```text
div.aw-tabs[role=tablist]           flex row
└── button.aw-tabs__item[role=tab]  one per tab; the selected one carries .is-active
```

## Variants

### Style
| Class | Track | Item | Selected item |
|---|---|---|---|
| `.aw-tabs--chips` | `--aw-surface-translucent` (black 40%), radius `--aw-radius-sm` 4, padding 4, gap 16 | 32 tall (`--aw-tabs-chip-h`), at least 82 wide (`--aw-tabs-chip-min-w`), padding 0 10, radius 5 (`--aw-tabs-chip-radius`); 12/16 regular, `--aw-text-primary` | fill `--aw-positive` |
| `.aw-tabs--tab` | none, gap 0 | padding 12 16 16 (48 tall); 14/20 regular, `--aw-text-high` | fill `--aw-tabs-tab-selected` (#111714), 2px `--aw-positive` bottom border, label medium `--aw-text-accent` |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Chips: no fill. Tab: `--aw-text-high` label |
| Hover | `:hover` | Chips: fill `--aw-tabs-chip-hover` (green 20%). Tab: label `--aw-text-accent` |
| Selected | `.is-active` + `aria-selected="true"` | See the Selected item column above |

The sets define no disabled or focus state.

## Tokens
| Property | Token |
|---|---|
| Chips track fill | `--aw-surface-translucent` (#00000066) |
| Chip height / min width / radius | `--aw-tabs-chip-h` 32 · `--aw-tabs-chip-min-w` 82 · `--aw-tabs-chip-radius` 5 |
| Chip hover fill | `--aw-tabs-chip-hover` (#2e8b5733, Figma `colors/layout/focus-op-20`) |
| Chip selected fill | `--aw-positive` (#009350) |
| Tab selected panel | `--aw-tabs-tab-selected` (#111714, Figma `colors/content/content2`) |
| Tab underline | 2px (`--aw-space-micro`) `--aw-positive` |
| Labels | chips `--aw-fs-xs`/`--aw-lh-xs` regular · tabs `--aw-fs-sm`/`--aw-lh-sm` regular, medium when selected |

## Layout & grid
- A tab row is chrome that sits across the screen. It isn't sized to grid columns; start it at the 16px screen margin.
- Figma's chips are a fixed 82 wide. Here that's a minimum, so a longer label grows the chip instead of being clipped.
- The selected tab is 50 tall (48 + the 2px underline) and the others are centred beside it, as in Figma.
- More tabs than fit: let the row scroll sideways; don't shrink the labels.

## Accessibility
- The row is `role="tablist"` with an `aria-label`. Each item is a `<button role="tab">` whose `aria-selected` matches `.is-active`.
- Selection is shown by colour and by the fill or underline, never by colour alone.

## Do / Don't
- ✅ Use one style per row, and mark exactly one item `.is-active`.
- ✅ Keep labels short: one or two words, sentence case.
- ❌ Don't mix chips and text tabs in one row.
- ❌ Don't put counts in tab labels unless they show new activity (badges show new activity, never totals).

## Example
```html
<div class="aw-tabs aw-tabs--chips" role="tablist" aria-label="Watchlist filter">
  <button type="button" class="aw-tabs__item is-active" role="tab" aria-selected="true">All</button>
  <button type="button" class="aw-tabs__item" role="tab" aria-selected="false">Matches</button>
</div>
```

## Related
- [Segmented](segmented.md) · [Filter chip](filter-chip.md) · [Bottom nav](bottom-nav.md)
- colour (`02-design-system/foundations/color.md`) · spacing (`02-design-system/foundations/spacing.md`)

## Open questions
- The Figma file also has a **Watchlist Tabs** / **Watchlist Top Section** set on the Navigation page (`6979:2673`, `6979:2526`). It wasn't imported here; it may be a Watchlist-specific composition of these tabs.
- The sets define no disabled or keyboard-focus state.
- The tab item set (`6861:1767`) sets every label in Medium, but the composed Tabs row (`7026:8517`) uses Regular for unselected tabs and Medium only for the selected one. This follows the row, the version designers place.
