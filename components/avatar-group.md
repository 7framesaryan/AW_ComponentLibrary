# Avatar group

`.aw-avatar-group` · cards-and-content · status: **verified** · registry id `avatar-group`

A row of overlapping avatars that stands for several people at once, ending in a "+N" count for the ones not shown.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, page `2545:33395`, component
set **Avatar Group** `2545:33494`, 30 variants: radius × size × color × isGrid). Every value below is
measured from that set in dark mode. `isGrid` has only `off`, so there is no grid layout. The single
avatar is [Avatar](avatar.md) and is not changed by this import.

## When to use
- Showing that several people share something: bidders on a lot, watchers of a card, members of a collection.
- Up to five faces, then a "+N" item for the rest.
- `--primary` when the group belongs to the signed-in user or should read as active.

## When not to use
- One person → use [Avatar](avatar.md), or [User](user.md) when the name sits beside it
- A row of card thumbnails → use [Fast switcher](fast-switcher.md)
- A count on its own with no faces → use [Badge](badge.md)

## Anatomy
```text
div.aw-avatar-group            inline-flex row; each item after the first pulls left 8px
├── span.aw-avatar-group__item photo (<img>, cover-cropped) or initials, on the colour fill
├── …                          up to five people
└── span.aw-avatar-group__item "+N" label on the same fill (the set's maxCount)
```
Each item carries two outside rings: 2px of `--aw-black`, then the colour out to 4px. Later items sit
on top of earlier ones, so the ring cuts a clean edge into the avatar before it.

## Variants

### Size
| Class | Item | "+N" / initials |
|---|---|---|
| `.aw-avatar-group--sm` | 32 × 32 | 12/16 regular |
| *(default, md)* | 40 × 40 | 12/16 regular |
| `.aw-avatar-group--lg` | 56 × 56 | 14/20 regular |

### Color
| Class | Fill and outer ring |
|---|---|
| *(default)* | `--aw-surface-strong` (`colors/base/default`) |
| `.aw-avatar-group--primary` | `--aw-positive` (`colors/base/primary`) |

### Radius
| Class | Radius |
|---|---|
| `.aw-avatar-group--r-none` | 0 |
| `.aw-avatar-group--r-sm` | 8px (`--aw-avatar-group-radius-sm`) |
| `.aw-avatar-group--r-md` | 12px (`--aw-avatar-group-radius-md`) |
| `.aw-avatar-group--r-lg` | 14px (`--aw-avatar-group-radius-lg`) |
| *(default, full)* | pill (`--aw-radius-pill`) |

### Count
The set always has five avatars plus the "+N" item; its booleans hide avatars 2, 3 and 4 and the "+N"
item. In code, render only the items you need.

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Variant styling |
| With photo | `<img>` inside the item | Photo fills the item; the fill shows only while it loads |
| Initials / count | text inside the item | White label centred on the fill |
| Hover, focus, pressed, disabled | Not specified in this set | Not specified |

## Tokens
| Property | Token |
|---|---|
| Item size | `--aw-avatar-group-size-sm` 32 · `--aw-avatar-group-size-md` 40 · `--aw-avatar-group-size-lg` 56 |
| Overlap | `--aw-space-row` (8), applied as a negative left margin |
| Inner ring | `--aw-avatar-group-ring-gap` (2px) of `--aw-black` (`colors/layout/background`) |
| Outer ring | out to `--aw-avatar-group-ring` (4px), same colour as the fill |
| Fill | `--aw-surface-strong` · `--aw-positive` |
| Radius | `--aw-avatar-group-radius-sm` · `-md` · `-lg` · `--aw-radius-pill` |
| Label | `--aw-fs-xs`/`--aw-lh-xs` (sm, md) · `--aw-fs-sm`/`--aw-lh-sm` (lg), `--aw-fw-regular`, `--aw-text-primary` |

## Layout & grid
- The group hugs its content and never stretches. Five md avatars plus "+N" measure 200px; sm 152px; lg 296px.
- The rings draw outside the box (4px). Leave at least 4px clear around the group so they aren't clipped.
- Inside a card or row it follows that component's padding, not the column grid.

## Accessibility
- Give the group `role="group"` and an `aria-label` that states the whole count ("9 bidders"); the
  "+4" label alone doesn't say what it counts.
- A photo needs `alt` with the person's name, or `alt=""` when the group label already covers it.
- Initials are decorative once the group is labelled.

## Do / Don't
- ✅ Show at most five people, then "+N".
- ✅ Keep one size, one colour and one radius across a group.
- ❌ Don't drop the rings or change the overlap; the rings separate the faces.
- ❌ Don't use a group for one person.

## Example
```html
<div class="aw-avatar-group aw-avatar-group--sm" role="group" aria-label="9 bidders">
  <span class="aw-avatar-group__item"><img src="…" alt=""></span>
  <span class="aw-avatar-group__item">JG</span>
  <span class="aw-avatar-group__item">+7</span>
</div>
```

## Related
- [Avatar](avatar.md) · [User](user.md) · [Badge](badge.md)

## Open questions (raised by the import, 2026-09-25)
1. The set's avatars (32 / 40 / 56, fill `colors/base/default`) differ from the catalogued
   [Avatar](avatar.md) (32, `--aw-zinc-200` fill). Should the single avatar be re-imported from the
   Figma **Avatar** set so the two agree?
2. `isGrid` exists as a property but has only `off`. Is a grid layout planned?
3. The radius scale (0 · 8 · 12 · 14 · pill) is the same as Button's; the three values are held here as
   avatar-group tokens rather than shared radius tokens.
4. The set has no interactive states. If the group opens a list of people, it needs a focus style.
