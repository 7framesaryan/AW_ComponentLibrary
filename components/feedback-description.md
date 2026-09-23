# Feedback description

`.aw-feedback-description` · overlays-and-feedback · status: **verified** · registry id `feedback-description`

Centred 14px muted supporting copy that explains a success or feedback heading.

## When to use
- One short line under a [Success heading](success-heading.md), e.g. "Your account created successfully."
- Supporting text on a centred feedback screen.

## When not to use
- Body text inside an alert → use `.aw-info-alert__description` in [Information alert](info-alert.md)
- Guidance in a no-results state → use `.aw-empty__body` in [Empty state](empty.md)
- A note under a sheet's actions → use `.aw-sheet__footnote` in [Sheet](sheet.md)
- Form helper or error text → use `.aw-field__hint` in [Field](field.md)

## Where it's used
- Web approach ("You're all set") — `reproductions/web-approach/screen.html`
- Payment plan (same success screen, behind the sheet) — `reproductions/payment-plan/screen.html`

## Anatomy
```text
p.aw-feedback-description      centred paragraph, no margins; text supplied by the screen
```

## Variants
| Class | Use |
|---|---|
| `.aw-feedback-description` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static |

## Tokens
| Property | Token |
|---|---|
| Size / line-height | `--aw-fs-sm` (14px) / `--aw-lh-sm` (20px) |
| Weight | `--aw-fw-regular` |
| Font | `--aw-font-sans` (Inter) |
| Colour | `--aw-text-muted` (#a1a1aa) |
| Alignment | centre |

## Layout & grid
- Width follows the containing region; it sits `--aw-space-row` (8px) below the success heading in the verified screen.
- No content is baked into CSS; the screen supplies the text.

## Accessibility
- Use a `<p>`; it is read after the heading in document order.
- Keep contrast: muted text on `--aw-bg` only, not on raised or tinted fills.

## Do / Don't
- ✅ Keep it to one or two short sentences.
- ✅ Place it directly after the success heading.
- ❌ Don't put links or actions in it; use a button below.
- ❌ Don't restyle it to left-aligned body copy; it is for centred feedback only.

## Example
```html
<p class="aw-feedback-description" data-aw-component="feedback-description" data-aw-variant="default">Your account created successfully.</p>
```

## Related
- [Success heading](success-heading.md), [Success indicator](success-indicator.md), [Information alert](info-alert.md)
- typography (`02-design-system/foundations/typography.md`), content (`02-design-system/foundations/content.md`)

## Open questions
- Product context gives benefit-led copy for this screen ("Start your free trial to unlock live bidding…"); the verified source shows "Your account created successfully." Which copy is current?
