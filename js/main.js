(function () {
  function renderHomeTraining() {
    const grid = document.getElementById("homeTrainingGrid");
    if (!grid) return;
    const categories = typeof trainingCategories !== "undefined" ? trainingCategories : [];
    grid.innerHTML = categories.map((item) => {
      const target = item.title === "Exercices" ? "exercices" : "formation";
      return `
        <a href="${AprogosHelpers.pageUrl(target)}" class="soft-card hover-lift reveal rounded-[1.5rem] p-5 focus:outline-none">
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-800">${AprogosHelpers.iconSvg(item.icon)}</span>
          <h3 class="mt-5 text-xl font-black text-slate-950">${AprogosHelpers.escapeHtml(item.title)}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">${AprogosHelpers.escapeHtml(item.description)}</p>
        </a>`;
    }).join("");
  }

  function setupRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.AprogosNavigation?.init();
    renderHomeTraining();
    setupRevealAnimations();
  });
})();