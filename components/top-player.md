# Top-player card

`.aw-top-player` · cards-and-content · status: **catalogued** · registry id `top-player`

A compact ranked row for one player: rank number, avatar, name with lot count, and a trend icon.

## When to use
- A "Top players" list on Home, ranking players by activity.
- Any ranked list of players where rank and a short metric are the whole message.

## When not to use
- Showing a card listing → use [Listing card](listing-card.md)
- A stored search → use [Saved-search card](saved-search.md)
- A single labelled metric → use [Stat card](stat-card.md)

## Where it's used
- Home: "Top players" section, two rows stacked with an 8px gap. `templates/home.template.html`
- Gallery: two rows in "Content objects". `templates/gallery.template.html`

## Anatomy
```text
.aw-top-player              row, centred, padding + gap --aw-space-row
├── .aw-top-player__rank    "#1", bold green
├── .aw-avatar              32×32 round avatar (icon fallback)
├── text block (flex:1)     .aw-body-strong name + .aw-body-muted metric ("1,204 lots")
└── svg.aw-icon             trend-up, 16px, --aw-text-accent
```

## Variants
| Class | Use |
|---|---|
| `.aw-top-player` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Pressed / focus-visible | Not specified | Not specified |
| Trend down | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Padding / gap | `--aw-space-row` |
| Radius | `--aw-radius-card` |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Rank | `--aw-fs-xs`, `--aw-fw-bold`, `--aw-text-accent` |
| Trend icon | `--aw-text-accent` (#009350) |

## Layout & grid
- Home stacks rows full width (4-column span, 370px) in a column with an 8px gap, under a Section header (`02-design-system/patterns/section-header.md`).
- Width comes from the container; the CSS sets none.
- The old Figma set also had a horizontal scroll row form; that is Not specified in CSS.

## Accessibility
- If the row opens a player page, make it one link or button named "Rank 1, Mickey Mantle, 1,204 lots".
- The trend icon is decorative next to the text; mark it `aria-hidden="true"` or give it a label if it carries meaning.
- The avatar icon fallback is decorative.

## Do / Don't
- ✅ Show the rank as `#N` text so the order is not colour-only.
- ✅ Use real player names and varied metrics.
- ✅ Keep green for the rank and a rising trend only.
- ❌ Don't use it for card listings.
- ❌ Don't colour a falling trend red; red is for countdowns only.

## Example
```html
<div class="aw-top-player"><span class="aw-top-player__rank">#1</span><div class="aw-avatar"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-user"/></svg></div><div style="flex:1"><div class="aw-body-strong">Mickey Mantle</div><div class="aw-body-muted">1,204 lots</div></div><svg class="aw-icon" style="width:16px;height:16px;color:var(--aw-text-accent)"><use href="#aw-i-trend-up"/></svg></div>
```

## Related
- [Avatar](avatar.md) · Section header (`02-design-system/patterns/section-header.md`) · Card carousel (`02-design-system/patterns/card-carousel.md`)
- Color (`02-design-system/foundations/color.md`) · Icons (`02-design-system/foundations/icons.md`)

## Open questions
- No class exists for the text block; templates use `style="flex:1"`.
- How to show a flat or falling trend is not specified.
- The old Figma set had horizontal (151 × 53) and vertical variants in a scroll row; CSS has one row form used in a vertical stack. Which layout is correct for Home?
- Should the avatar hold a player photo instead of the user icon?
