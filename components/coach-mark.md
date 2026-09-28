# Coach mark

`.aw-coach-mark` · overlays-and-feedback · status: **catalogued** · registry id `coach-mark`

A green, multi-line tooltip that introduces a feature the first time someone meets it: a title, a
"New" chip, a close control and one or two lines of body copy, with an arrow pointing at the control
it explains.

## When to use
- A first-visit introduction to one control, e.g. the save-search bookmark on search results.
- Once per user per feature. After it is closed or the feature is used, never show it again.

## When not to use
- A one-line label or confirmation → use [Tooltip](tooltip.md)
- A prompt triggered by behaviour, docked above content → use [Information alert](info-alert.md) `--primary --inline`
- A result message after an action → use [Toast](toast.md)

## Anatomy
```text
div.aw-coach-mark.aw-coach-mark--arrow-top-end   296 wide, green, radius 12, 10px arrow
├── div.aw-coach-mark__head                      title · New chip · close
│   ├── p.aw-coach-mark__title                   16/24 semibold
│   ├── span.aw-chip.aw-chip--sm                 "New" (Chip solid, sm)
│   └── button.aw-coach-mark__close              20px, close icon 16
└── p.aw-coach-mark__body                        14/20 regular; <b> for the personalised name
```
Add `.aw-coach-mark__target` to the control it points at: the control grows 8px from its centre,
turns green and its icon dangles until the coach mark closes.

## Variants
| Class | Use |
|---|---|
| `.aw-coach-mark--arrow-top-end` | Below a control at the right edge (header bookmark) |
| `.aw-coach-mark--arrow-top-start` | Below a control at the left edge |
| `.aw-coach-mark--arrow-bottom-end` | Above a control at the right edge |

## States
| State | How to apply | What changes |
|---|---|---|
| Open | render it; add `.aw-coach-mark__target` to the anchor | Anchor scales 1.2×, turns `--aw-text-accent`, icon dangles |
| Closed | remove the coach mark and `.aw-coach-mark__target` | Anchor eases back in `--aw-dur-sheet-out` with `--aw-ease-out`; no delay |

## Tokens
| Property | Token |
|---|---|
| Width | `--aw-coach-mark-w` (296px) |
| Fill / text | `--aw-positive` / `--aw-text-primary` |
| Radius · arrow | `--aw-tooltip-radius` (12) · `--aw-tooltip-arrow` (10), `--aw-tooltip-arrow-radius` (2) |
| Padding | `--aw-space-block` (12), left `--aw-space-section` (16) |
| Shadow | `--aw-shadow-primary-glow` |
| Motion | `02-design-system/foundations/motion/coach-mark-cue.md` |

## Accessibility
- `role="dialog"` with `aria-labelledby` on the title; the close control needs `aria-label="Dismiss"`.
- Don't move focus into it on page load; it must not trap focus.

## Do / Don't
- ✅ Personalise the body with real signals (name, how often they searched, active filters). With no history, drop the count.
- ❌ Don't stack it with another prompt: at most one first-visit prompt on screen.

## Example
```html
<div class="aw-coach-mark aw-coach-mark--arrow-top-end" role="dialog" aria-labelledby="cm-title">
  <div class="aw-coach-mark__head"><p class="aw-coach-mark__title" id="cm-title">Save This Search</p><span class="aw-chip aw-chip--sm">New</span><button class="aw-coach-mark__close" aria-label="Dismiss"><svg class="aw-icon"><use href="#aw-i-close"/></svg></button></div>
  <p class="aw-coach-mark__body"><b>Marc</b>, you’ve searched Mickey Mantle 3 times this month. Save it and we’ll alert you when a new PSA 6+ under $5k is listed.</p>
</div>
```

## Related
- [Tooltip](tooltip.md) · [Chip](chip.md) · [Information alert](info-alert.md)

## Open questions
- Not in the AW Design System Figma kit yet (the kit Tooltip is single-line). Add a "Coach mark" set there so the two stay in step.
