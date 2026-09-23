# Glass top bar

`.aw-top-bar` · navigation-and-chrome · status: **catalogued** · registry id `top-bar`

The translucent greeting bar at the top of Home: avatar, greeting and a cluster of icon actions floating over the scrolling content.

## When to use
- The top of Home and other dashboard-style top-level screens that greet the user.
- Always composed with the glass utility: `class="aw-glass-header aw-top-bar"`.

## When not to use
- Interior, list or detail screens with a back control and a title → use [Second-level header](header.md)
- Onboarding / auth screens that show the wordmark and language → use [Brand / language header](brand-language-header.md)
- Titling a content section inside the screen → use [Section header](section-header.md)

## Where it's used
- Home — `templates/home.template.html`
- Component gallery (specimen only) — `templates/gallery.template.html`

## Anatomy
```text
.aw-glass-header.aw-top-bar        glass row, 64px tall
├── .aw-avatar                     user avatar (see avatar.md)
├── .aw-top-bar__greeting          takes the free width; greeting text
│   ├── .aw-body-muted             salutation ("Good evening")
│   └── .aw-body-strong            user name
└── .aw-top-bar__actions           right cluster
    └── button.aw-btn-icon-ghost   × N (bell, scan)
```

## Variants
| Class | Use |
|---|---|
| `.aw-top-bar` | The only variant. Pair with `.aw-glass-header`. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | Static chrome. No states defined in CSS. |

## Tokens
| Property | Token |
|---|---|
| Height | 64px (hard-coded in CSS) |
| Side padding | `--aw-space-section` (16px) |
| Gap between avatar, greeting, actions | `--aw-space-block` (12px) |
| Gap between action buttons | `--aw-space-block` (12px) |
| Fill (from `.aw-glass-header`) | `--aw-surface-glass-bar` (#04050199) |
| Backdrop blur | `--aw-glass-blur-header` (16px) |
| Bottom border | `--aw-border-ghost` (#ffffff26) |

## Layout & grid
- Glass chrome is exempt from the column grid. The bar spans the full 402px screen width; its own 16px side padding lines the avatar and actions up with the 16px grid margin.
- Place it before `.aw-screen`, not inside it (`.aw-screen` adds side padding).
- The CSS sets no positioning. Home pins it with a template-local rule (`.pin-top { position: sticky; top: 0; z-index: 5 }`). Content scrolls behind it.
- Page content below should clear the bar; `--aw-inset-top-safe` (78px) is the status bar + header clearance token. See layout (`02-design-system/foundations/layout.md`).
- More composition detail: glass-top-bar pattern (`02-design-system/patterns/glass-top-bar.md`).

## Accessibility
- Icon-only action buttons need an `aria-label` ("Notifications", "Scan card"). The home template omits them; add them.
- Use `<header>` for the bar when it is the page banner.
- Keep text and icons at AA contrast against content scrolling underneath the glass.

## Do / Don't
- ✅ Always pair `.aw-top-bar` with `.aw-glass-header`; glass needs its translucent fill.
- ✅ Keep actions as ghost icon buttons from the sprite (`bell`, `scan`).
- ❌ Never give the bar a solid opaque background.
- ❌ Don't put a back control or a centred title here; that is the second-level header.
- ❌ Don't place a primary (green) button in the bar.

## Example
```html
<div class="pin-top aw-glass-header aw-top-bar">
  <div class="aw-avatar"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-user"/></svg></div>
  <div class="aw-top-bar__greeting"><div class="aw-body-muted">Good evening</div><div class="aw-body-strong">Aryan</div></div>
  <div class="aw-top-bar__actions">
    <button class="aw-btn-icon-ghost"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-bell"/></svg></button>
    <button class="aw-btn-icon-ghost"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-scan"/></svg></button>
  </div>
</div>
```

## Related
- [Avatar](avatar.md) · [Icon button](icon-button.md) · [Badge](badge.md) · [Second-level header](header.md) · [Bottom nav](bottom-nav.md)
- Glass top bar pattern (`02-design-system/patterns/glass-top-bar.md`) · effects (`02-design-system/foundations/effects.md`) · grid (`02-design-system/foundations/grid.md`)

## Open questions
- The old Figma pattern showed the greeting as one `pageTitle` line ("Hey, Marc") and a 24px action gap; the CSS and template use a two-line muted/strong greeting and a 12px gap. Which is canonical?
- Sticky positioning is template-local, not part of the component. Should `.aw-top-bar` own it?
- Height is a raw 64px, not a token.
- No token or rule for how a notification badge sits on the bell (see badge.md `.aw-badge-anchor`); not specified for this bar.
