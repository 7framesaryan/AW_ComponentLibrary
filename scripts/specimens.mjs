/**
 * Specimen data for coded/<id>.html (built by scripts/build-mirrors.mjs).
 * One entry per registry id that gets its own file:
 *   owns       CSS blocks whose rules are the component (copied verbatim from components/<id>.css)
 *   fold       registry ids folded into this file instead of getting their own
 *   localCss   specimen-local helper rules (not in the component CSS), in their own labelled section
 *   scaffoldCss extra specimen-only styling
 *   sections   [caption, markup] pairs. Markup follows each contract's ## Example; card photos
 *              (aw-photo--*) are left out because their images live in the Foundations src/assets.css.
 * Images are written as src="ASSET:<path from the Foundations library root>" and embedded as data URIs.
 */
const I = (id, px, extra = "") =>
  `<svg class="aw-icon" style="width:${px}px;height:${px}px${extra}" aria-hidden="true"><use href="#aw-i-${id}"/></svg>`;
const NAV = [["home", "Home"], ["heart", "Watchlist"], ["bookmark", "Saved"], ["portfolio", "Portfolio"], ["more", "More"]];

export const SPECIMENS = {
  button: {
    owns: ["aw-btn"],
    sections: [
      ["Variants", `<div class="row">
        <button type="button" class="aw-btn aw-btn--primary">Place Bid</button>
        <button type="button" class="aw-btn aw-btn--outline">Bid on site</button>
        <button type="button" class="aw-btn aw-btn--sm aw-btn--outline">Small outline</button>
      </div>`],
      ["Full width (4-column span)", `<button type="button" class="aw-btn aw-btn--primary aw-btn--full">Place Bid — $3,900</button>`],
      ["Disabled — primary &amp; outline", `<div class="row">
        <button type="button" class="aw-btn aw-btn--primary" disabled>Place Bid</button>
        <button type="button" class="aw-btn aw-btn--outline" disabled>Bid on site</button>
      </div>`],
    ],
  },
  "bottom-nav": {
    owns: ["aw-bottom-nav", "aw-nav-item"],
    fold: ["nav-item"],
    localCss: `/* template-local wrapper — floats the pill near the bottom of a screen */
.float-nav { display: flex; justify-content: center; }`,
    scaffoldCss: `body { background: radial-gradient(120% 80% at 50% 100%, #0b1a10 0%, var(--aw-bg) 60%); }`,
    sections: [
      ["Floating glass pill — includes folded nav-item, one .is-active", `<div class="float-nav">
        <nav class="aw-glass-nav aw-bottom-nav" aria-label="Primary" style="width:370px">
${NAV.map(([icon, label], i) => `          <a class="aw-nav-item${i ? "" : " is-active"}" href="#"${i ? "" : ' aria-current="page"'}>${I(icon, 22)}${label}</a>`).join("\n")}
        </nav>
      </div>`],
    ],
  },
  "icon-button": {
    owns: ["aw-btn-icon", "aw-btn-icon-ghost"],
    sections: [
      ["Solid — page-title create action (43 × 43)", `<div class="row">
        <button type="button" class="aw-btn-icon" aria-label="Add saved search">${I("plus", 20)}</button>
        <button type="button" class="aw-btn-icon" aria-label="Scan card">${I("scan", 20)}</button>
      </div>`],
      ["Ghost — header &amp; toolbar controls (34 × 32)", `<div class="row">
        <button type="button" class="aw-btn-icon-ghost" aria-label="Back" style="transform:rotate(180deg)">${I("chevron-right", 18)}</button>
        <button type="button" class="aw-btn-icon-ghost" aria-label="Filters">${I("filter", 18)}</button>
        <button type="button" class="aw-btn-icon-ghost" aria-label="More options">${I("more", 18)}</button>
        <button type="button" class="aw-btn-icon-ghost" aria-label="Close">${I("close", 18)}</button>
        <button type="button" class="aw-btn-icon-ghost" aria-label="Notifications">${I("bell", 18)}</button>
      </div>`],
    ],
  },
  chip: {
    owns: ["aw-chip"],
    sections: [
      ["Price / grade pill (default)", `<div class="aw-listing-card__pills"><span class="aw-chip">${I("gem", 15, ";color:var(--aw-text-secondary)")}$4,200</span><span class="aw-chip">PSA 6</span></div>`],
      ["Small — category / tag", `<div class="row"><span class="aw-chip aw-chip--sm">Baseball</span><span class="aw-chip aw-chip--sm">Rookie</span></div>`],
      ["Primary (green-tinted)", `<div class="row"><span class="aw-chip aw-chip--primary">Verified</span><span class="aw-chip aw-chip--sm aw-chip--primary">New</span></div>`],
    ],
  },
  "filter-chip": {
    owns: ["aw-filter-chip"],
    sections: [
      ["Default &amp; active (.is-active)", `<div class="row">
        <span class="aw-filter-chip is-active">${I("sort", 12)}Ending soon</span>
        <span class="aw-filter-chip">Baseball</span>
        <span class="aw-filter-chip">PSA 9+</span>
      </div>`],
    ],
  },
  "status-chip": {
    owns: ["aw-status-chip"],
    sections: [
      ["Live · Upcoming · Ended", `<div class="row">
        <span class="aw-status-chip aw-status-chip--live">Live Now</span>
        <span class="aw-status-chip aw-status-chip--upcoming">Starts Fri</span>
        <span class="aw-status-chip aw-status-chip--ended">Ended</span>
      </div>`],
    ],
  },
  "stat-pill": {
    owns: ["aw-stat-pill"],
    sections: [
      ["Icon + label + value", `<div class="row">
        <span class="aw-stat-pill">${I("trend-up", 18, ";color:var(--aw-text-accent)")}<span class="aw-stat-pill__label">Watching</span><span class="aw-stat-pill__value">12</span></span>
        <span class="aw-stat-pill">${I("gavel", 18, ";color:var(--aw-text-accent)")}<span class="aw-stat-pill__label">Active bids</span><span class="aw-stat-pill__value">5</span></span>
      </div>`],
    ],
  },
  "quick-action": {
    owns: ["aw-quick-action"],
    sections: [
      ["Home shortcut pills", `<div class="row">
        <span class="aw-quick-action">${I("scan", 16).replace('class="aw-icon"', 'class="aw-icon aw-quick-action__icon"')}Scan card</span>
        <span class="aw-quick-action">${I("radar", 16).replace('class="aw-icon"', 'class="aw-icon aw-quick-action__icon"')}Radar</span>
        <span class="aw-quick-action">${I("calendar", 16).replace('class="aw-icon"', 'class="aw-icon aw-quick-action__icon"')}Calendar</span>
      </div>`],
    ],
  },
  switch: {
    owns: ["aw-switch"],
    sections: [
      ["On (.is-on) &amp; off", `<div class="stack">
        <label class="aw-switch is-on"><span class="aw-switch__track"><span class="aw-switch__thumb"></span></span><span class="aw-switch__label">Auto-bid</span></label>
        <label class="aw-switch"><span class="aw-switch__track"><span class="aw-switch__thumb"></span></span><span class="aw-switch__label">Outbid alerts</span></label>
      </div>`],
    ],
  },
  checkbox: {
    owns: ["aw-checkbox"],
    sections: [
      ["Checked (.is-checked) &amp; unchecked", `<div class="row">
        <span class="aw-checkbox is-checked">${I("check", 14)}</span>
        <span class="aw-checkbox"></span>
      </div>`],
    ],
  },
  radio: {
    owns: ["aw-radio"],
    sections: [
      ["Default — solid fill when checked", `<div class="row"><span class="aw-radio is-checked"></span><span class="aw-radio"></span></div>`],
      ["Ring (.aw-radio--ring) — donut when checked", `<div class="row">
        <span class="aw-radio aw-radio--ring is-checked" aria-hidden="true"><span class="aw-radio__dot"></span></span>
        <span class="aw-radio aw-radio--ring" aria-hidden="true"><span class="aw-radio__dot"></span></span>
      </div>`],
    ],
  },
  search: {
    owns: ["aw-search"],
    sections: [
      ["Default (48px, glass)", `<label class="aw-search">${I("search", 20).replace('class="aw-icon"', 'class="aw-icon aw-search__icon"')}<input class="aw-search__input" placeholder="Search cards, players, sets…"></label>`],
      ["Focused (.is-focused)", `<label class="aw-search is-focused">${I("search", 20).replace('class="aw-icon"', 'class="aw-icon aw-search__icon"')}<input class="aw-search__input" value="Mantle 1952"></label>`],
      ["Small (.aw-search--sm, in-page)", `<label class="aw-search aw-search--sm">${I("search", 18).replace('class="aw-icon"', 'class="aw-icon aw-search__icon"')}<input class="aw-search__input" placeholder="Search watchlist"></label>`],
    ],
  },
  avatar: {
    owns: ["aw-avatar"],
    sections: [
      ["Placeholder figure (32px)", `<div class="aw-avatar">${I("user", 18)}</div>`],
    ],
  },
  "section-header": {
    owns: ["aw-section-header"],
    sections: [
      ["Title + action", `<div class="aw-section-header">
        <span class="aw-section-title-lg">Ending soon</span>
        <a class="aw-section-header__action">See all ${I("chevron-right", 14)}</a>
      </div>`],
    ],
  },
  "listing-card": {
    owns: ["aw-listing-card", "aw-gated-pill"],
    fold: ["gated-pill"],
    sections: [
      ["Default", `<article class="aw-listing-card">
        <div class="aw-listing-card__media"><div class="aw-listing-card__photo"></div>
          <button type="button" class="aw-listing-card__fav" aria-label="Add to watchlist">${I("heart", 15)}</button></div>
        <div class="aw-listing-card__title aw-card-title">1952 Topps #311 Mickey Mantle</div>
        <div class="aw-listing-card__pills"><span class="aw-chip">${I("gem", 15, ";color:var(--aw-text-secondary)")}$4,200</span><span class="aw-chip">PSA 6</span></div>
        <div class="aw-listing-card__bid"><span class="aw-price-lead">$3,850</span><span class="aw-listing-card__bid-count">(24 bids)</span></div>
        <div class="aw-listing-card__facts"><div class="aw-fact-row"><span class="aw-fact-row__label">Buyers Premium:</span><span class="aw-fact-row__value">+20% ($770)</span></div><div class="aw-fact-row"><span class="aw-fact-row__label">Total:</span><span class="aw-fact-row__value">$4,620</span></div></div>
        <div class="aw-urgency">Ends in 02:14:37</div>
        <button type="button" class="aw-listing-card__cta">Bid on Auction Site</button>
      </article>`],
      ["Watched (.is-watched) + gated (subscription) — includes folded gated-pill", `<article class="aw-listing-card is-watched">
        <div class="aw-listing-card__media"><div class="aw-listing-card__photo"></div>
          <button type="button" class="aw-listing-card__fav" aria-label="Remove from watchlist" style="color:var(--aw-caution)">${I("heart-filled", 15)}</button></div>
        <div class="aw-listing-card__body">
          <div class="aw-listing-card__title">1986 Fleer #57 Michael Jordan RC</div>
          <div class="aw-listing-card__pills"><span class="aw-gated-pill">Seller${I("lock", 12)}</span><span class="aw-gated-pill">PSA Grade${I("lock", 12)}</span></div>
          <div class="aw-listing-card__bid"><span class="aw-price-lead">$28,500</span><span class="aw-listing-card__bid-count">(41 bids)</span></div>
        </div>
        <div class="aw-listing-card__footer">
          <div class="aw-listing-card__urgency">Ends in 01:02:55</div>
          <div class="aw-listing-card__subscribe">${I("lock", 12)}Subscribe to see full details</div>
          <button type="button" class="aw-listing-card__cta">Bid on Auction Site</button>
        </div>
      </article>`],
    ],
  },
  "grid-card": {
    owns: ["aw-grid-card"],
    sections: [
      ["2-up on the 4-column grid (2-column spans)", `<div class="aw-grid" style="padding-inline:0">
        <article class="aw-grid-card aw-col-2"><div class="aw-grid-card__media"></div><div class="aw-grid-card__title aw-card-title">1952 Topps Mantle</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="aw-price-lead">$3,850</span><span class="aw-status-chip aw-status-chip--live">Live</span></div></article>
        <article class="aw-grid-card aw-col-2"><div class="aw-grid-card__media"></div><div class="aw-grid-card__title aw-card-title">1953 Bowman Mantle</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="aw-price-lead">$5,100</span><span class="aw-status-chip aw-status-chip--upcoming">Soon</span></div></article>
      </div>`],
    ],
  },
  "list-row": {
    owns: ["aw-list-row"],
    sections: [
      ["Dense result row", `<div class="aw-list-row">
        <div class="aw-list-row__thumb"></div>
        <div class="aw-list-row__body">
          <div class="aw-card-title">1986 Fleer #57 Michael Jordan RC</div>
          <div class="aw-body-muted">Heritage Auctions · PSA 8</div>
          <div class="aw-list-row__spacer"></div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <span class="aw-price-lead">$28,500</span>
            <span class="aw-urgency">01:02:55</span>
          </div>
          <button type="button" class="aw-btn aw-btn--sm aw-btn--outline" style="width:100%">Bid on Auction Site</button>
        </div>
      </div>`],
    ],
  },
  "top-player": {
    owns: ["aw-top-player"],
    sections: [
      ["Ranked rows", `<div class="stack">
        <div class="aw-top-player"><span class="aw-top-player__rank">#1</span><div class="aw-avatar">${I("user", 18)}</div><div style="flex:1"><div class="aw-body-strong">Mickey Mantle</div><div class="aw-body-muted">1,204 lots</div></div>${I("trend-up", 16, ";color:var(--aw-text-accent)")}</div>
        <div class="aw-top-player"><span class="aw-top-player__rank">#2</span><div class="aw-avatar">${I("user", 18)}</div><div style="flex:1"><div class="aw-body-strong">Michael Jordan</div><div class="aw-body-muted">986 lots</div></div>${I("trend-up", 16, ";color:var(--aw-text-accent)")}</div>
      </div>`],
    ],
  },
  "saved-search": {
    owns: ["aw-saved-search"],
    sections: [
      ["Horizontal (.aw-saved-search--h, 253px)", `<div class="aw-saved-search aw-saved-search--h">
        <div class="aw-saved-search__thumb"></div>
        <div style="flex:1;min-width:0"><div class="aw-body-strong">Baseball · PSA 8+ · &lt; $10k</div><div class="aw-body-muted">Heritage, Goldin · 32 lots</div></div>
        ${I("chevron-right", 18, ";color:var(--aw-text-muted)")}
      </div>`],
      ["Vertical (.aw-saved-search--v, 162px)", `<div class="aw-saved-search aw-saved-search--v">
        <div class="aw-saved-search__thumb"></div>
        <div><div class="aw-body-strong">Jordan RC · PSA 9</div><div class="aw-body-muted">8 new lots</div></div>
      </div>`],
    ],
  },
  "portfolio-summary": {
    owns: ["aw-portfolio-summary"],
    sections: [
      ["Up", `<div class="aw-portfolio-summary">
        <div>
          <div class="aw-body-muted">Portfolio value</div>
          <div class="aw-portfolio-summary__head"><span class="aw-portfolio-value">$142,380</span><span class="aw-portfolio-summary__delta">${I("trend-up", 12)} +4.2%</span></div>
        </div>
        <div class="aw-divider" style="margin:2px 0"></div>
        <div class="aw-portfolio-summary__stats">
          <div class="aw-portfolio-summary__stat"><span class="aw-body-muted">Cards</span><span class="aw-stat-value">128</span></div>
          <div class="aw-portfolio-summary__stat"><span class="aw-body-muted">Watching</span><span class="aw-stat-value">12</span></div>
          <div class="aw-portfolio-summary__stat"><span class="aw-body-muted">Active bids</span><span class="aw-stat-value">5</span></div>
        </div>
      </div>`],
      ["Down (.is-down on the delta)", `<div class="aw-portfolio-summary">
        <div>
          <div class="aw-body-muted">Portfolio value</div>
          <div class="aw-portfolio-summary__head"><span class="aw-portfolio-value">$138,910</span><span class="aw-portfolio-summary__delta is-down">−2.4%</span></div>
        </div>
      </div>`],
    ],
  },
  "watchlist-card": {
    owns: ["aw-watchlist-card"],
    sections: [
      ["Watched lot", `<div class="aw-watchlist-card">
        <div style="display:flex;gap:12px">
          <div class="aw-list-row__thumb" style="width:64px;height:88px"></div>
          <div style="flex:1;min-width:0">
            <div class="aw-card-title">1952 Topps #311 Mickey Mantle</div>
            <div class="aw-body-muted">Heritage · PSA 6</div>
            <div style="display:flex;align-items:baseline;gap:8px;margin-top:6px"><span class="aw-price-lead" style="font-size:16px">$3,850</span><span class="aw-body-muted">(24 bids)</span></div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px"><span class="aw-urgency">Ends 02:14:37</span><span class="aw-status-chip aw-status-chip--live">Live</span></div>
          </div>
          <button type="button" class="aw-listing-card__fav" style="color:var(--aw-caution);align-self:flex-start;position:static" aria-label="Remove from watchlist">${I("heart-filled", 15)}</button>
        </div>
      </div>`],
    ],
  },
  "stat-card": {
    owns: ["aw-stat-card"],
    sections: [
      ["2-up on the grid", `<div class="aw-grid" style="padding-inline:0">
        <div class="aw-stat-card aw-col-2"><span class="aw-body-muted">Cards</span><span class="aw-stat-value">128</span></div>
        <div class="aw-stat-card aw-col-2"><span class="aw-body-muted">Active bids</span><span class="aw-stat-value">5</span></div>
      </div>`],
    ],
  },
  "calendar-strip": {
    owns: ["aw-calendar-strip", "aw-calendar-day"],
    fold: ["calendar-day"],
    sections: [
      ["Strip of days — includes folded calendar-day, one .is-active", `<div class="aw-calendar-strip">
        <div class="aw-calendar-day"><span class="aw-caption">MON</span><span class="aw-stat-value" style="font-size:14px">10</span></div>
        <div class="aw-calendar-day is-active"><span class="aw-caption">TUE</span><span class="aw-stat-value" style="font-size:14px">11</span></div>
        <div class="aw-calendar-day"><span class="aw-caption">WED</span><span class="aw-stat-value" style="font-size:14px">12</span></div>
        <div class="aw-calendar-day"><span class="aw-caption">THU</span><span class="aw-stat-value" style="font-size:14px">13</span></div>
        <div class="aw-calendar-day"><span class="aw-caption">FRI</span><span class="aw-stat-value" style="font-size:14px">14</span></div>
        <div class="aw-calendar-day"><span class="aw-caption">SAT</span><span class="aw-stat-value" style="font-size:14px">15</span></div>
        <div class="aw-calendar-day"><span class="aw-caption">SUN</span><span class="aw-stat-value" style="font-size:14px">16</span></div>
      </div>`],
    ],
  },
  "calendar-entry": {
    owns: ["aw-calendar-entry"],
    sections: [
      ["Live &amp; upcoming", `<div class="stack">
        <div class="aw-calendar-entry"><div style="display:flex;align-items:center;gap:12px">${I("calendar", 18, ";color:var(--aw-text-accent)")}<div><div class="aw-body-strong">Goldin Monthly</div><div class="aw-body-muted">Feb 20 – Feb 27</div></div></div><span class="aw-status-chip aw-status-chip--live">Live Now</span></div>
        <div class="aw-calendar-entry"><div style="display:flex;align-items:center;gap:12px">${I("calendar", 18, ";color:var(--aw-text-accent)")}<div><div class="aw-body-strong">Heritage Sports Signature</div><div class="aw-body-muted">Mar 3 – Mar 9</div></div></div><span class="aw-status-chip aw-status-chip--upcoming">Upcoming</span></div>
      </div>`],
    ],
  },
  "detail-row": {
    owns: ["aw-detail-row"],
    sections: [
      ["Price history rows (last row border removed inline, as in templates)", `<div>
        <div class="aw-detail-row"><div class="aw-detail-row__meta"><span class="aw-list-label-strong">Jan 2026</span><span class="aw-body-muted">Heritage · 31 bids</span></div><span class="aw-price-lead" style="font-size:16px">$3,600</span></div>
        <div class="aw-detail-row"><div class="aw-detail-row__meta"><span class="aw-list-label-strong">Oct 2025</span><span class="aw-body-muted">Goldin · 22 bids</span></div><span class="aw-price-lead" style="font-size:16px">$3,250</span></div>
        <div class="aw-detail-row" style="border:0"><div class="aw-detail-row__meta"><span class="aw-list-label-strong">Aug 2025</span><span class="aw-body-muted">PWCC · 19 bids</span></div><span class="aw-price-lead" style="font-size:16px">$2,900</span></div>
      </div>`],
    ],
  },
  "top-bar": {
    owns: ["aw-top-bar"],
    sections: [
      ["Glass home top bar (on .aw-glass-header)", `<div class="aw-glass-header aw-top-bar">
        <div class="aw-avatar">${I("user", 18)}</div>
        <div class="aw-top-bar__greeting"><div class="aw-body-muted">Good evening</div><div class="aw-body-strong">Aryan</div></div>
        <div class="aw-top-bar__actions">
          <span style="position:relative;display:inline-flex"><button type="button" class="aw-btn-icon-ghost" aria-label="Notifications, 3 new">${I("bell", 18)}</button><span class="aw-badge aw-badge-anchor">3</span></span>
          <button type="button" class="aw-btn-icon-ghost" aria-label="Scan card">${I("scan", 18)}</button>
        </div>
      </div>`],
    ],
  },
  header: {
    owns: ["aw-header"],
    sections: [
      ["2nd-level header (on .aw-glass-header-alt)", `<div class="aw-glass-header-alt aw-header">
        <button type="button" class="aw-btn-icon-ghost" aria-label="Back" style="transform:rotate(180deg)">${I("chevron-right", 18)}</button>
        <span class="aw-header__title aw-section-title-lg">Card detail</span>
        <button type="button" class="aw-btn-icon-ghost" aria-label="More options">${I("more", 18)}</button>
      </div>`],
    ],
  },
  sheet: {
    owns: ["aw-sheet"],
    sections: [
      ["Filter sheet (default, on .aw-glass-sheet)", `<div class="aw-sheet aw-glass-sheet">
        <div class="aw-sheet__handle"></div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <span class="aw-section-title-lg">Filters</span>
          <button type="button" class="aw-btn-icon-ghost" aria-label="Close">${I("close", 18)}</button>
        </div>
        <div class="aw-option-row"><span class="aw-option-row__label">PSA 9 &amp; above</span><span class="aw-checkbox is-checked">${I("check", 14)}</span></div>
        <div class="aw-option-row"><span class="aw-option-row__label">Raw / ungraded</span><span class="aw-checkbox"></span></div>
        <div style="display:flex;gap:12px;margin-top:20px">
          <button type="button" class="aw-btn aw-btn--outline" style="flex:1">Reset</button>
          <button type="button" class="aw-btn aw-btn--primary" style="flex:2">Show 248 results</button>
        </div>
      </div>`],
      ["Modal (.aw-sheet--modal) — payment / confirm", `<div class="aw-sheet aw-sheet--modal">
        <div class="aw-sheet__handle"></div>
        <h2 class="aw-sheet__title">Choose your plan</h2>
        <button type="button" class="aw-btn aw-btn--primary aw-btn--full">Continue</button>
        <p class="aw-sheet__footnote">Cancel anytime. Billed on our website.</p>
      </div>`],
    ],
  },
  field: {
    owns: ["aw-field"],
    sections: [
      ["Default", `<label class="aw-field"><span class="aw-field__label">Email</span><input class="aw-field__input" placeholder="you@example.com"><span class="aw-field__hint">We'll send a sign-in code.</span></label>`],
      ["Focus (click into it)", `<label class="aw-field"><span class="aw-field__label">Max bid</span><input class="aw-field__input" value="$4,000"></label>`],
      ["Error (.is-error)", `<label class="aw-field is-error"><span class="aw-field__label">Max bid</span><input class="aw-field__input" value="$50"><span class="aw-field__hint">Must be higher than the current bid ($3,850)</span></label>`],
      ["Disabled", `<label class="aw-field"><span class="aw-field__label">Auction house</span><input class="aw-field__input" value="Heritage" disabled></label>`],
    ],
  },
  "social-btn": {
    owns: ["aw-social-btn"],
    sections: [
      ["Google &amp; Apple", `<div class="stack">
        <button type="button" class="aw-social-btn aw-social-btn--google">${I("google", 18)}Continue with Google</button>
        <button type="button" class="aw-social-btn aw-social-btn--apple">${I("apple", 18)}Continue with Apple</button>
      </div>`],
    ],
  },
  "labeled-divider": {
    owns: ["aw-labeled-divider"],
    sections: [["“or” between alternatives", `<div class="aw-labeled-divider">or</div>`]],
  },
  segmented: {
    owns: ["aw-segmented"],
    sections: [
      ["List / Grid, one .is-active", `<div class="aw-segmented"><span class="aw-segmented__opt is-active">${I("list", 14)}List</span><span class="aw-segmented__opt">${I("grid", 14)}Grid</span></div>`],
    ],
  },
  badge: {
    owns: ["aw-badge", "aw-badge-dot", "aw-badge-anchor"],
    sections: [
      ["Count (amber, default) · positive · positive-soft · dot", `<div class="row">
        <span class="aw-badge">3</span>
        <span class="aw-badge aw-badge--positive">12</span>
        <span class="aw-badge aw-badge--positive-soft">Save 25%</span>
        <span class="aw-badge-dot"></span>
      </div>`],
      ["Anchored on an icon button (.aw-badge-anchor)", `<span style="position:relative;display:inline-flex"><button type="button" class="aw-btn-icon-ghost" aria-label="Notifications, 3 new">${I("bell", 18)}</button><span class="aw-badge aw-badge-anchor">3</span></span>`],
    ],
  },
  "fast-switcher": {
    owns: ["aw-fast-switcher"],
    sections: [
      ["Focal thumb (.is-focal) in the centre", `<div class="aw-fast-switcher">
        <div class="aw-fast-switcher__thumb"></div>
        <div class="aw-fast-switcher__thumb"></div>
        <div class="aw-fast-switcher__thumb is-focal"></div>
        <div class="aw-fast-switcher__thumb"></div>
        <div class="aw-fast-switcher__thumb"></div>
      </div>`],
    ],
  },
  menu: {
    owns: ["aw-menu"],
    sections: [
      ["Overflow menu (hover an item; .is-danger for destructive)", `<div class="aw-menu" style="width:220px">
        <a class="aw-menu__item">${I("bookmark", 18)}Save search</a>
        <a class="aw-menu__item">${I("bell", 18)}Set price alert</a>
        <a class="aw-menu__item">${I("settings", 18)}Settings</a>
        <a class="aw-menu__item is-danger">${I("close", 18)}Remove</a>
      </div>`],
    ],
  },
  "image-block": {
    owns: ["aw-image-block"],
    sections: [
      ["Photo box (size set by the screen) + carousel dots", `<div class="stack" style="width:160px">
        <div class="aw-image-block aw-photo" style="width:160px;height:120px">${I("diamond-solid", 22, ";color:var(--aw-text-muted)")}</div>
        <div class="aw-dots"><span class="aw-dot is-active"></span><span class="aw-dot"></span><span class="aw-dot"></span></div>
      </div>`],
    ],
  },
  dots: {
    owns: ["aw-dots", "aw-dot"],
    sections: [
      ["First / middle active", `<div class="stack" style="width:120px">
        <div class="aw-dots"><span class="aw-dot is-active"></span><span class="aw-dot"></span><span class="aw-dot"></span></div>
        <div class="aw-dots"><span class="aw-dot"></span><span class="aw-dot is-active"></span><span class="aw-dot"></span><span class="aw-dot"></span></div>
      </div>`],
    ],
  },
  accordion: {
    owns: ["aw-accordion"],
    sections: [
      ["Open (.is-open)", `<div class="aw-accordion is-open">
        <div class="aw-accordion__head"><span class="aw-section-title">February 2026</span>${I("chevron-right", 18).replace('class="aw-icon"', 'class="aw-icon aw-accordion__chevron"')}</div>
        <div class="aw-accordion__body">
          <div class="aw-calendar-entry"><div style="display:flex;align-items:center;gap:12px">${I("calendar", 18, ";color:var(--aw-text-accent)")}<div><div class="aw-body-strong">Goldin Monthly</div><div class="aw-body-muted">Feb 20 – Feb 27</div></div></div><span class="aw-status-chip aw-status-chip--live">Live Now</span></div>
        </div>
      </div>`],
      ["Closed", `<div class="aw-accordion">
        <div class="aw-accordion__head"><span class="aw-section-title">March 2026</span>${I("chevron-right", 18).replace('class="aw-icon"', 'class="aw-icon aw-accordion__chevron"')}</div>
      </div>`],
    ],
  },
  range: {
    owns: ["aw-range"],
    sections: [
      ["Min / max inputs + track", `<div>
        <div class="aw-range"><input class="aw-range__input" value="$1,000"><span class="aw-range__sep">–</span><input class="aw-range__input" value="$10,000"></div>
        <div class="aw-range__track"><div class="aw-range__fill" style="left:12%;right:30%"></div><div class="aw-range__knob" style="left:12%"></div><div class="aw-range__knob" style="left:70%"></div></div>
      </div>`],
    ],
  },
  "option-row": {
    owns: ["aw-option-row"],
    sections: [
      ["Option list (last row loses its border)", `<div>
        <div class="aw-option-row"><span class="aw-option-row__label">PSA 9 &amp; above</span><span class="aw-checkbox is-checked">${I("check", 14)}</span></div>
        <div class="aw-option-row"><span class="aw-option-row__label">PSA 6 – 8</span><span class="aw-checkbox"></span></div>
        <div class="aw-option-row"><span class="aw-option-row__label">Raw / ungraded</span><span class="aw-checkbox"></span></div>
      </div>`],
    ],
  },
  empty: {
    owns: ["aw-empty"],
    sections: [
      ["Filtered-out state", `<div class="aw-empty">
        <div class="aw-empty__icon">${I("search", 26)}</div>
        <div class="aw-empty__title">No lots match</div>
        <div class="aw-empty__body">Try widening your price range or clearing a filter.</div>
        <button type="button" class="aw-btn aw-btn--sm aw-btn--outline">Clear filters</button>
      </div>`],
    ],
  },
  "action-bar": {
    owns: ["aw-action-bar"],
    sections: [
      ["Bottom action bar (on .aw-glass-sheet) holding the primary CTA", `<div class="aw-action-bar aw-glass-sheet">
        <button type="button" class="aw-btn aw-btn--primary aw-btn--full">Place Bid — $3,900</button>
      </div>`],
    ],
  },
  "filter-row": {
    owns: ["aw-filter-row"],
    sections: [
      ["Scrolling chip row", `<div class="aw-filter-row">
        <span class="aw-filter-chip is-active">All · 12</span>
        <span class="aw-filter-chip">Ending soon</span>
        <span class="aw-filter-chip">Outbid</span>
        <span class="aw-filter-chip">Winning</span>
      </div>`],
    ],
  },
  device: {
    owns: ["aw-device"],
    sections: [
      ["402px preview frame (60px screen radius) with a hero band and a screen inside", `<div class="aw-device" style="height:420px">
        <div class="aw-hero-band" style="height:100%">
          <div class="aw-screen" style="background:transparent;padding-top:64px">
            <div class="aw-page-title">Watchlist</div>
          </div>
        </div>
      </div>`],
    ],
  },
  screen: {
    owns: ["aw-screen"],
    sections: [
      ["Screen (16px margin) + 4-column grid inside", `<main class="aw-screen" style="padding-top:16px;padding-bottom:16px;outline:1px dashed #3f3f46">
        <div class="aw-grid">
          <section class="aw-col-4">
            <div class="aw-section-header"><span class="aw-section-title-lg">Top players</span><a class="aw-section-header__action">See all ${I("chevron-right", 14)}</a></div>
          </section>
          <div class="aw-col-2 demo-col">2 cols</div><div class="aw-col-2 demo-col">2 cols</div>
          <div class="aw-col-1 demo-col">1</div><div class="aw-col-3 demo-col">3 cols</div>
        </div>
      </main>`],
    ],
  },
  "success-indicator": {
    owns: ["aw-success-indicator"],
    sections: [["54px success mark", `<div class="aw-success-indicator" aria-hidden="true"><span class="aw-success-indicator__glyph">✓</span></div>`]],
  },
  "success-heading": {
    owns: ["aw-success-heading"],
    sections: [["Heading (24/32 bold, centred)", `<h1 class="aw-success-heading"><span class="aw-success-heading__text">You’re all set</span></h1>`]],
  },
  "feedback-description": {
    owns: ["aw-feedback-description"],
    sections: [["Supporting line under a success heading", `<p class="aw-feedback-description">Your account created successfully.</p>`]],
  },
  "info-alert": {
    owns: ["aw-info-alert"],
    sections: [
      ["Info alert", `<div class="aw-info-alert">
        <img class="aw-info-alert__icon" src="ASSET:icons/images/info-circle.svg" alt="">
        <div class="aw-info-alert__content"><h2 class="aw-info-alert__title">Make payment on our website</h2>
        <p class="aw-info-alert__description">Your payment is completed securely in your browser. You’ll come right back to the app.
No in-app charge.</p></div>
      </div>`],
    ],
  },
  "brand-language-header": {
    owns: ["aw-brand-language-header"],
    sections: [
      ["Wordmark centred between language pickers", `<header class="aw-brand-language-header">
        <span class="aw-brand-language-header__language"><span class="aw-brand-language-header__flag"><img src="ASSET:icons/images/language-uk.svg" alt="United Kingdom"></span><span>EN</span></span>
        <span class="aw-brand-language-header__wordmark"><img src="ASSET:assets/auctionwire-wordmark.svg" alt="AuctionWire"></span>
        <span class="aw-brand-language-header__language"><span class="aw-brand-language-header__flag"><img src="ASSET:icons/images/language-uk.svg" alt="United Kingdom"></span><span>EN</span></span>
      </header>`],
    ],
  },
  "plan-option": {
    owns: ["aw-plan-option"],
    sections: [
      ["Selected (.is-selected) &amp; unselected", `<div class="stack" role="radiogroup" aria-label="Plan">
        <button type="button" class="aw-plan-option is-selected" role="radio" aria-checked="true">
          <span class="aw-radio aw-radio--ring is-checked" aria-hidden="true"><span class="aw-radio__dot"></span></span>
          <span class="aw-plan-option__body">
            <span class="aw-plan-option__name-row"><span class="aw-plan-option__name">Yearly</span><span class="aw-badge aw-badge--positive-soft">Save 25%</span></span>
            <span class="aw-plan-option__sub">Just $7.50/mo · billed yearly</span>
          </span>
          <span class="aw-plan-option__price"><span class="aw-plan-option__amount">$89.99</span><span class="aw-plan-option__period">per year</span></span>
        </button>
        <button type="button" class="aw-plan-option" role="radio" aria-checked="false">
          <span class="aw-radio aw-radio--ring" aria-hidden="true"><span class="aw-radio__dot"></span></span>
          <span class="aw-plan-option__body">
            <span class="aw-plan-option__name-row"><span class="aw-plan-option__name">Monthly</span></span>
            <span class="aw-plan-option__sub">Billed monthly</span>
          </span>
          <span class="aw-plan-option__price"><span class="aw-plan-option__amount">$9.99</span><span class="aw-plan-option__period">per month</span></span>
        </button>
      </div>`],
    ],
  },
  "fact-row": {
    owns: ["aw-fact-row"],
    sections: [
      ["Cost facts (in a listing card's facts stack)", `<div class="aw-listing-card__facts">
        <div class="aw-fact-row"><span class="aw-fact-row__label">Buyers Premium:</span><span class="aw-fact-row__value">+20% ($770)</span></div>
        <div class="aw-fact-row"><span class="aw-fact-row__label">Total:</span><span class="aw-fact-row__value">$4,620</span></div>
      </div>`],
      ["With a lock icon (gated value)", `<div class="aw-fact-row"><span class="aw-fact-row__label">Seller:</span>${I("lock", 12)}</div>`],
    ],
  },
  divider: {
    owns: ["aw-divider"],
    sections: [
      ["Default (subtle) — default 16px vertical margin", `<div><div class="aw-body-muted">Above</div><div class="aw-divider"></div><div class="aw-body-muted">Below</div></div>`],
      ["Primary (.aw-divider--primary, soft green)", `<div><div class="aw-body-muted">Above</div><div class="aw-divider aw-divider--primary"></div><div class="aw-body-muted">Below</div></div>`],
    ],
  },
  "hero-band": {
    owns: ["aw-hero-band"],
    sections: [
      ["Near-black gradient band behind a hero", `<div class="aw-hero-band" style="height:260px;display:flex;align-items:center;justify-content:center;border-radius:12px">
        <div class="aw-photo" style="width:150px;height:210px;border-radius:8px;box-shadow:var(--aw-shadow-hairline)"></div>
      </div>`],
    ],
  },
};
