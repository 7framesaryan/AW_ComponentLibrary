# Social auth button

`.aw-social-btn` · actions · status: **catalogued** · registry id `social-btn`

A full-width white button that signs the user in with Google or Apple, using component-owned brand colours.

## When to use
- On sign-in and sign-up screens, offering "Continue with Google" and "Continue with Apple".
- Stacked above a [Labeled divider](labeled-divider.md) ("or") and the email form's primary [Button](button.md).

## When not to use
- Email/password sign-in or any other action → use [Button](button.md)
- A general in-app action with an icon → use [Button](button.md) or [Icon button](icon-button.md)

## Where it's used
- Gallery: "Social auth & divider" panel with Google, Apple, an "or" divider and a "Sign in" primary. See `templates/gallery.template.html`
- Not used in a sample screen yet.

## Anatomy
```text
button.aw-social-btn      full-width centred row, gap --aw-space-row
├── svg.aw-icon           brand icon: #aw-i-google or #aw-i-apple (18px in the template)
└── label text            "Continue with Google" / "Continue with Apple"
```

## Variants
| Class | Use |
|---|---|
| `.aw-social-btn` | Base layout only (100% width, 48px tall). Always add a brand variant |
| `.aw-social-btn--google` | `--aw-white` fill, `--aw-google-text` label, 1px `--aw-google-stroke` border |
| `.aw-social-btn--apple` | `--aw-white` fill, `--aw-black` label, no border |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | none | Brand styling |
| Pressed | `:active` | Opacity drops to 0.8 over `--aw-dur-fast` `--aw-ease-out` |
| Disabled | Not specified | Not specified |
| Focus-visible | Not specified | Not specified |
| Loading | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Width / height | 100% / 48px, fixed in CSS |
| Radius | `--aw-radius-button` |
| Icon–label gap | `--aw-space-row` |
| Label | `--aw-fs-sm` / `--aw-fw-medium` |
| Fill | `--aw-white` |
| Google label / border | `--aw-google-text` (#1f1f1f) / `--aw-google-stroke` (#747775) |
| Apple label | `--aw-black` |
| Motion | `--aw-dur-fast`, `--aw-ease-out` |

## Layout & grid
- Always full width: a 4-column span (370px) on the 402px screen.
- Stack vertically. The gallery uses a 12px gap between stacked auth controls; the stack gap is not specified as a token rule.
- Order in the gallery: Google, Apple, "or" divider, primary Sign in.

## Accessibility
- Use a real `<button type="button">`. The visible label ("Continue with Google") is the accessible name.
- Mark the brand icon `aria-hidden="true"`.
- 48px tall meets touch-target size.

## Do / Don't
- ✅ Use the brand variants exactly as defined. Google and Apple colours are component-owned.
- ✅ Keep the "Continue with …" wording consistent across providers.
- ❌ Don't reuse `--aw-google-*` tokens or the white fill for any other component.
- ❌ Don't restyle a social button green or into an outline.
- ❌ Don't use the bare `.aw-social-btn` without a brand variant.

## Example
```html
<button class="aw-social-btn aw-social-btn--google"><svg class="aw-icon" style="width:18px;height:18px"><use href="#aw-i-google"/></svg>Continue with Google</button>
```

## Related
- [Button](button.md) · [Labeled divider](labeled-divider.md) · [Field](field.md)
- Color (`02-design-system/foundations/color.md`) · Icons (`02-design-system/foundations/icons.md`)

## Open questions
- Disabled, focus-visible and loading states are not specified.
- Which sign-in/sign-up screens use this, and in what provider order? The only real usage is the gallery.
- Should Apple come first on iOS? Not specified.
