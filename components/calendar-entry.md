# Calendar entry

`.aw-calendar-entry` · cards-and-content · status: **catalogued** · registry id `calendar-entry`

One auction event in a calendar list: calendar icon, auction name and date range on the left, auction status chip on the right.

## When to use
- Listing auction events (house sales) so a user can plan: which auction, when, and its state.
- Inside an expanded calendar month [Accordion](accordion.md).

## When not to use
- A single card listing → use [Listing card](listing-card.md)
- Picking a day → use [Calendar strip](calendar-strip.md)
- A past sale of one card → use [Detail row](detail-row.md)

## Anatomy
```text
.aw-calendar-entry           row, centred, space-between, gap + padding --aw-space-block
├── left group (inline flex, gap 12px)
│   ├── svg.aw-icon          calendar icon, --aw-text-accent
│   └── div
│       ├── .aw-body-strong  auction name ("Heritage Winter Sale")
│       └── .aw-body-muted   date range ("Feb 12 – Feb 18")
└── .aw-status-chip          --live / --upcoming / --ended
```

## Variants
| Class | Use |
|---|---|
| `.aw-calendar-entry` | The only variant. Auction state comes from the [Status chip](status-chip.md) variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Live | `.aw-status-chip--live` inside | Green chip "Live Now" |
| Upcoming | `.aw-status-chip--upcoming` inside | Amber chip "Upcoming" |
| Ended | `.aw-status-chip--ended` inside | Muted chip "Ended" |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Padding / gap | `--aw-space-block` |
| Radius | `--aw-radius-card` |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Icon | `--aw-text-accent` |
| Name / date | `.aw-body-strong` / `.aw-body-muted` |

## Layout & grid
- Full-width 4-column span (370px) in a list, or fills the accordion body (which stacks entries with an `--aw-space-row` gap).

## Accessibility
- Announce as one item: "Heritage Winter Sale, Feb 12 to Feb 18, Upcoming".
- The status chip has a text label, so state is not colour-only.
- Mark the calendar icon `aria-hidden="true"`.

## Do / Don't
- ✅ Use the status chip for auction state; keep the name prominent and the date muted.
- ✅ Use real auction houses and date ranges, varied per entry.
- ❌ Don't recolour a filter chip to show state.
- ❌ Don't use red for a live or ending auction; red is for countdowns only.

## Example
```html
<div class="aw-calendar-entry"><div style="display:flex;align-items:center;gap:12px"><svg class="aw-icon" style="width:18px;height:18px;color:var(--aw-text-accent)"><use href="#aw-i-calendar"/></svg><div><div class="aw-body-strong">Goldin Monthly</div><div class="aw-body-muted">Feb 20 – Feb 27</div></div></div><span class="aw-status-chip aw-status-chip--live">Live Now</span></div>
```

## Related
- [Status chip](status-chip.md) · [Accordion](accordion.md) · [Calendar strip](calendar-strip.md) · [Calendar day](calendar-day.md)
- Content (`02-design-system/foundations/content.md`) · Icons (`02-design-system/foundations/icons.md`)

## Open questions
- The left group has no class; the gallery uses its own `.g-row` helper (replaced with inline flex above).
- The old Figma entry had persona-dependent actions (Admin vs Collector) and a divider layout rather than a bordered card. Neither is in CSS.
- No sample screen uses the entry; where does the full auction calendar live?
