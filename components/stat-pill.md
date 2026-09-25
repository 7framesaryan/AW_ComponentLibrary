# Stat pill

`.aw-stat-pill` · chips-and-badges · status: **catalogued** · registry id `stat-pill`

A raised pill that surfaces one metric as icon, label and a bold value, such as "Watching 12".

## When to use
- A single headline metric in a page-title block or dashboard summary: "Watching 12", "New Matches 24".
- Laid out 2-up in a stat pill row (`02-design-system/patterns/stat-pill-row.md`).

## When not to use
- A bigger labelled metric card → use [Stat card](stat-card.md)
- A portfolio value with delta and three stats → use [Portfolio summary](portfolio-summary.md)
- A price or grade fact on a card → use [Chip](chip.md)
- A small count on an icon → use [Badge](badge.md)

## Anatomy
```text
span.aw-stat-pill             40px row, gap --aw-space-row
├── svg.aw-icon               metric icon, 18px, colour set inline
├── span.aw-stat-pill__label  12px, --aw-text-body
└── span.aw-stat-pill__value  16/24 bold, --aw-text-primary (the loudest element)
```

## Variants
| Class | Use |
|---|---|
| `.aw-stat-pill` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static display; no interactive states are specified |

## Tokens
| Property | Token |
|---|---|
| Height | 40px, fixed in CSS |
| Side padding | `--aw-space-block` |
| Gap | `--aw-space-row` |
| Radius | `--aw-radius-button` |
| Fill | `--aw-surface-raised` |
| Label | `--aw-fs-xs` / `--aw-text-body` |
| Value | `--aw-fs-base` / `--aw-lh-base` / `--aw-fw-bold` / `--aw-text-primary` |
| Icon colour | `--aw-text-accent` in the gallery (inline) |

## Layout & grid
- In a 2-up row, each pill is a 2-column span (181px) with the 8px gutter: `.aw-col-2` inside `.aw-grid`.
- The CSS is `inline-flex` with no width, so give it `width:100%` inside its column span to fill 181px.
- Internal spacing follows component tokens, not the grid.

## Accessibility
- Render as static text. Label and value should read together ("Watching 12"), so keep them in DOM order.
- Mark the icon `aria-hidden="true"` unless it carries meaning not in the label.
- If the pill links somewhere, wrap it in an `<a>` with a descriptive name. Not specified in templates.

## Do / Don't
- ✅ Make the value the loudest element (bold 16) and keep the label quieter (12).
- ✅ Choose the icon colour by meaning: `--aw-text-accent` green for neutral or positive metrics, `--aw-caution` amber for caution.
- ✅ Use pills in pairs on the grid.
- ❌ Don't invert the hierarchy with a bold label and a muted value.
- ❌ Don't colour a stat icon `--aw-urgency` red unless the metric is a countdown.
- ❌ Don't stack long text in a stat pill. It holds one short label and one value.

## Example
```html
<span class="aw-stat-pill"><svg class="aw-icon" style="width:18px;height:18px;color:var(--aw-text-accent)"><use href="#aw-i-trend-up"/></svg><span class="aw-stat-pill__label">Watching</span><span class="aw-stat-pill__value">12</span></span>
```

## Related
- Stat pill row (`02-design-system/patterns/stat-pill-row.md`) · [Stat card](stat-card.md) · [Portfolio summary](portfolio-summary.md) · [Chip](chip.md)
- Grid (`02-design-system/foundations/grid.md`) · Typography (`02-design-system/foundations/typography.md`)

## Open questions
- Radius conflict: CSS uses `--aw-radius-button` (8px); the old Figma guide used a full pill. CSS is followed here; confirm.
- The old guide allowed a red (#d4183d) "alert" icon, which conflicts with red = countdowns only. What colour marks an alert metric?
- Icon size (18px) and colour are inline. No class or token defines them.
- No width rule exists in CSS for the 2-up (181px) layout.
- Which screens should use it? Watchlist and Portfolio templates don't currently.
