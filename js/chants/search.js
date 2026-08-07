(function () {
  function matchesSearch(song, query) {
    if (!query) return true;
    return [song.titre, song.auteur, song.langue].some((value) => AprogosHelpers.normalizeText(value).includes(query));
  }

  window.AprogosSongSearch = { matchesSearch };
})();