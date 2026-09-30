# Range chip

`.aw-range-chip` · chips-and-badges · status: **verified** · registry id `range-chip`

An outlined 32px pill with a bold 12px label that names one criterion or time range; the chosen one is solid green.

## When to use
- The saved criteria in the Save This Search sheet: the query is Selected, each filter is Default (Mobile V3 15463:74065).
- A time-range picker above a chart (1M · 3M · 6M · 1Y · All): one Selected at a time.

## When not to use
- A fact on a card (grade, house, tag) → use [Chip](chip.md)
- Filtering a results list from the search dock → use [Filter chip](filter-chip.md)
- Auction state (live, ending, sold) → use [Status chip](status-chip.md)

## Anatomy
```text
.aw-range-chip-row        wrapping row, gap 8
└── .aw-range-chip        32 tall, padding 0 12, radius 16, 1px zinc-600 outline, 12/16 bold zinc-400 label
```

## Variants
| Class | Use |
|---|---|
| `.aw-range-chip` | Default: outlined, muted label |
| `.aw-range-chip.is-selected` | Selected: primary fill, white label, no outline |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Outline `--aw-zinc-600`, label `--aw-zinc-400` |
| Selected | `.is-selected`, or `aria-pressed="true"` on a `<button>` | Fill `--aw-positive`, label `--aw-text-primary`, outline transparent |
| Hover / focus / disabled | Not specified in Figma | Not specified |

## Tokens
| Property | Token |
|---|---|
| Height · radius | `--aw-range-chip-h` (32) · `--aw-range-chip-radius` (16) |
| Padding · row gap | `--aw-space-block` (12) · `--aw-space-row` (8) |
| Type | `--aw-fs-xs` / `--aw-lh-xs`, `--aw-fw-bold` |
| Default | border `--aw-zinc-600`, label `--aw-zinc-400` |
| Selected | fill `--aw-positive`, label `--aw-text-primary` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Accessibility
- Read-only criteria are `<span>`s. A picker uses `<button type="button" aria-pressed>` so the selected range is announced.
- Selected is shown by fill and weight together with the label, never colour alone.

## Do / Don't
- ✅ One Selected chip per row.
- ✅ Title Case labels ("All Auction Houses").
- ❌ Don't give chips a fill in Default; the outline is the chip.

## Example
```html
<div class="aw-range-chip-row"><span class="aw-range-chip is-selected">“Mickey Mantle”</span><span class="aw-range-chip">Grade: PSA 6+</span></div>
```

## Related
- [Chip](chip.md) · [Filter chip](filter-chip.md) · [Status chip](status-chip.md)
