# Empty state

`.aw-empty` · overlays-and-feedback · status: **catalogued** · registry id `empty`

A centred icon, title, short body and optional action shown when a list has no results.

## When to use
- A search or filtered list returns zero results ("No lots match").
- A section has nothing to show yet and the user can act to change that (clear filters, widen range).

## When not to use
- Some rows still match an active filter → keep non-matching rows in place and dimmed; see Empty filtered state (`02-design-system/patterns/empty-filtered-state.md`)
- Explaining something before an action → use [Information alert](info-alert.md)
- Confirming a completed task → use [Success indicator](success-indicator.md) with [Success heading](success-heading.md)

## Anatomy
```text
div.aw-empty                   centred column, gap 12px
├── div.aw-empty__icon         56px round raised tile holding a sprite icon (26px)
├── div.aw-empty__title        short headline
├── div.aw-empty__body         one-sentence guidance, max 34ch
└── button.aw-btn ...          optional action (small outline in the sample)
```

## Variants
| Class | Use |
|---|---|
| `.aw-empty` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Static |
| With action | add a button as the last child | Adds a recovery action |

## Tokens
| Property | Token |
|---|---|
| Gap | `--aw-space-block` (12px) |
| Padding | `--aw-space-section-lg` (40px) vertical, `--aw-space-section` (16px) horizontal |
| Icon tile | 56 x 56, `--aw-surface-raised` (#27272a), `--aw-radius-pill` |
| Icon colour | `--aw-text-muted` (#a1a1aa) |
| Title | `--aw-fs-base` (16px), `--aw-fw-semibold`, `--aw-text-secondary` (#d4d4d8) |
| Body | `--aw-fs-xs` (12px), `--aw-text-muted`, max width 34ch |

## Layout & grid
- Spans all 4 columns (370px) and centres its content.
- Place it where the list would be, below the search header and filter chips, so filters stay reachable.
- The gallery overrides padding to `24px 8px` inside a small panel; use the default padding on a screen.

## Accessibility
- If the empty state appears after a filter or search change, announce it (for example a `role="status"` region around the title). Not in the sample; recommended.
- The icon is decorative (`aria-hidden="true"`).
- The action is a real `<button>` with a clear verb label.

## Do / Don't
- ✅ Say what happened and how to recover: "Try widening your price range or clearing a filter."
- ✅ Offer one recovery action, e.g. `.aw-btn--sm.aw-btn--outline` "Clear filters".
- ✅ Use a neutral sprite icon such as `search` or `filter`.
- ❌ Don't remove filtered-out rows when some rows still match; dim them in place instead.
- ❌ Don't make the icon red; red is for countdowns.
- ❌ Don't use a primary solid button here; the screen's main CTA lives elsewhere.

## Example
```html
<div class="aw-empty">
  <div class="aw-empty__icon"><svg class="aw-icon" style="width:26px;height:26px"><use href="#aw-i-search"/></svg></div>
  <div class="aw-empty__title">No lots match</div>
  <div class="aw-empty__body">Try widening your price range or clearing a filter.</div>
  <button class="aw-btn aw-btn--sm aw-btn--outline">Clear filters</button>
</div>
```

## Related
- Empty filtered state (`02-design-system/patterns/empty-filtered-state.md`), [Filter chip](filter-chip.md), [Button](button.md), [List row](list-row.md)
- content (`02-design-system/foundations/content.md`), icons (`02-design-system/foundations/icons.md`)

## Open questions
- The old Figma pattern used a red "Danger Triangle" icon for no-match; the CSS uses a muted icon, and red is reserved for countdowns. Confirm muted is correct.
- Title/body copy rules for other empty contexts (Watchlist, Portfolio, Saved searches) are not specified.
- Whether the action is always outline small is not specified; only one sample exists.
