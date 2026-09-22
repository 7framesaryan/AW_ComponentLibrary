/**
 * AuctionWire Component Library — CASCADE ORDER
 *
 * One file per component: components/<id>.html. Each file is self-contained (open it in a browser)
 * and IS the source of that component's styling: the rules under its "component" marker inside
 * the <style> block. This list fixes the order those blocks are concatenated in for a screen build.
 * Keep a new component in a sensible place and never reorder lines casually.
 *
 * A few small parts (a nav item, a gated pill, a calendar day) live inside their parent's file
 * rather than getting one of their own — noted below.
 * `_utilities` is last on purpose, so photo backgrounds win over component surfaces.
 */
export const CASCADE = [
  "device",
  "screen",
  "hero-band",
  "button",
  "icon-button",
  "chip",
  "filter-chip",
  "status-chip",
  "stat-pill",
  "quick-action",
  "switch",
  "checkbox",
  "radio",
  "avatar",
  "search",
  "section-header",
  "listing-card",  // includes gated-pill
  "fact-row",
  "grid-card",
  "list-row",
  "top-player",
  "saved-search",
  "portfolio-summary",
  "watchlist-card",
  "stat-card",
  "calendar-strip",  // includes calendar-day
  "calendar-entry",
  "detail-row",
  "top-bar",
  "header",
  "bottom-nav",  // includes nav-item
  "sheet",
  "divider",
  "field",
  "social-btn",
  "labeled-divider",
  "segmented",
  "badge",
  "fast-switcher",
  "menu",
  "image-block",
  "dots",
  "accordion",
  "range",
  "option-row",
  "empty",
  "action-bar",
  "filter-row",
  "success-indicator",
  "success-heading",
  "feedback-description",
  "info-alert",
  "brand-language-header",
  "plan-option",
  "_utilities",
];

/** Small parts styled inside their parent's file instead of getting one of their own. */
export const FOLDED = new Map([
  ["nav-item", "bottom-nav"],
  ["gated-pill", "listing-card"],
  ["calendar-day", "calendar-strip"],
]);
