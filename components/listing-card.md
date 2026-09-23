# Listing card

`.aw-listing-card` · cards-and-content · status: **catalogued** · registry id `listing-card`

The main content object: one auction listing with photo, title, price and grade, current bid, cost facts, countdown and an outline bid CTA.

## When to use
- A listing inside a horizontal carousel or feature row (for example Home "Ending soon").
- When the user needs the full set of facts at a glance: price, grade, current bid, bid count, buyer's premium, total, countdown.
- Whenever a full listing appears in a scroll row. Build it once and reuse it; don't rebuild it from raw divs.

## When not to use
- A listing in a 2-up grid → use [PLP grid card](grid-card.md)
- A dense vertical list of results → use [List-result row](list-row.md)
- A compact watched item in the Watchlist list → use [Watchlist card](watchlist-card.md)
- A ranked player → use [Top-player card](top-player.md)
- A stored search → use [Saved-search card](saved-search.md)

## Where it's used
- Home: "Ending soon" carousel, default and watched cards. `templates/home.template.html`
- Gallery: default and watched cards with a working heart toggle. `templates/gallery.template.html`
- Watchlist: only the `.aw-listing-card__fav` heart button is borrowed inside watchlist cards. `templates/watchlist.template.html`

## Anatomy
```text
article.aw-listing-card               black card, column, centred, gap --aw-space-block
├── .aw-listing-card__media           full-width holder for the photo
│   ├── .aw-listing-card__photo       144×176 slab image on a white holder
│   └── button.aw-listing-card__fav   28×28 heart button, absolute top-right
├── .aw-listing-card__title           title, 2 lines max (clamped)
├── .aw-listing-card__pills           price chip (gem icon) + grade chip
├── .aw-listing-card__bid             .aw-price-lead + .aw-listing-card__bid-count "(24 bids)"
├── .aw-listing-card__facts           stack of .aw-fact-row (Buyers Premium, Total)
├── .aw-urgency                       countdown text, red
└── button.aw-listing-card__cta       full-width 32px outline bid CTA
```
Also defined in CSS but not used in any template: `__body` (column wrapper, gap `--aw-space-block`), `__footer` (column, gap `--aw-space-row`), `__urgency` (12px medium, `--aw-text-danger`), `__subscribe` (amber-dim "Subscribe to see full details" line), and [Gated pill](gated-pill.md) for locked facts.

