# Detail row

`.aw-detail-row` · cards-and-content · status: **catalogued** · registry id `detail-row`

A full-width list line with stacked meta or a label on the left, a value on the right, and a hairline divider below.

## When to use
- Price history on card detail: date and house/bids on the left, sale price on the right.
- Population report on card detail: grade on the left, count on the right.
- Portfolio holdings: card and acquisition price on the left, value and change on the right.

## When not to use
- A label: value pair inside a card → use [Fact row](fact-row.md)
- A selectable option with a checkbox → use [Option row](option-row.md)
- A search result with image and CTA → use [List-result row](list-row.md)
- An auction event → use [Calendar entry](calendar-entry.md)

## Where it's used
- Card detail: "Price history" (3 rows) and "Population" (3 rows). `templates/card-detail.template.html`
- Portfolio: "Holdings" list (3 rows). `templates/portfolio.template.html`

## Anatomy
```text
.aw-detail-row                  row, centred, space-between, vertical padding --aw-space-block, bottom border
├── .aw-detail-row__meta        column, gap --aw-space-micro (or a single .aw-list-label)
│   ├── .aw-list-label-strong   primary line ("Jan 2026")
│   └── .aw-body-muted          secondary line ("Heritage · 31 bids")
└── value                       .aw-price-lead or .aw-list-label-strong, optional change line
```

## Variants
| Class | Use |
|---|---|
| `.aw-detail-row` | The only variant. Price-history, population and holdings forms differ only in content |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | 1px `--aw-border-subtle` bottom border |
| Last row | inline `style="border:0"` in templates | No divider |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Vertical padding | `--aw-space-block` (no side padding) |
| Meta gap | `--aw-space-micro` |
| Divider | 1px `--aw-border-subtle` |
| Primary label | `.aw-list-label-strong`: `--aw-fs-sm`, `--aw-fw-semibold` |
| Plain label | `.aw-list-label`: `--aw-fs-sm`, `--aw-text-muted` |
| Gain | `.aw-label-accent` → `--aw-text-accent` |

## Layout & grid
- Full-width 4-column span (370px). Rows stack with no gap; the dividers separate them.
- Put a Section header (`02-design-system/patterns/section-header.md`) above each list.

## Accessibility
- Price history and population are tabular data. Consider a list or table so screen readers read "Sold for $3,600 at Heritage, Jan 2026, 31 bids" or "PSA 6: 1,204".
- Keep gain/loss sign in the text ("+31%"), not colour alone.

## Do / Don't
- ✅ Emphasise the value; keep date, house and bids as muted meta.
- ✅ Remove the divider on the last row.
- ✅ Vary data per row.
- ❌ Don't add card padding or a border box; the row is a bare line.
- ❌ Don't use off-palette greys for dates or dividers; use the text and border tokens.

## Example
```html
<div>
  <div class="aw-detail-row"><div class="aw-detail-row__meta"><span class="aw-list-label-strong">Jan 2026</span><span class="aw-body-muted">Heritage · 31 bids</span></div><span class="aw-price-lead" style="font-size:16px">$3,600</span></div>
  <div class="aw-detail-row" style="border:0"><div class="aw-detail-row__meta"><span class="aw-list-label-strong">Aug 2025</span><span class="aw-body-muted">PWCC · 19 bids</span></div><span class="aw-price-lead" style="font-size:16px">$2,900</span></div>
</div>
```

## Related
- [Fact row](fact-row.md) · [Option row](option-row.md) · [Portfolio summary](portfolio-summary.md)
- Section header (`02-design-system/patterns/section-header.md`) · [Divider](divider.md) · Content (`02-design-system/foundations/content.md`)

## Open questions
- There is no `:last-child` rule (unlike option-row), so templates remove the last divider inline. Should CSS handle it?
- Portfolio shows a loss ("−7%") with `.aw-urgency` red, but red is reserved for countdowns. Which token should a loss use?
- Templates set the price to 16px inline on `.aw-price-lead` (18px), off the type ramp.
- The old Figma population row was a wide table (grade badge, count, percent, trend) with component-owned grade colours. None of that is in CSS.
