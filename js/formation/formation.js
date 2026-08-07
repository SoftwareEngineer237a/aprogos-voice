(function () {
  const state = { activeLessonId: "musique" };

  function openLesson(lessonId) {
    state.activeLessonId = lessonId;
    window.AprogosFormationModules.renderModuleList({ activeLessonId: state.activeLessonId, onSelect: openLesson });
    window.AprogosLessons.renderLesson(state.activeLessonId);
  }

  function init() {
    if (!document.getElementById("formationModules")) return;
    openLesson(state.activeLessonId);
  }

  document.addEventListener("DOMContentLoaded", init);
  window.AprogosFormation = { init, openLesson };
})();