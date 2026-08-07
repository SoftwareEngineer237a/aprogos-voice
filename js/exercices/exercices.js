(function () {
  const state = { activeCategory: "solfege" };

  function renderExerciseTabs() {
    const tabs = document.getElementById("exerciseTabs");
    if (!tabs) return;
    const categories = window.AprogosExerciseData.getExerciseCategories();
    tabs.innerHTML = categories.map((category) => `
      <button type="button" class="exercise-tab ${category.id === state.activeCategory ? "active" : ""} rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700" data-exercise-category="${category.id}">
        ${AprogosHelpers.escapeHtml(category.label)}
      </button>`).join("");

    tabs.querySelectorAll("[data-exercise-category]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeCategory = button.dataset.exerciseCategory;
        renderExerciseTabs();
        renderExercises();
      });
    });
  }

  function renderExercises() {
    const grid = document.getElementById("exerciseGrid");
    if (!grid) return;
    const categories = window.AprogosExerciseData.getExerciseCategories();
    const category = categories.find((item) => item.id === state.activeCategory) || categories[0];
    if (!category) return;

    grid.innerHTML = category.items.map((item) => `
      <article class="soft-card hover-lift rounded-[1.5rem] p-5">
        <div class="flex items-start gap-4">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-2xl" aria-hidden="true">${item.icon}</span>
          <div>
            <h2 class="text-xl font-black text-slate-950">${AprogosHelpers.escapeHtml(item.title)}</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">${AprogosHelpers.escapeHtml(item.goal)}</p>
          </div>
        </div>
        ${renderExerciseIllustration(item)}
        <ol class="mt-5 space-y-3">
          ${item.steps.map((step, index) => `<li class="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-700"><span class="font-black text-blue-700">${index + 1}.</span><span>${AprogosHelpers.escapeHtml(step)}</span></li>`).join("")}
        </ol>
        <p class="mt-5 rounded-2xl bg-blue-950 p-4 text-sm font-bold leading-6 text-blue-50">${AprogosHelpers.escapeHtml(item.tip)}</p>
      </article>`).join("");
  }

  function renderExerciseIllustration(item) {
    if (!item.illustration) return "";
    return `<figure class="exercise-illustration"><img src="${AprogosHelpers.assetPath(item.illustration.src)}" alt="${AprogosHelpers.escapeHtml(item.illustration.alt)}" loading="lazy"></figure>`;
  }

  function init() {
    if (!document.getElementById("exerciseTabs")) return;
    renderExerciseTabs();
    renderExercises();
  }

  document.addEventListener("DOMContentLoaded", init);
  window.AprogosExercises = { init, renderExercises, renderExerciseTabs };
})();