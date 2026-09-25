# Calendar day

`.aw-calendar-day` · cards-and-content · status: **catalogued** · registry id `calendar-day`

One selectable day cell (weekday over date number) inside the calendar strip.

## When to use
- Only as a child of [Calendar strip](calendar-strip.md), one cell per day.

## When not to use
- The whole date band → use [Calendar strip](calendar-strip.md)
- An auction event row → use [Calendar entry](calendar-entry.md)
- A generic toggle between options → use [Segmented](segmented.md)

## Anatomy
```text
.aw-calendar-day        column, centred, gap --aw-space-micro, min-width 44px
├── .aw-caption         weekday ("MON")
└── .aw-stat-value      date number ("10")
```

## Variants
| Class | Use |
|---|---|
| `.aw-calendar-day` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | No fill |
| Selected | `.is-active` | Fill `--aw-accent-deep` (#052c1a), colour `--aw-text-accent` (#009350) |
| Today / disabled / has auctions | Not specified | Not specified |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Min width | 44px, fixed in CSS |
| Padding | `--aw-space-row` vertical, `--aw-space-tight` horizontal |
| Gap | `--aw-space-micro` |
| Radius | `--aw-radius-button` |
| Selected fill / colour | `--aw-accent-deep` / `--aw-text-accent` |
| Weekday | `.aw-caption`: `--aw-fs-caption`, `--aw-text-muted` |
| Date | `.aw-stat-value`: `--aw-fw-bold`, `--aw-text-primary` |

## Layout & grid
- Lives inside the strip, which sets an `--aw-space-row` gap. Cells are not column spans.
- The 44px minimum width matches the touch-target guideline.

## Accessibility
- Use a `<button>` per day with `aria-selected="true"` (tab pattern) or `aria-checked` (radio pattern) on the active one.
- Label with the full date ("Tuesday 11 February"); the short weekday alone is ambiguous.

## Do / Don't
- ✅ Keep one `.is-active` day per strip.
- ✅ Keep weekday muted and date bold.
- ❌ Don't place day cells outside a calendar strip.
- ❌ Don't tint days red or amber to show auction status.

## Example
```html
<div class="aw-calendar-day is-active"><span class="aw-caption">TUE</span><span class="aw-stat-value" style="font-size:14px">11</span></div>
```

## Related
- [Calendar strip](calendar-strip.md) · [Calendar entry](calendar-entry.md)
- Color (`02-design-system/foundations/color.md`) · Typography (`02-design-system/foundations/typography.md`)

## Open questions
- `.is-active` sets `color: --aw-text-accent`, but the child `.aw-caption` and `.aw-stat-value` set their own colours, so the text stays muted and white. Should the selected text be green?
- The date number is set to 14px inline in the template, off the type ramp.
- Today, disabled (past) and has-auctions states are not specified.
