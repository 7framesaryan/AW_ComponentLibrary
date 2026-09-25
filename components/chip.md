# Chip

`.aw-chip` · chips-and-badges · status: **verified** · registry id `chip`

A small non-interactive pill that states one fact about a card or item, such as a grade, category, seller or a verified tag.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, page `3:24`, component set
**Chip** `2306:2321`, 210 variants: variant × size × color × radius, plus StartContent, EndContent and
Avatar slots). Every value below is measured from that set. `variant=shadow` (30 variants) is **not**
imported: its drop shadows (blur 15) break the Foundations rule of no soft shadows and no blur above 12.
The set's vuesax bold tick-circle and close-circle icons are drawn with the Foundations `check` and
`close` icons; the sprite has no filled circle icons.

## When to use
- A grade, category or tag on a card: `PSA 10`, `Rookie`, `Baseball`.
- A positive or verified tag: `--primary`, usually `--flat --primary` ("Verified", "Graded").
- A removable token that names a chosen value, with an end `close` icon (the chip itself still only shows it; the close control is wired by the screen).
- A person or seller with an avatar: `.aw-chip__avatar` + name.
- A labelled status dot that isn't auction state: `--dot`.

## When not to use
- Letting the user filter a list → use [Filter chip](filter-chip.md)
- Showing auction state (Live / Upcoming / Ended) → use [Status chip](status-chip.md)
- A fact hidden behind a subscription → use [Gated pill](gated-pill.md)
- An icon + label + big value metric → use [Stat pill](stat-pill.md)
- A count or "NEW" marker → use [Badge](badge.md)
- Starting an action → use [Button](button.md)

## Anatomy
```text
span.aw-chip                  inline-flex row, padding 0 8, gap 4, radius full
├── svg.aw-icon               optional start icon, 20 × 20 (or span.aw-chip__avatar, or span.aw-chip__dot)
├── label text                the fact — 14/20 regular (md)
└── svg.aw-icon               optional end icon, 20 × 20 (close)
```

## Variants

### Variant
| Class | Fill | Stroke (2px, outside) | Label (default · primary) |
|---|---|---|---|
| *(default, solid)* | `--aw-surface-strong` · primary `--aw-positive` | none | white · white |
| `.aw-chip--bordered` | none | `--aw-zinc-700` · primary `--aw-border-primary` | white · `--aw-text-accent` |
| `.aw-chip--light` | none | none | white · `--aw-text-accent` |
| `.aw-chip--flat` | `--aw-default-flat` · primary `--aw-primary-flat` | none | white · `--aw-text-accent` |
| `.aw-chip--faded` | `--aw-surface-raised` | `--aw-zinc-700` | white · `--aw-text-accent` |
| `.aw-chip--dot` | none | `--aw-zinc-700` | white · `--aw-layout-foreground`; the 8px dot is `--aw-zinc-500` · `--aw-positive` |

### Colour
| Class | Use |
|---|---|
| *(default)* | Neutral fact |
| `.aw-chip--primary` | Positive or verified fact. Combine with any variant |

### Size
| Class | Height | Label |
|---|---|---|
| `.aw-chip--sm` | 24px (`--aw-chip-h-sm`) | 12/16 regular |
| *(default, md)* | 28px (`--aw-chip-h-md`) | 14/20 regular |
| `.aw-chip--lg` | 32px (`--aw-chip-h-lg`) | 16/24 regular |

Icons and the avatar are **20px at every size**; the side padding is 8 at every size.

### Radius
| Class | Radius |
|---|---|
| `.aw-chip--r-none` | 0 |
| `.aw-chip--r-sm` | 8px (`--aw-chip-radius-sm`) |
| `.aw-chip--r-md` | 12px (`--aw-chip-radius-md`) |
| `.aw-chip--r-lg` | 14px (`--aw-chip-radius-lg`) |
| *(default)* | pill (`--aw-radius-pill`) |

