# Success heading

`.aw-success-heading` · overlays-and-feedback · status: **verified** · registry id `success-heading`

A centred 24px bold heading that states the outcome on a confirmation screen.

## When to use
- The main message on a success screen, e.g. "You're all set".
- Directly under a [Success indicator](success-indicator.md), above a [Feedback description](feedback-description.md).

## When not to use
- A screen title in a header → use [Header](header.md) or the `.aw-page-title` type style
- A section title in a list → use [Section header](section-header.md)
- A sheet title → use `.aw-sheet__title` in [Sheet](sheet.md)
- An alert title → use [Information alert](info-alert.md)

## Anatomy
```text
h1.aw-success-heading              centred heading, no margins, 32px line box
└── span.aw-success-heading__text  text; shifted down 1px for optical baseline
```

## Variants
| Class | Use |
|---|---|
| `.aw-success-heading` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static |

## Tokens
| Property | Token |
|---|---|
| Size / line-height | `--aw-fs-2xl` (24px) / `--aw-lh-2xl` (32px) |
| Weight | `--aw-fw-bold` |
| Font | `--aw-font-sans` (Inter) |
| Colour | `--aw-text-high` (#fafafa) |
| Alignment | centre |
| Inner text offset | `--aw-feedback-heading-ink-offset` (1px) |

## Layout & grid
- Width follows the containing region (`align-self: stretch` in the source), not a fixed width.
- In the verified screen the heading and description stack with `--aw-space-row` (8px) gap, 12px below the indicator.
- The 1px offset moves the ink only; the 32px layout box does not change.

## Accessibility
- Use a real heading element (`h1` on the success screen) with an `id`, and point the section's `aria-labelledby` at it.
- Always include the inner `__text` span; it holds the optical alignment, not meaning.

## Do / Don't
- ✅ Keep the message short and outcome-first ("You're all set").
- ✅ Keep browser margins off (the class sets `margin: 0`).
- ❌ Don't hand-set 24px text elsewhere; this is the only 24/32 style.
- ❌ Don't colour the heading green; the indicator carries the success colour.

## Example
```html
<h1 id="success-title" class="aw-success-heading" data-aw-component="success-heading" data-aw-variant="default"><span class="aw-success-heading__text">You’re all set</span></h1>
```

## Related
- [Success indicator](success-indicator.md), [Feedback description](feedback-description.md), [Information alert](info-alert.md)
- typography (`02-design-system/foundations/typography.md`), content (`02-design-system/foundations/content.md`)

## Open questions
- Whether `--aw-fs-2xl`/`--aw-lh-2xl` may be used outside this component is not specified.
- Maximum length and wrapping behaviour for longer headings are not specified.
