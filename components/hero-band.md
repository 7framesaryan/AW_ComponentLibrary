# Hero band

`.aw-hero-band` · layout-and-surfaces · status: **catalogued** · registry id `hero-band`

A full-bleed background that paints the near-black hero gradient behind a page title, glass chrome or a hero image.

## When to use
- Behind the top of top-level screens that lead with a title (Watchlist, Portfolio, Saved searches) and Home, so the glass chrome has something to blur.
- As the backdrop of a detail hero image (Card detail photo area).

## When not to use
- The regular screen background → use [Screen](screen.md) (`--aw-bg`)
- A card or panel surface → use a card component such as [Stat card](stat-card.md)
- A colourful promo background: not allowed; gradients are near-black only

## Anatomy
```text
.aw-hero-band            gradient background only; no children required
└── any content          e.g. a hero photo, or the whole scroller
```

## Variants
| Class | Use |
|---|---|
| `.aw-hero-band` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined. |

## Tokens
| Property | Token |
|---|---|
| Background | `--aw-grad-hero` = `linear-gradient(180deg, #171a17 0%, #121412 100%)` |
| Gradient stops | `--aw-bg-grad-from` (#171a17), `--aw-bg-grad-to` (#121412) |

## Layout & grid
- Full-bleed backgrounds are exempt from the column grid: the band spans the full 402px device width with no side padding.
- The class sets only a background. Height, padding and layout come from what it is applied to (the 812px `.scroll`, or `.hero-photo { height: 260px }` in Card detail, both template-local).
- Content placed on top still follows the grid: put it in `.aw-screen` or give it the 16px margin.
- Note: `.aw-screen` paints `--aw-bg` on top, so on Home / Watchlist the band is only visible where the screen does not cover it.

## Accessibility
- Purely decorative; no role or label.
- Text placed on the band must keep AA contrast (the gradient is near-black, so standard text tokens pass).

## Do / Don't
- ✅ Apply it to a full-width element that sits under glass chrome or a hero image.
- ✅ Keep hero images centred on the band, as Card detail does.
- ❌ Don't add green, red or amber to the gradient; no colourful gradients.
- ❌ Don't inset the band inside the 16px margin.
- ❌ Don't stack a soft shadow on it; elevation is glass + hairline.

## Example
```html
<div class="hero-photo aw-hero-band">
  <div class="aw-photo aw-photo--mantels" style="width:150px;height:210px;border-radius:8px;box-shadow:var(--aw-shadow-hairline)"></div>
</div>
```

## Related
- [Screen](screen.md) · [Device frame](device.md) · [Second-level header](header.md) · [Glass top bar](top-bar.md) · [Image block](image-block.md)
- color (`02-design-system/foundations/color.md`) · effects (`02-design-system/foundations/effects.md`) · grid (`02-design-system/foundations/grid.md`)

## Open questions
- Intended height of the band on title-led screens (just behind the header and title block, or the whole viewport) is not specified.
- Because `.aw-screen` covers it with `--aw-bg`, is applying the band to the whole scroller intended?
- `--aw-glass-blur-hero` (40px) exists but no class uses it with the hero band.
