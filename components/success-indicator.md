# Success indicator

`.aw-success-indicator` · overlays-and-feedback · status: **verified** · registry id `success-indicator`

A 54px green-tinted circle with a check glyph that marks a completed step.

## When to use
- The top of a confirmation screen after a task succeeds, e.g. "You're all set" after account creation.
- Paired with a [Success heading](success-heading.md) and [Feedback description](feedback-description.md).

## When not to use
- Inline explanation before an action → use [Information alert](info-alert.md)
- A selected checkbox state → use [Checkbox](checkbox.md)
- A count or "NEW" marker → use [Badge](badge.md)
- No results → use [Empty state](empty.md)

## Anatomy
```text
div.aw-success-indicator              54 x 54 round tile, centred content, aria-hidden
└── span.aw-success-indicator__glyph  "✓" text glyph, Inter Bold 22px
```

## Variants
| Class | Use |
|---|---|
| `.aw-success-indicator` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static |

## Tokens
| Property | Token |
|---|---|
| Size | `--aw-success-size` (54px) |
| Fill | `--aw-success-surface` (#0f2a1e) |
| Glyph colour | `--aw-success-icon-color` (#4ade80) |
| Glyph size / line-height | `--aw-success-icon-size` (22px) / `--aw-success-icon-line` (27px) |
| Glyph weight / font | `--aw-fw-bold` / `--aw-font-sans` |
| Radius | `--aw-radius-pill` |

## Layout & grid
- Centred horizontally above the heading. In the verified screen it sits in a centred column (`gap: --aw-space-block`, 12px) that starts `--aw-space-section-md` (32px) below the brand header.
- Fixed size; `flex: none`, never stretched.
- Position comes from the page layout, not the component.

## Accessibility
- Mark it `aria-hidden="true"`; the heading next to it carries the message.
- Do not rely on the check alone to say something succeeded.

## Do / Don't
- ✅ Always pair it with a success heading that states what happened.
- ✅ Use the `✓` text glyph as in the source.
- ❌ Don't swap its component-owned green (#4ade80) for `--aw-positive`, or reuse its tokens elsewhere.
- ❌ Don't use more than one per screen.
- ❌ Don't animate it in by default; it is static.

## Example
```html
<div class="aw-success-indicator" data-aw-component="success-indicator" data-aw-variant="default" aria-hidden="true"><span class="aw-success-indicator__glyph">✓</span></div>
```

## Related
- [Success heading](success-heading.md), [Feedback description](feedback-description.md), [Information alert](info-alert.md), [Button](button.md)
- color (`02-design-system/foundations/color.md`)

## Open questions
- `--aw-success-icon-color` (#4ade80) is a second green outside the fixed `--aw-positive`; confirm it stays component-owned.
- Product context mentions a star-to-check flip and confetti on this screen; the verified component is static. Motion is not specified.
