# Icon button

`.aw-btn-icon` · actions · status: **catalogued** · registry id `icon-button`

A square button that holds only an icon: solid green for a page-title create action, or ghost grey for header and toolbar controls.

## When to use
- `.aw-btn-icon` (solid green): the page-title header's add or scan action, such as "+" on Saved searches.
- `.aw-btn-icon-ghost`: back, overflow (more), filter, close, notifications (bell) and scan in glass headers, toolbars and sheet headers.
- When the icon alone is universally understood and space is tight.

## When not to use
- The action needs a text label → use [Button](button.md)
- A home shortcut with icon and label → use [Quick action](quick-action.md)
- Toggling List/Chart or similar views → use [Segmented](segmented.md)
- Primary navigation between tabs → use [Nav item](nav-item.md)

## Where it's used
- Home top bar: ghost bell and scan. See `templates/home.template.html`
- Card detail header: ghost back (rotated chevron) and more. See `templates/card-detail.template.html`
- Search results: ghost back and filter in the header, ghost close in the filter sheet. See `templates/search-results.template.html`
- Watchlist header: ghost back and more. See `templates/watchlist.template.html`
- Portfolio header: ghost settings. See `templates/portfolio.template.html`
- Saved searches header: solid green plus. See `templates/saved-searches.template.html`
- Gallery: both variants, the bell with an anchored badge, the top bar and the header. See `templates/gallery.template.html`

## Anatomy
```text
button.aw-btn-icon        centred inline-flex square
└── svg.aw-icon           the only content; size set inline (18px ghost, 20–22px solid in templates)
```

## Variants
| Class | Use |
|---|---|
| `.aw-btn-icon` | 43 × 43, `--aw-positive` fill, `--aw-zinc-50` icon. Page-title create action (add / scan) |
| `.aw-btn-icon-ghost` | 34 × 32, `--aw-surface-strong` fill, 1px `--aw-border-strong` border, `--aw-text-secondary` icon. Header and toolbar controls |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Variant styling |
| Pressed | `:active` | Opacity drops to 0.7 over `--aw-dur-fast` `--aw-ease-out` |
| Disabled | Not specified | Not specified |
| Focus-visible | Not specified | Not specified |
| With count | Wrap in `position:relative` and add a [Badge](badge.md) `.aw-badge-anchor` | Badge pinned top-right |

## Tokens
| Property | Token |
|---|---|
| Size | 43 × 43 (solid), 34 × 32 (ghost), fixed in CSS |
| Radius | `--aw-radius-button` |
| Solid fill / icon | `--aw-positive` / `--aw-zinc-50` |
| Ghost fill | `--aw-surface-strong` |
| Ghost border | `--aw-border-strong` |
| Ghost icon | `--aw-text-secondary` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- Icon buttons sit in chrome (the glass top bar (`02-design-system/patterns/glass-top-bar.md`) and headers), which is outside the column grid.
- Gap between header controls follows the header component (`--aw-space-block` in `.aw-top-bar__actions` and `.aw-header`).
- There is no back-arrow icon. Templates rotate `chevron-right` 180deg for back.

## Accessibility
- Use a real `<button>` and always add an `aria-label` ("Back", "Filters", "More options"), because there is no visible text.
- Mark the inner `svg` `aria-hidden="true"`.
- The ghost variant (34 × 32) is below a 44px touch target. Keep space around it.
- With a badge, include the count in the label, for example `aria-label="Notifications, 3 new"`.

## Do / Don't
- ✅ Use the solid green icon button only for the page-title create action, one per screen.
- ✅ Use ghost for every other header control.
- ✅ Choose sprite icons whose meaning is obvious: `filter`, `more`, `close`, `bell`, `scan`, `settings`.
- ❌ Don't put a solid green icon button in a toolbar row of ghosts.
- ❌ Don't ship an icon button without an `aria-label`.
- ❌ Don't resize the button with inline width/height outside a documented case.

## Example
```html
<button class="aw-btn-icon-ghost" aria-label="Filters"><svg class="aw-icon" style="width:18px;height:18px" aria-hidden="true"><use href="#aw-i-filter"/></svg></button>
<button class="aw-btn-icon" aria-label="Add saved search"><svg class="aw-icon" style="width:20px;height:20px" aria-hidden="true"><use href="#aw-i-plus"/></svg></button>
```

## Related
- [Button](button.md) · [Badge](badge.md) · [Menu](menu.md) · [Top bar](top-bar.md) · [Header](header.md)
- Glass top bar (`02-design-system/patterns/glass-top-bar.md`) · Icons (`02-design-system/foundations/icons.md`)

## Open questions
- Disabled and focus-visible states are not specified.
- Icon sizes (18/20/22px) are set inline in templates. There is no icon-size token or class.
- There is no back/chevron-left icon, and templates rotate `chevron-right`. Should a dedicated icon exist?
- The gallery motion demo resizes `.aw-btn-icon` to 48px round inline. Is that a sanctioned variant?
- Ghost size (34 × 32) is under a 44px touch target. Is that acceptable?
