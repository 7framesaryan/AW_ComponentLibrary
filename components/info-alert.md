# Information alert

`.aw-info-alert` · overlays-and-feedback · status: **verified** · registry id `info-alert`

A raised inline panel with an info icon, a bold title and muted body text that explains something before the user acts.

## When to use
- Neutral, important context next to a decision, e.g. "Make payment on our website" before the free-trial CTA or inside the payment sheet.
- Static explanation that does not need a response.

## When not to use
- Nothing to show in a list → use [Empty state](empty.md)
- Confirming a finished task → use [Success indicator](success-indicator.md) and [Success heading](success-heading.md)
- A decision the user must make → use [Sheet](sheet.md)
- Ending-soon or unverified caution on a lot → use [Status chip](status-chip.md)

## Where it's used
- Web approach ("You're all set" screen, above the trial CTA) — `reproductions/web-approach/screen.html`
- Payment plan (same screen, and again inside the payment sheet under the plan options) — `reproductions/payment-plan/screen.html`

## Anatomy
```text
div.aw-info-alert                    row, top-aligned, gap 12px, 12px padding
├── img.aw-info-alert__icon          24px info icon, ../icons/images/info-circle.svg, alt=""
└── div.aw-info-alert__content       column, gap 2px, flex:1
    ├── h2|h3.aw-info-alert__title   bold title
    └── p.aw-info-alert__description body; keeps authored line breaks
```

## Variants
| Class | Use |
|---|---|
| `.aw-info-alert` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static; height follows content |

## Tokens
| Property | Token |
|---|---|
| Fill | `--aw-surface-raised` (#27272a) |
| Radius | `--aw-info-radius` (16px) |
| Padding | `--aw-space-block` (12px) |
| Icon-content gap | `--aw-space-block` (12px) |
| Icon size | `--aw-space-section-sm` (24px) |
| Title-body gap | `--aw-space-micro` (2px) |
| Title | `--aw-fs-sm`/`--aw-lh-sm` (14/20), `--aw-fw-bold`, `--aw-info-title-color` (#ecedee) |
| Body | `--aw-fs-xs`/`--aw-lh-xs` (12/16), `--aw-fw-regular`, `--aw-text-muted` (#a1a1aa) |
| Font | `--aw-font-sans` (Inter) |

## Layout & grid
- Full width of its content region. In the verified source the screen content has 24px side padding, so the alert is 354px wide (94px tall with the sample copy).
- Tested without overflow at 354px and 300px widths; height grows with content.
- In the payment sheet it sits `--aw-space-section` (16px) below the plan options.

## Accessibility
- The icon is an `<img>` with `alt=""` (decorative); the title carries the meaning.
- Use a heading level that fits the page outline (`h2` on the screen, `h3` inside the sheet).
- Static explanation uses a plain container. Add an ARIA live role only when the alert is injected at runtime.

## Do / Don't
- ✅ Keep the title a short statement and the body one or two sentences.
- ✅ Use the supplied info-circle SVG asset for the icon.
- ✅ Line breaks in the description are kept (`white-space: pre-line`); break lines on purpose or not at all.
- ❌ Don't recolour the panel green, amber or red to signal severity; no such variants exist.
- ❌ Don't put buttons inside the alert; the action sits after it.

## Example
```html
<div class="aw-info-alert" data-aw-component="info-alert" data-aw-variant="default">
<img class="aw-info-alert__icon" src="../icons/images/info-circle.svg" alt="">
<div class="aw-info-alert__content"><h2 class="aw-info-alert__title">Make payment on our website</h2>
<p class="aw-info-alert__description">Your payment is completed securely in your browser. You’ll come right back to the app.
No in-app charge.</p></div></div>
```

## Related
- [Success indicator](success-indicator.md), [Success heading](success-heading.md), [Feedback description](feedback-description.md), [Sheet](sheet.md), [Button](button.md)
- typography (`02-design-system/foundations/typography.md`), icons (`02-design-system/foundations/icons.md`)

## Open questions
- The icon is a standalone SVG asset, not a sprite icon; there is no `info` in the sprite. Should one be added?
- The verified screen uses 24px content padding, not the 16px grid margin. Is that an approved exception for the paywall flow?
- Warning or error variants are not specified.
