# Radio

`.aw-radio` · inputs-and-controls · status: **catalogued** · registry id `radio`

A 20px round control for picking exactly one option from a group; the default fills solid green, the ring variant shows a green centre dot.

## When to use
- Single-choice lists where only one option can be active.
- The leading control inside a [Plan option](plan-option.md) (ring variant).

## When not to use
- Several options can be picked → use [Checkbox](checkbox.md)
- An immediate on/off setting → use [Switch](switch.md)
- Two to four compact view choices in a row → use [Segmented](segmented.md)

## Where it's used
- Payment plan sheet (ring variant inside plan options) — `reproductions/payment-plan/screen.html`
- Gallery (default, checked and unchecked) — `templates/gallery.template.html`

## Anatomy
```text
span.aw-radio                   20 x 20 circle, 1px border
└── span.aw-radio__dot          inner dot; required for --ring (--aw-radio-dot-size, 10px)
```
The gallery default radio uses an inline-styled 8px `currentColor` dot, not `.aw-radio__dot`.

## Variants
| Class | Use |
|---|---|
| `.aw-radio` | Default. Checked = solid green disc. |
| `.aw-radio.aw-radio--ring` | Ring (donut). Checked = transparent centre, green border and green `__dot`. Used by plan option. Provisional: from a screenshot reconstruction. |

## States
| State | How to apply | What changes |
|---|---|---|
| Unchecked | none | Transparent fill, 1px `--aw-border-strong` border |
| Checked (default) | add `.is-checked` | Fill and border `--aw-positive` (#009350) |
| Checked (ring) | add `.is-checked` to `.aw-radio--ring` | Fill stays transparent; border `--aw-positive`; `.aw-radio__dot` fills `--aw-positive` |
| Disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Border (unchecked) | `--aw-border-strong` (#71717a), 1px |
| Radius | `--aw-radius-pill` |
| Checked fill / border | `--aw-positive` (#009350) |
| Inner content colour | `--aw-zinc-50` (#fafafa) |
| Ring dot size | `--aw-radio-dot-size` (10px, inferred) |

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
<span class="aw-radio aw-radio--ring is-checked" data-aw-component="radio" data-aw-variant="ring" aria-hidden="true"><span class="aw-radio__dot"></span></span>
```

## Related
- [Plan option](plan-option.md), [Checkbox](checkbox.md), [Switch](switch.md), [Filter option row](option-row.md)
- color (`02-design-system/foundations/color.md`)

## Open questions
- Ring variant dot size (10px) and ring stroke are inferred from a screenshot (payment-plan gap P3); confirm against Figma.
- The default checked radio has no class for its inner dot; the gallery uses an inline 8px span. Should `.aw-radio__dot` be used for the default too?
- Disabled state is not specified.
- No sample screen uses the default (non-ring) radio.
