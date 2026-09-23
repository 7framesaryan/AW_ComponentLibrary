# Calendar strip

`.aw-calendar-strip` · cards-and-content · status: **catalogued** · registry id `calendar-strip`

A horizontal band of day cells for picking a date in the auction calendar, with the selected day tinted green.

## When to use
- An "Auction calendar" band that lets the user pick a day to see auctions.
- An inline week view on a screen where a full month would take too much space.

## When not to use
- A single day cell on its own → use [Calendar day](calendar-day.md)
- One auction event in a list → use [Calendar entry](calendar-entry.md)
- A full expandable month → use [Accordion](accordion.md) holding calendar entries
- Filtering a list by category → use Filter chip row (`02-design-system/patterns/filter-chip-row.md`)

## Where it's used
- Saved searches: "Auction calendar" section, MON 10 to SUN 16 with TUE active. `templates/saved-searches.template.html`

## Anatomy
```text
.aw-calendar-strip          row, gap --aw-space-row, padding --aw-space-block, scrolls horizontally
└── .aw-calendar-day ×N     one cell per day; one has .is-active
    ├── .aw-caption         weekday ("TUE")
    └── .aw-stat-value      date number ("11")
```

## Variants
| Class | Use |
|---|---|
| `.aw-calendar-strip` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Selected day | `.is-active` on one [Calendar day](calendar-day.md) | Day gets `--aw-accent-deep` fill and `--aw-text-accent` colour |
| Overflow | automatic | `overflow-x: auto` lets extra days scroll |
| Today / has auctions | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Gap | `--aw-space-row` |
| Padding | `--aw-space-block` |
| Radius | `--aw-radius-card` |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Selected day | `--aw-accent-deep`, `--aw-text-accent` |

## Layout & grid
- The strip is a full-width 4-column span (370px). Put a Section header (`02-design-system/patterns/section-header.md`) above it.
- Day cells inside follow component spacing, not the grid. Seven 44px-minimum cells plus gaps and padding can exceed 370px, so the strip scrolls sideways.

## Accessibility
- Treat the strip as a single-select group: `role="tablist"` or `role="radiogroup"`, with each day a button carrying `aria-selected` or `aria-checked`.
- Give each day a full accessible name ("Tuesday 11"), not only "TUE 11".
- Selection is shown by fill as well as colour; also expose it programmatically.

## Do / Don't
- ✅ Mark exactly one day `.is-active`.
- ✅ Use green only for the selected day.
- ❌ Don't mark auction status with red or amber in the strip; use a [Status chip](status-chip.md) in the entry list.
- ❌ Don't rebuild day cells from raw divs; use `.aw-calendar-day`.

## Example
```html
<div class="aw-calendar-strip">
  <div class="aw-calendar-day"><span class="aw-caption">MON</span><span class="aw-stat-value" style="font-size:14px">10</span></div>
  <div class="aw-calendar-day is-active"><span class="aw-caption">TUE</span><span class="aw-stat-value" style="font-size:14px">11</span></div>
  <div class="aw-calendar-day"><span class="aw-caption">WED</span><span class="aw-stat-value" style="font-size:14px">12</span></div>
</div>
```

## Related
- [Calendar day](calendar-day.md) · [Calendar entry](calendar-entry.md) · [Accordion](accordion.md)
- Section header (`02-design-system/patterns/section-header.md`) · Color (`02-design-system/foundations/color.md`)

## Open questions
- Templates set the date number to 14px inline on `.aw-stat-value` (16px), off the type ramp.
- How a day with auctions, or today, is marked is not specified.
- The old Figma strip also had auction markers; no class exists for them.
- What happens when a day is selected (which list updates) is not specified.
