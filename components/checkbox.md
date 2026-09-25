# Checkbox

`.aw-checkbox` · inputs-and-controls · status: **catalogued** · registry id `checkbox`

A 20px square box that fills green with a check icon when selected; used for multi-select choices.

## When to use
- Selecting any number of options in a list, such as grade filters in a filter sheet.
- As the trailing control inside a [Filter option row](option-row.md).

## When not to use
- Only one option may be chosen → use [Radio](radio.md)
- An immediate on/off setting → use [Switch](switch.md)
- Switching between views → use [Segmented](segmented.md)

## Anatomy
```text
span.aw-checkbox                   20 x 20 box, 1px border, centred content
└── svg.aw-icon (#aw-i-check)      14px check, only when checked
```

## Variants
| Class | Use |
|---|---|
| `.aw-checkbox` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Unchecked | none, and leave the box empty | Transparent fill, 1px `--aw-border-strong` border |
| Checked | add `.is-checked` and insert the check icon | Fill and border `--aw-positive` (#009350); icon in `--aw-zinc-50` |
| Disabled | Not specified | Not specified |
| Indeterminate | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Border (unchecked) | `--aw-border-strong` (#71717a), 1px |
| Radius | `--aw-radius-sm` (4px) |
| Checked fill and border | `--aw-positive` (#009350) |
| Icon colour | `--aw-zinc-50` (#fafafa) |

## Layout & grid
- Fixed 20 x 20; never sized to a column.
- In an option row it sits at the right edge, opposite the label.

## Accessibility
- The sample is a bare `<span>`. When interactive, use a real `<input type="checkbox">` or `role="checkbox"` with `aria-checked` and keyboard support.
- Give each checkbox an accessible name (the option-row label, linked with `aria-labelledby` or a wrapping `<label>`).
- The check icon is decorative (`aria-hidden="true"`); state comes from `aria-checked`.

## Do / Don't
- ✅ Add the check icon whenever you add `.is-checked`; remove it when unchecking.
- ✅ Use for independent choices that can combine.
- ❌ Don't use a checkbox where selecting one must clear the others.
- ❌ Don't leave a checked box empty; fill alone is colour-only.

## Example
```html
<span class="aw-checkbox is-checked"><svg class="aw-icon" style="width:14px;height:14px"><use href="#aw-i-check"/></svg></span>
```

## Related
- [Filter option row](option-row.md), [Radio](radio.md), [Switch](switch.md), [Sheet](sheet.md)
- icons (`02-design-system/foundations/icons.md`), radii (`02-design-system/foundations/radii.md`)

## Open questions
- Disabled and indeterminate states are not specified.
- The old Figma guides had no separate checkbox guide; sizing is not verified against Figma.
