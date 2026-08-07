(function () {
  function getExerciseCategories() {
    return typeof exercises !== "undefined" ? exercises : [];
  }

  window.AprogosExerciseData = { getExerciseCategories };
})();