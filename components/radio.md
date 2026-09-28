# Radio

`.aw-radio` · inputs-and-controls · status: **verified** · registry id `radio`

A 20px ring for picking exactly one option from a group: a 2px grey ring when off, a green ring with an 8px green centre dot when on.

Measured from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, component set **Radio**, `size=md`). The ring is the only look the set has, so it is now the default; `.aw-radio--ring` stays as an alias for older markup.

## When to use
- Single-choice lists where only one option can be active.
- The leading control inside a [Plan option](plan-option.md) (ring variant).

## When not to use
- Several options can be picked → use [Checkbox](checkbox.md)
- An immediate on/off setting → use [Switch](switch.md)
- Two to four compact view choices in a row → use [Segmented](segmented.md)

## Anatomy
```text
span.aw-radio                   20 x 20 ring, 2px border
└── span.aw-radio__dot          8px centre dot (--aw-radio-dot-size); always include it
```

## Variants
| Class | Use |
|---|---|
| `.aw-radio` | The radio. Checked = green ring + green centre dot. |
| `.aw-radio.aw-radio--ring` | Alias kept for older markup; renders exactly like `.aw-radio`. |

## States
| State | How to apply | What changes |
|---|---|---|
| Unchecked | none | Transparent centre, 2px `--aw-zinc-700` (#3f3f46) ring (Figma `colors/base/default`) |
| Checked | add `.is-checked` | Ring `--aw-positive` (#009350); `.aw-radio__dot` fills `--aw-positive` |
| Hover / focus / invalid / disabled | Not specified | The Figma set has these variants; they are not coded yet |

## Tokens
| Property | Token |
|---|---|
| Ring width | `--aw-radio-border-width` (2px) |
| Ring (unchecked) | `--aw-zinc-700` (#3f3f46) |
| Ring and dot (checked) | `--aw-positive` (#009350) |
| Dot size | `--aw-radio-dot-size` (8px) |
| Radius | `--aw-radius-pill` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` on the ring and dot colour |

## Layout & grid
- Fixed 20 x 20; never sized to a column.
- In a plan option it leads the row, followed by a `--aw-space-block` (12px) gap.

## Accessibility
- Group radios in `role="radiogroup"` with an `aria-label`; each option gets `role="radio"` and `aria-checked`, or use native `<input type="radio">` with a shared `name`.
- When the whole card is the radio (plan option), mark the inner `.aw-radio` `aria-hidden="true"` as the reproduction does.
- Selecting one must clear the others; arrow keys should move selection.

## Do / Don't
- ✅ Keep `.is-checked` in sync with `aria-checked` on the owning control.
- ✅ Use the ring variant inside plan options, the default elsewhere.
- ❌ Don't use a radio when several choices can be true.
- ❌ Don't use one radio on its own; radios come in groups.

## Example
```html
<span class="aw-radio is-checked" data-aw-component="radio" aria-hidden="true"><span class="aw-radio__dot"></span></span>
```

## Related
- [Plan option](plan-option.md), [Checkbox](checkbox.md), [Switch](switch.md), [Filter option row](option-row.md)
- color (`02-design-system/foundations/color.md`)

## Open questions
- The Figma set has no "selected, not hovered" variant: every `isSelected=True` variant is also `isHovered=True`. The code treats that look as the plain checked state.
- Hover, focus, invalid and disabled variants exist in Figma but are not coded yet.

