# Watchlist card

`.aw-watchlist-card` · cards-and-content · status: **catalogued** · registry id `watchlist-card`

A plain surface container for one watched item in the Watchlist list; the screen composes the thumbnail, facts and heart inside it.

## When to use
- Each item in the Watchlist screen list.
- A compact entry for a watched listing that shows state (Live, Outbid, Winning) alongside price and countdown.

## When not to use
- A listing in a carousel → use [Listing card](listing-card.md)
- A search result with a bid CTA → use [List-result row](list-row.md)
- A 2-up grid result → use [PLP grid card](grid-card.md)

## Where it's used
- Watchlist: three cards stacked below a filter chip row (All / Ending soon / Outbid / Winning). `templates/watchlist.template.html`

## Anatomy
```text
.aw-watchlist-card                 surface + hairline border container, padding --aw-space-block
└── row (inline flex, gap 12px)
    ├── .aw-list-row__thumb        borrowed thumb, resized inline to 64×88
    ├── body (flex:1, min-width 0)
    │   ├── .aw-card-title         title
    │   ├── .aw-body-muted         house · grade
    │   ├── price line             .aw-price-lead + .aw-body-muted "(24 bids)"
    │   └── state line             .aw-urgency countdown or .aw-label-accent "Winning" + .aw-status-chip
    └── button.aw-listing-card__fav borrowed heart, filled, position static
```

## Variants
| Class | Use |
|---|---|
| `.aw-watchlist-card` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Winning | content: `.aw-label-accent` "Winning" instead of a countdown | Green text line |
| Pressed / focus-visible | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-block` |
| Radius | `--aw-radius-card` |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Shadow | `--aw-shadow-soft` |
| Countdown | `.aw-urgency` → `--aw-text-danger` |
| Winning | `.aw-label-accent` → `--aw-text-accent` |
| Heart | `--aw-caution` (inline), `#aw-i-heart-filled` |

## Layout & grid
- Full-width 4-column span (370px), stacked vertically.
- The template stacks cards with a 12px gap; the grid gutter only governs side-by-side spacing.
- Place a Filter chip row (`02-design-system/patterns/filter-chip-row.md`) above the list.

## Accessibility
- Make the card one link to detail, named by the title; the heart is a separate `<button>` labelled "Remove from watchlist".
- State is text ("Live", "Winning", "Ends 02:14:37"), not colour alone.
- The heart is 28×28; keep space around it.

## Do / Don't
- ✅ Show real state per item and vary items: house, grade, price, bids, state.
- ✅ Keep the heart filled amber on every watched item.
- ✅ Use red only for the countdown.
- ❌ Don't use the watchlist count as the nav badge; the badge means new alerts, not total items.
- ❌ Don't add a bid CTA here unless a design specifies one.

## Example
```html
<div class="aw-watchlist-card">
  <div style="display:flex;gap:12px">
    <div class="aw-list-row__thumb aw-photo aw-photo--cobb" style="width:64px;height:88px"></div>
    <div style="flex:1;min-width:0">
      <div class="aw-card-title">1952 Topps #311 Mickey Mantle</div>
      <div class="aw-body-muted">Heritage · PSA 6</div>
      <div style="display:flex;align-items:baseline;gap:8px;margin-top:6px"><span class="aw-price-lead" style="font-size:16px">$3,850</span><span class="aw-body-muted">(24 bids)</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px"><span class="aw-urgency">Ends 02:14:37</span><span class="aw-status-chip aw-status-chip--live">Live</span></div>
    </div>
    <button class="aw-listing-card__fav" style="color:var(--aw-caution);align-self:flex-start;position:static" aria-label="Remove from watchlist"><svg class="aw-icon" style="width:15px;height:15px"><use href="#aw-i-heart-filled"/></svg></button>
  </div>
</div>
```

## Related
- [Listing card](listing-card.md) · [List-result row](list-row.md) · [Status chip](status-chip.md)
- Filter chip row (`02-design-system/patterns/filter-chip-row.md`) · Stat pill row (`02-design-system/patterns/stat-pill-row.md`) · Content (`02-design-system/foundations/content.md`)

## Open questions
- The component has no inner classes; the layout borrows `.aw-list-row__thumb` and `.aw-listing-card__fav` and uses inline styles (6px margins, 16px price). Should it get its own parts?
- The template uses `.aw-status-chip--upcoming` labelled "Outbid". Outbid is not an auction state; which component shows it?
- Product rules want a watchlist summary (tracked, ending soon, available now, no match, newly found) and exact/similar match info per item. Neither is specified here.
- Gap between stacked cards is not specified by a token.
