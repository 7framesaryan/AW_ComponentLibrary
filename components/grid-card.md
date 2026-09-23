# PLP grid card

`.aw-grid-card` · cards-and-content · status: **catalogued** · registry id `grid-card`

A compact listing card for a 2-up product-listing grid: image, title, then price with auction status, and no inline CTA.

## When to use
- Search or browse results shown as a 2-up grid (the grid view of a List/Grid segmented toggle).
- When a grid is denser than a carousel and the card itself is the tap target that opens detail.

## When not to use
- A card in a horizontal carousel or feature row → use [Listing card](listing-card.md)
- A dense vertical list with a bid CTA → use [List-result row](list-row.md)
- A labelled metric tile in a 2-up row → use [Stat card](stat-card.md)

## Where it's used
- Search results: 2-up grid of four cards under the result count. `templates/search-results.template.html`
- Gallery: single card in "Content objects". `templates/gallery.template.html`

## Anatomy
```text
article.aw-grid-card          column, padding + gap --aw-space-row
├── .aw-grid-card__media      120px tall image box (add .aw-photo--*)
├── .aw-grid-card__title      title, used with .aw-card-title
└── price row                 .aw-price-lead + .aw-status-chip, space-between (inline flex in templates)
```

## Variants
| Class | Use |
|---|---|
| `.aw-grid-card` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Watched | Not specified | Not specified |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Width | `width: 100%` of its column span |
| Padding / gap | `--aw-space-row` |
| Radius | `--aw-radius-card` (media: `--aw-radius-sm`) |
| Surface | `--aw-surface-translucent` |
| Border | 1px `--aw-zinc-600` |
| Shadow | `--aw-shadow-hairline` |
| Media | 120px tall, `--aw-surface-raised` |
| Title colour | `--aw-text-high-alt` (size from `.aw-card-title`: `--aw-fs-xs`, `--aw-fw-semibold`) |

## Layout & grid
- Each card is a 2-column span (181px on the 402px screen). Wrap the grid in `.aw-grid` and give each card `.aw-col-2`; the gutter is 8px. See grid (`02-design-system/foundations/grid.md`).
- The CSS has no fixed width; it fills whatever span you give it.
- Place a result count and List/Grid [Segmented](segmented.md) toggle above the grid.

## Accessibility
- The whole card is one activatable element named by its title; use `<article>` wrapping a link or button.
- The status chip carries a text label ("Live", "Ended"), so state is not colour-only.
- Give the media an accessible name only if it is not decorative next to the title.

## Do / Don't
- ✅ Keep it to a 2-column grid and let the card open detail.
- ✅ Use a [Status chip](status-chip.md) for auction state and `.aw-price-lead` for the price.
- ✅ Vary titles, prices and states across the grid.
- ❌ Don't add a bid CTA inside the card; that's the list row or listing card.
- ❌ Don't stretch it to carousel width; that's the listing card.
- ❌ Don't separate grid cards by 12px; the gutter is 8px.

## Example
```html
<div class="aw-grid">
  <article class="aw-grid-card aw-col-2"><div class="aw-grid-card__media aw-photo aw-photo--slab"></div><div class="aw-grid-card__title aw-card-title">1952 Topps Mantle</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="aw-price-lead">$3,850</span><span class="aw-status-chip aw-status-chip--live">Live</span></div></article>
  <article class="aw-grid-card aw-col-2"><div class="aw-grid-card__media aw-photo aw-photo--mantels"></div><div class="aw-grid-card__title aw-card-title">1953 Bowman Mantle</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="aw-price-lead">$5,100</span><span class="aw-status-chip aw-status-chip--upcoming">Soon</span></div></article>
</div>
```

## Related
- [Listing card](listing-card.md) · [List-result row](list-row.md) · [Status chip](status-chip.md) · [Segmented](segmented.md)
- Grid (`02-design-system/foundations/grid.md`) · Empty filtered state (`02-design-system/patterns/empty-filtered-state.md`) · Filter chip row (`02-design-system/patterns/filter-chip-row.md`)

## Open questions
- The search-results template uses a custom `.grid2` with a 12px gap, which breaks the 8px gutter rule. The example above uses `.aw-grid`/`.aw-col-2` instead.
- Templates set the price size inline (15px and 16px), off the type ramp. What price style belongs here?
- No class exists for the price row; templates use inline flex.
- The old Figma guide had price + grade pills and a red countdown, radius 10 and a `--aw-surface` + ghost border. CSS uses radius 8, translucent surface and a zinc-600 border with a status chip. Which content set is correct?
- Watched, pressed and focus states are not specified.
