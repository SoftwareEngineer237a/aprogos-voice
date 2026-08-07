(function () {
  function uniqueValues(songs, key) {
    return [...new Set(songs.map((song) => String(song[key] || "").trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  }

  function populateFilter(select, label, values) {
    if (!select) return;
    select.innerHTML = `<option value="">${label}</option>${values.map((value) => `<option value="${AprogosHelpers.escapeHtml(value)}">${AprogosHelpers.escapeHtml(value)}</option>`).join("")}`;
  }

  function filterSongs(songs, filters) {
    const query = AprogosHelpers.normalizeText(filters.query);
    return songs.filter((song) => {
      const matchesQuery = window.AprogosSongSearch.matchesSearch(song, query);
      const matchesLanguage = !filters.language || song.langue === filters.language;
      const matchesAuthor = !filters.author || song.auteur === filters.author;
      const matchesYear = !filters.year || song.annee === filters.year;
      return matchesQuery && matchesLanguage && matchesAuthor && matchesYear;
    });
  }

  window.AprogosSongFilters = { filterSongs, populateFilter, uniqueValues };
})();