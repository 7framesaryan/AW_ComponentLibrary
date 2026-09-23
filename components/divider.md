# Divider

`.aw-divider` · layout-and-surfaces · status: **catalogued** · registry id `divider`

A 1px horizontal rule that separates groups of content inside a card or between blocks.

## When to use
- Between the headline and the stats inside a summary card (portfolio value, current bid).
- Between two content groups that belong to the same section.

## When not to use
- A rule with text in the middle ("or") → use [Labeled divider](labeled-divider.md)
- Rows in a list that already draw their own bottom border → use [Detail row](detail-row.md) or [Option row](option-row.md)
- Starting a new titled section → use [Section header](section-header.md)

## Where it's used
- Home — `templates/home.template.html` (inside the portfolio summary, margin overridden to `2px 0`)
- Card detail — `templates/card-detail.template.html` (inside the current-bid summary, margin `2px 0`)

## Anatomy
```text
.aw-divider              1px rule, no border, vertical margin
```

## Variants
| Class | Use |
|---|---|
| `.aw-divider` | Default neutral rule. |
| `.aw-divider.aw-divider--primary` | Soft green rule. Usage not specified. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined. |

## Tokens
| Property | Token |
|---|---|
| Thickness | 1px height |
| Colour (default) | `--aw-border-subtle` (#27272a) |
| Colour (`--primary`) | `--aw-border-primary-soft` (#00935040) |
| Vertical margin | `--aw-space-section` (16px) top and bottom |
| Border | 0 (so it also resets an `<hr>`) |

## Layout & grid
- Spans the full width of its container: 370px (4 columns) when a direct child of `.aw-screen`, or the inner width of a card.
- Never extends into the 16px screen margin.
- Templates reduce the margin inline inside compact cards (`style="margin:2px 0"`); the card's own flex gap then provides spacing.

## Accessibility
- As a visual-only separator use `<div class="aw-divider" aria-hidden="true">`.
- If it marks a real thematic break, use `<hr class="aw-divider">` (the CSS already zeroes the border).

## Do / Don't
- ✅ Use the default neutral rule for structure.
- ✅ Let the container's gap control spacing when the divider sits in a flex column.
- ❌ Don't stack a divider under rows that already have a bottom border.
- ❌ Don't use the green variant to mean "gain" or "success"; green is for affirmative actions and states.
- ❌ Don't make it thicker or recolour it with raw hex.

## Example
```html
<div class="aw-divider" style="margin:2px 0"></div>
```

## Related
- [Labeled divider](labeled-divider.md) · [Portfolio summary](portfolio-summary.md) · [Detail row](detail-row.md) · [Section header](section-header.md)
- color (`02-design-system/foundations/color.md`) · spacing (`02-design-system/foundations/spacing.md`)

## Open questions
- When to use `.aw-divider--primary` (soft green) is not specified and it is not used in any sample.
- Both real usages override the 16px margin inline; should a compact variant or token exist?
