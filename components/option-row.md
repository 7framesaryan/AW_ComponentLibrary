# Filter option row

`.aw-option-row` · inputs-and-controls · status: **catalogued** · registry id `option-row`

A full-width row with a label on the left and a checkbox or radio on the right; rows stack into a selectable option list.

## When to use
- Lists of filter options inside a filter sheet, such as Grade: PSA 9 & above, PSA 6 – 8, Raw / ungraded.
- Any vertical list where each line is one selectable option.

## When not to use
- Choosing a subscription plan with price and savings → use [Plan option](plan-option.md)
- Quick filters shown above results → use [Filter chip](filter-chip.md)
- A read-only label/value pair → use [Detail row](detail-row.md)
- An on/off setting row → use [Switch](switch.md)

## Anatomy
```text
div.aw-option-row                 space-between row, bottom hairline
├── span.aw-option-row__label     option text
└── span.aw-checkbox | .aw-radio  trailing control
```

## Variants
| Class | Use |
|---|---|
| `.aw-option-row` | The only variant. Put a checkbox for multi-select or a radio for single-select. |

## States
| State | How to apply | What changes |
|---|---|---|
| Unselected | trailing control unchecked | Nothing on the row itself |
| Selected | add `.is-checked` (and the check icon) to the trailing control | Only the control changes |
| Last row | automatic (`:last-child`) | Bottom border removed |
| Disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Vertical padding | `--aw-space-block` (12px) |
| Divider | 1px `--aw-border-subtle` (#27272a) |
| Label | `--aw-fs-sm` (14px), `--aw-text-body` (#e4e4e7) |

## Layout & grid
- Rows span the full content width of their container (4 columns, or the sheet content width).
- No horizontal padding: the label and control align with the container edges.
- Stack rows directly with no gap; the hairline separates them.
- Precede a group with a label (`.aw-field__label` in the filter sheet).

## Accessibility
- Make the whole row the click target: wrap it in a `<label>` with a real input, or give the control `role="checkbox"`/`role="radio"` and link it to the label with `aria-labelledby`.
- For radio rows, wrap the group in `role="radiogroup"`.

## Do / Don't
- ✅ Keep option labels short and parallel ("PSA 9 & above", "PSA 7 – 8").
- ✅ Let the whole row toggle, not just the 20px box.
- ❌ Don't add prices, badges or sub-lines; that is a plan option.
- ❌ Don't mix checkboxes and radios in one group.

## Example
```html
<div class="aw-option-row"><span class="aw-option-row__label">PSA 9 & above</span><span class="aw-checkbox is-checked"><svg class="aw-icon" style="width:14px;height:14px"><use href="#aw-i-check"/></svg></span></div>
```

## Related
- [Checkbox](checkbox.md), [Radio](radio.md), [Sheet](sheet.md), [Range](range.md), [Detail row](detail-row.md)

## Open questions
- No row-level selected or pressed styling is specified.
- Disabled option state is not specified.
- Whether the whole row is the tap target is not stated in the sources (recommended here).
