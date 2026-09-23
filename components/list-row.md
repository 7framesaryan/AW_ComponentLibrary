# List-result row

`.aw-list-row` · cards-and-content · status: **catalogued** · registry id `list-row`

A dense horizontal result: thumbnail on the left, title, meta, price, countdown and an outline bid CTA on the right.

## When to use
- A dense vertical list of search or browse results (the list view of a List/Grid toggle).
- When the user compares many results quickly and needs a bid CTA on each row.

## When not to use
- A card in a horizontal carousel → use [Listing card](listing-card.md)
- A 2-up grid of results → use [PLP grid card](grid-card.md)
- A watched item in the Watchlist → use [Watchlist card](watchlist-card.md)
- A plain label/value line with a divider → use [Detail row](detail-row.md)

## Where it's used
- Gallery: one row in "Content objects". `templates/gallery.template.html`
- Watchlist: only `.aw-list-row__thumb` is borrowed (resized inline to 64×88) inside watchlist cards. `templates/watchlist.template.html`

## Anatomy
```text
.aw-list-row                  row, padding + gap --aw-space-block, ghost border
├── .aw-list-row__thumb       96×132 image (add .aw-photo--*)
└── .aw-list-row__body        column, gap --aw-space-tight, min-width 0
    ├── .aw-card-title        title
    ├── .aw-body-muted        meta: house · grade
    ├── .aw-list-row__spacer  flex:1, pushes price and CTA to the bottom
    ├── price row             .aw-price-lead + .aw-urgency countdown (inline flex)
    └── button.aw-btn         .aw-btn--sm.aw-btn--outline, full width
```

## Variants
| Class | Use |
|---|---|
| `.aw-list-row` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Watched | Not specified | Not specified |
| Filtered out (dimmed) | Not specified | Not specified |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Padding / column gap | `--aw-space-block` |
| Body gap | `--aw-space-tight` |
| Radius | `--aw-radius-card` (thumb: `--aw-radius-sm`) |
| Surface | `--aw-surface-translucent` |
| Border | 1px `--aw-border-ghost` |
| Thumb | 96×132, `--aw-surface-raised` |
| Countdown | `.aw-urgency` → `--aw-text-danger` |
| CTA | [Button](button.md) `--sm --outline` → `--aw-positive` |

## Layout & grid
- A row is a full-width 4-column span (370px). Place it in `.aw-col-4` or a full-width container.
- Stack rows vertically. The gap between rows is Not specified.
- Inside the row, spacing follows component tokens, not the grid (grid (`02-design-system/foundations/grid.md`) rule 5).

## Accessibility
- Use one activatable element named by the title to open detail; the CTA is a separate real `<button>`.
- Keep the countdown as text, not colour alone.
- The `--sm` CTA is 32px tall; keep space around it for touch.
- `min-width: 0` on the body lets long titles truncate instead of overflowing.

## Do / Don't
- ✅ Use for dense vertical result lists.
- ✅ Keep the CTA a green outline and the countdown red text.
- ✅ Vary every row: title, house, grade, price, countdown.
- ❌ Don't fill the CTA green.
- ❌ Don't use it in a carousel or a 2-up grid.

## Example
```html
<div class="aw-list-row">
  <div class="aw-list-row__thumb aw-photo aw-photo--cobb"></div>
  <div class="aw-list-row__body">
    <div class="aw-card-title">1986 Fleer #57 Michael Jordan RC</div>
    <div class="aw-body-muted">Heritage Auctions · PSA 8</div>
    <div class="aw-list-row__spacer"></div>
    <div style="display:flex;align-items:center;justify-content:space-between">
      <span class="aw-price-lead">$28,500</span>
      <span class="aw-urgency">01:02:55</span>
    </div>
    <button class="aw-btn aw-btn--sm aw-btn--outline" style="width:100%">Bid on Auction Site</button>
  </div>
</div>
```

## Related
- [Listing card](listing-card.md) · [PLP grid card](grid-card.md) · [Watchlist card](watchlist-card.md)
- [Button](button.md) · [Image block](image-block.md) · [Dots](dots.md)
- Empty filtered state (`02-design-system/patterns/empty-filtered-state.md`) · Content (`02-design-system/foundations/content.md`)

## Open questions
- The gallery sets the price to 16px inline, off the type ramp.
- The old Figma row had a heart, price and grade pills, buyer's premium and total figures, an amber watched badge and carousel dots on the thumbnail. None of these exist in CSS. Should they?
- The old guide says filtered-out rows dim in place; no class exists for that.
- Gap between stacked rows is not specified.
- No sample screen (other than the gallery) uses the full row yet.
