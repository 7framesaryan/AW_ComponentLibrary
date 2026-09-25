# Filter chip

`.aw-filter-chip` · chips-and-badges · status: **catalogued** · registry id `filter-chip`

A selectable pill that narrows a list of results; the active chip shows which filter or segment is applied.

## When to use
- Quick filters above a result list: "Ending soon", "Baseball", "PSA 6+", "< $10k".
- Segmenting a list by status or relationship: "All · 12", "Ending soon", "Outbid", "Winning" on Watchlist.
- Always inside a horizontally scrolling filter chip row (`02-design-system/patterns/filter-chip-row.md`).

## When not to use
- Stating a price, grade or tag → use [Chip](chip.md)
- Showing auction state → use [Status chip](status-chip.md)
- Switching between two or three views (List / Chart) → use [Segmented](segmented.md)
- Many detailed filters (ranges, checkboxes) → use a [Sheet](sheet.md) with [Option row](option-row.md) and [Range](range.md)
- A home shortcut → use [Quick action](quick-action.md)

## Anatomy
```text
.aw-filter-row                  scroll row (pattern)
└── span.aw-filter-chip         28px pill, gap --aw-space-tight
    ├── svg.aw-icon             optional leading icon (sort, 12px in template)
    └── label text              11px medium; may include a count ("All · 12")
```

## Variants
| Class | Use |
|---|---|
| `.aw-filter-chip` | Unselected: `--aw-surface-raised` fill, `--aw-text-secondary` label |
| `.aw-filter-chip.is-active` | Selected: `--aw-surface-strong` fill, `--aw-text-primary` label, 1px `--aw-border-strong` border |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Raised fill, secondary text |
| Active | `.is-active` | Strong fill, primary text, strong border; background transitions over `--aw-dur-fast` |
| Pressed | Not specified | Not specified |
| Disabled | Not specified | Not specified |
| Focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Height | 28px, fixed in CSS |
| Side padding | `--aw-space-block` |
| Gap | `--aw-space-tight` |
| Radius | `--aw-radius-pill` |
| Fill | `--aw-surface-raised` (active: `--aw-surface-strong`) |
| Border (active) | `--aw-border-strong` |
| Label | `--aw-fs-chip` / `--aw-fw-medium` / `--aw-text-secondary` (active: `--aw-text-primary`) |
| Row gap | `--aw-space-row` (`.aw-filter-row`) |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- Place chips in `.aw-filter-row`: flex, `--aw-space-row` gap, horizontal scroll, hidden scrollbar.
- Scroll-row items are outside the column grid, but the row starts at the 16px margin (grid (`02-design-system/foundations/grid.md`) rule 4).
- Chip width hugs its label. Never wrap the row onto two lines.

## Accessibility
- Templates use `<span>`. For interactive filters use `<button type="button" aria-pressed="true|false">`.
- For a mutually exclusive segment set (Watchlist), use `role="radiogroup"` on the row with `role="radio"` and `aria-checked` on each chip.
- Active must not rely on colour alone. The border change helps; the ARIA state is still required.
- 28px tall is below a 44px touch target. Keep the 8px gap.

## Do / Don't
- ✅ Put the most useful filter first, and mark the applied one `.is-active`.
- ✅ Include a count in the label when it helps ("All · 12").
- ✅ Keep filter chips inside a filter chip row.
- ❌ Don't use a filter chip for auction status, or a status chip inside a filter row.
- ❌ Don't tint the active chip green. Active is shown with strong surface plus border.
- ❌ Don't put a filter chip outside a filter row.

## Example
```html
<div class="aw-filter-row">
  <span class="aw-filter-chip is-active"><svg class="aw-icon" style="width:12px;height:12px"><use href="#aw-i-sort"/></svg>Ending soon</span>
  <span class="aw-filter-chip">Baseball</span>
</div>
```

## Related
- [Filter row](filter-row.md) · Filter chip row (`02-design-system/patterns/filter-chip-row.md`) · Empty filtered state (`02-design-system/patterns/empty-filtered-state.md`)
- [Chip](chip.md) · [Status chip](status-chip.md) · [Segmented](segmented.md) · [Sheet](sheet.md)

## Open questions
- Is multi-select allowed (several chips `.is-active` at once)? Search results shows one active, but the options look combinable.
- The old Figma filter pill had a trailing chevron. The CSS and templates don't. Is a chevron still part of the component?
- The active 1px border sits inside the fixed 28px height. Confirm there's no intended size shift.
- Pressed, disabled and focus states are not specified.
- Should the row have an edge fade? The old guide said yes, but `.aw-filter-row` has none.
