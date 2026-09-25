# Filter chip row

`.aw-filter-row` · navigation-and-chrome · status: **catalogued** · registry id `filter-row`

A single horizontally scrolling row of filter chips with a hidden scrollbar, used to filter the list below it.

## When to use
- Above a results list or a tab list to filter it: search results header, Watchlist tabs (All · Ending soon · Outbid · Winning).
- When there are more filters than fit in 370px and they should scroll, not wrap.

## When not to use
- Two or three mutually exclusive views (List / Chart, list / grid) → use [Segmented](segmented.md)
- Home shortcuts → use [Quick action](quick-action.md)
- A full set of filter options with ranges and checkboxes → use [Sheet](sheet.md) with [Option row](option-row.md)
- Stating facts such as price or grade → use [Chip](chip.md)

## Anatomy
```text
.aw-filter-row             horizontal scroll row, no wrap, scrollbar hidden
└── span.aw-filter-chip × N  selectable pill; one or more .is-active (see filter-chip.md)
    └── svg.aw-icon        optional leading icon (e.g. sort)
```

## Variants
| Class | Use |
|---|---|
| `.aw-filter-row` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | The row itself has no states. Selection is on the chip: `.aw-filter-chip.is-active`. |

## Tokens
| Property | Token |
|---|---|
| Gap between chips | `--aw-space-row` (8px) |
| Overflow | `overflow-x: auto`, scrollbar hidden (`scrollbar-width: none` and `::-webkit-scrollbar`) |
| Edge fade (if added) | `--aw-grad-edge-fade` (not applied by the CSS) |

## Layout & grid
- The row starts at the 16px grid margin; its chip items are exempt from the column grid and may run past the right edge while scrolling.
- Chips are separated by the 8px gutter value.
- In Watchlist it sits inside `.aw-screen`, which supplies the 16px margin. In search results it sits inside the glass header, which is padded 16px inline.
- See filter-chip-row pattern (`02-design-system/patterns/filter-chip-row.md`) and grid (`02-design-system/foundations/grid.md`) (rule 4, scroll rows).

## Accessibility
- For single-choice tabs (Watchlist), use `role="tablist"` on the row and `role="tab"` + `aria-selected` on chips.
- For toggle filters (search results), use `<button aria-pressed="true|false">` chips.
- Scrolling must work by keyboard: chips must be focusable so focus scrolls them into view.

## Do / Don't
- ✅ Let chips scroll horizontally; keep them on one line.
- ✅ Show counts inside the chip label when useful ("All · 12").
- ❌ Never wrap chips to a second line.
- ❌ Don't mix status chips or price chips into the row.
- ❌ Don't recolour an active chip green or amber; active uses the strong surface.

## Example
```html
<div class="aw-filter-row">
  <span class="aw-filter-chip is-active">All · 12</span>
  <span class="aw-filter-chip">Ending soon</span>
  <span class="aw-filter-chip">Outbid</span>
  <span class="aw-filter-chip">Winning</span>
</div>
```

## Related
- [Filter chip](filter-chip.md) · [Segmented](segmented.md) · [Sheet](sheet.md) · [Icon button](icon-button.md)
- Filter-chip row pattern (`02-design-system/patterns/filter-chip-row.md`) · Empty filtered state pattern (`02-design-system/patterns/empty-filtered-state.md`)

## Open questions
- The old pattern required a right-edge fade (26px, `--aw-grad-edge-fade`) to signal scrolling and a leading advanced-search ghost button with a 12px gap; neither is in the CSS or templates.
- The old pattern showed chips with a trailing chevron; not in the current markup.
- Whether the row should bleed to the screen edge while scrolling (negative margin, like the Home carousel) is not specified.
