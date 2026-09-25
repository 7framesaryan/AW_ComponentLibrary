# Labeled divider

`.aw-labeled-divider` · layout-and-surfaces · status: **catalogued** · registry id `labeled-divider`

A short text label centred between two 1px rules, used to separate alternative choices such as social sign-in and email sign-in ("or").

## When to use
- On auth screens between the social sign-in buttons and the email / primary sign-in option.
- Anywhere two equivalent alternatives are stacked and need an "or" between them.

## When not to use
- A plain structural separator → use [Divider](divider.md)
- Titling a section → use [Section header](section-header.md)
- Long explanatory text → use [Feedback description](feedback-description.md) or [Info alert](info-alert.md)

## Anatomy
```text
.aw-labeled-divider      row, centred
├── ::before             1px rule, grows to fill
├── text node            label ("or")
└── ::after              1px rule, grows to fill
```

## Variants
| Class | Use |
|---|---|
| `.aw-labeled-divider` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined. |

## Tokens
| Property | Token |
|---|---|
| Gap between rule and label | `--aw-space-block` (12px) |
| Label colour | `--aw-text-muted` (#a1a1aa) |
| Label size | `--aw-fs-xs` (12px) |
| Rule thickness | 1px |
| Rule colour | `--aw-border-subtle` (#27272a) |

## Layout & grid
- Full content width: a 4-column span (370px) inside the 16px margin, same width as the buttons above and below it.
- The rules flex to fill whatever width remains after the label.
- Vertical spacing comes from the parent stack (the gallery uses a 12px flex gap).

## Accessibility
- Screen readers will read the label ("or"), which is fine between alternatives.
- The rules are pseudo-elements and are not announced.
- Don't use `role="separator"` with text content; keep it as plain text.

## Do / Don't
- ✅ Keep the label to one short word ("or").
- ✅ Match the width of the buttons it separates.
- ❌ Don't use it as a section title.
- ❌ Don't recolour the label green or add icons.

## Example
```html
<div class="aw-labeled-divider">or</div>
```

## Related
- [Social button](social-btn.md) · [Button](button.md) · [Field](field.md) · [Divider](divider.md)
- typography (`02-design-system/foundations/typography.md`) · content (`02-design-system/foundations/content.md`)

## Open questions
- No real auth screen template exists yet; vertical spacing around the divider is not specified.
