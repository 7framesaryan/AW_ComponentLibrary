# Avatar

`.aw-avatar` · cards-and-content · status: **catalogued** · registry id `avatar`

A 32×32 round image of a person, with a user-icon fallback when no photo exists.

## When to use
- The signed-in user in the Home Glass top bar (`02-design-system/patterns/glass-top-bar.md`), next to the greeting.
- A player in a [Top-player card](top-player.md).
- Profile or account rows.

## When not to use
- A card photo or thumbnail → use [Image block](image-block.md)
- A circular card thumbnail in a switcher → use [Fast switcher](fast-switcher.md)
- An icon-only action → use [Icon button](icon-button.md)

## Anatomy
```text
.aw-avatar            32×32 circle, centred, clips content
└── <img> or svg      photo (cover-cropped) or 18px #aw-i-user icon fallback
```

## Variants
| Class | Use |
|---|---|
| `.aw-avatar` | The only variant |

## States
| State | How to apply | What changes |
|---|---|---|
| With photo | child `<img>` | Image fills the circle (`object-fit: cover`) |
| Fallback | child `svg.aw-icon` using `#aw-i-user` | Icon on `--aw-zinc-200` fill |
| Sizes other than 32px | Not specified | Not specified |
| Initials | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Size | 32×32, fixed in CSS |
| Radius | `--aw-radius-pill` |
| Fill | `--aw-zinc-200` (#e4e4e7) |
| Icon colour | `--aw-avatar-figure` |

## Layout & grid
- `flex: none`, so it never shrinks in a row. It sits inside chrome or a component and follows that component's gap, not the grid.

## Accessibility
- A user photo gets `alt` with the person's name, or `alt=""` when the name is shown right beside it (as in the greeting).
- The icon fallback is decorative: `aria-hidden="true"`.
- If the avatar opens a profile, wrap it in a `<button>` or link with a label and a 44px hit area.

## Do / Don't
- ✅ Use a real photo when available, the user icon otherwise.
- ✅ Keep it 32px.
- ❌ Don't use it for card images.
- ❌ Don't resize or recolour it inline in a real screen; the gallery motion demo is not a pattern.

## Example
```html
<div class="aw-avatar"><svg class="aw-icon" style="width:18px;height:18px" aria-hidden="true"><use href="#aw-i-user"/></svg></div>
```

## Related
- [Top-player card](top-player.md) · Glass top bar (`02-design-system/patterns/glass-top-bar.md`) · [Top bar](top-bar.md)
- Icons (`02-design-system/foundations/icons.md`) · Radii (`02-design-system/foundations/radii.md`)

## Open questions
- `--aw-avatar-figure` is used by the CSS but is not defined in `src/tokens.css`, so the fallback icon colour is unresolved.
- The light `--aw-zinc-200` fill on a dark screen: is it intended, or should the fallback use `--aw-surface` / `--aw-surface-strong` as the old Figma guide suggested?
- Other sizes and an initials fallback are not specified.
