(function () {
  function renderModuleList({ activeLessonId, onSelect }) {
    const container = document.getElementById("formationModules");
    const modules = typeof formationModules !== "undefined" ? formationModules : [];
    if (!container || !modules.length) return;

    container.innerHTML = modules.map((module) => {
      const isOpen = module.lessons.some((lesson) => lesson.id === activeLessonId);
      return `
        <details class="rounded-[1.2rem] border border-slate-200 bg-white p-3" ${isOpen ? "open" : ""}>
          <summary class="cursor-pointer list-none rounded-xl px-2 py-2 text-sm font-black text-slate-950 marker:hidden">
            <span class="flex items-center justify-between gap-3">
              <span>${AprogosHelpers.escapeHtml(module.title)}</span>
              <span class="text-blue-700">+</span>
            </span>
          </summary>
          <div class="mt-3 grid gap-2">
            ${module.lessons.map((lesson) => `
              <button type="button" class="lesson-button ${lesson.id === activeLessonId ? "active" : ""} rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-bold text-slate-700" data-lesson-id="${lesson.id}">
                ${AprogosHelpers.escapeHtml(lesson.title)}
              </button>`).join("")}
          </div>
        </details>`;
    }).join("");

    container.querySelectorAll("[data-lesson-id]").forEach((button) => {
      button.addEventListener("click", () => onSelect(button.dataset.lessonId));
    });
  }

  window.AprogosFormationModules = { renderModuleList };
})();