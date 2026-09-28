# Saved-search card

`.aw-saved-search` · cards-and-content · status: **catalogued** · registry id `saved-search`

A card for one stored search: thumbnail, query name and a new-lots count, in a horizontal (list) or vertical (pinned row) form.

> **Kit alignment (2026-09-28):** added `--mosaic`, the Saved Searches list card (Mobile V3 "Saved Search Card", Match Preview variants) on kit Card values. The single-thumbnail --h / --v variants are unchanged.

## When to use
- The Saved searches screen: a vertical list of all searches (`--h`) and a horizontal row of pinned searches (`--v`).
- Anywhere a saved query is shown as a monitored intent with a count of new matches.

## When not to use
- A card listing → use [Listing card](listing-card.md)
- A ranked player → use [Top-player card](top-player.md)
- A watched item → use [Watchlist card](watchlist-card.md)
- A filter applied right now to a list → use [Filter chip](filter-chip.md)

## Anatomy
```text
.aw-saved-search--h               row, centred, gap --aw-space-block
├── .aw-saved-search__thumb       44×64 image (add .aw-photo--*)
├── text block (flex:1)           .aw-body-strong query + .aw-body-muted "32 lots"
└── svg.aw-icon                   chevron-right, --aw-text-muted

.aw-saved-search--v               column, gap --aw-space-row
├── .aw-saved-search__thumb       resized inline to 100% × 88px
├── .aw-body-strong               query name
├── .aw-body-muted                "18 new lots"
└── .aw-badge.aw-badge--positive  optional "18 NEW"
```

## Variants
| Class | Use |
|---|---|
| `.aw-saved-search` | Base surface. Always add `--h` or `--v` |
| `.aw-saved-search--h` | Horizontal, 253px wide. List of all searches (templates override to `width:100%`) |
| `.aw-saved-search--v` | Vertical, 162px wide. Pinned searches in a horizontal scroll |
| `.aw-saved-search--mosaic` | One tappable card per search: title, criteria, saved mark, newest match, 4-tile preview ("+N" on the last tile), status chips |
| `.aw-saved-search--mosaic.is-notified` | The search that sent the notification just opened: primary stroke + breathing glow (`02-design-system/foundations/motion/saved-search-glow.md`) |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | As styled |
| Has new matches | add `.aw-badge--positive` badge (`--v`) | Green count badge appears |
| No new matches | omit the badge; meta reads "No new lots" | No badge |
| Status available / ending / expired | Not specified | Not specified |
| Pressed / focus-visible | Not specified | Not specified |
| Statuses (mosaic) | `.aw-chip--sm --flat` in `.aw-saved-search__statuses` | available (default) · new (`--primary`) · ending (`--warning`) · expired (`--danger`); hide a zero count |

## Tokens
| Property | Token |
|---|---|
| Padding | `--aw-space-block` |
| Gap | `--h`: `--aw-space-block`; `--v`: `--aw-space-row` |
| Radius | `--aw-radius-card` (thumb: `--aw-radius-sm`) |
| Surface / border | `--aw-surface` / 1px `--aw-border-hairline` |
| Shadow | `--aw-shadow-hairline` |
| Thumb | 44×64, `--aw-surface-raised` |
| New badge | `--aw-positive` |

## Layout & grid
- `--h` in a list: full-width 4-column span (370px) with `width:100%`; the template stacks them with a 12px gap.
- `--v` in a horizontal scroll: fixed 162px items, exempt from column widths; the row starts at the 16px margin. See Card carousel (`02-design-system/patterns/card-carousel.md`) and grid (`02-design-system/foundations/grid.md`) rule 4.

## Accessibility
- Make each card one link or button named by the query and its count ("Mantle PSA 6+, 18 new lots").
- The chevron and thumbnail are decorative; mark them `aria-hidden="true"`.
- The NEW badge repeats the count as text, so it is not colour-only.

## Do / Don't
- ✅ Use real query names ("Baseball · PSA 8+ · < $10k") and live counts, varied across cards.
- ✅ Use green only for new matches.
- ❌ Don't show a total saved count where new matches are meant; new alerts and total size are different numbers.
- ❌ Don't use the listing card for a saved search.

## Example
```html
<div class="aw-saved-search aw-saved-search--h" style="width:100%">
  <div class="aw-saved-search__thumb aw-photo aw-photo--cobb"></div>
  <div style="flex:1"><div class="aw-body-strong">Baseball · PSA 8+ · &lt; $10k</div><div class="aw-body-muted">Heritage, Goldin · 32 lots</div></div>
  <svg class="aw-icon" style="width:18px;height:18px;color:var(--aw-text-muted)"><use href="#aw-i-chevron-right"/></svg>
</div>
```

## Related
- [Badge](badge.md) · [Listing card](listing-card.md) · Section header (`02-design-system/patterns/section-header.md`)
- Card carousel (`02-design-system/patterns/card-carousel.md`) · Content (`02-design-system/foundations/content.md`)

## Open questions
- `--h` is 253px in CSS but every template overrides it to `width:100%`. Is 253px still used anywhere?
- The `--v` thumb is resized inline to 100% × 88px; no class covers that size.
- Product rules define saved-search statuses (available / new / ending / expired). No visual state exists for them.
- The old Figma set had a third "H2" denser variant with no CSS class.
- The template separates stacked `--h` cards and pinned `--v` cards by 12px; the grid gutter is 8px.
