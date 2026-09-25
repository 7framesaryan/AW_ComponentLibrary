# Bottom action bar

`.aw-action-bar` · navigation-and-chrome · status: **catalogued** · registry id `action-bar`

A glass strip pinned to the bottom of a detail or task screen that holds the screen's primary action.

## When to use
- Detail and task screens with one dominant action: Card detail ("Place Bid"), checkout, submit.
- It replaces the bottom nav on those screens.
- This is the one place the bid CTA is a **solid** primary button.

## When not to use
- Top-level tab screens → use [Bottom nav](bottom-nav.md)
- Actions inside a card → use [Button](button.md) (outline bid CTA)
- A multi-step choice or a form in an overlay → use [Sheet](sheet.md)

## Anatomy
```text
.aw-action-bar.aw-glass-sheet      glass strip, top hairline
└── button.aw-btn.aw-btn--primary.aw-btn--full   the single primary CTA
```

## Variants
| Class | Use |
|---|---|
| `.aw-action-bar` | The only variant. Pair with `.aw-glass-sheet`. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states on the bar. The button owns its states (disabled, active) — see button.md. |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-section` (16px) all sides |
| Top border | 1px `--aw-border-ghost` (#ffffff26) |
| Fill (from `.aw-glass-sheet`) | `--aw-surface-glass-bar-alt` (#00000033) |
| Backdrop blur | `--aw-glass-blur-sheet` (30px) |
| CTA fill | `--aw-positive` (#009350) via `.aw-btn--primary` |

## Layout & grid
- Glass chrome is exempt from the column grid; the bar spans the full 402px width.
- Its 16px padding puts the full-width button exactly on the 4-column span (370px).
- The CSS sets no positioning. Card detail pins it with a template-local `position:absolute; left:0; right:0; bottom:0` inside `.aw-device__screen`, outside the scroll area.
- Content must clear the bar (Card detail pads the scroll stage by 120px).
- See bottom-action-bar pattern (`02-design-system/patterns/bottom-action-bar.md`).

## Accessibility
- The primary button has a clear verb label with the amount ("Place Bid — $3,900"), never an icon alone.
- Any icon buttons added beside it need `aria-label`s and at least 44px targets.
- Keep the bar in reading order after the content.

## Do / Don't
- ✅ One solid primary per bar.
- ✅ Pair `.aw-action-bar` with `.aw-glass-sheet` so content reads through.
- ❌ Never show a bottom nav and an action bar on the same screen.
- ❌ Don't use two primary buttons or add the primary glow more than once per screen.
- ❌ Don't use a solid-green CTA for bidding anywhere else; elsewhere the bid CTA is outline.

## Example
Adapted from `card-detail.template.html`, which uses a template-local `.action-bar`; the registered class is `.aw-action-bar`.
```html
<div class="aw-action-bar aw-glass-sheet">
  <button class="aw-btn aw-btn--primary aw-btn--full">Place Bid — $3,900</button>
</div>
```

## Related
- [Button](button.md) · [Icon button](icon-button.md) · [Bottom nav](bottom-nav.md) · [Second-level header](header.md) · [Sheet](sheet.md)
- Bottom action bar pattern (`02-design-system/patterns/bottom-action-bar.md`) · effects (`02-design-system/foundations/effects.md`)

## Open questions
- The only sample (Card detail) does not use `.aw-action-bar`; should the template be migrated?
- The old Figma bar held the primary plus 44px heart and share icon buttons with a 12px gap; there is no `share` icon in the sprite and no layout for secondary buttons in CSS.
- Positioning and bottom safe-area inset are not part of the component.
- Content clearance token for the action bar: not specified (`--aw-inset-bottom-nav` is for the nav).