### Content slots
| Markup | Use |
|---|---|
| `svg.aw-icon` before the label | Start icon, 4px from the label |
| `svg.aw-icon` after the label | End icon (the set's close-circle) |
| `span.aw-chip__avatar` before the label | 20px avatar circle, `--aw-zinc-600` placeholder fill, sits 4px from the edge |
| `span.aw-chip__dot` before the label | 8px dot, used with `--dot` |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static; the set has no hover, pressed or disabled state |
| Selected / positive | `.aw-chip--primary` | Green fill, stroke or label per variant |

## Tokens
| Property | Token |
|---|---|
| Height | `--aw-chip-h-sm` 24 · `--aw-chip-h-md` 28 · `--aw-chip-h-lg` 32 |
| Padding / gap | `0 --aw-space-row` / `--aw-space-tight` |
| Icon / avatar slot | `--aw-chip-icon-size` (20px) · dot `--aw-chip-dot-size` (8px) |
| Stroke | `--aw-chip-border-width` (2px) · `--aw-zinc-700` (`colors/base/default`) · primary `--aw-border-primary` |
| Radius | `--aw-chip-radius-sm` · `--aw-chip-radius-md` · `--aw-chip-radius-lg` · `--aw-radius-pill` |
| Fills | `--aw-surface-strong` (`colors/base/default`) · `--aw-positive` (`colors/base/primary`) · `--aw-default-flat` · `--aw-primary-flat` · `--aw-surface-raised` (`colors/base/default-100`) |
| Label | `--aw-text-primary`, `--aw-text-accent`, `--aw-layout-foreground` (`colors/layout/foreground`); `--aw-fs-xs`/`--aw-fs-sm`/`--aw-fs-base` with matching line heights, `--aw-fw-regular` |
| Avatar placeholder | `--aw-zinc-600` (`colors/base/default-300`) |

## Layout & grid
- Chips sit inside components (a listing card's `.aw-listing-card__pills`, a detail meta row), so spacing follows component tokens, not the grid.
- Gap between chips in a row is `--aw-space-row`.
- Width hugs content. Never stretch a chip to a column span.
- A 2px stroke is drawn outside the chip, so leave at least 4px between stroked chips.

## Accessibility
- Render as `<span>`. It is static text, so don't give it a button role.
- Mark decorative icons, avatars and dots `aria-hidden="true"`. The label carries the meaning.
- If an end close icon removes the chip, put it in a real `<button>` with an `aria-label` ("Remove PSA 9").

## Do / Don't
- ✅ Keep one variant per row of chips on the same card.
- ✅ Use `--primary` for a positive or verified fact instead of tinting a chip yourself.
- ✅ Keep the label to one or two words.
- ❌ Don't use a chip to filter a list, or recolour one to fake auction status.
- ❌ Don't resize the icon slot per size; it stays 20.
- ❌ Don't rebuild a chip from a raw `div` and hand-set font styles.

## Example
```html
<div class="aw-listing-card__pills"><span class="aw-chip aw-chip--sm aw-chip--faded">PSA 6</span><span class="aw-chip aw-chip--sm aw-chip--flat aw-chip--primary">Verified</span></div>
<span class="aw-chip aw-chip--bordered">1st Edition<svg class="aw-icon" aria-hidden="true"><use href="#aw-i-close"/></svg></span>
```

## Related
- [Filter chip](filter-chip.md) · [Status chip](status-chip.md) · [Gated pill](gated-pill.md) · [Stat pill](stat-pill.md) · [Badge](badge.md)
- [Listing card](listing-card.md) · Radii (`02-design-system/foundations/radii.md`) · Typography (`02-design-system/foundations/typography.md`)

## Open questions (raised by the import, 2026-09-25)
1. **The catalogued price/grade pill has no Figma counterpart.** The old default `.aw-chip` was 24px,
   `--aw-surface-raised`, radius 6, 12px medium. No Chip variant matches (the nearest is
   `--sm --faded --r-sm`: 24px, raised fill, 8 radius, 12/16 regular, plus a 2px stroke). Plain
   `.aw-chip` now follows the set's default (28px, `--aw-surface-strong`, pill, 14/20 regular), so the
   listing-card price/grade pills change look. Which variant should the card use?
2. **`--primary` changed meaning.** The catalogued `--primary` was a dark green tint with green text
   (`--aw-accent-chip-bg`). In the set, color=primary on the default solid variant is a solid
   `--aw-positive` fill with white text; the old look is closest to `--flat --primary`.
3. The catalogued `--sm` (11px, pill, padding 4 8) is replaced by the set's size=sm (24px, 12/16).
4. `variant=shadow` is not imported (blur 15 soft shadows).
5. The dot chip's primary label is `colors/layout/foreground` (#ecedee), while its default label is
   white. Deliberate?
6. The set uses vuesax bold tick-circle / close-circle; the Foundations sprite has only the line
   `check` and `close`. Add filled circle icons?
7. The set has no interactive states; a removable chip's close control is not specified.
