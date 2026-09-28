# Plan option

`.aw-plan-option` · inputs-and-controls · status: **verified** · registry id `plan-option`

A selectable subscription-plan card: radio, plan name with an optional savings chip, a sub-line, and a right-aligned price (with an optional struck-through old price).

Verified against the AW Mob V3 **Paywall B** screens (Figma `B7mJJRaFlVAfLKPTjz48aK`, section `15780:33003`), which are built from AW Design System variables. The AW Design System file has no plan-option component of its own yet.

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
├── span.aw-radio                         leading control, aria-hidden, synced .is-checked
│   └── span.aw-radio__dot
├── span.aw-plan-option__body             column, flex:1, gap 4
│   ├── span.aw-plan-option__name-row
│   │   ├── span.aw-plan-option__name     "Annual"
│   │   └── span.aw-chip.aw-chip--primary.aw-chip--sm   optional, "Save 51%"
│   └── span.aw-plan-option__sub          "$7.33/mo · billed yearly"
└── span.aw-plan-option__price            baseline row, gap 4
    ├── span.aw-plan-option__was          optional, struck-through old price
    ├── span.aw-plan-option__amount       "$88"
    └── span.aw-plan-option__period       "/yr"
```

## Variants
| Class | Use |
|---|---|
| `.aw-plan-option` | Default (unselected) plan. |
| `.aw-plan-option.is-selected` | The chosen plan. Registered as the `selected` variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Unselected | none; inner radio without `.is-checked`; `aria-checked="false"` | 1px `--aw-plan-border` (#3f3f46) border, `--aw-plan-surface` (#18181b) fill |
| Selected | add `.is-selected`; add `.is-checked` to the inner radio; `aria-checked="true"` | 2px `--aw-positive` border (1px border + 1px inset ring), `--aw-plan-surface-selected` (#172e20) fill |
| Discounted | add `.aw-plan-option__was` before the amount | Old price 14/20 `--aw-text-disabled`, struck through |
| Pressed / focus / disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Radius | `--aw-radius-plan` (12px, Figma `layout/radius/rounded-medium`) |
| Padding | `--aw-space-section` (16px) |
| Column gap | `--aw-space-block` (12px) |
| Border | 1px `--aw-plan-border` (#3f3f46, Figma `colors/base/default-200`) |
| Fill | `--aw-plan-surface` (#18181b, Figma `colors/content/content1`) |
| Selected fill / border | `--aw-plan-surface-selected` (#172e20, Figma `colors/base/primary-50`) / 2px `--aw-positive` |
| Name-row gap / body gap | `--aw-space-row` (8px) / `--aw-space-tight` (4px) |
| Name | `--aw-fs-base`/`--aw-lh-base` (16/24), `--aw-fw-semibold`, `--aw-layout-foreground` |
| Sub | `--aw-fs-xs`/`--aw-lh-xs` (12/16), `--aw-text-muted` |
| Old price | `--aw-fs-sm`/`--aw-lh-sm` (14/20), `--aw-text-disabled`, line-through |
| Amount | `--aw-fs-xl`/`--aw-lh-xl` (20/28), `--aw-fw-bold`, `--aw-layout-foreground` |
| Period | `--aw-fs-xs`/`--aw-lh-xs` (12/16), `--aw-text-muted` |
| Savings | [Chip](chip.md) `.aw-chip--primary.aw-chip--sm` (solid green, 24px, 12/16 white) |
| Motion | `--aw-dur-fast`, `--aw-ease-out` on border, background and ring |

## Layout & grid
- Full width (`width:100%`) of the sheet content. Stack options in a column with `--aw-space-block` (12px) gap (`.plan-group` in the reproduction).
- The sheet uses `--aw-space-section-sm` (24px) side padding, so cards are narrower than the 370px 4-column span.

## Accessibility
- Wrap the options in `role="radiogroup"` with `aria-label="Payment plan"`.
- Each card is a `<button type="button" role="radio" aria-checked>`; the inner radio is `aria-hidden="true"`.
- Selecting one deselects the others; update class, `aria-checked` and the inner radio together.

## Do / Don't
- ✅ Keep exactly one plan selected; pre-select the plan the screen recommends (Monthly on Paywall B).
- ✅ Show savings with a solid primary small [Chip](chip.md) only.
- ❌ Don't use amber or red for savings or selection.
- ❌ Don't hard-code the inferred hex values; use the tokens so a Figma pass can update them.

## Example
```html
<button type="button" class="aw-plan-option" data-aw-component="plan-option" role="radio" aria-checked="false">
  <span class="aw-radio" aria-hidden="true"><span class="aw-radio__dot"></span></span>
  <span class="aw-plan-option__body">
    <span class="aw-plan-option__name-row"><span class="aw-plan-option__name">Annual</span><span class="aw-chip aw-chip--primary aw-chip--sm">Save 51%</span></span>
    <span class="aw-plan-option__sub">$7.33/mo · billed yearly</span>
  </span>
  <span class="aw-plan-option__price"><span class="aw-plan-option__amount">$88</span><span class="aw-plan-option__period">/yr</span></span>
</button>
```

## Related
- [Radio](radio.md), [Badge](badge.md), [Sheet](sheet.md), [Information alert](info-alert.md), [Button](button.md)
- Dialog (`02-design-system/patterns/dialog.md`)

## Open questions
- The AW Design System Figma file has no Plan option component; this one follows the Paywall B screens. Add it to the Figma library so both sides share one source.
- Pressed, focus and disabled states are not specified.

