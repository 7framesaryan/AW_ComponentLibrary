# Badge

`.aw-badge` · chips-and-badges · status: **catalogued** · registry id `badge`

A small count or status marker that signals something new, either pinned to an icon or inline beside a label.

## When to use
- A count of new alerts or activity on an icon button or nav item (default amber, anchored).
- An inline "NEW" or "18 NEW" marker for fresh matches (`--positive`).
- An inline savings label such as "Save 25%" on a plan (`--positive-soft`).
- A bare unread dot with no number (`.aw-badge-dot`).

## When not to use
- Auction state → use [Status chip](status-chip.md)
- A price, grade or tag → use [Chip](chip.md)
- A metric with label and value → use [Stat pill](stat-pill.md)
- A filter → use [Filter chip](filter-chip.md)

## Where it's used
- Saved searches: "18 NEW" and "6 NEW" positive badges on saved-search cards. See `templates/saved-searches.template.html`
- Payment plan: "Save 25%" `--positive-soft` badge in the Yearly plan option. See `reproductions/payment-plan/screen.html`
- Gallery: amber "3" anchored on a bell ghost icon button, and a positive "NEW". See `templates/gallery.template.html`

## Anatomy
```text
span[style=position:relative]   host (icon button, avatar…) — only for anchored badges
├── button.aw-btn-icon-ghost    the host control
└── span.aw-badge.aw-badge-anchor   18px pill with count text, pinned top-right
```

## Variants
| Class | Use |
|---|---|
| `.aw-badge` | Default count: `--aw-caution` fill, `--aw-badge-text` text, min 18 × 18, bold 10px |
| `.aw-badge--positive` | New/affirmative marker: `--aw-positive` fill, `--aw-text-primary` text |
| `.aw-badge--positive-soft` | Inline savings label: `--aw-badge-soft-positive-bg` fill, `--aw-text-accent` text, auto height, 11/16 semibold |
| `.aw-badge-dot` | Bare 8px dot, `--aw-urgency` fill, no text (standalone class) |
| `.aw-badge-anchor` | Modifier: `position:absolute; top:-4px; right:-4px` on a relatively positioned host |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | Pick a variant | Static; no interactive states |
| Hidden (count 0) | Not specified | Not specified |
| Overflow (99+) | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Size | min-width 18px, height 18px, side padding `--aw-badge-padding-x` (5px) |
| Radius | `--aw-radius-pill` |
| Default fill / text | `--aw-caution` / `--aw-badge-text` (#040501) |
| Positive fill / text | `--aw-positive` / `--aw-text-primary` |
| Positive-soft fill / text | `--aw-badge-soft-positive-bg` / `--aw-text-accent` |
| Positive-soft padding | `2px --aw-space-row` |
| Text | `--aw-fs-caption` / `--aw-fw-bold` (soft: `--aw-fs-chip` / `--aw-lh-chip` / `--aw-fw-semibold`) |
| Dot | 8px, `--aw-urgency` |

## Layout & grid
- An anchored badge sits outside the grid, offset 4px past its host's top-right corner.
- An inline badge follows its container (`.aw-plan-option__name-row` gap `--aw-space-row`). On saved-search cards it uses `align-self:flex-start`.

## Accessibility
- Put the count into the host's accessible name (`aria-label="Notifications, 3 new"`) and mark the anchored badge `aria-hidden="true"`.
- An inline text badge ("18 NEW", "Save 25%") can be read as normal text.
- A bare dot has no text, so the host label must say what's new.

## Do / Don't
- ✅ On the Watchlist nav, the badge counts new alerts or activity, never total watchlist size.
- ✅ Use `--positive` for new matches and `--positive-soft` for savings.
- ✅ Keep badge text short: a number, "NEW" or "Save N%".
- ❌ Don't use a badge for auction state or as a tag.
- ❌ Don't anchor a badge without a `position:relative` host.
- ❌ Don't show a badge for a zero count.

## Example
```html
<span style="position:relative;display:inline-flex"><button class="aw-btn-icon-ghost"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-bell"/></svg></button><span class="aw-badge aw-badge-anchor">3</span></span>
```

## Related
- [Icon button](icon-button.md) · [Nav item](nav-item.md) · [Saved search](saved-search.md) · [Plan option](plan-option.md)
- [Status chip](status-chip.md) · [Chip](chip.md) · Color (`02-design-system/foundations/color.md`)

## Open questions
- `.aw-badge-dot` fills with `--aw-urgency` red, which conflicts with red = countdowns only. What should an unread dot use?
- The default amber badge means "caution". Is amber correct for a plain notification count?
- Zero-count, overflow ("99+") and maximum-digit rules are not specified.
- `--positive-soft` comes from a screenshot reconstruction and is unverified against Figma.
- The badge on a nav item is not shown in any template.
