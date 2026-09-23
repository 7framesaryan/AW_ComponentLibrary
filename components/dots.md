# Dots

`.aw-dots` · cards-and-content · status: **catalogued** · registry id `dots`

A centred row of small page indicators for an image carousel, where the current page is a wider white pill.

## When to use
- Under or on an image carousel to show how many images there are and which is showing.
- With an [Image block](image-block.md) that pages through several photos of one card.

## When not to use
- Switching between different cards → use [Fast switcher](fast-switcher.md)
- Switching between views (List / Chart) → use [Segmented](segmented.md)
- A count or alert marker → use [Badge](badge.md)

## Where it's used
- Gallery: three dots under the image block, first active. `templates/gallery.template.html`
- Not used in a sample screen yet.

## Anatomy
```text
.aw-dots              row, centred, gap --aw-space-tight
└── .aw-dot ×N        6×6 round dot; the current one has .is-active (16px wide)
```

## Variants
| Class | Use |
|---|---|
| `.aw-dots` | Container row |
| `.aw-dot` | One inactive page indicator |
| `.aw-dot.is-active` | The current page |

## States
| State | How to apply | What changes |
|---|---|---|
| Inactive | `.aw-dot` | 6×6, `--aw-border-strong` (#71717a) |
| Active | `.aw-dot.is-active` | 16px wide pill, `--aw-text-primary` (#ffffff) |
| Transition between pages | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Gap | `--aw-space-tight` |
| Dot size | 6×6, fixed in CSS (active width 16px) |
| Radius | `--aw-radius-pill` |
| Inactive fill | `--aw-border-strong` |
| Active fill | `--aw-text-primary` |

## Layout & grid
- Centre the row under or over its image; it follows component spacing, not the grid.
- Place it within the same container as the carousel it describes.

## Accessibility
- If dots are not interactive, hide them from assistive tech (`aria-hidden="true"`) and announce "Image 1 of 3" on the carousel.
- If dots are tappable, make each a `<button>` with `aria-label="Image 2 of 3"` and `aria-current="true"` on the active one; 6px dots need a larger hit area.

## Do / Don't
- ✅ Mark exactly one dot `.is-active`.
- ✅ Match the dot count to the number of images.
- ❌ Don't colour the active dot green; the CSS uses white.
- ❌ Don't use dots to switch between different cards.

## Example
```html
<div class="aw-dots"><span class="aw-dot is-active"></span><span class="aw-dot"></span><span class="aw-dot"></span></div>
```

## Related
- [Image block](image-block.md) · [Fast switcher](fast-switcher.md) · Card carousel (`02-design-system/patterns/card-carousel.md`)
- Motion (`02-design-system/foundations/motion/INDEX.md`)

## Open questions
- The old Figma dots used a 7×2 green active pill and 2×2 grey dots; CSS uses a 16×6 white active pill and 6×6 grey dots. CSS is followed here; confirm.
- No transition is defined for the active dot's width change.
- Whether dots are tappable is not specified.
