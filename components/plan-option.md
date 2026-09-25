# Plan option

`.aw-plan-option` · inputs-and-controls · status: **provisional** · registry id `plan-option`

A selectable subscription-plan card: ring radio, plan name with optional savings badge, a sub-line, and a right-aligned price.

> Provisional. Reconstructed from a user screenshot of the payment-plan sheet, not verified against live Figma. The radius, padding, gap, both surface fills, the border colour and the selected fill are inferred (payment-plan gap P1). Expect values to change.

## When to use
- Choosing one subscription plan in the paywall payment sheet (Yearly / Monthly).
- Any single-select list where each option carries a name, a short explanation and a price.

## When not to use
- Plain filter options with only a label → use [Filter option row](option-row.md)
- A bare single-choice control → use [Radio](radio.md)
- Switching views or timeframes → use [Segmented](segmented.md)

## Anatomy
```text
button.aw-plan-option                     row card, role="radio"
├── span.aw-radio.aw-radio--ring          leading control, aria-hidden, synced .is-checked
│   └── span.aw-radio__dot
├── span.aw-plan-option__body             column, flex:1
│   ├── span.aw-plan-option__name-row
│   │   ├── span.aw-plan-option__name     "Yearly"
│   │   └── span.aw-badge.aw-badge--positive-soft   optional, "Save 25%"
│   └── span.aw-plan-option__sub          "Just $7.50/mo · billed yearly"
└── span.aw-plan-option__price            right-aligned column
    ├── span.aw-plan-option__amount       "$89.99"
    └── span.aw-plan-option__period       "per year"
```

## Variants
| Class | Use |
|---|---|
| `.aw-plan-option` | Default (unselected) plan. |
| `.aw-plan-option.is-selected` | The chosen plan. Registered as the `selected` variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Unselected | none; inner radio without `.is-checked`; `aria-checked="false"` | Border `--aw-plan-border`, fill `--aw-plan-surface` |
| Selected | add `.is-selected`; add `.is-checked` to the inner radio; `aria-checked="true"` | Border `--aw-positive` (#009350), fill `--aw-plan-surface-selected` (deep green) |
| Pressed / focus / disabled | Not specified | Not specified |

## Tokens
All values marked (inferred) are unverified.
| Property | Token |
|---|---|
| Radius | `--aw-radius-plan` (16px, inferred) |
| Padding | `--aw-space-section` (16px, inferred) |
| Column gap | `--aw-space-block` (12px, inferred) |
| Border | 1px `--aw-plan-border` (#2a2a30, inferred) |
| Fill | `--aw-plan-surface` (#131316, inferred) |
| Selected fill / border | `--aw-plan-surface-selected` (#04140b, inferred) / `--aw-positive` |
| Name-row gap / body gap | `--aw-space-row` (8px) / `--aw-space-micro` (2px) |
| Name | `--aw-fs-base`/`--aw-lh-base` (16/24), `--aw-fw-bold`, `--aw-text-primary` |
| Sub | `--aw-fs-xs`/`--aw-lh-xs` (12/16), `--aw-text-muted` |
| Amount | `--aw-fs-lg`/`--aw-lh-lg` (18/28), `--aw-fw-bold`, `--aw-text-primary` |
| Period | `--aw-fs-chip`/`--aw-lh-chip` (11/16), `--aw-text-muted` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` on border and background |

## Layout & grid
- Full width (`width:100%`) of the sheet content. Stack options in a column with `--aw-space-block` (12px) gap (`.plan-group` in the reproduction).
- The sheet uses `--aw-space-section-sm` (24px) side padding, so cards are narrower than the 370px 4-column span.

## Accessibility
- Wrap the options in `role="radiogroup"` with `aria-label="Payment plan"`.
- Each card is a `<button type="button" role="radio" aria-checked>`; the inner radio is `aria-hidden="true"`.
- Selecting one deselects the others; update class, `aria-checked` and the inner radio together.

## Do / Don't
- ✅ Keep exactly one plan selected; pre-select the recommended plan (Yearly in the sample).
- ✅ Show savings with `.aw-badge--positive-soft` only.
- ❌ Don't use amber or red for savings or selection.
- ❌ Don't hard-code the inferred hex values; use the tokens so a Figma pass can update them.

## Example
```html
<button type="button" class="aw-plan-option is-selected" data-aw-component="plan-option" data-aw-variant="selected" role="radio" aria-checked="true">
<span class="aw-radio aw-radio--ring is-checked" aria-hidden="true"><span class="aw-radio__dot"></span></span>
<span class="aw-plan-option__body">
<span class="aw-plan-option__name-row"><span class="aw-plan-option__name">Yearly</span><span class="aw-badge aw-badge--positive-soft">Save 25%</span></span>
<span class="aw-plan-option__sub">Just $7.50/mo · billed yearly</span>
</span>
<span class="aw-plan-option__price"><span class="aw-plan-option__amount">$89.99</span><span class="aw-plan-option__period">per year</span></span>
</button>
```

## Related
- [Radio](radio.md), [Badge](badge.md), [Sheet](sheet.md), [Information alert](info-alert.md), [Button](button.md)
- Dialog (`02-design-system/patterns/dialog.md`)

## Open questions
- All geometry and colour tokens above marked inferred need confirmation against live Figma (P1, P3, P4).
- Arrow-key navigation within the radiogroup is not implemented in the reproduction.
- Pressed, focus-visible and disabled states are not specified.
- Sheet side padding (24px) breaks the 16px grid margin; confirm against Figma.
