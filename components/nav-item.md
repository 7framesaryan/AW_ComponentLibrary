# Nav item

`.aw-nav-item` · navigation-and-chrome · status: **catalogued** · registry id `nav-item`

One destination in the bottom nav: an icon over a short label, with an active state for the current screen.

## When to use
- Only as a direct child of [Bottom nav](bottom-nav.md), five items per nav.

## When not to use
- Actions in an overflow list → use [More-menu](menu.md)
- A shortcut pill on Home → use [Quick action](quick-action.md)
- Toggling views inside a screen → use [Segmented](segmented.md)
- A standalone icon action → use [Icon button](icon-button.md)

## Where it's used
- Home — `templates/home.template.html`
- Watchlist — `templates/watchlist.template.html`
- Portfolio — `templates/portfolio.template.html`
- Saved searches — `templates/saved-searches.template.html`
- Component gallery (specimen only) — `templates/gallery.template.html`

## Anatomy
```text
a.aw-nav-item              column, centred, icon over label
├── svg.aw-icon            destination icon, 22px in templates, inherits currentColor
└── text node              destination label
```

## Variants
| Class | Use |
|---|---|
| `.aw-nav-item` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Inactive | Default | Icon and label `--aw-text-muted` (#a1a1aa), no backing |
| Active | Add `.is-active` | Icon and label `--aw-text-accent` (#009350); backing `--aw-surface-nav-active` (#1e68131f) |
| Colour change | Automatic | `color` transitions over `--aw-dur-fast` with `--aw-ease-out` |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-row` (8px) vertical, `--aw-space-block` (12px) horizontal |
| Icon to label gap | `--aw-space-micro` (2px) |
| Corner radius | `--aw-radius-button` (8px) |
| Label font | `--aw-font-nav` (SF Pro / system) |
| Label size | `--aw-fs-caption` (10px) |
| Label weight | `--aw-fw-medium` |
| Inactive colour | `--aw-text-muted` |
| Active colour / backing | `--aw-text-accent` / `--aw-surface-nav-active` |

## Layout & grid
- Lives inside the glass bottom nav, which is exempt from the grid. The nav spaces the five items with `justify-content: space-between`.
- Item size comes from padding plus content (about 56px tall with a 22px icon); no fixed width.
- Destinations, labels and icons, in order: Home `home` · Watchlist `heart` · Saved `bookmark` · Portfolio `portfolio` · More `more`.

## Accessibility
- Use a link (`<a href>`) or button with the visible label as its name.
- Add `aria-current="page"` to the active item alongside `.is-active`.
- Keep the label visible: colour alone must not carry the active state (the backing also changes).
- Touch target is roughly 46 × 56px; do not reduce padding below the token values.

## Do / Don't
- ✅ Drive the look only through `.is-active`; keep label text stable.
- ✅ Keep exactly one active item per nav.
- ❌ Never show two active items or recolour an inactive item green.
- ❌ Don't change the label font to Inter.
- ❌ Don't use red or amber for the active state; green means active.

## Example
```html
<a class="aw-nav-item is-active"><svg class="aw-icon" style="width:22px;height:22px"><use href="#aw-i-home"/></svg>Home</a>
```

## Related
- [Bottom nav](bottom-nav.md) · [Badge](badge.md)
- icons (`02-design-system/foundations/icons.md`) · typography (`02-design-system/foundations/typography.md`) · color (`02-design-system/foundations/color.md`)

## Open questions
- The old spec switched the icon to a filled weight and the label to Semibold when active, with inactive colours `--aw-text-secondary` (icon) / `--aw-text-body` (label). CSS uses one muted colour and a fixed medium weight. Which is canonical?
- The sprite only has filled variants for `heart`; filled icons for the other destinations are not specified.
- Icon size (22px) is inline in templates, not a token.
- Badge placement on a nav item: not specified.
