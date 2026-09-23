# Switch

`.aw-switch` · inputs-and-controls · status: **catalogued** · registry id `switch`

A labelled on/off toggle whose track turns green when on.

## When to use
- A setting that takes effect immediately: alerts, notifications, auto-bid.
- Settings and More rows, filter toggles, notification preferences.

## When not to use
- Picking several items from a list → use [Checkbox](checkbox.md)
- Picking one of several options → use [Radio](radio.md) or [Segmented](segmented.md)
- Choosing a subscription plan → use [Plan option](plan-option.md)

## Where it's used
- Gallery (off "Alerts", on "Auto-bid") — `templates/gallery.template.html`
- Not used in a sample screen yet.

## Anatomy
```text
label.aw-switch                  inline row, gap --aw-space-row
├── span.aw-switch__track        40 x 24 pill track
│   └── span.aw-switch__thumb    20 x 20 white knob, 2px inset
└── span.aw-switch__label        label text
```

## Variants
| Class | Use |
|---|---|
| `.aw-switch` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Off | none | Track `--aw-surface-strong` (#3f3f46); thumb at left |
| On | add `.is-on` to `.aw-switch` | Track `--aw-positive` (#009350); thumb slides 16px right |
| Disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Track-label gap | `--aw-space-row` (8px) |
| Track radius / thumb radius | `--aw-radius-pill` |
| Track off | `--aw-surface-strong` (#3f3f46) |
| Track on | `--aw-positive` (#009350) |
| Thumb | `--aw-zinc-50` (#fafafa) |
| Label | `--aw-fs-xs` (12px), `--aw-text-primary` |
| Motion | `--aw-dur-fast` (120ms), `--aw-ease-out` on track colour and thumb transform |

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
- Disabled state is not specified.
- The old Figma guide listed the label as Regular 12/16; CSS sets only size and colour (no weight or line-height). Confirm.
- No settings screen template exists to show switch rows in context.
- Label before or after the track: only after is shown.
