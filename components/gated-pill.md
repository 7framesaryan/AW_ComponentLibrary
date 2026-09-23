# Gated pill

`.aw-gated-pill` · chips-and-badges · status: **catalogued** · registry id `gated-pill`

A raised pill with a label and an amber lock that marks a fact hidden behind a subscription, such as "Seller" or "PSA Grade".

## When to use
- On a subscription-gated listing card, in place of a fact the user can't see yet ("Seller 🔒", "PSA Grade 🔒").
- Together with the card's "Subscribe to see full details" line (`.aw-listing-card__subscribe`).

## When not to use
- The fact is visible to this user → use [Chip](chip.md)
- A locked fact shown as a label/value line → use [Fact row](fact-row.md)
- Showing auction state → use [Status chip](status-chip.md)
- Asking the user to subscribe → use [Button](button.md) or the listing card's subscribe line

## Where it's used
- Not used in a sample screen yet. The CSS places it in the listing card's `.aw-listing-card__pills` row.

## Anatomy
```text
span.aw-gated-pill        24px row, gap --aw-space-tight
├── label text            12px medium, --aw-text-primary ("Seller", "PSA Grade")
└── svg.aw-icon           lock icon (#aw-i-lock), tinted --aw-text-warning-dim
```

## Variants
| Class | Use |
|---|---|
| `.aw-gated-pill` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| Default (locked) | none | Raised pill with amber lock |
| Unlocked | Replace with a [Chip](chip.md) showing the real value | Not a state of this component |

## Tokens
| Property | Token |
|---|---|
| Height | 24px, fixed in CSS |
| Side padding | `--aw-space-row` |
| Gap | `--aw-space-tight` |
| Radius | `--aw-radius-md` |
| Fill | `--aw-surface-raised` |
| Label | `--aw-fs-xs` / `--aw-fw-medium` / `--aw-text-primary` |
| Lock icon colour | `--aw-text-warning-dim` (#936316) |

## Layout & grid
- Lives inside the listing card's `.aw-listing-card__pills` row, gap `--aw-space-row`, so it follows component spacing, not the grid.
- Width hugs content.
- Icon size: Not specified.

## Accessibility
- Render as `<span>`. Screen readers should hear that the value is locked, for example visually hidden text "Seller, locked" or `aria-label` on a wrapping element. Mark the lock svg `aria-hidden="true"`.
- Don't rely on the amber lock colour alone. The lock shape plus text is the cue.

## Do / Don't
- ✅ Use the `lock` sprite icon, tinted by the component's dim amber.
- ✅ Show the category name ("Seller", "PSA Grade"), never a fake or blurred value.
- ✅ Pair gated pills with the card's subscribe prompt so the user knows how to unlock.
- ❌ Don't make the lock red or green. Amber means caution or gated.
- ❌ Don't use a gated pill for facts the user can already see.
- ❌ Don't hand-colour the icon inline. The component sets it.

## Example
```html
<!-- No real usage in templates yet; markup follows the CSS contract only. -->
<div class="aw-listing-card__pills"><span class="aw-gated-pill">Seller<svg class="aw-icon" style="width:12px;height:12px"><use href="#aw-i-lock"/></svg></span></div>
```

## Related
- [Listing card](listing-card.md) · [Chip](chip.md) · [Fact row](fact-row.md) · [Status chip](status-chip.md)
- Color (`02-design-system/foundations/color.md`) · Icons (`02-design-system/foundations/icons.md`)

## Open questions
- There is no real markup in any template or reproduction. The example is built from the CSS comment, not copied.
- Icon order (label then lock) comes from the CSS comment "Seller 🔒". Confirm.
- Lock icon size is not specified. The example's 12px is a placeholder.
- The accessible announcement for locked content is not specified.
- Which facts can be gated, and for which subscription tiers? See product rules.
