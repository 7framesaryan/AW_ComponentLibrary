# Device frame

`.aw-device` · layout-and-surfaces · status: **catalogued** · registry id `device`

The 402px phone-shaped web preview surface that clips a whole screen: scroll area, glass chrome and floating nav all live inside it.

## When to use
- As the outermost element of every mobile screen preview, directly inside `.aw-root`.
- As the positioning context for floating chrome (bottom nav, action bar, sheet scrim).

## When not to use
- Inside a screen, to frame a card or image → use [Image block](image-block.md) or a card component
- As the content container that holds margins → use [Screen](screen.md)
- For a full-bleed gradient background → use [Hero band](hero-band.md)

## Where it's used
- Home — `templates/home.template.html`
- Card detail — `templates/card-detail.template.html`
- Search results — `templates/search-results.template.html`
- Watchlist — `templates/watchlist.template.html`
- Portfolio — `templates/portfolio.template.html`
- Saved searches — `templates/saved-searches.template.html`

## Anatomy
```text
.aw-root
└── .aw-device                        402px frame, rounded, clips content
    ├── .scroll[.aw-hero-band]        template-local: fixed-height viewport (812px)
    │   └── .stage                    template-local: absolute scroller
    │       ├── glass top bar/header  sticky chrome (top-bar.md / header.md)
    │       └── .aw-screen            content with side margins (screen.md)
    └── .float-nav / .action-bar      floating chrome, outside the scroller
```

## Variants
| Class | Use |
|---|---|
| `.aw-device` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined. |

## Tokens
| Property | Token |
|---|---|
| Width | 402px, `max-width: 100%` (hard-coded) |
| Background | `--aw-bg` (#040501) |
| Corner radius | `--aw-radius-screen` (60px) |
| Border | 1px `--aw-zinc-800` (#27272a) |
| Overflow | hidden |
| Position | relative |

## Layout & grid
- 402px is the screen width the grid is computed on: 16px margins, 370px content, 2 columns = 181px.
- The frame has no padding. Side margins come from `.aw-screen` (or `.aw-grid`), never from the device.
- `position: relative` is already set, so absolute children (floating nav, action bar, scrim) anchor to the device. Templates repeat `style="position:relative"`; it is redundant.
- Height is not set by the component. Templates set it with a template-local `.scroll { height: 812px; overflow: hidden }`.
- See layout (`02-design-system/foundations/layout.md`) and grid (`02-design-system/foundations/grid.md`).

## Accessibility
- The device is a presentational wrapper; do not give it a role.
- Put landmarks inside it: `<header>` for chrome, `<main>` for the screen content, `<nav>` for the bottom nav.

## Do / Don't
- ✅ Wrap everything for one screen in a single `.aw-device` inside `.aw-root`.
- ✅ Place floating nav and action bars as direct children so they stay fixed while content scrolls.
- ❌ Don't add padding to the device; it would break glass chrome and full-bleed bands.
- ❌ Don't change the 402px width; the grid math depends on it.
- ❌ Don't nest one device inside another.

## Example
```html
<div class="aw-root">
  <div class="aw-device phone">
    <div class="scroll aw-hero-band">
      <div class="stage">
        <div class="pin-top aw-glass-header aw-top-bar">…</div>
        <div class="aw-screen">…</div>
      </div>
    </div>
    <div class="float-nav">
      <nav class="aw-glass-nav aw-bottom-nav" style="width:370px">…</nav>
    </div>
  </div>
</div>
```

## Related
- [Screen](screen.md) · [Hero band](hero-band.md) · [Glass top bar](top-bar.md) · [Bottom nav](bottom-nav.md) · [Bottom action bar](action-bar.md)
- layout (`02-design-system/foundations/layout.md`) · grid (`02-design-system/foundations/grid.md`) · radii (`02-design-system/foundations/radii.md`)

## Open questions
- Screen height is template-local (812px); the old Figma surface was 874px. No token exists.
- The `.scroll` / `.stage` scroller, `.pin-top` and `.float-nav` helpers are repeated in every template but are not registered components.
- Status bar and top / bottom safe-area insets inside the device: not specified.
- Width is a raw 402px, not a token.
