# Status chip

`.aw-status-chip` · chips-and-badges · status: **catalogued** · registry id `status-chip`

A pill with a leading dot that shows an auction's state (live, upcoming or ended) using its own fixed colour set.

## When to use
- Showing whether an auction or lot is live, upcoming or ended, on cards, rows, detail pages and calendar entries.
- Next to a price or countdown so the user can read state at a glance.

## When not to use
- Letting the user filter by state → use [Filter chip](filter-chip.md)
- Stating a price, grade or tag → use [Chip](chip.md)
- A count or "NEW" marker → use [Badge](badge.md)
- A countdown timer → use `.aw-urgency` text (red), not a chip

## Anatomy
```text
span.aw-status-chip       24px pill, inline-flex, gap --aw-space-tight
├── ::before              6px round dot, fills with currentColor (no markup)
└── label text            11px medium ("Live Now", "Upcoming", "Ended")
```

## Variants
| Class | Use |
|---|---|
| `.aw-status-chip--live` | Auction is live: `--aw-accent-deep` fill, `--aw-positive` text and dot |
| `.aw-status-chip--upcoming` | Auction not yet started: `--aw-accent-warning-soft` fill, `--aw-caution` text and dot |
| `.aw-status-chip--ended` | Auction closed: `--aw-surface-raised` fill, `--aw-text-muted` text and dot |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | Pick one variant class | The three variants are the only states; the chip is static |

## Tokens
| Property | Token |
|---|---|
| Height | 24px, fixed in CSS |
| Side padding | `--aw-space-row` |
| Gap | `--aw-space-tight` |
| Radius (chip and dot) | `--aw-radius-pill` |
| Dot size | 6px, fixed in CSS |
| Label | `--aw-fs-chip` / `--aw-fw-medium` |
| Live | `--aw-accent-deep` / `--aw-positive` (#009350) |
| Upcoming | `--aw-accent-warning-soft` / `--aw-caution` (#f5a524) |
| Ended | `--aw-surface-raised` / `--aw-text-muted` |

## Layout & grid
- Sits inside a component (grid card price row, list row, calendar entry, detail meta row). Spacing follows the component, not the grid.
- In rows it's usually right-aligned against a price or countdown with `justify-content: space-between`.
- Width hugs the label.

## Accessibility
- Render as `<span>`. The label text carries the state; the dot is decorative.
- Never rely on colour alone. Always include the state word.
- If state changes live (upcoming → live), announce it in surrounding copy. The chip itself has no live region.

## Do / Don't
- ✅ Use exactly one of the three variants, and write the state word in the label.
- ✅ Pair a live chip with a red `.aw-urgency` countdown. The chip stays green; only the countdown is red.
- ❌ Don't recolour a filter chip or plain chip to fake status.
- ❌ Don't make the chip red. `--aw-urgency` is for countdowns only.
- ❌ Don't add new variants or put a status chip inside a filter row.

## Example
```html
<span class="aw-status-chip aw-status-chip--live">Live Now</span>
```

## Related
- [Chip](chip.md) · [Filter chip](filter-chip.md) · [Badge](badge.md)
- [Grid card](grid-card.md) · [List row](list-row.md) · [Calendar entry](calendar-entry.md) · [Watchlist card](watchlist-card.md)
- Color (`02-design-system/foundations/color.md`) · Content (`02-design-system/foundations/content.md`)

## Open questions
- Label wording varies: "Live Now" vs "Live", "Upcoming" vs "Soon". Which is canonical?
- Watchlist uses `--upcoming` (amber) for "Outbid", which is a bid state, not an auction state. Is that sanctioned, or does bid status need its own component?
- The old Figma set used different, component-owned colours (for example cyan for Live Now). The CSS maps to semantic tokens. Confirm the CSS colours are final.
- The old guide authored the label at 12px; CSS uses `--aw-fs-chip` (11px). Confirm.
