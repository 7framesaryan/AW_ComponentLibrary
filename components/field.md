# Field

`.aw-field` · inputs-and-controls · status: **verified** · registry id `field`

A labelled text input with an optional hint line, for forms and auth screens.

Measured from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, component set **Input**, `variant=bordered, size=lg, radius=md, labelPlacement=outside`).

## When to use
- Form and auth inputs that need a visible label: email, password, name.
- Numeric entry with validation feedback, for example a max bid that must beat the current bid.
- Anywhere an input needs an error message under it.

## When not to use
- Free-text search over results → use [Search](search.md)
- A min/max pair for price or year filters → use [Range](range.md)
- On/off preferences → use [Switch](switch.md)
- Choosing one or more fixed options → use [Filter option row](option-row.md)

## Anatomy
```text
label.aw-field                    column, gap --aw-space-block (12)
├── span.aw-field__label          label text, 12/16 regular, --aw-text-secondary
├── input.aw-field__input         46px, transparent, 2px --aw-border-hairline border, 12px radius, 16/24 text
└── span.aw-field__hint           optional helper or error text, 10px
```

## Variants
| Class | Use |
|---|---|
| `.aw-field` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | 2px `--aw-border-hairline` (#52525b) border; placeholder `--aw-text-muted` (#a1a1aa) |
| Focus / active | native `:focus`, or add `.is-active` to `.aw-field` | Border `--aw-border-primary` (#009350); label turns `--aw-text-accent` |
| Error | add `.is-error` to `.aw-field` | Input border `--aw-border-danger`; hint `--aw-text-danger` |
| Disabled | `disabled` attribute on the input | Text `--aw-text-disabled`, border `--aw-border-subtle` |

## Tokens
| Property | Token |
|---|---|
| Label–input gap | `--aw-space-block` (12px) |
| Label | `--aw-fs-xs`/`--aw-lh-xs` (12/16), `--aw-fw-regular`, `--aw-text-secondary` (#d4d4d8, Figma `colors/base/default-600`) |
| Input height | `--aw-field-h` (46px: 42px content + 2px border each side) |
| Input fill | transparent |
| Input border | `--aw-field-border-width` (2px) `--aw-border-hairline` (#52525b, Figma `colors/layout/foreground-300`) |
| Input radius | `--aw-radius-search-lg` (12px) |
| Input padding | `0 --aw-space-block` (12px) |
| Input text | `--aw-fs-base`/`--aw-lh-base` (16/24), `--aw-layout-foreground` (#ecedee) |
| Placeholder | `--aw-text-muted` (#a1a1aa, Figma `colors/layout/foreground-500`) |
| Hint | `--aw-fs-caption` (10px), `--aw-text-muted` |
| Focus border / label | `--aw-border-primary` / `--aw-text-accent` |
| Error border / hint | `--aw-border-danger` / `--aw-text-danger` |
| Transition | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- A field spans all 4 columns (370px) by default; the input fills the field width.
- Two short fields side by side each take 2 columns (181px) with the 8px gutter.
- Stack fields with a spacing token between them (the gallery uses 16px).

## Accessibility
- Wrap label and input in `<label class="aw-field">` so the label names the input.
- In the error state, link the hint to the input with `aria-describedby` and set `aria-invalid="true"`. Not in the sample markup; recommended.
- Error is not colour-only: the hint must say what is wrong and how to fix it.

## Do / Don't
- ✅ Write error hints that state the rule, e.g. "Must be higher than the current bid ($3,850)".
- ✅ Use the native `disabled` attribute for the disabled state.
- ❌ Don't use a placeholder as the only label.
- ❌ Don't use the red error style for anything but validation errors.
- ❌ Don't use a field for search; the search field has its own glass styling.

## Example
```html
<label class="aw-field"><span class="aw-field__label">Promo code</span><input class="aw-field__input" placeholder="Enter promo code"></label>
```

## Related
- [Search](search.md), [Range](range.md), [Button](button.md), [Social auth button](social-btn.md), [Labeled divider](labeled-divider.md)
- color (`02-design-system/foundations/color.md`), content (`02-design-system/foundations/content.md`)

## Open questions
- The Figma set's description text size was not measured; the hint keeps its previous 10px.
- Figma's `color=primary` variant shows a #3f3f46 border while unfocused; the code uses the default border until focus.

