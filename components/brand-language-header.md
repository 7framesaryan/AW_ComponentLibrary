# Brand / language header

`.aw-brand-language-header` · navigation-and-chrome · status: **verified** · registry id `brand-language-header`

A 32px row with the AuctionWire wordmark in the centre and a flag + language label on each side, used at the top of onboarding and account-confirmation screens.

## When to use
- Pre-app flows (account created, payment handoff) where the brand and language are shown instead of app navigation.

## When not to use
- The Home greeting bar → use [Glass top bar](top-bar.md)
- Interior screens with back and title → use [Second-level header](header.md)
- Titling a content block → use [Section header](section-header.md)

## Where it's used
- Web approach ("You're all set") — `reproductions/web-approach/screen.html`
- Payment plan (backdrop screen) — `reproductions/payment-plan/screen.html`

## Anatomy
```text
header.aw-brand-language-header          row, space-between, 32px tall
├── .aw-brand-language-header__language  flag + language text
│   ├── .aw-brand-language-header__flag  20px box
│   │   └── img                          icons/images/language-uk.svg
│   └── span                             "EN"
├── .aw-brand-language-header__wordmark  127 × 32 box
│   └── img                              assets/auctionwire-wordmark.svg
└── .aw-brand-language-header__language  second flag + language group
```

## Variants
| Class | Use |
|---|---|
| `.aw-brand-language-header` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | Fully opaque, static. No states defined. |

## Tokens
| Property | Token |
|---|---|
| Row height | `--aw-brand-logo-height` (32px) |
| Wordmark box | `--aw-brand-logo-width` (127px) × `--aw-brand-logo-height` |
| Wordmark ink bounds | `--aw-brand-ink-width`, `--aw-brand-ink-height`, `--aw-brand-ink-left`, `--aw-brand-ink-top` |
| Flag box | `--aw-language-flag-size` (20px) |
| Flag render | `--aw-language-flag-render-size` (22px) at `--aw-language-flag-render-offset` (-1px) |
| Language gap | `--aw-space-row` (8px) |
| Language text | `--aw-font-language` (Roboto), `--aw-fs-sm` / `--aw-lh-sm` (14/20), `--aw-fw-regular`, `--aw-text-high-alt` |

## Layout & grid
- Content-width row: in both reproductions it spans the screen content width with space-between.
- Those reproductions pad `.screen-content` by `--aw-space-section-sm` (24px) per side, set in the reproduction's own `screen.css`, not the 16px grid margin.
- Include `src/fonts.css` so Roboto 400 is available.
- Over supplied artwork, the reproductions use `.aw-root.aw-root--transparent`.

## Accessibility
- Use a `<header>` element.
- Wordmark `img` has `alt="AuctionWire"`; flag `img` has a country name (`alt="United Kingdom"`).
- If the language group is a control that changes language, make it a `<button>` with an accessible name; in the reproductions it is static text.

## Do / Don't
- ✅ Use the original SVG assets for the wordmark and flag; keep the language label as HTML text.
- ✅ Keep the component opaque; the 1% opacity in the web-approach source (`.brand-row { opacity: 0.01 }`) belongs to that screen only.
- ❌ Don't redraw the wordmark in text or resize its ink bounds.
- ❌ Don't use Inter for the language label.
- ❌ Don't add back buttons or actions to this row.

## Example
```html
<header class="aw-brand-language-header">
<span class="aw-brand-language-header__language"><span class="aw-brand-language-header__flag"><img src="../icons/images/language-uk.svg" alt="United Kingdom"></span><span>EN</span></span>
<span class="aw-brand-language-header__wordmark"><img src="../../assets/auctionwire-wordmark.svg" alt="AuctionWire"></span>
<span class="aw-brand-language-header__language"><span class="aw-brand-language-header__flag"><img src="../icons/images/language-uk.svg" alt="United Kingdom"></span><span>EN</span></span>
</header>
```

## Related
- [Success indicator](success-indicator.md) · [Success heading](success-heading.md) · [Feedback description](feedback-description.md) · [Info alert](info-alert.md)
- typography (`02-design-system/foundations/typography.md`) · grid (`02-design-system/foundations/grid.md`)
- Evidence: `reproductions/web-approach/qa.md`

## Open questions
- Why does the source show a language group on both sides, and is the right-hand group intended? The reference makes no assumption.
- Whether the near-invisible (1%) brand row in the source is intentional is unknown.
- The reproductions use 24px side padding, not the mandatory 16px grid margin. Which applies to onboarding screens?
- Whether the language group is interactive (a picker) is not specified.
