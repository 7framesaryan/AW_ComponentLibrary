# Field

`.aw-field` · inputs-and-controls · status: **catalogued** · registry id `field`

A labelled text input with an optional hint line, for forms and auth screens.

## When to use
- Form and auth inputs that need a visible label: email, password, name.
- Numeric entry with validation feedback, for example a max bid that must beat the current bid.
- Anywhere an input needs an error message under it.

## When not to use
- Free-text search over results → use [Search](search.md)
- A min/max pair for price or year filters → use [Range](range.md)
- On/off preferences → use [Switch](switch.md)
- Choosing one or more fixed options → use [Filter option row](option-row.md)

## Where it's used
- Gallery (default and error) — `templates/gallery.template.html`
- Not used in a sample screen yet. The search-results filter sheet borrows only `.aw-field__label` as a section label.

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
| `.aw-field` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | 1px `--aw-border-strong` border; placeholder in `--aw-text-disabled` |
| Focus | native `:focus` on the input | Border reads as 2px `--aw-border-primary` (#009350): 1px border plus a 1px inset ring, so content doesn't shift |
| Error | add `.is-error` to `.aw-field` | Input border `--aw-border-danger` (#d4183d); hint text `--aw-text-danger` |
| Disabled | `disabled` attribute on the input | Text `--aw-text-disabled`, border `--aw-border-subtle`, fill stays `--aw-surface` |

## Tokens
| Property | Token |
|---|---|
| Label-input-hint gap | `--aw-space-tight` (4px) |
| Label | `--aw-fs-xs` (12px), `--aw-fw-medium`, `--aw-text-muted` (#a1a1aa) |
| Input fill | `--aw-surface` (#18181b) |
| Input border | `--aw-border-strong` (#71717a), 1px |
| Input radius | `--aw-radius-search-lg` (12px) |
| Input padding | `0 --aw-space-section` (16px) |
| Input text | `--aw-fs-sm` (14px), `--aw-text-primary` |
| Placeholder | `--aw-text-disabled` (#71717a) |
| Hint | `--aw-fs-caption` (10px), `--aw-text-muted` |
| Focus border | `--aw-border-primary`, 2px (1px border + 1px inset `box-shadow` ring) |
| Error border / hint | `--aw-border-danger` / `--aw-text-danger` |
| Transition | `--aw-dur-fast`, `--aw-ease-out` on border colour |

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
