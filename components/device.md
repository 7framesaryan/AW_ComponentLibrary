# Device frame

`.aw-device` · layout-and-surfaces · status: **catalogued** · registry id `device`

The fixed iPhone 17 mockup every design renders inside: Figma's own render of the phone, its background and status bar, 438 × 905 with a 402 × 874 screen, the same size on every display.

## When to use
- Around every mobile screen design, directly inside `.aw-root`. The starter (`02-design-system/templates/_starter.template.html`) already has it; keep it and put the screen inside `.aw-device__screen`.
- As the positioning context for floating chrome (bottom nav, action bar, sheet scrim): they go inside `.aw-device__screen`.

## When not to use
- Inside a screen, to frame a card or image → use [Image block](image-block.md) or a card component
- As the content container that holds margins → use [Screen](screen.md)
- For a full-bleed gradient background → use [Hero band](hero-band.md)

## Anatomy
```text
.aw-root
└── .aw-device                        the phone: 438 × 905, --aw-device-frame (phone + background image)
    ├── .aw-device__screen            the screen: 402 × 874 at (18, 16), transparent, clips to the screen curve
    │   ├── .scroll                   template-local: fills the screen
    │   │   └── .stage                template-local: absolute scroller
    │   │       ├── glass top bar/header  sticky chrome, padded by --aw-inset-status-bar
    │   │       └── main > .aw-grid       content on the grid, straight on the background
    │   └── .float-nav / .action-bar  floating chrome, outside the scroller
    └── ::after                       status bar, dynamic island, home indicator (always on top)
```

## Variants
| Class | Use |
|---|---|
| `.aw-device` | The only variant: iPhone 17, Cosmic Orange, with the sports-card background (AW Mobile V3 Figma `B7mJJRaFlVAfLKPTjz48aK`, frame "Web Approach", node `15531:150179`). |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined. |

## Tokens
| Property | Token |
|---|---|
| Phone size | `--aw-device-width` 438 × `--aw-device-height` 905 |
| Screen size | `--aw-screen-width` 402 × `--aw-screen-height` 874 |
| Status bar clearance | `--aw-inset-status-bar` (62px) |
| Home indicator zone | `--aw-inset-home-indicator` (34px) |
| Screen background | none: the Figma background in `--aw-device-frame` shows through |
| Artwork | `--aw-device-frame` (behind the design), `--aw-device-chrome` (on top), Foundations `src/assets.css` |

## Layout & grid
- **The size never changes.** No `max-width`, no percentages, no scaling: the phone is 438 × 905 and the screen 402 × 874 on a laptop, a retina display, a narrow window or a phone. A window smaller than the phone scrolls; it never shrinks or reflows the design.
- Screens set `<meta name="viewport" content="width=470">` (phone + 16px each side). Phones then show the whole mockup at the same layout, instead of each device picking its own width.
- The artwork is Figma's own 2x render of the frame, not a redraw: it matches Figma pixel for pixel (checked with a pixel diff against Figma's 2x export). It was exported once, lives in Foundations `src/assets.css` (originals: `02-design-system/assets/device/`), and nothing regenerates it. Screens don't rebuild the device, they render inside it.
- The screen is transparent, so the Figma background (dark sports-card collage) is what a design sits on. Put content straight on it with `.aw-grid`; wrap in `.aw-screen` or `.aw-hero-band` only when the screen needs its own solid background.
- 402px is the screen width the grid is computed on: 16px margins, 370px content, 2 columns = 181px.
- The screen has no padding. Side margins come from `.aw-screen` (or `.aw-grid`), never from the device.
- The top 62px of the screen is under the status bar and dynamic island: sticky chrome adds `padding-top: var(--aw-inset-status-bar)` so its glass runs up under it. Keep content out of the bottom 34px (home indicator); the floating nav sits at `bottom: 20px`, above the indicator.
- Height is set by the component. Templates make `.scroll` fill the screen (`position:absolute; inset:0`).
- See layout (`02-design-system/foundations/layout.md`) and grid (`02-design-system/foundations/grid.md`).

## Accessibility
- The device is a presentational wrapper; do not give it a role. The status bar artwork is a background image and is not read out.
- Put landmarks inside the screen: `<header>` for chrome, `<main>` for the screen content, `<nav>` for the bottom nav.

## Do / Don't
- ✅ Wrap everything for one screen in `.aw-device > .aw-device__screen` inside `.aw-root`.
- ✅ Place floating nav and action bars as direct children of `.aw-device__screen` so they stay fixed while content scrolls.
- ❌ Don't resize, scale or restyle the device, and don't add `max-width` or `transform` to it or its parents; that is what made output differ between machines.
- ❌ Don't put content directly in `.aw-device`; it goes in `.aw-device__screen`.
- ❌ Don't draw your own status bar, home indicator or phone background; the device already shows them.
- ❌ Don't redraw or re-export the artwork in CSS or SVG: browsers draw Figma's effects differently, so only Figma's own render is pixel-perfect.
- ❌ Don't nest one device inside another.

## Example
```html
<div class="aw-root">
  <div class="aw-device">
    <div class="aw-device__screen">
      <div class="scroll">
        <div class="stage">
          <div class="pin-top aw-glass-header aw-top-bar">…</div>
          <main><div class="aw-grid">…</div></main>
        </div>
      </div>
      <div class="float-nav">
        <nav class="aw-glass-nav aw-bottom-nav" style="width:370px">…</nav>
      </div>
    </div>
  </div>
</div>
```

## Related
- [Screen](screen.md) · [Hero band](hero-band.md) · [Glass top bar](top-bar.md) · [Bottom nav](bottom-nav.md) · [Bottom action bar](action-bar.md)
- layout (`02-design-system/foundations/layout.md`) · grid (`02-design-system/foundations/grid.md`)

## Open questions
- The `.scroll` / `.stage` scroller, `.pin-top` and `.float-nav` helpers are repeated in every template but are not registered components.
- The status bar is always the light 9:41 variant; a dark-content status bar isn't specified.
- The artwork is a 2x render: exact on 2x (Retina) displays, very slightly soft on 3x phones.
- Screens made before 2026-09-24 (the two `search-results-mickey` templates) use the old 402px frame and are left as they are.
