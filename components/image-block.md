# Image block

`.aw-image-block` · cards-and-content · status: **catalogued** · registry id `image-block`

A clipped, rounded container for a card photo or thumbnail, with a raised placeholder fill when no image is set.

## When to use
- Showing a card photo in a box whose size the screen sets (thumbnail, gallery image).
- Holding a photo with an overlay, such as [Dots](dots.md) for an image carousel (the box is `position: relative`).

## When not to use
- The photo inside a listing card → use `.aw-listing-card__photo` in [Listing card](listing-card.md)
- The thumbnail in a result row → use `.aw-list-row__thumb` in [List-result row](list-row.md)
- The media in a grid card → use `.aw-grid-card__media` in [PLP grid card](grid-card.md)
- A round person image → use [Avatar](avatar.md)

## Where it's used
- Gallery: one 160×120 block with the hero photo, above carousel dots. `templates/gallery.template.html`
- Not used in a sample screen yet.

## Anatomy
```text
.aw-image-block          relative flex box, centred, clips children
└── photo                .aw-photo .aw-photo--* on the block itself, or a child <img>
```

## Variants
| Class | Use |
|---|---|
| `.aw-image-block` | The only variant. Size is set by the container or inline |

## States
| State | How to apply | What changes |
|---|---|---|
| Placeholder | no photo class | `--aw-surface-raised` fill |
| With photo | add `.aw-photo .aw-photo--{aaron,cobb,mantels,slab,hero}` | Photo cover-cropped and centred |
| Loading / error | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Radius | `--aw-radius-sm` |
| Fill | `--aw-surface-raised` |
| Width / height | Not specified (set by use) |

## Layout & grid
- Size it to a column span when it sits in the page flow (for example `.aw-col-2` for a 181px block).
- Inside a component it follows that component's sizes, not the grid.
- Full-bleed hero images are outside the grid (grid (`02-design-system/foundations/grid.md`) rule 4).

## Accessibility
- A photo that carries meaning needs a text alternative: use `<img alt="1952 Topps Mickey Mantle, front">` or `role="img"` with `aria-label` on the block.
- A decorative photo next to the title gets `aria-hidden="true"`.

## Do / Don't
- ✅ Use real card photos through the `.aw-photo--*` or `.aw-thumb--*` utilities.
- ✅ Set the size from the grid or the parent component.
- ❌ Don't add a border or shadow; the block is plain.
- ❌ Don't use off-palette placeholder colours; the empty fill is `--aw-surface-raised`.

## Example
```html
<div class="aw-image-block aw-photo aw-photo--hero" style="width:160px;height:120px"></div>
<div class="aw-dots"><span class="aw-dot is-active"></span><span class="aw-dot"></span><span class="aw-dot"></span></div>
```

## Related
- [Dots](dots.md) · [Avatar](avatar.md) · [List-result row](list-row.md) · [Listing card](listing-card.md)
- Radii (`02-design-system/foundations/radii.md`) · Layout (`02-design-system/foundations/layout.md`)

## Open questions
- No size, aspect ratio or radius variant is defined. The old Figma block had Image-01 (plain), Image-02 (with dots) and Image-03 (alt crop) at 147 × 140 with radius 8; CSS uses `--aw-radius-sm` (4px).
- Should dots sit inside the block as an overlay, or below it as in the gallery? No positioning class exists.
- Loading and error states are not specified.
