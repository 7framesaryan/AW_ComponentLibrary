# Button

`.aw-btn` · actions · status: **verified** · registry id `button`

A button that starts one action, with an optional 20px icon on either side of the label.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, component set **Button**
`2209:26195`, 270 variants: Type × State × size × radius × isIconOnly). Every value below is measured
from that set. The ad-hoc button sets on the same page (the `Buttons` frame, `5414:59886` — "Button
Primary Large", "Button Flat Small", "Button Light Small" and the rest) are **not** part of the
system and are not imported.

## When to use
- Starting an action with a text label: bid, confirm, sign in, show results, clear filters.
- `--primary` for the single most important action on a surface.
- `--secondary` for the bid CTA on cards and rows, and for a secondary action beside a primary
  ("Reset" next to "Show 248 results").
- `--tertiary` for a low-emphasis action that shouldn't pull weight ("Maybe later").
- `--icon` when the control is a single icon with no label and still needs a button's fill or border.

## When not to use
- A ghost icon control in a header or toolbar → use [Icon button](icon-button.md)
- Sign-in with Google or Apple → use [Social auth button](social-btn.md)
- A home-screen shortcut → use [Quick action](quick-action.md)
- Filtering a list → use [Filter chip](filter-chip.md)

## Anatomy
```text
button.aw-btn             centred inline-flex row, gap --aw-space-row (8)
├── svg.aw-icon           optional leading icon, 20 × 20
├── label text            the action, as a verb — 14/20 regular, --aw-text-primary
└── svg.aw-icon           optional trailing icon, 20 × 20
```

## Variants

### Type
| Class | Fill | Border | Use |
|---|---|---|---|
| `.aw-btn--primary` | `--aw-positive` | none | The one main action on a surface |
| `.aw-btn--secondary` | none | 1px `--aw-positive` | Secondary action; the bid CTA on cards |
| `.aw-btn--tertiary` | none | none | Low-emphasis action, label only |

`.aw-btn` on its own has no fill and no border, so always pair it with a type.

### Size
| Class | Height | Side padding |
|---|---|---|
| `.aw-btn--sm` | 32px | `--aw-space-block` (12) |
| *(default)* | 40px | `--aw-space-section` (16) |
| `.aw-btn--lg` | 48px | `--aw-space-section-sm` (24) |

The label is **14/20 regular at every size** — size changes the box, never the type.

### Radius
| Class | Radius |
|---|---|
| `.aw-btn--r-none` | 0 |
| *(default)* | 8px (`--aw-radius-button`) |
| `.aw-btn--r-md` | 12px (`--aw-btn-radius-md`) |
| `.aw-btn--r-lg` | 14px (`--aw-btn-radius-lg`) |
| `.aw-btn--r-full` | pill (`--aw-radius-pill`) |

### Shape and width
| Class | Use |
|---|---|
| `.aw-btn--icon` | Icon only: square 32 / 40 / 48 by size, no padding. Needs an `aria-label` |
| `.aw-btn--full` | `width: 100%`, filling its container or column span |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Variant styling |
| Hover | `:hover` | Primary fill and secondary border become `--aw-primary-400` |
| Disabled | `disabled` attribute or `.is-disabled` | Primary fill and secondary border become `--aw-primary-100`; no pointer events. The label stays white |
| Tertiary hover / disabled | — | **The set gives tertiary no hover or disabled treatment**; it looks the same in all three states |
| Pressed | Not specified | Not specified |
| Focus-visible | Not specified | Not specified |
| Loading | Not specified in this set | Not specified |

## Tokens
| Property | Token |
|---|---|
| Height | `--aw-btn-h-sm` 32 · `--aw-btn-h-md` 40 · `--aw-btn-h-lg` 48 |
| Side padding | `--aw-space-block` · `--aw-space-section` · `--aw-space-section-sm` |
| Icon slot | `--aw-btn-icon-size` (20px, every size) |
| Icon–label gap | `--aw-space-row` (8) |
| Radius | `--aw-radius-button` · `--aw-btn-radius-md` · `--aw-btn-radius-lg` · `--aw-radius-pill` |
| Label | `--aw-fs-sm` / `--aw-lh-sm` / `--aw-fw-regular`, `--aw-text-primary` |
| Primary fill | `--aw-positive` (`colors/base/primary`) |
| Hover | `--aw-primary-400` (`colors/base/primary-400`) |
| Disabled | `--aw-primary-100` (`colors/base/primary-100`) |
| Icon-only primary fill | `--aw-primary-600` (`colors/base/primary-600`) |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- A full-width button is a 4-column span (370px). Use `.aw-btn--full` inside `.aw-col-4`.
- Two buttons side by side sit on column spans with the 8px gutter, for example two `.aw-col-2`.
- Inside a card or list row the button follows the component's padding, not the grid
  (see grid (`02-design-system/foundations/grid.md`) rule 5).
- The detail-screen primary lives in the bottom action bar (`02-design-system/patterns/bottom-action-bar.md`).

## Accessibility
- Always use a real `<button>` (add `type="button"` outside forms), never a styled `span` or `div`.
- Use the native `disabled` attribute so assistive tech announces it.
- The label names the action. Mark a decorative icon beside the label `aria-hidden="true"`.
- `--icon` has no label, so it **must** carry an `aria-label`.
- 40 and 48 meet the touch-target size. `--sm` is 32 tall, so give it generous surrounding space.

## Do / Don't
- ✅ One `--primary` per surface.
- ✅ Pair `.aw-btn` with a type; on its own it is invisible.
- ✅ Keep the label a verb, and keep it short enough not to wrap.
- ❌ Don't restyle the height or the label size to fit a layout — pick the size variant.
- ❌ Don't use `--tertiary` where the action must be found quickly; it carries no fill or border.

## Example
```html
<button type="button" class="aw-btn aw-btn--primary aw-btn--lg aw-btn--full">Place Bid — $3,900</button>
<button type="button" class="aw-btn aw-btn--secondary aw-btn--sm">Bid on site</button>
<button type="button" class="aw-btn aw-btn--primary aw-btn--icon aw-btn--r-full" aria-label="Add saved search">
  <svg class="aw-icon" aria-hidden="true"><use href="#aw-i-plus"/></svg>
</button>
```

## Related
- [Icon button](icon-button.md) · [Social auth button](social-btn.md) · [Quick action](quick-action.md) · [Filter chip](filter-chip.md)
- Bottom action bar (`02-design-system/patterns/bottom-action-bar.md`) · Grid (`02-design-system/foundations/grid.md`) · Colour (`02-design-system/foundations/color.md`)

## Open questions (raised by the import, 2026-09-22)
1. **Icon-only primary uses a different green.** In the set, `isIconOnly=true, State=Default` fills
   with `primary-600` (#72bb8e) instead of `primary` (#009350) — 15 variants. Deliberate, or a slip in
   Figma? The code follows the set.
2. **Tertiary has no hover or disabled treatment.** All three states are identical (no fill, no
   border, white label), so a disabled tertiary is indistinguishable from an active one.
3. **Three Secondary icon-only variants differ**: fill `primary-100` with a `primary-300` 2px border,
   where every other Secondary is transparent with a 1px border.
4. **The label is white in every type**, including secondary and tertiary on a dark surface. Earlier
   AuctionWire screens used a green label on the outline CTA. Which is correct?
5. The set has no pressed, focus-visible or loading state.
6. The set's radius scale (0 · 8 · 12 · 14 · pill) doesn't match the foundation radius names; the two
   new values are held as `--aw-btn-radius-md` / `--aw-btn-radius-lg`.
