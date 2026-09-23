# Chip

`.aw-chip` · chips-and-badges · status: **catalogued** · registry id `chip`

A small non-interactive pill that states one fact about a card, such as price, grade, category or a verified tag.

## When to use
- Showing price or grade on a card: `$4,200` with a `gem` icon, `PSA 6`, `BGS 9.5`.
- A plain category or tag label: `.aw-chip--sm`.
- A selected, verified or positive tag: `.aw-chip--sm.aw-chip--primary` ("Verified").

## When not to use
- Letting the user filter a list → use [Filter chip](filter-chip.md)
- Showing auction state (Live / Upcoming / Ended) → use [Status chip](status-chip.md)
- A fact hidden behind a subscription → use [Gated pill](gated-pill.md)
- An icon + label + big value metric → use [Stat pill](stat-pill.md)
- A count or "NEW" marker → use [Badge](badge.md)
- A home shortcut → use [Quick action](quick-action.md)

## Where it's used
- Home: price + grade pills inside listing cards. See `templates/home.template.html`
- Card detail: "PSA 6" and "Est. $4,200" beside the status chip. See `templates/card-detail.template.html`
- Gallery: price/grade pills, "Verified" primary tag and listing-card pills. See `templates/gallery.template.html`

## Anatomy
```text
span.aw-chip              inline-flex row, gap --aw-space-tight
├── svg.aw-icon           optional leading icon (gem for price), 15–16px, often --aw-text-secondary
└── value text            12px medium, --aw-text-primary
```

## Variants
| Class | Use |
|---|---|
| `.aw-chip` | Price/grade pill: 24px tall, `--aw-surface-raised`, `--aw-radius-md` |
| `.aw-chip--sm` | Category/tag: pill radius, `--aw-space-tight` × `--aw-space-row` padding, 11px text |
| `.aw-chip--primary` | Green-tinted: `--aw-accent-chip-bg` fill, `--aw-text-accent` text. Combine with `--sm` for a selected or verified tag |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static; chips are not interactive |
| Selected / active tag | `.aw-chip--primary` | Green-tinted fill and text |

## Tokens
| Property | Token |
|---|---|
| Height | 24px, fixed in CSS |
| Padding | `0 --aw-space-row` (`--sm`: `--aw-space-tight --aw-space-row`) |
| Gap | `--aw-space-tight` |
| Radius | `--aw-radius-md` (`--sm`: `--aw-radius-pill`) |
| Fill | `--aw-surface-raised` (`--primary`: `--aw-accent-chip-bg`) |
| Text | `--aw-fs-xs` / `--aw-lh-xs` / `--aw-fw-medium` / `--aw-text-primary` (`--sm`: `--aw-fs-chip`; `--primary`: `--aw-text-accent`) |

## Layout & grid
- Chips sit inside components (a listing card's `.aw-listing-card__pills`, a detail meta row), so spacing follows component tokens, not the grid.
- Gap between chips in a row is `--aw-space-row` (`.aw-listing-card__pills`).
- Width hugs content. Never stretch a chip to a column span.

## Accessibility
- Render as `<span>`. It is static text, so don't give it a button role.
- Mark a decorative icon `aria-hidden="true"`. The value text carries the meaning.
- If the icon is the only cue that a value is a price, keep the `$` in the text.

## Do / Don't
- ✅ Keep price/grade pills on `--aw-surface-raised`.
- ✅ Use the `gem` icon for price and plain text for grade.
- ✅ Use `.aw-chip--primary` for a positive or verified tag instead of tinting a default chip yourself.
- ❌ Don't tint a price/grade pill green, and don't add a chevron. Chevrons mean "filter", not "value".
- ❌ Don't use a chip to filter a list, or recolour one to fake auction status.
- ❌ Don't rebuild a chip from a raw `div` and hand-set font styles.

## Example
```html
<div class="aw-listing-card__pills"><span class="aw-chip"><svg class="aw-icon" style="width:15px;height:15px;color:var(--aw-text-secondary)"><use href="#aw-i-gem"/></svg>$4,200</span><span class="aw-chip">PSA 6</span></div>
```

## Related
- [Filter chip](filter-chip.md) · [Status chip](status-chip.md) · [Gated pill](gated-pill.md) · [Stat pill](stat-pill.md) · [Badge](badge.md)
- [Listing card](listing-card.md) · Radii (`02-design-system/foundations/radii.md`) · Typography (`02-design-system/foundations/typography.md`)

## Open questions
- Radius conflict: CSS uses `--aw-radius-md` (6px), but reference/components.md and the gallery note say r12 (`--aw-radius-price-pill`). CSS is followed here; confirm.
- Icon size (15px vs 16px) and icon colour are set inline. No token or class defines them.
- `.aw-chip--primary` without `--sm` is not shown anywhere. Is it allowed?
