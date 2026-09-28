# Suggestion row

`.aw-suggestion-row` · inputs-and-controls · status: **catalogued** · registry id `suggestion-row`

One suggested search keyword under the search field while the user types: search icon, the keyword with
the typed part in white and the rest muted, and an arrow that fills the keyword into the field.

## When to use
- Live keyword suggestions in the bottom-anchored search.

## When not to use
- Recent searches with no typing → use the same row with the clock icon, no `__rest`
- Card results → use [List-result row](list-row.md) or a card

## Anatomy
```text
button.aw-suggestion-row              pad 8, radius 12, hover content2
├── svg.aw-icon.aw-suggestion-row__icon   16, muted
├── span.aw-suggestion-row__label          14/20 semibold (the typed part)
│   └── span.aw-suggestion-row__rest       regular, muted (the rest of the keyword)
└── span.aw-suggestion-row__fill           20, arrow-left-up: fills the field without searching
```

## Variants
| Class | Use |
|---|---|
| `.aw-suggestion-row` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Hover / pressed | pointer | Fill `--aw-surface-raised` |

## Tokens
| Property | Token |
|---|---|
| Radius · padding | `--aw-rounded-medium` · `--aw-space-row` |
| Type | `--aw-fs-sm` 14/20 |
| Muted part / icons | `--aw-text-muted` · fill arrow `--aw-text-disabled` |

## Accessibility
- The row runs the search; the fill arrow is a separate control with `aria-label="Use this search"`.

## Do / Don't
- ✅ Always show the typed text as the first row, even with no match.
- ❌ Don't show cards here; suggestions are keywords.

## Example
```html
<button class="aw-suggestion-row"><svg class="aw-icon aw-suggestion-row__icon"><use href="#aw-i-search"/></svg><span class="aw-suggestion-row__label">Mickey Mantle<span class="aw-suggestion-row__rest"> 1956 Topps</span></span><span class="aw-suggestion-row__fill" aria-label="Use this search"><svg class="aw-icon"><use href="#aw-i-arrow-left-up"/></svg></span></button>
```

## Related
- [Search](search.md)

## Open questions
- Not in the Figma kit.
