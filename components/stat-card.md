# Stat card

`.aw-stat-card` · cards-and-content · status: **catalogued** · registry id `stat-card`

A small surface tile that shows one labelled metric: a muted label above a bold value.

## When to use
- A row of key metrics under a summary, such as Cards, Active bids, Won (30d) on Portfolio.
- When a metric needs a tile with more presence than a pill.

## When not to use
- A metric with an icon in a slim 40px pill → use [Stat pill](stat-pill.md)
- A headline value with change and sub-stats → use [Portfolio summary](portfolio-summary.md)
- A label/value line in a list → use [Detail row](detail-row.md)

## Anatomy
```text
.aw-stat-card        column, padding --aw-space-section, gap --aw-space-tight
├── .aw-body-muted   label ("Active bids")
└── .aw-stat-value   value ("5")
```

## Variants
| Class | Use |
|---|---|
| `.aw-stat-card` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-section` |
| Gap | `--aw-space-tight` |
| Radius | `--aw-radius-card` |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Label | `.aw-body-muted`: `--aw-fs-xs`, `--aw-text-muted` |
| Value | `.aw-stat-value`: `--aw-fs-base` / `--aw-lh-base`, `--aw-fw-bold`, `--aw-text-primary` |

## Layout & grid
- A stat card is a 2-column span (181px). Put two side by side as `.aw-col-2` inside `.aw-grid` with the 8px gutter. See grid (`02-design-system/foundations/grid.md`).
- The CSS sets no width; it fills its span.
- For a row of stat pills instead, see Stat pill row (`02-design-system/patterns/stat-pill-row.md`).

## Accessibility
- Read label and value together ("Active bids, 5"); keep them in one element or use a description list.
- The value should never be the only cue for meaning; the label must state what it counts.

## Do / Don't
- ✅ Make the value the loudest element and keep the label muted.
- ✅ Use real, varied numbers.
- ❌ Don't invert the hierarchy (bold label, muted value).
- ❌ Don't colour the value red; red is for countdowns only.
- ❌ Don't separate tiles by 12px; the gutter is 8px.

## Example
```html
<div class="aw-grid">
  <div class="aw-stat-card aw-col-2"><span class="aw-body-muted">Cards</span><span class="aw-stat-value">128</span></div>
  <div class="aw-stat-card aw-col-2"><span class="aw-body-muted">Active bids</span><span class="aw-stat-value">5</span></div>
</div>
```

## Related
- [Stat pill](stat-pill.md) · [Portfolio summary](portfolio-summary.md)
- Stat pill row (`02-design-system/patterns/stat-pill-row.md`) · Grid (`02-design-system/foundations/grid.md`) · Typography (`02-design-system/foundations/typography.md`)

## Open questions
- The Portfolio template shows three stat cards in a flex row with a 12px gap. That breaks both the 2-column span rule and the 8px gutter. Should Portfolio use two 2-column cards, or is a 3-up row allowed?
- Whether an icon may sit in the card (as in the stat pill) is not specified.
- Pressed and focus states are not specified.
