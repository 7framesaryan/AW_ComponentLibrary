# Accordion

`.aw-accordion` · overlays-and-feedback · status: **catalogued** · registry id `accordion`

An expandable group with a tappable header and chevron; used for the auction calendar month that reveals that month's auction entries.

## When to use
- Grouping auction calendar entries by month so the list stays scannable.
- Any long list that divides into named groups the user opens one at a time.

## When not to use
- A week-of-days picker → use [Calendar strip](calendar-strip.md)
- A single auction event row → use [Calendar entry](calendar-entry.md)
- Switching between views → use [Segmented](segmented.md)
- A title with a "See all" action → use [Section header](section-header.md)

## Anatomy
```text
div.aw-accordion                      card: surface, hairline border, clips content
├── div.aw-accordion__head            tappable row: title + chevron, space-between
│   ├── span.aw-section-title         month label, e.g. "February 2026"
│   └── svg.aw-icon.aw-accordion__chevron   #aw-i-chevron-right, 18px
└── div.aw-accordion__body            column of calendar entries, gap 8px
```

## Variants
| Class | Use |
|---|---|
| `.aw-accordion` | The only variant. |

## States
| State | How to apply | What changes |
|---|---|---|
| Collapsed | none | Chevron points right |
| Expanded | add `.is-open` to `.aw-accordion` | Chevron rotates 90deg (points down) over `--aw-dur-fast` |
| Body hidden when collapsed | Not specified | CSS does not hide `__body`; see Open questions |

## Tokens
| Property | Token |
|---|---|
| Fill | `--aw-surface` (#18181b) |
| Border | 1px `--aw-border-hairline` (#52525b) |
| Radius | `--aw-radius-card` (8px) |
| Head padding | `--aw-space-block` (12px) vertical, `--aw-space-section` (16px) horizontal |
| Body padding | `0 --aw-space-section --aw-space-section` |
| Body gap | `--aw-space-row` (8px) |
| Chevron colour | `--aw-text-muted` (#a1a1aa) |
| Head label | `.aw-section-title` (14px semibold, `--aw-text-secondary`) |
| Motion | `--aw-dur-fast`, `--aw-ease-out` on chevron transform |

## Layout & grid
- Spans all 4 columns (370px).
- Stack months vertically with a spacing token between them.
- Entries inside fill the body width.

## Accessibility
- Make the head a `<button>` with `aria-expanded` and `aria-controls` pointing at the body; the sample uses a `div` with a click handler.
- Hide the collapsed body from assistive tech (`hidden` attribute).
- The chevron is decorative (`aria-hidden="true"`).

## Do / Don't
- ✅ Compose the body from calendar entries; don't restyle them.
- ✅ Keep the month label short and specific ("February 2026").
- ❌ Don't hardcode a surface colour; the old Figma file used a stray `#1a1a1a`, use `--aw-surface`.
- ❌ Don't put the primary screen action inside a collapsed body.

## Example
```html
<div class="aw-accordion is-open js-accordion">
  <div class="aw-accordion__head"><span class="aw-section-title">February 2026</span><svg class="aw-icon aw-accordion__chevron" style="width:18px;height:18px"><use href="#aw-i-chevron-right"/></svg></div>
  <div class="aw-accordion__body">
    <div class="aw-calendar-entry"><div class="g-row center" style="gap:12px"><svg class="aw-icon" style="width:18px;height:18px;color:var(--aw-text-accent)"><use href="#aw-i-calendar"/></svg><div><div class="aw-body-strong">Goldin Monthly</div><div class="aw-body-muted">Feb 20 – Feb 27</div></div></div><span class="aw-status-chip aw-status-chip--live">Live Now</span></div>
  </div>
</div>
```
`.g-row` is a gallery helper; in a screen use a flex row with `gap: var(--aw-space-block)`.

## Related
- [Calendar entry](calendar-entry.md), [Calendar strip](calendar-strip.md), [Status chip](status-chip.md), [Section header](section-header.md)
- motion (`02-design-system/foundations/motion/INDEX.md`)

## Open questions
- `components.md` says `.is-open` reveals the body, but CSS has no rule hiding `__body` when collapsed. Should the screen add `hidden`, or is a CSS rule missing?
- Old guide said entries are divided by hairlines; the CSS body uses an 8px gap between bordered entry cards. Which is correct?
- Collapsed header height (old guide: about 60px) is not set in CSS.
- Which screen hosts the calendar month (Saved searches calendar?) is not shown in a template.
