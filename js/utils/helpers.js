(function () {
  function basePath() {
    return document.body.dataset.base || "";
  }

  function pageUrl(page) {
    const base = basePath();
    if (page === "accueil") return `${base}index.html`;
    return `${base}pages/${page}.html`;
  }

  function assetPath(path) {
    if (!path) return "";
    if (/^(https?:)?\/\//.test(path)) return path;
    return `${basePath()}${path}`;
  }

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function escapeHtml(value) {
    const entities = {
      "&": "\u0026amp;",
      "<": "\u0026lt;",
      ">": "\u0026gt;",
      '"': "\u0026quot;",
      "'": "\u0026#039;"
    };
    return String(value).replace(/[&<>"']/g, (char) => entities[char]);
  }

  function iconSvg(type) {
    const common = 'viewBox="0 0 40 40" fill="none" aria-hidden="true"';
    const icons = {
      staff: `<svg ${common}><path d="M8 12h24M8 17h24M8 22h24M8 27h24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 29V9l14-3v18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><ellipse cx="13" cy="29" rx="5" ry="3.5" fill="currentColor"/><ellipse cx="27" cy="24" rx="5" ry="3.5" fill="currentColor"/></svg>`,
      voice: `<svg ${common}><path d="M20 23c4.4 0 8-3.6 8-8V9a8 8 0 0 0-16 0v6c0 4.4 3.6 8 8 8Z" stroke="currentColor" stroke-width="3"/><path d="M8 17c0 6.6 5.4 12 12 12s12-5.4 12-12M20 29v6M15 35h10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
      ear: `<svg ${common}><path d="M15 25c0-7 9-6 9-14 0-4-3-7-8-7-4.4 0-8 3.3-8 8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M24 22c0 6-5 6-5 10 0 2.2 1.8 4 4 4 3 0 6-2.4 6-6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M14 14c0-2.2 1.8-4 4-4s4 1.8 4 4c0 4-5 5-5 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
      harmony: `<svg ${common}><circle cx="12" cy="20" r="5" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="13" r="5" stroke="currentColor" stroke-width="3"/><circle cx="28" cy="27" r="5" stroke="currentColor" stroke-width="3"/><path d="M16 18l4-3M17 22l6 3M25 18l2 5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
      practice: `<svg ${common}><path d="M10 28c5-10 9-10 14 0M9 31h22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M26 8v16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M26 8l7-2v13" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="23" cy="24" rx="4.5" ry="3.2" fill="currentColor"/></svg>`
    };
    return icons[type] || icons.staff;
  }

  window.AprogosHelpers = { assetPath, basePath, escapeHtml, iconSvg, normalizeText, pageUrl };
})();