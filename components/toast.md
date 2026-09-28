# Toast

`.aw-toast` · overlays-and-feedback · status: **catalogued** · registry id `toast`

A short, temporary message that confirms what just happened, with an optional action (Undo) or close.

## When to use
- Confirming an action that has no screen of its own: "Search saved", "Search removed · Undo".

## When not to use
- Explaining something before the user acts → use [Information alert](info-alert.md)
- A first-visit introduction → use [Coach mark](coach-mark.md)
- Errors that block the task → keep them inline with the control

## Anatomy
```text
div.aw-toast[.aw-toast--primary]      pad 12, gap 16, radius 16
├── svg.aw-icon.aw-toast__icon        24, green
├── div.aw-toast__content
│   ├── p.aw-toast__title             14/20 medium
│   └── p.aw-toast__description       14/20 regular, secondary
├── button.aw-btn.aw-btn--sm.aw-toast__action   optional
└── button.aw-toast__close            16 circle, optional
```

## Variants
| Class | Use |
|---|---|
| `.aw-toast` | Default (content2 fill) |
| `.aw-toast--primary` | Success of an affirmative action (primary-50 fill) |

## States
| State | How to apply | What changes |
|---|---|---|
| Showing | render it above the bottom dock or nav | Enters with `--aw-dur-sheet-in` · `--aw-ease-out`; stays about 3s |
| Leaving | remove it | `--aw-dur-sheet-out` · `--aw-ease-in` |

## Tokens
| Property | Token |
|---|---|
| Radius | `--aw-toast-radius` (16) |
| Fill | `--aw-surface-raised` · primary `--aw-primary-50` |
| Title / description | `--aw-fs-sm` 14/20, `--aw-layout-foreground` / `--aw-text-secondary` |
| Icon · close | `--aw-toast-icon` (24) · `--aw-toast-close` (16), glyph `--aw-icon-xs` (12) |

## Accessibility
- `role="status"` so screen readers announce it without moving focus.

## Do / Don't
- ✅ Say exactly what happened, in sentence case: "Search saved".
- ❌ Don't use a toast to celebrate; no confetti, no green flood.

## Example
```html
<div class="aw-toast aw-toast--primary" role="status"><svg class="aw-icon aw-toast__icon"><use href="#aw-i-bookmark-filled"/></svg><div class="aw-toast__content"><p class="aw-toast__title">Search saved</p><p class="aw-toast__description">We’ll alert you when a new card matches.</p></div></div>
```

## Related
- [Button](button.md) · [Information alert](info-alert.md)

## Open questions
- The kit's Toast page is marked WIP. Re-verify when it is finalised.
