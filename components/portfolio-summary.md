# Portfolio summary

`.aw-portfolio-summary` · cards-and-content · status: **catalogued** · registry id `portfolio-summary`

A summary card that leads with a large money value and its change, followed by a row of three small stats.

## When to use
- Leading the Portfolio screen with total value and change.
- A compact portfolio snapshot on Home.
- A money-headline panel on card detail (current bid, countdown, then cost facts).

## When not to use
- A single labelled metric → use [Stat card](stat-card.md)
- An icon + label + value pill → use [Stat pill](stat-pill.md)
- A list of holdings or past sales → use [Detail row](detail-row.md)

## Anatomy
```text
.aw-portfolio-summary               column, padding --aw-space-section, gap --aw-space-block
├── div
│   ├── .aw-body-muted              label ("Portfolio value")
│   └── .aw-portfolio-summary__head baseline row, gap --aw-space-row
│       ├── .aw-portfolio-value     the headline money value
│       └── .aw-portfolio-summary__delta  trend-up icon + "+4.2%"
├── .aw-divider                     hairline rule
└── .aw-portfolio-summary__stats    row, gap --aw-space-section
    └── .aw-portfolio-summary__stat ×3   column: .aw-body-muted label + .aw-stat-value
```

## Variants
| Class | Use |
|---|---|
| `.aw-portfolio-summary` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Gain (default) | none | Delta in `--aw-text-accent` (#009350) |
| Loss | `.is-down` on `__delta` | Delta turns `--aw-text-danger` (#d4183d) |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-section` |
| Gap | `--aw-space-block`; head `--aw-space-row`; stats `--aw-space-section`; stat `--aw-space-micro` |
| Radius | `--aw-radius-card` |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Shadow | `--aw-shadow-soft` |
| Value | `.aw-portfolio-value`: `--aw-fs-lg`, `--aw-fw-bold`, `--aw-text-high-alt` |
| Delta | `--aw-fs-xs`, `--aw-fw-semibold`, `--aw-text-accent` / `--aw-text-danger` |
| Stat value | `.aw-stat-value`: `--aw-fs-base`, `--aw-fw-bold` |

## Layout & grid
- Full-width 4-column span (370px).
- The three stats share the card width equally (`flex:1`); they follow component spacing, not the grid.
- The divider's default `--aw-space-section` margin is overridden inline in templates (2px or 4px).

## Accessibility
- Keep the delta sign in the text ("+4.2%", "−7%"); never rely on green or red alone.
- Mark the trend icon `aria-hidden="true"`.
- Read the headline as one phrase: "Portfolio value $142,380, up 4.2%".

## Do / Don't
- ✅ Show real money formats (`$142,380`, `+$5,740 (4.2%)`) and always pair the delta with a direction icon or sign.
- ✅ Use `--aw-positive` green for gains.
- ❌ Don't use a one-off green for gains; it is always `--aw-positive` (#009350).
- ❌ Don't show more than three stats in `__stats`.

## Example
```html
<div class="aw-portfolio-summary">
  <div>
    <div class="aw-body-muted">Portfolio value</div>
    <div class="aw-portfolio-summary__head"><span class="aw-portfolio-value">$142,380</span><span class="aw-portfolio-summary__delta"><svg class="aw-icon" style="width:12px;height:12px"><use href="#aw-i-trend-up"/></svg> +4.2%</span></div>
  </div>
  <div class="aw-divider" style="margin:2px 0"></div>
  <div class="aw-portfolio-summary__stats">
    <div class="aw-portfolio-summary__stat"><span class="aw-body-muted">Cards</span><span class="aw-stat-value">128</span></div>
    <div class="aw-portfolio-summary__stat"><span class="aw-body-muted">Watching</span><span class="aw-stat-value">12</span></div>
    <div class="aw-portfolio-summary__stat"><span class="aw-body-muted">Active bids</span><span class="aw-stat-value">5</span></div>
  </div>
</div>
```

## Related
- [Stat card](stat-card.md) · [Stat pill](stat-pill.md) · [Fact row](fact-row.md) · [Detail row](detail-row.md)
- [Segmented](segmented.md) · [Divider](divider.md) · Color (`02-design-system/foundations/color.md`) · Effects (`02-design-system/foundations/effects.md`)

## Open questions
- `.is-down` uses `--aw-text-danger` red for a loss, but red is reserved for countdowns. Which token should a loss use?
- Templates set the value to 24px or 28px inline, off the type ramp (`.aw-portfolio-value` is 18px).
- Card detail reuses this card for the current-bid panel and overrides the shadow to `--aw-shadow-hairline`. Is that an approved use?
- The old Figma card had an "as of <date>" line and a chevron; neither is in CSS.
- The chart inside the Portfolio card is a placeholder with no component.
