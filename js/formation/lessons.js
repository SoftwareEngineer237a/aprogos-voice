(function () {
  function findLesson(lessonId) {
    const modules = typeof formationModules !== "undefined" ? formationModules : [];
    for (const module of modules) {
      const lesson = module.lessons.find((item) => item.id === lessonId);
      if (lesson) return { lesson, module };
    }
    return { lesson: modules[0]?.lessons[0], module: modules[0] };
  }

  function renderLesson(lessonId) {
    const viewer = document.getElementById("lessonViewer");
    const { lesson, module } = findLesson(lessonId);
    if (!viewer || !lesson || !module) return;

    viewer.innerHTML = `
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-blue-700">${AprogosHelpers.escapeHtml(module.title.split(" - ")[0])}</span>
        <span class="text-sm font-bold text-slate-400">${AprogosHelpers.escapeHtml(module.title.split(" - ")[1] || "")}</span>
      </div>
      <h2 class="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">${AprogosHelpers.escapeHtml(lesson.title)}</h2>
      <p class="mt-5 rounded-[1.3rem] bg-slate-50 p-5 text-lg leading-8 text-slate-700">${AprogosHelpers.escapeHtml(lesson.intro)}</p>

      <div class="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
        <div class="space-y-6">
          ${courseBlock("Définition", lesson.definition)}
          <section>
            <h3 class="text-xl font-black text-slate-950">Explication</h3>
            <ul class="mt-4 grid gap-3">
              ${lesson.explanation.map((item) => `<li class="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 leading-7 text-slate-700"><span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-700"></span><span>${AprogosHelpers.escapeHtml(item)}</span></li>`).join("")}
            </ul>
          </section>
          ${courseBlock("Exemple", lesson.example)}
          ${courseBlock("Conseil pratique", lesson.practice)}
          <section class="rounded-[1.3rem] bg-blue-950 p-5 text-white">
            <h3 class="text-xl font-black">À retenir</h3>
            <ul class="mt-4 grid gap-2 text-blue-50">
              ${lesson.remember.map((item) => `<li class="flex gap-3"><span class="font-black text-blue-200">•</span><span>${AprogosHelpers.escapeHtml(item)}</span></li>`).join("")}
            </ul>
          </section>
        </div>
        <aside class="rounded-[1.5rem] border border-slate-200 bg-white p-4">
          <h3 class="mb-4 text-sm font-black uppercase tracking-[0.14em] text-slate-500">Illustration</h3>
          ${lessonIllustration(lesson)}
        </aside>
      </div>`;
  }

  function courseBlock(title, content) {
    return `
      <section>
        <h3 class="text-xl font-black text-slate-950">${title}</h3>
        <p class="mt-3 leading-8 text-slate-700">${AprogosHelpers.escapeHtml(content)}</p>
      </section>`;
  }

  function lessonIllustration(lesson) {
    return `<div class="lesson-media illustration-${lesson.illustration}">${renderLessonImages(lesson)}<div class="pedagogy-diagram">${lessonDiagram(lesson.illustration)}</div></div>`;
  }

  function renderLessonImages(lesson) {
    const images = [lesson.image, ...(lesson.gallery || [])].filter(Boolean);
    if (!images.length) return "";
    const multiple = images.length > 1 ? " has-multiple" : "";
    return `<div class="lesson-image-grid${multiple}">${images.map((image) => `
      <figure class="lesson-image-card">
        <img src="${AprogosHelpers.assetPath(image.src)}" alt="${AprogosHelpers.escapeHtml(image.alt)}" loading="lazy">
        <figcaption>${AprogosHelpers.escapeHtml(image.caption || image.alt)}</figcaption>
      </figure>`).join("")}</div>`;
  }

  function lessonDiagram(type) {
    const staff = `
      <div class="music-staff min-h-[13rem]">
        <span class="staff-note" style="left: 18%; top: 59%;"></span>
        <span class="staff-note" style="left: 38%; top: 48%;"></span>
        <span class="staff-note" style="left: 58%; top: 37%;"></span>
        <span class="absolute left-5 top-5 text-4xl font-black text-blue-950">𝄞</span>
      </div>`;
    const maps = {
      music: `<div class="grid gap-4"><div class="rounded-2xl bg-slate-50 p-5 text-center"><p class="text-5xl">♪</p><p class="mt-2 font-black text-slate-950">Son organisé</p></div><div class="timeline-line"><span class="timeline-step" style="left: 12%"></span><span class="timeline-step" style="left: 38%"></span><span class="timeline-step" style="left: 64%"></span><span class="timeline-step" style="left: 88%"></span></div><p class="text-sm font-bold text-slate-500">La musique place les sons dans le temps.</p></div>`,
      staff,
      clefs: `<div class="grid gap-4"><div class="rounded-2xl border border-slate-200 bg-white p-5"><p class="text-5xl text-blue-950">𝄞</p><p class="mt-2 font-black">Clé de Sol : 2e ligne</p></div><div class="rounded-2xl border border-slate-200 bg-white p-5"><p class="text-5xl text-blue-950">𝄢</p><p class="mt-2 font-black">Clé de Fa : 4e ligne</p></div></div>`,
      notes: `<div class="rounded-2xl bg-slate-50 p-5"><div class="grid grid-cols-7 items-end gap-2 text-center text-xs font-black text-blue-950">${["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"].map((note, index) => `<div><div class="mx-auto mb-2 w-full rounded-t-xl bg-blue-700" style="height:${34 + index * 12}px"></div>${note}</div>`).join("")}</div><p class="mt-4 text-sm font-bold text-slate-500">Plus la note monte, plus le son est aigu.</p></div>`,
      rhythm: `<div class="rounded-2xl bg-slate-50 p-5"><div class="grid grid-cols-4 gap-3 text-center font-black text-blue-950"><span class="rounded-2xl bg-white p-4 shadow-sm">1</span><span class="rounded-2xl bg-white p-4 shadow-sm">2</span><span class="rounded-2xl bg-white p-4 shadow-sm">3</span><span class="rounded-2xl bg-white p-4 shadow-sm">4</span></div><p class="mt-4 text-sm font-bold text-slate-500">La pulsation reste régulière.</p></div>`,
      values: `<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">${[["𝅝", "Ronde", "4 temps"], ["𝅗𝅥", "Blanche", "2 temps"], ["♩", "Noire", "1 temps"], ["♪", "Croche", "1/2 temps"]].map(([symbol, name, time]) => `<div class="value-symbol"><span class="text-4xl text-blue-950">${symbol}</span><strong>${name}</strong><span class="text-sm text-slate-500">${time}</span></div>`).join("")}</div>`,
      rests: `<div class="grid gap-3">${[["▰", "Pause", "4 temps"], ["▱", "Demi-pause", "2 temps"], ["𝄽", "Soupir", "1 temps"]].map(([symbol, name, time]) => `<div class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4"><span class="text-3xl text-blue-950">${symbol}</span><strong>${name}</strong><span class="text-sm font-bold text-slate-500">${time}</span></div>`).join("")}</div>`,
      posture: `<div class="grid gap-4"><div class="rounded-2xl bg-blue-50 p-5 text-center"><p class="font-black text-blue-950">Bonne posture</p></div><div class="rounded-2xl bg-slate-50 p-5 text-center opacity-75"><p class="font-black text-slate-600">À corriger</p></div></div>`,
      breathing: `<div class="rounded-2xl bg-blue-50 p-5 text-center"><div class="mx-auto grid h-36 w-36 place-items-center rounded-full border-8 border-blue-200 bg-white text-5xl">🫁</div><p class="mt-4 font-black text-blue-950">Inspiration basse, épaules calmes</p></div>`,
      warmup: `<div class="grid gap-3"><div class="rounded-2xl bg-slate-50 p-4"><strong>Mmm</strong><div class="mt-2 h-2 rounded-full bg-blue-200"></div></div><div class="rounded-2xl bg-slate-50 p-4"><strong>Sirènes vocales</strong><svg viewBox="0 0 240 64" class="mt-2 w-full"><path d="M8 42C54 6 82 6 120 42s72 36 112 0" fill="none" stroke="#1d4ed8" stroke-width="6" stroke-linecap="round"/></svg></div></div>`,
      articulation: `<div class="grid gap-3 text-center font-black"><div class="rounded-2xl bg-blue-50 p-4 text-blue-950">Ma - Mé - Mi - Mo - Mu</div><div class="rounded-2xl bg-slate-50 p-4 text-slate-950">Ba - Da - Bi - Bou</div><p class="text-sm font-bold text-slate-500">Clairement, sans dureté.</p></div>`,
      unison: `<div class="rounded-2xl bg-slate-50 p-5"><div class="flex items-end justify-center gap-3"><span class="h-16 w-10 rounded-t-full bg-blue-950"></span><span class="h-16 w-10 rounded-t-full bg-blue-800"></span><span class="h-16 w-10 rounded-t-full bg-blue-600"></span></div><div class="mt-5 h-2 rounded-full bg-blue-700"></div><p class="mt-3 text-center font-black">Une même ligne</p></div>`,
      listening: `<div class="rounded-2xl bg-blue-50 p-5 text-center"><p class="text-6xl">👂</p><p class="mt-3 font-black text-blue-950">Écouter avant de chanter plus fort</p></div>`,
      pitch: `<div class="rounded-2xl bg-slate-50 p-5"><div class="relative h-32"><div class="absolute left-0 right-0 top-1/2 h-1 rounded-full bg-blue-700"></div><span class="absolute left-[42%] top-[43%] h-6 w-6 rounded-full bg-blue-950"></span><span class="absolute left-[20%] top-[66%] text-xs font-black text-slate-500">trop bas</span><span class="absolute right-[12%] top-[18%] text-xs font-black text-slate-500">trop haut</span></div><p class="text-center font-black">Stabiliser la note</p></div>`,
      intervals: `<div class="grid gap-3">${[["Seconde", "Do - Ré", "w-10"], ["Tierce", "Do - Mi", "w-20"], ["Quinte", "Do - Sol", "w-32"]].map(([name, notes, width]) => `<div class="rounded-2xl bg-slate-50 p-4"><div class="flex items-center gap-3"><span class="h-4 w-4 rounded-full bg-blue-950"></span><span class="h-1 ${width} rounded-full bg-blue-300"></span><span class="h-4 w-4 rounded-full bg-blue-700"></span></div><p class="mt-2 font-black">${name} : ${notes}</p></div>`).join("")}</div>`,
      sections: `<div class="grid grid-cols-2 gap-3 text-center font-black text-blue-950">${["Soprano", "Alto", "Ténor", "Basse"].map((name) => `<div class="rounded-2xl bg-blue-50 p-5">${name}</div>`).join("")}</div>`,
      chord: `<div class="rounded-2xl bg-slate-50 p-5"><div class="grid gap-3 text-center font-black text-blue-950"><span class="rounded-2xl bg-white p-3">Sol</span><span class="rounded-2xl bg-white p-3">Mi</span><span class="rounded-2xl bg-white p-3">Do</span></div><p class="mt-4 text-center text-sm font-bold text-slate-500">Do - Mi - Sol superposés</p></div>`,
      harmonyWide: `<div class="rounded-2xl bg-slate-50 p-5"><svg viewBox="0 0 260 150" class="w-full"><path d="M20 105C70 55 115 135 165 82s68-22 78-8" fill="none" stroke="#071a3a" stroke-width="7" stroke-linecap="round"/><path d="M20 82C72 32 118 112 170 58s65-18 73-4" fill="none" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round" opacity="0.75"/><path d="M20 126c50-32 98 16 148-24s64-10 75 0" fill="none" stroke="#93c5fd" stroke-width="7" stroke-linecap="round"/></svg><p class="text-center font-black">Des lignes différentes, un ensemble</p></div>`,
      canon: `<div class="grid gap-4"><div><p class="text-sm font-black text-slate-500">Groupe A</p><div class="h-4 rounded-full bg-blue-950"></div></div><div><p class="text-sm font-black text-slate-500">Groupe B</p><div class="ml-16 h-4 rounded-full bg-blue-600"></div></div><p class="text-sm font-bold text-slate-500">Même phrase, départ décalé.</p></div>`,
      twoVoices: `<div class="rounded-2xl bg-slate-50 p-5"><div class="space-y-4"><div class="h-4 w-full rounded-full bg-blue-950"></div><div class="h-4 w-4/5 rounded-full bg-blue-500"></div></div><p class="mt-4 font-black">Deux lignes ensemble</p></div>`,
      fourVoices: `<div class="grid gap-3">${["S", "A", "T", "B"].map((name, index) => `<div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-full bg-blue-950 font-black text-white">${name}</span><span class="h-3 rounded-full" style="width:${92 - index * 12}%; background:${["#1e3a8a", "#2563eb", "#60a5fa", "#bfdbfe"][index]}"></span></div>`).join("")}</div>`,
      polyphony: `<div class="grid gap-4"><div class="rounded-2xl bg-blue-50 p-4"><strong>Homorythmie</strong><div class="mt-3 grid grid-cols-4 gap-2">${Array.from({ length: 8 }, () => `<span class="h-3 rounded-full bg-blue-700"></span>`).join("")}</div></div><div class="rounded-2xl bg-slate-50 p-4"><strong>Polyphonie</strong><div class="mt-3 space-y-2"><span class="block h-3 w-full rounded-full bg-blue-950"></span><span class="block h-3 w-4/5 rounded-full bg-blue-600 ml-6"></span><span class="block h-3 w-3/5 rounded-full bg-blue-300 ml-12"></span></div></div></div>`
    };
    return maps[type] || staff;
  }

  window.AprogosLessons = { findLesson, renderLesson };
})();