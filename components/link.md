# Link

`.aw-link` · actions · status: **verified** · registry id `link`

An inline text link that goes somewhere, in white or green, optionally underlined, on a tinted block, or with an anchor icon when it leaves AuctionWire.

Imported from the AW Design System Figma file (`tyqrAWDfmJ8E7yLRmap6VH`, page **Link**): component
set **Link** `483:42676` (22 variants: color × size × isBlock × isUnderline, plus showAnchorIcon).
Every value below is measured from that set, and 18 variants were pixel-diffed against Figma's 2x export.

## When to use
- Navigation inside running text or beside a form: "Forgot password?", "Terms of Service".
- Sending the user to the source auction house to bid: "View on Heritage Auctions" with the anchor icon. AuctionWire is referral-first, so this is the link that matters most.
- `--block` for a compact standalone link that needs a tap target of its own, such as "Open listing" under a card.

## When not to use
- Starting an action (bid, save, confirm) → use [Button](button.md)
- A control that is only an icon → use [Icon button](icon-button.md)
- A row that opens a detail screen → use [List row](list-row.md)

## Anatomy
```text
a.aw-link                inline-flex row, gap 4, padding-right 4
├── label text           the destination, not "click here"
└── svg.aw-icon          optional anchor icon (#aw-i-external-link), 12 / 16 / 18 by size
```

## Variants

### Size
| Class | Label | Icon |
|---|---|---|
| `.aw-link--sm` | 14/20 regular | 12 |
| `.aw-link` (md, default) | 16/24 regular | 16 |
| `.aw-link--lg` | 18/28 **medium** | 18 |

### Colour
| Class | Label | Block fill |
|---|---|---|
| `.aw-link` (foreground) | `--aw-link-text` (#ecedee) | `--aw-surface-raised` (#27272a) |
| `.aw-link--primary` | `--aw-text-accent` (#009350) | `--aw-link-block-primary` (#172e20) |

### Modifiers
| Class | Effect |
|---|---|
| `.aw-link--underline` | Underlined, offset `0.2em` (matches Figma's automatic underline) |
| `.aw-link--block` | Tinted panel: padding 4 × 8, radius `--aw-link-block-radius` 12 |
| `svg.aw-icon` child | The anchor icon; add it whenever the link opens another site |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | The set defines one state. It has no hover, pressed, visited or disabled look |

## Tokens
| Property | Token |
|---|---|
| Foreground label | `--aw-link-text` (#ecedee, Figma `colors/layout/foreground`) |
| Primary label | `--aw-text-accent` (#009350) |
| Block fill | `--aw-surface-raised` · primary `--aw-link-block-primary` (#172e20, Figma `colors/base/primary-50`) |
| Block radius | `--aw-link-block-radius` 12 |
| Gap / padding | `--aw-space-tight` 4 · block `--aw-space-tight` 4 × `--aw-space-row` 8 |
| Labels | `--aw-fs-sm`/`base`/`lg` with their line heights |

## Layout & grid
- Inline: a link sits in text or beside a control and takes no column of its own.
- A block link hugs its label. Don't stretch it to a column span; a full-width action is a Button.

## Accessibility
- Use a real `<a href>`. For a link to another site, the anchor icon is decorative (`aria-hidden="true"`), so say where it goes in the label ("View on Heritage Auctions").
- `--aw-link-text` on `--aw-bg` passes AA. Green `--aw-text-accent` on `--aw-bg` is about 5:1 and passes for body text.

## Do / Don't
- ✅ Name the destination in the label.
- ✅ Always show the anchor icon on links that leave AuctionWire.
- ❌ Don't use a link to place a bid or save something; that's a Button.
- ❌ Don't underline every link in a list; underline links that sit inside running text.

## Example
```html
<a class="aw-link aw-link--primary" href="…">View on Heritage Auctions<svg class="aw-icon" aria-hidden="true"><use href="#aw-i-external-link"/></svg></a>
```

## Related
- [Button](button.md) · [Icon button](icon-button.md) · [List row](list-row.md)
- icons (`02-design-system/foundations/icons.md`) · colour (`02-design-system/foundations/color.md`)

## Open questions
- Not imported: `color=secondary`, which sits outside the AuctionWire palette.
- The set's anchor icon is a legacy vuesax "link" glyph. `foundations/icons.md` says to use Solar for new work, so this uses Solar `square-top-up` as `#aw-i-external-link`. It's the same idea, not the same drawing.
- The set has no hover, pressed or visited state.
