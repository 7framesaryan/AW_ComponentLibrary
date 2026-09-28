# Field

`.aw-field` · inputs-and-controls · status: **catalogued** · registry id `field`

A labelled text input with an optional hint line, for forms and auth screens.

> **Kit alignment (2026-09-28):** rebuilt on the AW Design System Input (2702:198295), labelPlacement=outside, size=lg: 2px border (was 1px), 16/24 value (was 14), label 12/16 in default-600, focus = 2px primary border. Added the kit flat variant and size sm.

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
label.aw-field                    column, gap --aw-space-tight
├── span.aw-field__label          label text, 12px medium, muted
├── input.aw-field__input         48px input, 12px radius, strong border
└── span.aw-field__hint           optional helper or error text, 10px
```

## Variants
| Class | Use |
|---|---|
| `.aw-field` | Kit variant=bordered: 2px `--aw-border-hairline`, transparent fill |
| `.aw-field--flat` | Kit variant=flat: `--aw-surface-raised` fill, no stroke (hover `--aw-surface-strong`) |
| `.aw-field--sm` | 40 tall, 14/20 value |

## States
| State | How to apply | What changes |
|---|---|---|
| Focus | `:focus` | Border `--aw-border-primary` (2px) |
| Error | `.is-error` on `.aw-field` | Border `--aw-border-danger`; hint `--aw-text-danger` |
| Disabled | `disabled` on the input | `--aw-opacity-disabled` |

## Tokens
| Property | Token |
|---|---|
| Height | `--aw-input-h-lg` (48) · sm `--aw-input-h-sm` (40) |
| Radius · border | `--aw-rounded-medium` (12) · `--aw-border-medium` (2) `--aw-border-hairline` |
| Value · placeholder | `--aw-fs-base` 16/24 `--aw-layout-foreground` · `--aw-text-muted` |
| Label · hint | `--aw-fs-xs` 12/16 `--aw-text-secondary` · `--aw-text-disabled` |

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
<label class="aw-field is-error"><span class="aw-field__label">Max bid</span><input class="aw-field__input" value="$50"><span class="aw-field__hint">Must be higher than the current bid ($3,850)</span></label>
```

## Related
- [Search](search.md), [Range](range.md), [Button](button.md), [Social auth button](social-btn.md), [Labeled divider](labeled-divider.md)
- color (`02-design-system/foundations/color.md`), content (`02-design-system/foundations/content.md`)

## Open questions
- The error state uses red (`--aw-border-danger`, `--aw-text-danger`), but red is reserved for countdowns. Is validation red an approved exception?
- No auth or form screen template exists yet to show real field spacing.
- Password visibility toggle, leading icons and success state are not specified.
