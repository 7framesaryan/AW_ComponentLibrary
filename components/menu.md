# More-menu

`.aw-menu` · navigation-and-chrome · status: **catalogued** · registry id `menu`

An overflow dropdown listing secondary actions (icon + label), opened from a ghost "more" icon button.

## When to use
- Secondary actions for the current screen or object: save search, set price alert, settings, remove.
- Behind the `more` ghost icon button in a [Second-level header](header.md).

## When not to use
- The screen's main action → use [Button](button.md) or [Bottom action bar](action-bar.md)
- Choosing filter options → use [Option row](option-row.md) inside a [Sheet](sheet.md)
- Moving between app destinations → use [Bottom nav](bottom-nav.md)
- A confirmation or task that needs more than a tap → use [Sheet](sheet.md)

## Where it's used
- Component gallery (specimen only) — `templates/gallery.template.html`
- Not used in a sample screen yet.

## Anatomy
```text
.aw-menu                   raised panel, vertical list
└── a.aw-menu__item × N    row: icon + label
    ├── svg.aw-icon        action icon, 18px in the gallery
    └── text node          action label
```

## Variants
| Class | Use |
|---|---|
| `.aw-menu` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Item default | None | Text `--aw-text-body` (#e4e4e7) |
| Item hover | `:hover` | Background `--aw-surface-strong` (#3f3f46), text `--aw-text-primary` |
| Destructive item | Add `.is-danger` to `.aw-menu__item` | Text `--aw-text-danger` (#d4183d) |
| Open / closed | Not specified | No class in CSS; show and hide the element yourself |

## Tokens
| Property | Token |
|---|---|
| Min width | 200px (hard-coded in CSS) |
| Panel padding | `--aw-space-row` (8px) |
| Gap between items | `--aw-space-micro` (2px) |
| Panel radius | `--aw-radius-card` (8px) |
| Panel fill | `--aw-surface-raised` (#27272a) |
| Panel border | 1px `--aw-border-hairline` (#52525b) |
| Shadow | `--aw-shadow-hairline` |
| Item padding | `--aw-space-row` (8px) vertical, `--aw-space-block` (12px) horizontal |
| Item icon gap | `--aw-space-block` (12px) |
| Item radius | `--aw-radius-sm` (4px) |
| Item type | `--aw-fs-sm` (14px) |
| Hover transition | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- A floating overlay, so it does not take a column span. Anchor it under its trigger, aligned to the trigger's edge, and keep it inside the 16px screen margin.
- Width follows content with a 200px minimum.
- Positioning (absolute offset, z-index) is not specified in CSS.

## Accessibility
- Trigger: `<button aria-label="More options" aria-haspopup="menu" aria-expanded="false|true">`.
- Panel: `role="menu"`; each item `role="menuitem"` (use `<button>` for actions, `<a href>` for navigation).
- Move focus into the menu on open, support arrow keys and Escape, and return focus to the trigger on close.
- Close on outside tap or after choosing an item.

## Do / Don't
- ✅ Keep items short verbs ("Save search", "Set price alert").
- ✅ Put destructive items last and mark them `.is-danger`.
- ❌ Don't hide the primary action of a screen in this menu.
- ❌ Don't render SF Symbol glyphs as text; use sprite icons.
- ❌ Don't use the menu for filters or single-choice settings.

## Example
```html
<div class="aw-menu">
  <a class="aw-menu__item"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-bookmark"/></svg>Save search</a>
  <a class="aw-menu__item"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-bell"/></svg>Set price alert</a>
  <a class="aw-menu__item"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-settings"/></svg>Settings</a>
  <a class="aw-menu__item is-danger"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-close"/></svg>Remove</a>
</div>
```

## Related
- [Icon button](icon-button.md) · [Second-level header](header.md) · [Sheet](sheet.md)
- Dialog pattern (`02-design-system/patterns/dialog.md`) · color (`02-design-system/foundations/color.md`) · motion (`02-design-system/foundations/motion/INDEX.md`)

## Open questions
- `.is-danger` uses `--aw-text-danger` (red), but the colour rule reserves red for countdowns only. Is a destructive red item allowed, or should it use another token?
- No open/closed state class, anchoring or enter/exit motion is defined.
- The old Figma menu had a 30px radius, ~250px width and a glass pill trigger; CSS uses an 8px radius, 200px min width and a ghost icon button. Confirm CSS is canonical.
- Keyboard focus style for items: not specified.
- Min width is a raw 200px, not a token.
