# Segmented

`.aw-segmented` · inputs-and-controls · status: **catalogued** · registry id `segmented`

A pill-shaped toggle group where one option is active; switches a view mode or timeframe in place.

## When to use
- Switching how the same data is shown: List / Grid, List / Chart.
- Picking a timeframe for a chart: 1W · 1M · 1Y · All.
- Two to four short, mutually exclusive options that apply instantly.

## When not to use
- Filtering a list by category → use [Filter chip](filter-chip.md)
- A one-of-many choice inside a form or sheet → use [Radio](radio.md)
- An on/off setting → use [Switch](switch.md)
- Top-level navigation between screens → use [Bottom nav](bottom-nav.md)

## Where it's used
- Portfolio: timeframe toggle under the chart, and List / Grid in the Holdings section header — `templates/portfolio.template.html`
- Search results: icon-only List / Grid beside the result count — `templates/search-results.template.html`
- Gallery (List / Chart) — `templates/gallery.template.html`

## Anatomy
```text
div.aw-segmented                 inline pill track, 2px padding
└── span.aw-segmented__opt       option: [icon?] [label?], one carries .is-active
```

## Variants
| Class | Use |
|---|---|
| `.aw-segmented` | The only variant. Options may be text only, icon + text, or icon only. |

## States
| State | How to apply | What changes |
|---|---|---|
| Inactive option | none | Transparent, text `--aw-text-muted` |
| Active option | add `.is-active` to one `__opt` | Fill `--aw-surface-strong` (#3f3f46), text `--aw-text-primary` |
| Disabled | Not specified | Not specified |

## Tokens
| Property | Token |
|---|---|
| Track fill | `--aw-surface-raised` (#27272a) |
| Track padding | `--aw-space-micro` (2px) |
| Track and option radius | `--aw-radius-pill` |
| Option padding | `--aw-space-tight` (4px) vertical, `--aw-space-block` (12px) horizontal |
| Icon-label gap | `--aw-space-tight` (4px) |
| Option text | `--aw-fs-chip` (11px), `--aw-fw-medium` |
| Active fill / text | `--aw-surface-strong` / `--aw-text-primary` |
| Inactive text | `--aw-text-muted` (#a1a1aa) |
| Motion | `--aw-dur-fast`, `--aw-ease-out` on background |

## Layout & grid
- The control hugs its options; it is not stretched to a column span.
- In a section header it sits at the right edge; beside a result count it is pushed right with `justify-content: space-between`.
- Under a chart it is centred (`align-self:center` in Portfolio).
- Icons are 14px.

## Accessibility
- Use `role="tablist"` / `role="tab"` with `aria-selected` when it swaps a view, or `role="radiogroup"` / `role="radio"` with `aria-checked` for a timeframe. The sample markup uses plain spans.
- Icon-only options need an `aria-label` ("List view", "Grid view").
- Options must be keyboard reachable; use `<button>` elements in production.

## Do / Don't
- ✅ Always have exactly one active option.
- ✅ Keep labels short: one word or a timeframe code.
- ❌ Don't use green for the active option; active is the strong neutral surface.
- ❌ Don't use a segmented control to filter results; filters are chips.
- ❌ Don't put more than four options in one control.

## Example
```html
<div class="aw-segmented"><span class="aw-segmented__opt is-active"><svg class="aw-icon" style="width:14px;height:14px"><use href="#aw-i-list"/></svg>List</span><span class="aw-segmented__opt"><svg class="aw-icon" style="width:14px;height:14px"><use href="#aw-i-grid"/></svg>Grid</span></div>
```

## Related
- [Filter chip](filter-chip.md), [Section header](section-header.md), [Portfolio summary](portfolio-summary.md)
- Section header pattern (`02-design-system/patterns/section-header.md`), typography (`02-design-system/foundations/typography.md`)

## Open questions
- Maximum number of options is not specified; "no more than four" is based on the largest sample (1W / 1M / 1Y / All).
- Disabled option state is not specified.
- Intended ARIA role (tabs or radios) is not specified.
- No dedicated old Figma guide; values not verified against Figma.
