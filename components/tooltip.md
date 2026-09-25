# Tooltip

`.aw-tooltip` · overlays-and-feedback · status: **verified** · registry id `tooltip`

A small green label that explains or confirms something about the element it points at, with an optional arrow on any edge.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, page **Tooltip**): the
finished component set **Tooltip** `2708:977`, its sizes from **tooltip-composition** `2708:607` and
its arrows from **tooltip-arrowPosition** `2784:3400` (12 positions). Every value below is measured
from those sets, and all 12 arrows were pixel-diffed against Figma's 2x export.

## When to use
- A short hint anchored to one control: "Tap to save", "PSA 10 only".
- Explaining an icon, abbreviation or value the screen can't spell out: "Ends in 2h 14m" over a compact timer.
- A one-time pointer during onboarding, dismissed on the next tap.

## When not to use
- A message about the whole screen or a result of an action → use [Information alert](info-alert.md)
- A list of choices under a control → use [Menu](menu.md)
- Anything the user must read to finish a task → put it on the screen as text

## Anatomy
```text
span.aw-tooltip[role=tooltip]   green pill: padding 4 12, radius 12, one line
└── ::after                     optional arrow: 10px square turned 45°, radius 2
```

## Variants

### Size
| Class | Label | Height |
|---|---|---|
| `.aw-tooltip--sm` | 12/16 regular | 24 |
| `.aw-tooltip` (md, default) | 14/20 regular | 28 |
| `.aw-tooltip--lg` | 16/24 regular | 32 |

### Arrow
The side is the edge that points at the target: `--arrow-top` when the tooltip sits below what it describes.

| Class | Arrow |
|---|---|
| `.aw-tooltip--arrow-top` · `--arrow-bottom` | on the top / bottom edge, centred; tip 6px outside |
| `.aw-tooltip--arrow-left` · `--arrow-right` | on the left / right edge, centred; tip 5px outside |
| add `.aw-tooltip--arrow-start` · `--arrow-end` | top/bottom: 18px from the left / right end. Left/right: 2px up / 1px down, as in Figma |

No arrow class = no arrow.

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | The set has one state. Show and hide the element; it has no hover or pressed look |

## Tokens
| Property | Token |
|---|---|
| Fill (pill and arrow) | `--aw-positive` (#009350, Figma `colors/base/primary`) |
| Label | `--aw-text-primary`, regular |
| Padding | `--aw-space-tight` 4 × `--aw-space-block` 12 |
| Radius | `--aw-tooltip-radius` 12 |
| Arrow | `--aw-tooltip-arrow` 10, radius `--aw-tooltip-arrow-radius` 2 |

## Layout & grid
- A tooltip floats over the layout; it doesn't take a grid column. Keep it inside the 16px screen margins.
- It's one line (`white-space: nowrap`). Keep the text short enough to fit in 370px.
- The component draws the tooltip; placing it beside its target is the screen's job (position it `absolute` relative to the target's wrapper).

## Accessibility
- Give it `role="tooltip"` and an `id`, and point the target at it with `aria-describedby`.
- It must not hold the only copy of something the user needs. Tooltips are easy to miss on touch screens.
- White on `--aw-positive` is 3.97:1. That's below WCAG AA for 12–16px regular text (4.5:1), the same pairing as the primary Button. Keep tooltip copy non-essential, and prefer md or lg over sm.

## Do / Don't
- ✅ One tooltip on screen at a time.
- ✅ Point the arrow at the target.
- ❌ Don't put links or buttons inside a tooltip.
- ❌ Don't add a drop shadow; elevation in this system is fill + hairline, never soft shadows.

## Example
```html
<button type="button" aria-describedby="tip-save">…</button>
<span class="aw-tooltip aw-tooltip--arrow-top" role="tooltip" id="tip-save">Tap to save</span>
```

## Related
- [Information alert](info-alert.md) · [Menu](menu.md)
- colour (`02-design-system/foundations/color.md`) · effects (`02-design-system/foundations/effects.md`)

## Open questions
- Not imported: the kit's radius axis (none · sm 8 · lg 14 · full); the finished Tooltip uses md 12 only.
- Not imported: the sets' soft drop shadows (blur 30 and 42). They break the Foundations rule (no soft shadows, blur never above 12) and don't show on the dark background.
- The set has no enter/exit motion; `02-design-system/foundations/motion/INDEX.md` has no tooltip animation, so it appears and disappears without one.
