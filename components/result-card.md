# Result card

`.aw-result-card` · cards-and-content · status: **catalogued** · registry id `result-card`

One listing per row in a one-column results list: slab photo, title with heart and overflow, price, source and grade tags, and an outline Bid.

## When to use
- Search results shown one card per row (the Results screen of the saved search journey).
- The matches inside a saved search, with the new / ending / expired states.

## When not to use
- A listing in a horizontal carousel → use [Listing card](listing-card.md)
- A listing in a 2-up grid → use [PLP grid card](grid-card.md)
- A dense text-first row → use [List-result row](list-row.md)
- A watched item in the Watchlist list → use [Watchlist card](watchlist-card.md)

## Anatomy
```text
article.aw-result-card                  row, 1px zinc-600 border, radius 12, dark radial fill lit bottom-right
├── .aw-result-card__media              95 wide photo column, photo centred
│   ├── img.aw-result-card__photo       65 × 111 slab, radius 2
│   └── .aw-corner-tag                  optional NEW / ENDING (Corner tag)
└── .aw-result-card__body               column, gap 8, padding 16 8 16 12
    ├── .aw-result-card__head           title + actions, gap 12
    │   ├── h3.aw-result-card__title    14 / 1.3 bold, 2 lines max
    │   └── .aw-result-card__actions    heart (__fav) + more (menu-dots-vertical), 20px, gap 12
    └── .aw-result-card__foot           bottom-aligned: info | Bid
        ├── .aw-result-card__info       column, gap 8
        │   ├── p.aw-result-card__price 14 / 1.3 regular
        │   ├── p.aw-result-card__note  optional 12 medium green ("Listed 2h ago")
        │   └── .aw-result-card__tags   __source (12/16) + __tag grade, year (10/12), gap 4
        └── button.aw-result-card__bid  outline green, 12/16 medium, 12 × 8, square-top-down 16
                                        (or span.aw-result-card__ended "Ended" when expired)
```
eBay's source badge spells the wordmark with `__ebay-e|b|a|y` spans; every other house is plain text.

## Variants
| Class | Use |
|---|---|
| `.aw-result-card` | The default card, exactly as the Figma node |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Heart outline (`#aw-i-heart`) |
| Watched | `.is-watched` on the card, heart icon `#aw-i-heart-filled`, `aria-pressed="true"` | Heart turns `--aw-caution` |
| New match | `.aw-result-card--new` + `<span class="aw-corner-tag">New</span>` in `__media` | Border `--aw-border-primary`; optional `__note` |
| Ending | `.aw-result-card--ending` + `aw-corner-tag--warning` "Ending" | Border `--aw-border-warning`; `__note` in `--aw-text-warning` |
| Expired | `.aw-result-card--expired`; swap Bid for `__ended` "Ended" | Photo, title and tags at 50%; "Ended" in `--aw-text-danger` |
| Pressed | `:active` | Card opacity 0.9 over `--aw-dur-fast` |

## Tokens
| Property | Token |
|---|---|
| Fill | radial `--aw-result-card-glow` → `--aw-result-card-base` |
| Border · radius | `--aw-border-small` `--aw-border-hairline` · `--aw-radius-hero` |
| Photo column · photo | `--aw-result-card-media-w` · `--aw-result-card-photo-w` × `--aw-result-card-photo-h`, `--aw-result-card-photo-radius` |
| Padding / gaps | `--aw-space-section` `--aw-space-row` `--aw-space-block` `--aw-space-tight` |
| Title · price | `--aw-fs-sm` / `--aw-result-card-title-lh`, bold · regular |
| Tags | `--aw-surface-raised`, `--aw-radius-price-pill`; source `--aw-fs-xs`, grade `--aw-result-card-tag-fs` / `--aw-result-card-tag-lh` |
| Icons | `--aw-result-card-icon` (20), Bid `--aw-icon-sm` (16) |
| Bid | `--aw-border-primary`, `--aw-text-accent`, `--aw-radius-button`, pressed `--aw-primary-flat` |
| eBay wordmark | `--aw-brand-ebay-e|b|a|y` |

## Layout & grid
- Spans all 4 columns (370 wide inside the 16px margins). Stack cards with an 8–10px gap.
- The card grows with the title; with a one-line title it stays 124 tall because the photo sets the height.

## Accessibility
- `<article>` per card. Heart and more are real `<button>`s with `aria-label`s; the heart carries `aria-pressed`.
- Bid opens the auction site: label it with the house when it's the only context ("Bid on eBay").
- New / Ending / Ended are words, never colour alone.

## Do / Don't
- ✅ Keep Bid as the green outline. Solid green is only for the detail action bar.
- ✅ Use structured titles: year, brand, number, player.
- ❌ Don't add bid counts or countdowns to the body; time lives in a Corner tag.

## Example
```html
<article class="aw-result-card">
  <div class="aw-result-card__media"><img class="aw-result-card__photo" src="…" alt=""></div>
  <div class="aw-result-card__body">…see components/result-card.html…</div>
</article>
```

## Related
- [Listing card](listing-card.md) · [List-result row](list-row.md) · [Corner tag](corner-tag.md) · [Saved-search card](saved-search.md)

## Open questions
- Not in the DS kit (tyqrAWDfmJ8E7yLRmap6VH) yet; the Mobile V3 node is named "Wishlist Cards". Add it to the kit as Result card.
- The Figma Bid icon is a legacy vuesax "export"; this uses its Solar match, `square-top-down`, added to the sprite.
