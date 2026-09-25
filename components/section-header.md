# Section header

`.aw-section-header` · navigation-and-chrome · status: **catalogued** · registry id `section-header`

The row that opens a content section: a left title and an optional right action such as "See all".

## When to use
- At the top of every content section: carousels, lists, price history, population, calendar, holdings.
- When a section links to a full list ("See all" + chevron) or carries a small control (a segmented toggle).

## When not to use
- The screen's own title bar → use [Second-level header](header.md) or [Glass top bar](top-bar.md)
- Separating two blocks without a title → use [Divider](divider.md)
- Text between two rules ("or") → use [Labeled divider](labeled-divider.md)

## Anatomy
```text
.aw-section-header                 row, space-between, vertically centred
├── span.aw-section-title-lg       title (or .aw-section-title)
└── a.aw-section-header__action    optional: "See all" + chevron-right icon
    └── svg.aw-icon                tinted --aw-text-accent
```

## Variants
| Class | Use |
|---|---|
| `.aw-section-header` | The only variant. Title size comes from the type class you put inside. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined in CSS. |

## Tokens
| Property | Token |
|---|---|
| Space below the row | `--aw-space-block` (12px) margin-bottom |
| Title (`.aw-section-title-lg`) | `--aw-fs-base` (16px), `--aw-fw-semibold`, `--aw-text-secondary` |
| Title (`.aw-section-title`) | `--aw-fs-sm` (14px), `--aw-fw-semibold`, `--aw-text-secondary` |
| Action text | `--aw-fs-xs` (12px), `--aw-text-primary` |
| Action gap (text to icon) | `--aw-space-tight` (4px) |
| Action icon colour | `--aw-text-accent` (#009350) |

## Layout & grid
- Full width: a 4-column span (370px). Title starts on the left column edge, action ends on the right column edge.
- Inside `.aw-screen` it gets the 16px margin from the screen padding; on an `.aw-grid` give it `.aw-col-4`. Never both (see [screen](screen.md)).
- The section content follows directly below; the 12px margin-bottom is the gap. Saved searches overrides it to 0 inline above a list.
- More detail: section-header pattern (`02-design-system/patterns/section-header.md`).

## Accessibility
- Make the title a real heading (`<h2>`) in production; the templates use `<span>`.
- Give the action an `href` and a specific name if "See all" is ambiguous, e.g. `aria-label="See all ending soon"`.
- The chevron is decorative: add `aria-hidden="true"`.

## Do / Don't
- ✅ Keep the title left and the action right; the row is space-between.
- ✅ Pair "See all" with the `chevron-right` icon.
- ✅ When a section title carries a count, put it in parentheses, e.g. "Watchlist (12)".
- ❌ Never centre a section header.
- ❌ Don't hand-set title font sizes; use `.aw-section-title-lg` or `.aw-section-title`.
- ❌ Don't put a primary button in the action slot.

## Example
```html
<div class="aw-section-header">
  <span class="aw-section-title-lg">Ending soon</span>
  <a class="aw-section-header__action">See all <svg class="aw-icon" style="width:14px;height:14px"><use href="#aw-i-chevron-right"/></svg></a>
</div>
```

## Related
- [Segmented](segmented.md) · [Listing card](listing-card.md) · [Divider](divider.md)
- Section header pattern (`02-design-system/patterns/section-header.md`) · Card carousel pattern (`02-design-system/patterns/card-carousel.md`) · typography (`02-design-system/foundations/typography.md`)

## Open questions
- When to use `.aw-section-title` (14px) versus `.aw-section-title-lg` (16px): the old rule was "16px only when the title has a count", but every template uses the 16px class. Not specified.
- The old pattern had an optional muted sub-line under the title (`.aw-caption`); no anatomy for it in CSS.
- Action icon size (14px) is inline, not a token.
