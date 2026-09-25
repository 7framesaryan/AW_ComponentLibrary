# Search

`.aw-search` · inputs-and-controls · status: **catalogued** · registry id `search`

A blurred-glass search field (magnifier icon plus text input) that sits over scrolling content and starts or refines a search.

## When to use
- The main search entry on Home and the search screen: large default `.aw-search`.
- An in-page or in-header query field, for example the search-results header beside back and filter buttons: compact `.aw-search--sm`.
- Any place the user types a free-text query for cards, players, sets or grades.

## When not to use
- A labelled form or auth input (email, max bid) → use [Field](field.md)
- A numeric min/max filter → use [Range](range.md)
- Picking from a fixed set of filter values → use [Filter chip](filter-chip.md) or [Filter option row](option-row.md)

## Anatomy
```text
label.aw-search                          row container, gap --aw-space-row
├── svg.aw-icon.aw-search__icon          magnifier (#aw-i-search), 20px large / 18px compact
└── input.aw-search__input               flex:1 text input; placeholder in --aw-text-secondary
```

## Variants
| Class | Use |
|---|---|
| `.aw-search` | Large, 48px tall, radius `--aw-radius-search-lg` (12px). Home and search screen. |
| `.aw-search.aw-search--sm` | Compact, 40px tall, radius `--aw-radius-search-sm` (8px), fill `--aw-surface-search-small`. Headers and in-page filtering. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | 1px transparent border, translucent fill, 12px backdrop blur |
| Focused | add `.is-focused` to `.aw-search` | Border reads as 2px `--aw-border-primary` (#009350): 1px border plus a 1px inset ring, so content doesn't shift |
| Filled | set `value` on the input | Text in `--aw-text-primary` |
| Disabled / error | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Fill (large) | `--aw-surface-translucent` (#00000066) |
| Fill (compact) | `--aw-surface-search-small` (#333333b3) |
| Blur | `--aw-glass-blur-search` (12px) |
| Radius | `--aw-radius-search-lg` (12px) / `--aw-radius-search-sm` (8px) |
| Horizontal padding | `--aw-space-section` (16px) |
| Icon-to-input gap | `--aw-space-row` (8px) |
| Icon and placeholder colour | `--aw-text-secondary` (#d4d4d8) |
| Input text | `--aw-fs-sm` (14px), `--aw-fw-medium`, `--aw-text-primary` |
| Focus border | `--aw-border-primary` (#009350), 2px (1px border + 1px inset `box-shadow` ring) |

## Layout & grid
- The large field spans all 4 columns (370px) on its own row.
- The compact field in a header takes the remaining width (`flex:1`) between icon buttons; the row still starts and ends at the 16px margin.
- Height is fixed by the variant (48px / 40px); do not set a height.

## Accessibility
- Wrap in a `<label>` (as the templates do) or give the input an `aria-label`; the placeholder is not a label.
- The magnifier icon is decorative: add `aria-hidden="true"`.
- Consider `type="search"` and `role="search"` on the surrounding form. Not specified in the sources.

## Do / Don't
- ✅ Use a real prompt as the placeholder, never just "Search" (see content (`02-design-system/foundations/content.md`)).
- ✅ Keep the backdrop blur: the field sits over scrolling content.
- ✅ Show focus with `.is-focused` only; green = focus here.
- ❌ Don't hand-build a search field from a div and text.
- ❌ Don't draw the 2px green border on an unfocused field.
- ❌ Don't restyle the compact field to be 48px tall; pick the large variant instead.

## Example
```html
<label class="aw-search"><svg class="aw-icon aw-search__icon" style="width:20px;height:20px"><use href="#aw-i-search"/></svg><input class="aw-search__input" placeholder="Search cards, players, sets…"></label>
```

## Related
- [Filter chip](filter-chip.md), Filter chip row (`02-design-system/patterns/filter-chip-row.md`) — refine results under the search header
- [Icon button](icon-button.md) — back and filter buttons beside the compact field
- Glass top bar (`02-design-system/patterns/glass-top-bar.md`), effects (`02-design-system/foundations/effects.md`), icons (`02-design-system/foundations/icons.md`)

## Open questions
- Placeholder copy differs: templates use "Search cards, players, sets…", content.md lists "Search for baseball cards, players, sets, or grades". Which is canonical?
- The old Figma guide gave the large default a `#18181b` fill and a 1px `#a1a1aa` border; the CSS uses a translucent fill and transparent border. Confirm against Figma.
- The old guide placed the compact field in the Watchlist, Portfolio and Saved searches title blocks; no current template shows that.
- The gallery focused example colours the icon `--aw-text-accent` inline; CSS does not do this for `.is-focused`. Is the green icon part of the focused state?
- Disabled, error and clear-button states are not specified.
