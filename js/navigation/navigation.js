(function () {
  const navItems = [
    { key: "accueil", label: "Accueil" },
    { key: "formation", label: "Formation" },
    { key: "exercices", label: "Exercices" },
    { key: "chants", label: "Chants" }
  ];

  function renderHeader() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const activePage = document.body.dataset.page;
    const links = navItems.map((item) => {
      const active = item.key === activePage ? " active" : "";
      const current = item.key === activePage ? ' aria-current="page"' : "";
      return `<a class="nav-link${active}" href="${AprogosHelpers.pageUrl(item.key)}" data-nav="${item.key}"${current}>${item.label}</a>`;
    }).join("");
    const mobileLinks = navItems.map((item) => {
      const active = item.key === activePage ? " active" : "";
      return `<a class="nav-link${active} rounded-2xl px-4 py-3" href="${AprogosHelpers.pageUrl(item.key)}" data-nav-mobile="${item.key}">${item.label}</a>`;
    }).join("");

    header.innerHTML = `
      <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/86 backdrop-blur-xl">
        <div class="app-shell flex min-h-[76px] items-center justify-between gap-4">
          <a href="${AprogosHelpers.pageUrl("accueil")}" class="flex items-center gap-3" aria-label="APROGOS VOICE, accueil">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" role="img">
                <path d="M13 27V10l15-3v17" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 27c0 2.2-2.1 4-4.7 4S4 29.2 4 27s1.9-4 4.3-4 4.7 1.8 4.7 4Z" fill="currentColor"/>
                <path d="M28 24c0 2.2-2.1 4-4.7 4S19 26.2 19 24s1.9-4 4.3-4 4.7 1.8 4.7 4Z" fill="currentColor"/>
              </svg>
            </span>
            <span class="leading-none">
              <span class="block text-sm font-black tracking-[0.22em] text-slate-950">APROGOS</span>
              <span class="block text-xs font-black tracking-[0.38em] text-blue-700">VOICE</span>
            </span>
          </a>
          <nav class="hidden items-center gap-8 md:flex" aria-label="Navigation principale">${links}</nav>
          <button id="mobileMenuButton" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden" type="button" aria-label="Ouvrir le menu" aria-controls="mobileMenu" aria-expanded="false">
            <span class="sr-only">Menu</span>
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div id="mobileMenu" class="mobile-menu absolute left-0 right-0 top-[76px] border-b border-slate-200 bg-white shadow-xl md:hidden">
          <nav class="app-shell grid gap-2 py-4" aria-label="Navigation mobile">${mobileLinks}</nav>
        </div>
      </header>`;
  }

  function renderFooter() {
    const footer = document.getElementById("siteFooter");
    if (!footer) return;
    const links = navItems.map((item) => `<a href="${AprogosHelpers.pageUrl(item.key)}" class="hover:text-slate-950">${item.label}</a>`).join("");
    footer.innerHTML = `
      <footer class="border-t border-slate-200 bg-white py-10">
        <div class="app-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p class="text-lg font-black tracking-[-0.03em] text-slate-950">APROGOS VOICE</p>
            <p class="mt-2 text-sm font-semibold text-slate-500">APIM - Apostolic Prophetic Impact Mission</p>
          </div>
          <nav class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-600" aria-label="Navigation du pied de page">${links}</nav>
        </div>
      </footer>`;
  }

  function setupMobileMenu() {
    const button = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    if (!button || !menu) return;

    button.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMobileMenu(button, menu));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileMenu(button, menu);
    });
  }

  function closeMobileMenu(button, menu) {
    menu.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Ouvrir le menu");
  }

  function init() {
    renderHeader();
    renderFooter();
    setupMobileMenu();
  }

  window.AprogosNavigation = { init };
})();