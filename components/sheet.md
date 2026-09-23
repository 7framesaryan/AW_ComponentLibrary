# Sheet

`.aw-sheet` · overlays-and-feedback · status: **catalogued** · registry id `sheet`

A bottom sheet that rises over a scrim to hold a contained task: filters, or a payment / confirmation choice.

## When to use
- Filters for a result list (price range, grade, Reset / Show N results): default sheet with handle.
- Payment or confirmation steps, such as choosing a plan: `.aw-sheet--modal`.
- A short task the user completes or dismisses without leaving the current screen.

## When not to use
- A short list of actions from an overflow button → use [More menu](menu.md)
- A pinned primary CTA at the bottom of a screen → use [Bottom action bar](action-bar.md)
- Inline explanation that needs no decision → use [Information alert](info-alert.md)
- A centred confirm or destructive alert → see the Dialog pattern (`02-design-system/patterns/dialog.md`)

## Where it's used
- Search results filter sheet (default, with `.aw-glass-sheet`) — `templates/search-results.template.html`
- Payment plan sheet (paywall, `--modal`) — `reproductions/payment-plan/screen.html`

## Anatomy
```text
div|section.aw-sheet                   bottom-pinned panel, top corners rounded
├── div.aw-sheet__handle               36 x 4 grabber (default sheet)
├── h2.aw-sheet__title                 optional centred title (modal sheet)
├── [content]                          ranges, option rows, plan options, alerts
├── [actions]                          buttons
└── p.aw-sheet__footnote               optional centred muted note (modal sheet)
```
The scrim and bottom positioning are screen CSS, not part of the component.

## Variants
| Class | Use |
|---|---|
| `.aw-sheet` | Filter sheet: `--aw-surface-raised` fill, `--aw-border-ghost` top border, 12px top radius, 16px padding. |
| `.aw-sheet.aw-sheet--modal` | Payment / confirmation sheet: `--aw-sheet-modal-surface` near-black fill, no top border, 24px top radius. Provisional (screenshot reconstruction). |

## States
| State | How to apply | What changes |
|---|---|---|
| Closed | screen CSS, e.g. `transform: translateY(100%)`, `aria-hidden="true"` | Sheet off-screen; scrim opacity 0 |
| Open | screen CSS, e.g. `translateY(0)` | Enter `--aw-dur-sheet-in` (280ms) `--aw-ease-out`; scrim fades in |
| Closing | reverse | Exit `--aw-dur-sheet-out` (220ms) `--aw-ease-in` |
| Reduced motion | `prefers-reduced-motion: reduce` | Transitions removed; state changes instantly |

## Tokens
| Property | Token |
|---|---|
| Fill (default) | `--aw-surface-raised` (#27272a) |
| Top border (default) | 1px `--aw-border-ghost` (#ffffff26) |
| Top radius (default) | `--aw-radius-hero` (12px) |
| Padding (default) | `--aw-space-section` (16px) |
| Handle | 36 x 4, `--aw-zinc-600` (#52525b), `--aw-radius-pill`, bottom margin `--aw-space-section` |
| Fill (modal) | `--aw-sheet-modal-surface` (#0a0a0b, inferred) |
| Top radius (modal) | `--aw-radius-sheet` (24px, inferred) |
| Padding (modal) | `--aw-space-section-sm` (24px) sides and top, `--aw-space-header-pad` (20px) bottom |
| Title | `--aw-fs-lg`/`--aw-lh-lg` (18/28), `--aw-fw-bold`, `--aw-text-primary`, bottom margin 24px |
| Footnote | `--aw-fs-xs`/`--aw-lh-xs`, `--aw-text-muted`, top margin `--aw-space-block` |
| Glass (optional) | `.aw-glass-sheet`: `--aw-glass-blur-sheet` (30px) |
| Motion | `--aw-dur-sheet-in`, `--aw-dur-sheet-out`, `--aw-ease-out`, `--aw-ease-in` |

## Layout & grid
- The sheet is full-bleed (edge to edge of the 402px screen), pinned to the bottom; it sits outside the column grid.
- Content inside the default sheet uses the 16px padding, matching the grid margin. The modal sheet uses 24px.
- Add bottom safe-area space for the home indicator (the reproduction adds `--aw-space-section-md` bottom padding).
- Action rows: the filter sheet pairs outline Reset (`flex:1`) with primary Show results (`flex:2`).

## Accessibility
- Use `role="dialog"`, `aria-modal="true"` and `aria-labelledby` pointing at the title.
- Move focus into the sheet on open and back to the trigger on close; background is inert.
- Dismiss with scrim tap, Escape, or a close button (`#aw-i-close` ghost icon button in the filter sheet).
- Toggle `aria-hidden` with the open state.

## Do / Don't
- ✅ Use one primary button per sheet.
- ✅ Use the token durations and easings; honour reduced motion.
- ✅ Give the modal sheet a clear title ("Select a payment Plan").
- ❌ Don't use the near-black modal fill for filter sheets, or the grey filter fill for payment.
- ❌ Don't make a destructive sheet action red; red is for countdowns.
- ❌ Don't trigger real payment from a prototype CTA.

## Example
```html
<div class="aw-sheet aw-glass-sheet">
  <div class="aw-sheet__handle"></div>
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
    <span class="aw-section-title-lg">Filters</span>
    <button class="aw-btn-icon-ghost"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-close"/></svg></button>
  </div>
  <div class="aw-option-row"><span class="aw-option-row__label">Raw / ungraded</span><span class="aw-checkbox"></span></div>
  <div style="display:flex;gap:12px;margin-top:20px">
    <button class="aw-btn aw-btn--outline" style="flex:1">Reset</button>
    <button class="aw-btn aw-btn--primary" style="flex:2">Show 248 results</button>
  </div>
</div>
```

## Related
- [Range](range.md), [Filter option row](option-row.md), [Plan option](plan-option.md), [Information alert](info-alert.md), [Button](button.md), [Icon button](icon-button.md)
- Dialog (`02-design-system/patterns/dialog.md`), motion (`02-design-system/foundations/motion/INDEX.md`), effects (`02-design-system/foundations/effects.md`)

## Open questions
- No scrim token exists; the reproduction uses raw `#000000` at 0.6 opacity in screen CSS.
- `.aw-glass-sheet` (base.css) sets a translucent background, but `.aw-sheet` (`components/sheet.css`, loaded later) overrides it with `--aw-surface-raised`, leaving only the blur. Is a glass fill intended?
- Modal fill, radius and side padding are inferred (payment-plan gap P2).
- The modal sheet has no handle in the reproduction; is drag-to-dismiss supported?
- Old dialog pattern mentions a destructive red confirm, which conflicts with red = countdowns only.
- Maximum height and scrolling behaviour are not specified.
