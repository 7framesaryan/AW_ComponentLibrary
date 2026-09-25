# Quick action

`.aw-quick-action` · actions · status: **catalogued** · registry id `quick-action`

A pill with a green-tinted icon and a short label that jumps to a frequent task from the home screen.

## When to use
- Home-screen shortcuts to common destinations or tasks: Scan card, Saved searches, Calendar.
- In a horizontally scrolling row below the home search field.

## When not to use
- Filtering a result list → use [Filter chip](filter-chip.md)
- Stating a fact such as price or grade → use [Chip](chip.md)
- The main action of a surface → use [Button](button.md)
- A header control with no label → use [Icon button](icon-button.md)

## Anatomy
```text
.aw-quick-action              pill, inline-flex row, gap --aw-space-row
├── svg.aw-icon.aw-quick-action__icon   16px icon tinted --aw-text-accent
└── label text                11px medium, --aw-text-primary
```

## Variants
| Class | Use |
|---|---|
| `.aw-quick-action` | The only variant: 30px pill on `--aw-surface-strong` |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Strong surface, green icon |
| Pressed | Not specified | Not specified (`.aw-pressable` exists in base.css but is not applied in templates) |
| Disabled | Not specified | Not specified |
| Focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Height | 30px, fixed in CSS |
| Side padding | `--aw-space-block` |
| Icon–label gap | `--aw-space-row` |
| Radius | `--aw-radius-pill` |
| Fill | `--aw-surface-strong` |
| Label | `--aw-fs-chip` / `--aw-fw-medium` / `--aw-text-primary` |
| Icon colour | `--aw-text-accent` |

## Layout & grid
- Lay pills out in a quick-action row (`02-design-system/patterns/quick-action-row.md`): horizontal scroll, starting at the 16px margin.
- The pills are scroll-row items, so they are outside the column grid (see grid (`02-design-system/foundations/grid.md`) rule 4). The pill width hugs its label.
- Gap between pills: Not specified in CSS. The home template uses its own `qa-row` wrapper class.

## Accessibility
- Templates render the pill as a `<span>`. When it's tappable, use `<button type="button">` or `<a href>` so it's keyboard- and screen-reader-reachable.
- The label is the accessible name, so mark the icon `aria-hidden="true"`.
- At 30px tall it is below a 44px touch target. Keep space between pills.

## Do / Don't
- ✅ Keep labels to one or two words, starting with a verb or naming a destination.
- ✅ Pick an icon that matches the action (`scan`, `radar`, `calendar`, `sort`, `filter`).
- ✅ Scroll the row horizontally rather than wrapping it onto two lines.
- ❌ Don't fill a quick action green. Green is reserved for affirmative actions, and only the icon is tinted.
- ❌ Don't use quick actions as filters or status indicators.
- ❌ Don't use quick actions away from the home screen without a documented reason.

## Example
```html
<span class="aw-quick-action"><svg class="aw-icon aw-quick-action__icon" style="width:16px;height:16px"><use href="#aw-i-scan"/></svg>Scan card</span>
```

## Related
- Quick-action row (`02-design-system/patterns/quick-action-row.md`) · [Chip](chip.md) · [Filter chip](filter-chip.md) · [Button](button.md)
- Spacing (`02-design-system/foundations/spacing.md`) · Icons (`02-design-system/foundations/icons.md`)

## Open questions
- The old Figma guide described a 2-up tile form (surface fill, `--aw-border-subtle` border, 8px radius). No CSS class exists for it. Is it still needed?
- The old guide gave the pill a 1px `--aw-border-strong` stroke. The CSS has no border. Which is correct?
- Pressed, disabled and focus states are not specified.
- The gap between pills in a row is not a documented token or class.
- Templates use `<span>`, not `<button>`. Confirm the intended element.
