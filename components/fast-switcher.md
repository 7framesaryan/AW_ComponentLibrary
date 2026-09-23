# Fast switcher

`.aw-fast-switcher` · cards-and-content · status: **catalogued** · registry id `fast-switcher`

A centred strip of circular card thumbnails where the focal one is larger, fully opaque and ringed green, for jumping between nearby cards without leaving the screen.

## When to use
- On a card view where the user flicks between related cards (for example cards in the same set or search) and the current card is the focal thumbnail.

## When not to use
- Paging through photos of the same card → use [Dots](dots.md)
- A horizontal row of full listings → use [Listing card](listing-card.md) in a Card carousel (`02-design-system/patterns/card-carousel.md`)
- A person image → use [Avatar](avatar.md)
- Switching views → use [Segmented](segmented.md)

## Where it's used
- Gallery: five empty thumbnails, the middle one focal. `templates/gallery.template.html`
- Not used in a sample screen yet.

## Anatomy
```text
.aw-fast-switcher                       row, centred, gap --aw-space-block
└── .aw-fast-switcher__thumb ×N         40×40 circle, 60% opacity, clips content
    └── .aw-fast-switcher__thumb.is-focal   64×64, full opacity, green ring
```

## Variants
| Class | Use |
|---|---|
| `.aw-fast-switcher` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Other card | `.aw-fast-switcher__thumb` | 40×40, opacity 0.6, border `--aw-border-hairline` |
| Focal (current) | `.is-focal` on one thumb | 64×64, opacity 1, border `--aw-border-primary` (#009350) |
| Change | move `.is-focal` | Opacity transitions over `--aw-dur-fast` `--aw-ease-out` |
| Near / far intermediate sizes | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Gap | `--aw-space-block` |
| Thumb size | 40×40, focal 64×64, fixed in CSS |
| Radius | `--aw-radius-pill` |
| Fill | `--aw-surface-raised` |
| Border | 1px `--aw-border-hairline`; focal `--aw-border-primary` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` (transform, opacity) |

## Layout & grid
- The strip spans the content width (4-column span) and centres its thumbnails. Thumbnails follow component spacing, not the grid.

## Accessibility
- Treat the strip as a single-select list: each thumb is a `<button>` labelled with the card title; the focal one has `aria-current="true"` or `aria-selected="true"`.
- Size and colour are not enough; expose the focal card's name to assistive tech.
- 40px thumbs are just under the 44px touch target; keep the gap.

## Do / Don't
- ✅ Keep exactly one `.is-focal` thumbnail, in the centre.
- ✅ Fill thumbs with real card photos.
- ❌ Don't hardcode other thumb sizes; only the two CSS sizes exist.
- ❌ Don't use off-palette placeholder fills; the empty fill is `--aw-surface-raised`.

## Example
```html
<div class="aw-fast-switcher">
  <div class="aw-fast-switcher__thumb"></div>
  <div class="aw-fast-switcher__thumb"></div>
  <div class="aw-fast-switcher__thumb is-focal"></div>
  <div class="aw-fast-switcher__thumb"></div>
  <div class="aw-fast-switcher__thumb"></div>
</div>
```

## Related
- [Dots](dots.md) · [Image block](image-block.md) · [Avatar](avatar.md)
- Motion (`02-design-system/foundations/motion/INDEX.md`) · Color (`02-design-system/foundations/color.md`)

## Open questions
- How to put a photo in a thumb is not shown. Adding `.aw-photo .aw-photo--*` or a child `<img>` both seem to work; which is intended?
- The transition covers `transform` and `opacity`, but focal size changes `width`/`height`, so the zoom is not animated. Should it scale with `transform`?
- The old Figma switcher had distance-based near/far sizes, a 16px gap and a soft shadow on the focal thumb; CSS has two sizes, a 12px gap and no shadow.
- Which screen it belongs on is not specified.