## Variants
| Class | Use |
|---|---|
| `.aw-listing-card` | The only variant. Default card |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Heart outline (`#aw-i-heart`), fav border `--aw-border-hairline` |
| Watched | `.is-watched` on the card; swap icon to `#aw-i-heart-filled` and set the fav colour to `--aw-caution` | CSS turns only the fav border `--aw-caution` (#f5a524). Card surface does not change |
| Heart tap | add `.aw-anim-pop` to the fav button and toggle `.is-watched` | Heart scales to 1.4 and settles |
| Pressed | `:active` | Card opacity 0.9 over `--aw-dur-fast` |
| Gated (subscription) | Not specified as a class; use `.aw-gated-pill` and `__subscribe` | Locked facts show an amber-dim lock |
| Focus-visible / disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Width | 292px, fixed in CSS |
| Padding / gap | `--aw-space-block` |
| Radius | `--aw-radius-hero` (fav: `--aw-radius-favourite`; photo: `--aw-radius-sm`) |
| Surface / border | `--aw-black` / `--aw-border-hairline` |
| Shadow | `--aw-shadow-hairline` |
| Photo holder | `--aw-white` |
| Title | `--aw-fs-sm` / `--aw-lh-sm` / `--aw-fw-semibold`, `--aw-text-high-alt` |
| Bid count | `--aw-fs-xs`, `--aw-text-muted` |
| Countdown | `--aw-text-danger` (= `--aw-urgency` #d4183d) |
| CTA | 32px, border `--aw-positive`, label `--aw-text-accent`, `--aw-radius-button`, `--aw-fs-xs` |
| Watched ring | `--aw-caution` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- Carousel items are exempt from column widths, so the fixed 292px width is fine. The carousel itself starts at the 16px margin. See Card carousel (`02-design-system/patterns/card-carousel.md`) and grid (`02-design-system/foundations/grid.md`) rule 4.
- Home places cards in a scroll row with a 12px gap and a Section header (`02-design-system/patterns/section-header.md`) above.
- Never put listing cards in a 2-up grid; they are too wide for a 181px span.
- Photos: add `.aw-photo .aw-photo--slab` or `.aw-thumb--{mantle,henderson,jordan,lebron,magic,reggie}` to `__photo`.

## Accessibility
- Use `<article>` for the card. The heart is a real `<button>` with `aria-label` "Add to watchlist" / "Remove from watchlist".
- The CTA is a real `<button>` labelled with the action ("Bid on Auction Site").
- The countdown is never colour-only: the red is paired with text ("6 days left to bid").
- The heart is 28×28, under the 44px touch target; leave space around it.

## Do / Don't
- ✅ Keep the bid CTA as a green outline. Solid green is only for the detail action bar.
- ✅ Vary every card in a row: title, price, grade, bid count, premium, countdown. Identical cards are the most common failure.
- ✅ Use structured titles: year, brand, number, player, qualifier ("1952 Topps #311 Mickey Mantle").
- ❌ Don't tint the card green when watched. Only the heart ring and icon change.
- ❌ Don't use red for anything except the countdown.
- ❌ Don't hardcode hex or px values; use the classes above.

## Example
```html
<article class="aw-listing-card">
  <div class="aw-listing-card__media"><div class="aw-listing-card__photo aw-photo aw-photo--slab"></div>
    <button class="aw-listing-card__fav" aria-label="Add to watchlist"><svg class="aw-icon" style="width:15px;height:15px"><use href="#aw-i-heart"/></svg></button></div>
  <div class="aw-listing-card__title aw-card-title">1952 Topps #311 Mickey Mantle</div>
  <div class="aw-listing-card__pills"><span class="aw-chip"><svg class="aw-icon" style="width:15px;height:15px;color:var(--aw-text-secondary)"><use href="#aw-i-gem"/></svg>$4,200</span><span class="aw-chip">PSA 6</span></div>
  <div class="aw-listing-card__bid"><span class="aw-price-lead">$3,850</span><span class="aw-listing-card__bid-count">(24 bids)</span></div>
  <div class="aw-listing-card__facts"><div class="aw-fact-row"><span class="aw-fact-row__label">Buyers Premium:</span><span class="aw-fact-row__value">+20% ($770)</span></div><div class="aw-fact-row"><span class="aw-fact-row__label">Total:</span><span class="aw-fact-row__value">$4,620</span></div></div>
  <div class="aw-urgency">Ends in 02:14:37</div>
  <button class="aw-listing-card__cta">Bid on Auction Site</button>
</article>
```

## Related
- [Fact row](fact-row.md) · [Chip](chip.md) · [Gated pill](gated-pill.md) · [Button](button.md)
- [PLP grid card](grid-card.md) · [List-result row](list-row.md) · [Watchlist card](watchlist-card.md)
- Card carousel (`02-design-system/patterns/card-carousel.md`) · Content (`02-design-system/foundations/content.md`) · Motion (`02-design-system/foundations/motion/INDEX.md`)

## Open questions
- Size conflict: CSS is 292px wide; `reference/components.md` and the gallery caption say 240 × 336. Which is correct?
- Surface conflict: CSS uses `--aw-black`, `--aw-radius-hero` (12px); the contract prose says `--aw-surface-translucent`, zinc-600 border, `--aw-radius-card`.
- Templates put both `__title` (14px) and `.aw-card-title` (12px) on the title; the component class wins at 14px. Which size is intended?
- The watched heart colour and icon swap are inline styles in templates, not CSS. Should `.is-watched` set them?
- `__urgency`, `__body`, `__footer` and `__subscribe` are unused. When should the gated/subscribe layout be used?
- Focus-visible and disabled states are not specified.
