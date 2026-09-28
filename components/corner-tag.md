# Corner tag

`.aw-corner-tag` · chips-and-badges · status: **catalogued** · registry id `corner-tag`

A tiny uppercase label pinned to the corner of a card image: NEW, ENDING, or a countdown.

## When to use
- Marking a listing inside a saved search: NEW (listed since the last visit) or ENDING (ends within 24 hours).
- A countdown on the image ("2 days left"), which is the one place red belongs.

## When not to use
- A count on an icon → use [Badge](badge.md)
- A fact about the card (grade, house) → use [Chip](chip.md)

## Anatomy
```text
span.aw-corner-tag     absolute, 8 from the top-left of a position:relative media box; 16 tall, radius 4, 10/16 bold caps
```

## Variants
| Class | Use |
|---|---|
| `.aw-corner-tag` | NEW (green) |
| `.aw-corner-tag--warning` | ENDING (amber, dark text) |
| `.aw-corner-tag--danger` | Countdown (red) |
| `.aw-corner-tag--bottom` | Pin to the bottom-left instead of the top |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Not interactive |

## Tokens
| Property | Token |
|---|---|
| Height | `--aw-corner-tag-h` (16) |
| Radius · padding | `--aw-radius-sm` (4) · `--aw-space-tight` (4) |
| Type | `--aw-fs-caption` 10/16, `--aw-fw-bold`, 0.06em caps |
| Colours | `--aw-positive` · `--aw-caution` + `--aw-badge-text` · `--aw-urgency` |

## Accessibility
- The word is the meaning; colour is never the only signal.

## Do / Don't
- ✅ One tag per corner.
- ❌ Don't use red for anything but time.

## Example
```html
<div class="aw-list-row__media"><img class="aw-list-row__thumb" src="…" alt=""><span class="aw-corner-tag">New</span></div>
```

## Related
- [List-result row](list-row.md) · [Badge](badge.md) · [Chip](chip.md)

## Open questions
- Not in the Figma kit; the kit Chip/Badge have no warning colour. Add both there.
