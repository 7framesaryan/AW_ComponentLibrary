# Switch

`.aw-switch` · inputs-and-controls · status: **catalogued** · registry id `switch`

A labelled on/off toggle whose track turns green when on.

> **Kit alignment (2026-09-28):** matches the AW Design System Switch (1818:363): sm 40×24 with a 16px thumb and 4px inset (was a 20px thumb), md 48×28 and lg 56×32 added, label 16/24 in default-600, disabled at 50% opacity.

## When to use
- A setting that takes effect immediately: alerts, notifications, auto-bid.
- Settings and More rows, filter toggles, notification preferences.

## When not to use
- Picking several items from a list → use [Checkbox](checkbox.md)
- Picking one of several options → use [Radio](radio.md) or [Segmented](segmented.md)
- Choosing a subscription plan → use [Plan option](plan-option.md)

## Anatomy
```text
label.aw-switch                  inline row, gap --aw-space-row
├── span.aw-switch__track        40 × 24 (sm) pill track, 4px padding
│   └── span.aw-switch__thumb    16 white knob, hairline shadow
└── span.aw-switch__label        16/24 label, optional
```

## Variants
| Class | Use |
|---|---|
| `.aw-switch` | Default, size sm (40 × 24, thumb 16) |
| `.aw-switch--md` | 48 × 28, thumb 20 |
| `.aw-switch--lg` | 56 × 32, thumb 24 |
| Inside [Switch row](switch-row.md) | A setting with a description line |

## States
| State | How to apply | What changes |
|---|---|---|
| Off | none | Track `--aw-surface-strong` (#3f3f46); thumb at left |
| On | add `.is-on` | Track `--aw-positive`; thumb moves to the right edge (inset 4) |
| Disabled | add `.is-disabled` | `--aw-opacity-disabled` (0.5) |

## Tokens
| Property | Token |
|---|---|
| Track · thumb (sm / md / lg) | `--aw-switch-w-*`, `--aw-switch-h-*`, `--aw-switch-thumb-*` |
| Inset · gap | `--aw-space-tight` (4) · `--aw-space-row` (8) |
| Track off / on | `--aw-surface-strong` / `--aw-positive` |
| Thumb | `--aw-white`, `--aw-shadow-hairline` |
| Label | `--aw-fs-base` 16/24, `--aw-text-secondary` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- The switch hugs its content; it is not sized to a column span.
- In a settings row, put the row on the full 4-column width and align the switch to the row's right edge.

## Accessibility
- The sample is a `<label>` with spans only. When interactive, use `role="switch"` with `aria-checked`, or back it with a real `<input type="checkbox">`, and keep `.is-on` in sync.
- It must be keyboard operable (Space toggles).
- The label text names the setting; state is not colour-only because the thumb position changes too.

## Do / Don't
- ✅ Use green only for the on state (green = affirmative).
- ✅ Keep a visible label next to every switch.
- ❌ Don't use a switch for an action that needs a confirm step; use a button.
- ❌ Don't recolour the on track amber or red.

## Example
```html
<label class="aw-switch js-switch is-on"><span class="aw-switch__track"><span class="aw-switch__thumb"></span></span><span class="aw-switch__label">Auto-bid</span></label>
```

## Related
- [Checkbox](checkbox.md), [Radio](radio.md), [Filter option row](option-row.md)
- motion (`02-design-system/foundations/motion/INDEX.md`), color (`02-design-system/foundations/color.md`)

## Open questions
- The kit's default (non-primary) colour turns the track grey (#a1a1aa) when on; not imported, green is the only on colour.

