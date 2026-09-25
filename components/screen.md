# Screen

`.aw-screen` · layout-and-surfaces · status: **catalogued** · registry id `screen`

The content container of a mobile screen: it paints the screen background and adds the 16px side margin that content sits inside.

## When to use
- Once per screen, wrapping all scrolling content below the glass header.

## When not to use
- The outer phone frame → use [Device frame](device.md)
- A full-bleed gradient area (behind chrome or a hero image) → use [Hero band](hero-band.md)
- Glass chrome (top bar, header, bottom nav, action bar): place them outside `.aw-screen` → see [Glass top bar](top-bar.md), [Bottom nav](bottom-nav.md)

## Anatomy
```text
.aw-screen                   background + 16px side padding
└── section.blk × N          template-local blocks with top margins
    ├── .aw-section-header   section title row
    └── content              cards, lists, rows
```

## Variants
| Class | Use |
|---|---|
| `.aw-screen` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Default | None | No states defined. |

## Tokens
| Property | Token |
|---|---|
| Background | `--aw-bg` (#040501) |
| Side padding | `--aw-space-section` (16px) left and right |
| Vertical padding | 0 |
| Min height | 100% |

## Layout & grid
- `.aw-screen` **already adds the 16px grid margin** (`padding: 0 var(--aw-space-section)`), giving a 370px content width on the 402px device.
- **Canonical composition:** `.aw-screen > .aw-grid > .aw-col-N`. On its own `.aw-grid` adds a 16px margin, but `base.css` sets `.aw-screen .aw-grid { padding-inline: 0 }`, so inside the screen the grid adds only the 4 columns and the 8px gutter. There is no double margin.
- Every child of the grid takes a column span: `.aw-col-4` for full width (370px), `.aw-col-2` for 2-up (181px).
- No template uses `.aw-grid` yet. Search results builds its 2-up with a template-local `grid-template-columns:1fr 1fr; gap:12px`, which breaks the 8px gutter rule; use `.aw-grid` + `.aw-col-2` instead.
- Vertical spacing between blocks is template-local (`section.blk { margin-top: 16–24px }`); use spacing tokens.
- Top and bottom clearance: `--aw-inset-top-safe` (78px), `--aw-inset-bottom-nav` (100px). `.aw-screen` does not apply them.
- See grid (`02-design-system/foundations/grid.md`), layout (`02-design-system/foundations/layout.md`), spacing (`02-design-system/foundations/spacing.md`).

## Accessibility
- Use `<main>` for the screen content (templates use `<div>`).
- Keep reading order top to bottom: header, then screen content, then nav.

## Do / Don't
- ✅ Put chrome before or outside `.aw-screen`, and content inside it.
- ✅ Let children fill the 370px content width or use column spans.
- ✅ Put content in `.aw-grid` inside the screen, with a column span on every child.
- ❌ Don't wrap the grid in another padded container, and don't add `padding-inline` to the grid yourself.
- ❌ Don't add extra side padding to sections inside the screen.
- ❌ Don't use 10, 12 or 16px gaps between side-by-side column items; the gutter is 8px.

## Example
```html
<main class="aw-screen">
  <div class="aw-grid">
    <section class="aw-col-4">
      <div class="aw-section-header"><span class="aw-section-title-lg">Top players</span><a class="aw-section-header__action">See all <svg class="aw-icon" style="width:14px;height:14px"><use href="#aw-i-chevron-right"/></svg></a></div>
    </section>
  </div>
</main>
```

## Related
- [Device frame](device.md) · [Hero band](hero-band.md) · [Section header](section-header.md) · [Divider](divider.md)
- grid (`02-design-system/foundations/grid.md`) · layout (`02-design-system/foundations/layout.md`) · spacing (`02-design-system/foundations/spacing.md`)

## Open questions
- `.aw-screen` paints `--aw-bg`, so a `.aw-hero-band` on an ancestor only shows where the screen does not cover it (e.g. behind the header). Is that intended?
- Section spacing between blocks (16 / 20 / 24px) varies by template; no rule.
- Should `.aw-screen` apply `--aw-inset-top-safe` / `--aw-inset-bottom-nav`? Not specified.
