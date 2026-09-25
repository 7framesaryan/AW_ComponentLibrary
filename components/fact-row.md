# Fact row

`.aw-fact-row` · cards-and-content · status: **catalogued** · registry id `fact-row`

A single inline label and value pair, such as "Buyers Premium: +20% ($770)", used to list cost facts inside a card.

## When to use
- Cost facts on a [Listing card](listing-card.md): Buyers Premium, Total.
- Cost facts inside a panel on card detail: Buyers Premium (20%), Total if you win.
- Any short label: value fact inside a card body.

## When not to use
- A full-width list line with a divider → use [Detail row](detail-row.md)
- A selectable option → use [Option row](option-row.md)
- A metric tile → use [Stat card](stat-card.md)
- A fact hidden behind a subscription → use [Gated pill](gated-pill.md)

## Anatomy
```text
.aw-fact-row                row, centred, gap --aw-space-tight
├── .aw-fact-row__label     label, muted ("Total:")
├── svg.aw-icon             optional icon, amber-dim (not used in templates)
└── .aw-fact-row__value     value, white ("$4,620")
```

## Variants
| Class | Use |
|---|---|
| `.aw-fact-row` | The only variant. Stack several inside `.aw-listing-card__facts` |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Spread | inline `justify-content:space-between` (card detail) | Label left, value right |
| Locked | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Gap | `--aw-space-tight` |
| Label | `--aw-fs-sm`, `--aw-text-muted` |
| Value | `--aw-fs-sm`, `--aw-text-primary` |
| Icon | `--aw-text-warning-dim` (#936316) |
| Stack gap in listing card | `--aw-space-micro` |

## Layout & grid
- Lives inside a card; follows component spacing, not the grid.
- In a listing card, wrap rows in `.aw-listing-card__facts` (column, `--aw-space-micro` gap).

## Accessibility
- Keep label and value in the same element so they are read together.
- Include the colon or a visually hidden separator so "Total $4,620" does not read as one run.
- If an icon is used, mark it `aria-hidden="true"` unless it conveys a locked state; then label it.

## Do / Don't
- ✅ Use real money formats with the percentage and amount ("+23% ($2,127.50)").
- ✅ Keep the label muted and the value white.
- ❌ Don't colour values green or red; the facts are neutral.
- ❌ Don't use it for full-width rows with dividers.

## Example
```html
<div class="aw-listing-card__facts">
  <div class="aw-fact-row"><span class="aw-fact-row__label">Buyers Premium:</span><span class="aw-fact-row__value">+20% ($770)</span></div>
  <div class="aw-fact-row"><span class="aw-fact-row__label">Total:</span><span class="aw-fact-row__value">$4,620</span></div>
</div>
```

## Related
- [Listing card](listing-card.md) · [Detail row](detail-row.md) · [Gated pill](gated-pill.md) · [Portfolio summary](portfolio-summary.md)
- Content (`02-design-system/foundations/content.md`) · Typography (`02-design-system/foundations/typography.md`)

## Open questions
- The CSS colours an icon inside a fact row amber-dim, which matches the gated lock. Is the icon meant only for locked facts (`#aw-i-lock`)? No template shows it.
- Card detail spreads label and value with an inline style. Should a spread variant exist?
- Label and value are 14px here, while the old Figma listing card used 12px body text. Which size is correct?
