# Switch row

`.aw-switch-row` · inputs-and-controls · status: **catalogued** · registry id `switch-row`

A raised row with an optional icon, a label with a description line, and a [Switch](switch.md) on the right.

## When to use
- A setting inside a sheet or settings list that needs a sentence of context: "Alert me about new matches · Push notification".

## When not to use
- A bare toggle next to its label → use [Switch](switch.md) on its own
- Choosing one of several options → use [Segmented](segmented.md) or [Radio](radio.md)

## Anatomy
```text
label.aw-switch-row                    pad 12 16, radius 12, content2 fill
├── svg.aw-icon.aw-switch-row__icon    20, optional
├── span.aw-switch-row__text
│   ├── span.aw-switch-row__label      14/20 medium
│   └── span.aw-switch-row__description 12/16 muted
└── span.aw-switch                      the Switch (sm)
```

## Variants
| Class | Use |
|---|---|
| `.aw-switch-row` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| On / off | `.is-on` on the inner `.aw-switch` | See [Switch](switch.md) |
| Blocked by the OS | replace the description with "Notifications are off · Turn on in Settings" | The row stays; the link opens settings |

## Tokens
| Property | Token |
|---|---|
| Fill · radius | `--aw-surface-raised` · `--aw-rounded-medium` (12) |
| Padding | `--aw-space-block` 12 / `--aw-space-section` 16 |
| Label / description | `--aw-fs-sm` medium / `--aw-fs-xs` `--aw-text-muted` |

## Accessibility
- The whole row is the label; the inner switch carries `role="switch"` and `aria-checked`.

## Do / Don't
- ✅ Keep the label a short statement of what turns on.
- ❌ Don't put two switches in one row.

## Example
```html
<label class="aw-switch-row"><svg class="aw-icon aw-switch-row__icon"><use href="#aw-i-bell"/></svg><span class="aw-switch-row__text"><span class="aw-switch-row__label">Alert me about new matches</span><span class="aw-switch-row__description">Push notification</span></span><span class="aw-switch is-on" role="switch" aria-checked="true"><span class="aw-switch__track"><span class="aw-switch__thumb"></span></span></span></label>
```

## Related
- [Switch](switch.md) · [Sheet](sheet.md)

## Open questions
- Not in the Figma kit yet.
