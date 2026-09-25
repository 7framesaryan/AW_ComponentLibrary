# Second-level header

`.aw-header` · navigation-and-chrome · status: **catalogued** · registry id `header`

The glass header for interior screens: a back control, a centred title and an overflow or action control.

## When to use
- Detail screens (Card detail) and top-level tab screens that lead with a title instead of a greeting (Watchlist, Portfolio, Saved searches).
- Over a hero image or hero band, compose with `.aw-glass-header-alt`; over plain content, the templates use `.aw-glass-header`.

## When not to use
- The Home greeting bar → use [Glass top bar](top-bar.md)
- Auth / onboarding brand row → use [Brand / language header](brand-language-header.md)
- A title for a block of content inside the screen → use [Section header](section-header.md)

## Anatomy
```text
.aw-glass-header-alt.aw-header     glass row, 64px tall
├── button.aw-btn-icon-ghost       back (chevron-right rotated 180deg)
├── .aw-header__title              flex 1, centred; styled with .aw-section-title-lg
└── button.aw-btn-icon-ghost       overflow (more) or another action
```

## Variants
| Class | Use |
|---|---|
| `.aw-header` | The only variant. Pair with a glass utility (`.aw-glass-header-alt` or `.aw-glass-header`). |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | Static chrome. No states defined in CSS. |

## Tokens
| Property | Token |
|---|---|
| Height | 64px (hard-coded in CSS) |
| Side padding | `--aw-space-section` (16px) |
| Gap | `--aw-space-block` (12px) |
| Title type | `.aw-section-title-lg`: `--aw-fs-base`, `--aw-fw-semibold`, `--aw-text-secondary` |
| Fill with `.aw-glass-header-alt` | `--aw-surface-glass-bar-alt` (#00000033), blur `--aw-glass-blur-header` (16px), no border |
| Fill with `.aw-glass-header` | `--aw-surface-glass-bar` (#04050199), blur `--aw-glass-blur-header`, bottom border `--aw-border-ghost` |

## Layout & grid
- Glass chrome is exempt from the column grid. It spans the full 402px width; its 16px padding aligns the controls with the grid margin.
- Place it before `.aw-screen`, not inside it. Templates pin it with a template-local `position: sticky; top: 0`.
- Keep the left and right controls the same width so the title stays optically centred.
- See layout (`02-design-system/foundations/layout.md`) for the top clearance token `--aw-inset-top-safe` (78px).

## Accessibility
- Give the back button `aria-label="Back"` and the overflow button `aria-label="More options"` with `aria-haspopup="menu"` and `aria-expanded`. The templates omit these; add them.
- Mark up the title as the page heading (`<h1>`) when it names the screen.
- Keep AA contrast against content scrolling beneath the glass.

## Do / Don't
- ✅ Use `.aw-glass-header-alt` when the header sits over a hero image.
- ✅ Use the sprite `chevron-right` rotated 180deg for back; there is no left-chevron icon.
- ❌ Never use a solid opaque header or drop the glass utility.
- ❌ Don't add a greeting or avatar; that is the top bar.
- ❌ Don't hand-set font properties on the title; use the type class.

## Example
```html
<div class="pin-top aw-glass-header-alt aw-header">
  <button class="aw-btn-icon-ghost" style="transform:rotate(180deg)"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-chevron-right"/></svg></button>
  <span class="aw-header__title aw-section-title-lg">Card detail</span>
  <button class="aw-btn-icon-ghost"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-more"/></svg></button>
</div>
```

## Related
- [Icon button](icon-button.md) · [More-menu](menu.md) · [Glass top bar](top-bar.md) · [Hero band](hero-band.md) · [Bottom action bar](action-bar.md)
- Glass top bar pattern (`02-design-system/patterns/glass-top-bar.md`) · effects (`02-design-system/foundations/effects.md`)

## Open questions
- `reference/components.md` pairs the header with `.aw-glass-header-alt`, but three templates use `.aw-glass-header`. Which glass goes with which context?
- Saved searches left-aligns the title with inline styles and has no back button. Is a left-aligned title a sanctioned variant?
- The old Figma header had an `App` / `Mobile link` variant pair (link adds a brand strip) and a 114px status-bar block; neither exists in CSS.
- The old spec had 32px green-tinted action tiles (`--aw-accent-soft-fill`) for share / watchlist; the template uses ghost buttons. Not specified which is current.
- Height is a raw 64px, not a token.
