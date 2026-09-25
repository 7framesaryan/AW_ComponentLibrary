# Badge

`.aw-badge` · chips-and-badges · status: **verified** · registry id `badge`

A small pill count that sits on an icon, avatar or label to say how many new things are waiting.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, page `696:52331`, component set
**Badge** `2250:38501`, 48 variants: variant × color × size × showOutline). Every value below is
measured from that set. `variant=shadow` (12 variants) is **not** imported: its drop shadows (blur 15)
break the Foundations rule of no soft shadows and no blur above 12. `.aw-badge--positive-soft`,
`.aw-badge-dot` and `.aw-badge-anchor` are kept from the catalogued badge because screens use them;
they are not in the Figma set.

## When to use
- A count of new alerts or activity pinned to an icon button or nav item (`.aw-badge-anchor`).
- A small count next to a label or avatar: "3" new matches on a saved search.
- `--primary` when the count is good news or needs the eye (new matches, new bids).
- The default grey when the count is neutral (items in a list, unread notes).
- `.aw-badge--positive-soft` for an inline savings label such as "Save 25%" on a plan.

## When not to use
- Auction state (Live / Upcoming / Ended) → use [Status chip](status-chip.md)
- A price, grade, tag or any word-length label → use [Chip](chip.md)
- A metric with label and value → use [Stat pill](stat-pill.md)
- A filter → use [Filter chip](filter-chip.md)

## Anatomy
```text
span[style=position:relative]            host (icon button, avatar…) — only for anchored badges
├── button.aw-btn-icon-ghost             the host control
└── span.aw-badge.aw-badge-anchor        pill, min-width = height, padding 0 4, 2px outline
    └── count text                       12/16 regular (sm) · 14/20 regular (md, lg)
```

## Variants

### Variant
| Class | Fill | Outline (showOutline on) | Use |
|---|---|---|---|
| *(default, solid)* | `--aw-surface-strong` | 2px `--aw-black` | Neutral count |
| `.aw-badge--flat` | `--aw-default-flat` (translucent) | 2px `--aw-black` | Quieter count on a busy surface |
| `.aw-badge--faded` | `--aw-surface-raised` | 2px `--aw-zinc-700` | Count that must read as a separate chip |

### Colour
| Class | Solid | Flat | Faded |
|---|---|---|---|
| *(default)* | white on `--aw-surface-strong` | white on `--aw-default-flat` | white on `--aw-surface-raised` |
| `.aw-badge--primary` | white on `--aw-positive` | `--aw-text-accent` on `--aw-primary-flat` | `--aw-text-accent` on `--aw-surface-raised` |

`.aw-badge--positive` is the catalogued name for `--primary` and still works everywhere `--primary` does.

### Size
| Class | Height / min-width | Text |
|---|---|---|
| *(default, sm)* | 16px (`--aw-badge-h-sm`) | 12/16 regular |
| `.aw-badge--md` | 20px (`--aw-badge-h-md`) | 14/20 regular |
| `.aw-badge--lg` | 24px (`--aw-badge-h-lg`) | 14/20 regular |

### Outline
| Class | Use |
|---|---|
| *(default, on)* | 2px ring drawn outside the pill; lifts an anchored badge off its host |
| `.aw-badge--no-outline` | Inline badges that don't overlap anything |

### Kept from the catalogued badge (not in the Figma set)
| Class | Use |
|---|---|
| `.aw-badge--positive-soft` | Inline savings label: `--aw-badge-soft-positive-bg` fill, `--aw-text-accent` 11/16 semibold, no outline |
| `.aw-badge-dot` | Bare 8px dot, `--aw-urgency` fill, no text (standalone class) |
| `.aw-badge-anchor` | `position:absolute; top:-4px; right:-4px` on a relatively positioned host |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | Pick a variant | Static; the set has no interactive states |
| Hidden (count 0) | Remove the badge | Not specified in the set |
| Overflow (99+) | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Height / min-width | `--aw-badge-h-sm` 16 · `--aw-badge-h-md` 20 · `--aw-badge-h-lg` 24 |
| Side padding | `--aw-space-tight` (4) |
| Radius | `--aw-radius-pill` |
| Outline | `--aw-badge-outline-width` (2px) · `--aw-black` (`colors/layout/background`), faded `--aw-zinc-700` (`colors/base/default`) |
| Solid fill | `--aw-surface-strong` (`colors/base/default`) · primary `--aw-positive` (`colors/base/primary`) |
| Flat fill | `--aw-default-flat` (`colors/flat/default-flat`) · primary `--aw-primary-flat` (`colors/flat/primary-flat`) |
| Faded fill | `--aw-surface-raised` (`colors/base/default-100`) |
| Text | `--aw-text-primary`; primary flat / faded `--aw-text-accent`. `--aw-fs-xs`/`--aw-lh-xs` (sm), `--aw-fs-sm`/`--aw-lh-sm` (md, lg), `--aw-fw-regular` |

## Layout & grid
- An anchored badge sits outside the grid, offset 4px past its host's top-right corner.
- An inline badge follows its container's gap (`--aw-space-row` beside a label).
- Width hugs the count; it never shrinks below a circle.

## Accessibility
- Put the count into the host's accessible name (`aria-label="Notifications, 3 new"`) and mark the anchored badge `aria-hidden="true"`.
- An inline text badge ("Save 25%") can be read as normal text.
- A bare dot has no text, so the host label must say what's new.

## Do / Don't
- ✅ On the Watchlist nav, the badge counts new alerts or activity, never total watchlist size.
- ✅ Keep the outline on for anchored badges; turn it off for inline ones.
- ✅ Keep badge text to a number.
- ❌ Don't use a badge for auction state or as a tag; that's a chip.
- ❌ Don't anchor a badge without a `position:relative` host.
- ❌ Don't show a badge for a zero count.

## Example
```html
<span style="position:relative;display:inline-flex">
  <button type="button" class="aw-btn-icon-ghost" aria-label="Notifications, 3 new"><svg class="aw-icon" style="width:18px;height:18px" aria-hidden="true"><use href="#aw-i-bell"/></svg></button>
  <span class="aw-badge aw-badge--primary aw-badge-anchor" aria-hidden="true">3</span>
</span>
<span class="aw-badge aw-badge--flat aw-badge--primary aw-badge--md aw-badge--no-outline">18</span>
```

## Related
- [Icon button](icon-button.md) · [Nav item](nav-item.md) · [Saved search](saved-search.md) · [Plan option](plan-option.md)
- [Status chip](status-chip.md) · [Chip](chip.md) · Color (`02-design-system/foundations/color.md`)

## Open questions (raised by the import, 2026-09-25)
1. **The default count is no longer amber.** The catalogued badge filled with `--aw-caution` amber and
   dark bold 10px text at 18px; the set's default is grey `colors/base/default` with white 12/16
   regular at 16px. Plain `.aw-badge` now follows the set, so every existing count badge turns grey.
   Should the top-bar notification badge move to `--primary`?
2. **The outline colour is pure black** (`colors/layout/background` #000000), not the AuctionWire
   screen background `--aw-bg` (#040501). The code follows the set.
3. `variant=shadow` is not imported (blur 15 soft shadows). If it is wanted, Foundations needs a
   shadow rule change first.
4. `.aw-badge-dot` fills with `--aw-urgency` red, which conflicts with red = countdowns only, and has
   no counterpart in the set.
5. `--positive-soft` comes from a screenshot reconstruction and has no counterpart in the set.
6. Zero-count, overflow ("99+") and maximum-digit rules are not specified.
