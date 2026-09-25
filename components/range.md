# Range

`.aw-range` · inputs-and-controls · status: **catalogued** · registry id `range`

A min/max filter: two text inputs with a separator, plus an optional slider track with a green fill and two knobs.

## When to use
- Filtering by a numeric span: price range, year range.
- Inside a filter sheet, under a section label such as "Price range".

## When not to use
- A single value with a label and validation → use [Field](field.md)
- Free-text query → use [Search](search.md)
- Choosing from fixed buckets (PSA 9 & above, Raw) → use [Filter option row](option-row.md)

## Anatomy
```text
div.aw-range                        row of inputs, gap --aw-space-block
├── input.aw-range__input           minimum value, flex:1, 40px
├── span.aw-range__sep              "–" separator
└── input.aw-range__input           maximum value
div.aw-range__track                 sibling after .aw-range: 4px slider track
├── div.aw-range__fill              green selected span (left/right set inline)
├── div.aw-range__knob              min knob (left set inline)
└── div.aw-range__knob              max knob
```

## Variants
| Class | Use |
|---|---|
| `.aw-range` | The only variant. The track is optional; both samples include it. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Input border 1px `--aw-border-strong` |
| Input focus | native `:focus` | Input border `--aw-border-primary` (#009350), width stays 1px |
| Selected span | set `left`/`right` on `__fill` and `left` on each `__knob` | Fill and knobs move |
| Error / disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Input gap | `--aw-space-block` (12px) |
| Input fill / border | `--aw-surface` (#18181b) / `--aw-border-strong` (#71717a) |
| Input radius | `--aw-radius-search-sm` (8px) |
| Input padding | `0 --aw-space-block` (12px) |
| Input text | `--aw-fs-sm` (14px), `--aw-text-primary` |
| Separator | `--aw-text-muted` |
| Track fill / radius | `--aw-surface-strong` (#3f3f46) / `--aw-radius-pill` |
| Track vertical margin | `--aw-space-section` (16px) |
| Selected fill | `--aw-positive` (#009350) |
| Knob | `--aw-zinc-50` (#fafafa), `--aw-radius-pill`, `--aw-shadow-hairline` |

## Layout & grid
- The inputs row spans the full content width (4 columns inside the sheet); each input takes half the space after the separator.
- The track is a separate block directly below the inputs, same width.
- Knob positions are percentages set inline by the screen.

## Accessibility
- Give each input an accessible name ("Minimum price", "Maximum price"); the section label alone is not enough.
- If the knobs are draggable, each needs `role="slider"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and arrow-key support. The samples are static.
- Consider `inputmode="numeric"` for the inputs.

## Do / Don't
- ✅ Keep the input values and knob positions in sync.
- ✅ Precede the range with a label (`.aw-field__label` in the filter sheet).
- ❌ Don't put the track inside `.aw-range`; it is a sibling block.
- ❌ Don't colour the selected span anything but green.

## Example
```html
<div class="aw-range"><input class="aw-range__input" value="$1,000"><span class="aw-range__sep">–</span><input class="aw-range__input" value="$10,000"></div>
<div class="aw-range__track"><div class="aw-range__fill" style="left:12%;right:30%"></div><div class="aw-range__knob" style="left:12%"></div><div class="aw-range__knob" style="left:70%"></div></div>
```

## Related
- [Sheet](sheet.md), [Filter option row](option-row.md), [Field](field.md), [Button](button.md)

## Open questions
- Drag behaviour, step size and value formatting are not specified.
- Focus on range inputs keeps a 1px border, while field and search use 2px. Intended?
- Knob hover/active/focus states are not specified.
- Error state (min greater than max) is not specified.
