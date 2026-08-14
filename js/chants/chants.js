(function () {
  const state = { selectedSongId: null };
  const dom = {};
  const lyricsCache = {};
  let lyricsRequestToken = 0;

  function cacheDom() {
    dom.search = document.getElementById("songSearch");
    dom.language = document.getElementById("languageFilter");
    dom.author = document.getElementById("authorFilter");
    dom.year = document.getElementById("yearFilter");
    dom.reset = document.getElementById("resetSongFilters");
    dom.list = document.getElementById("songList");
    dom.detail = document.getElementById("songDetail");
    dom.count = document.getElementById("songCount");
    dom.empty = document.getElementById("emptySongs");
  }

  function setupSongLibrary() {
    const songs = getSongs();
    if (!dom.list) return;

    AprogosSongFilters.populateFilter(dom.language, "Toutes les langues", AprogosSongFilters.uniqueValues(songs, "langue"));
    AprogosSongFilters.populateFilter(dom.author, "Tous les auteurs", AprogosSongFilters.uniqueValues(songs, "auteur"));
    AprogosSongFilters.populateFilter(dom.year, "Toutes les années", AprogosSongFilters.uniqueValues(songs, "annee"));

    [dom.search, dom.language, dom.author, dom.year].forEach((element) => {
      element.addEventListener("input", () => updateLibraryAfterFilters());
      element.addEventListener("change", () => updateLibraryAfterFilters());
    });

    dom.reset.addEventListener("click", resetSongFilters);
    dom.detail.addEventListener("click", (event) => {
      if (event.target.closest("[data-back-to-songs]")) {
        clearSongSelection(true);
        renderSongs();
        renderSongDetail(null);
      }
    });

    window.addEventListener("popstate", () => {
      state.selectedSongId = getSongIdFromUrl();
      renderSongs();
      renderSongDetail(state.selectedSongId);
    });

    state.selectedSongId = getSongIdFromUrl();
    renderSongs();
    renderSongDetail(state.selectedSongId);
  }

  function getSongs() {
    return typeof chants !== "undefined" ? chants : [];
  }

  function getSongIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.has("chant") ? Number(params.get("chant")) : null;
  }

  function currentFilters() {
    return {
      query: dom.search.value,
      language: dom.language.value,
      author: dom.author.value,
      year: dom.year.value
    };
  }

  function updateLibraryAfterFilters() {
    clearSongSelection(false);
    renderSongs();
    renderSongDetail(null);
  }

  function resetSongFilters() {
    dom.search.value = "";
    dom.language.value = "";
    dom.author.value = "";
    dom.year.value = "";
    clearSongSelection(false);
    renderSongs();
    renderSongDetail(null);
  }

  function clearSongSelection(push) {
    state.selectedSongId = null;
    if (push) {
      history.pushState({}, "", window.location.pathname);
    } else {
      history.replaceState({}, "", window.location.pathname);
    }
  }

  function selectSong(songId) {
    state.selectedSongId = songId;
    const url = new URL(window.location.href);
    url.searchParams.set("chant", String(songId));
    history.pushState({ songId }, "", url);
    renderSongs();
    renderSongDetail(songId);
  }

  function renderSongs() {
    const filtered = AprogosSongFilters.filterSongs(getSongs(), currentFilters());
    dom.count.textContent = `${filtered.length} chant${filtered.length > 1 ? "s" : ""}`;
    dom.empty.classList.toggle("hidden", filtered.length !== 0);
    dom.list.innerHTML = "";

    const fragment = document.createDocumentFragment();
    filtered.forEach((song) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `song-row ${song.id === state.selectedSongId ? "active" : ""} rounded-[1.2rem] border border-slate-200 bg-white p-4 text-left`;
      button.setAttribute("aria-label", `Ouvrir le chant numéro ${song.id}, ${song.titre}`);
      button.innerHTML = `
        <div class="flex gap-4">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-black text-blue-800" aria-hidden="true">${song.id}</span>
          <span class="min-w-0 flex-1">
            <span class="block truncate text-base font-black text-slate-950">${AprogosHelpers.escapeHtml(song.titre)}</span>
            <span class="mt-1 grid gap-1 text-sm font-semibold text-slate-500 sm:grid-cols-3">
              <span>${AprogosHelpers.escapeHtml(song.auteur || "Non renseigné")}</span>
              <span>${AprogosHelpers.escapeHtml(song.annee || "Non renseignée")}</span>
              <span>${AprogosHelpers.escapeHtml(song.langue || "Non renseignée")}</span>
            </span>
          </span>
        </div>`;
      button.addEventListener("click", () => selectSong(song.id));
      fragment.appendChild(button);
    });

    dom.list.appendChild(fragment);
  }

  function renderSongDetail(songId) {
    const song = getSongs().find((item) => item.id === Number(songId));
    if (!song) {
      dom.detail.innerHTML = `
        <div class="grid min-h-[22rem] place-items-center text-center">
          <div>
            <p class="text-5xl text-blue-900" aria-hidden="true">♪</p>
            <h2 class="mt-4 text-2xl font-black text-slate-950">Aucun chant sélectionné</h2>
            <p class="mt-3 max-w-sm text-sm leading-7 text-slate-500">Cliquez sur un chant dans la liste pour afficher ses informations et ses paroles.</p>
          </div>
        </div>`;
      return;
    }

    dom.detail.innerHTML = `
      <button type="button" data-back-to-songs class="mb-5 inline-flex text-sm font-black text-blue-700 hover:text-blue-950">Retour à la liste</button>
      <div class="flex items-center gap-3">
        <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-800 text-sm font-black text-white">${song.id}</span>
        <p class="section-kicker">Détail du chant</p>
      </div>
      <h2 class="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">${AprogosHelpers.escapeHtml(song.titre)}</h2>
      <dl class="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        ${detailMeta("Auteur", song.auteur || "Non renseigné")}
        ${detailMeta("Année", song.annee || "Non renseignée")}
        ${detailMeta("Langue", song.langue || "Non renseignée")}
      </dl>
      <section class="mt-7">
        <h3 class="text-xl font-black text-slate-950">Paroles</h3>
        <div id="lyricBox" class="lyric-box mt-4 rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 text-slate-700" style="white-space: pre-wrap;">
          Chargement des paroles...
        </div>
      </section>`;

    loadLyrics(song);
  }

  function loadLyrics(song) {
    const box = document.getElementById("lyricBox");
    if (!box) return;

    if (!song.paroles) {
      box.textContent = "Les paroles de ce chant ne sont pas encore disponibles.";
      return;
    }

    const base = document.body.dataset.base || "../";
    const url = `${base}data/${song.paroles}`;

    if (lyricsCache[url] !== undefined) {
      box.textContent = lyricsCache[url];
      return;
    }

    const requestId = ++lyricsRequestToken;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("not-found");
        return response.text();
      })
      .then((text) => {
        const content = text.trim() || "Les paroles de ce chant ne sont pas encore disponibles.";
        lyricsCache[url] = content;
        if (requestId === lyricsRequestToken) {
          box.textContent = content;
        }
      })
      .catch(() => {
        const message = "Les paroles de ce chant ne sont pas encore disponible.";
        if (requestId === lyricsRequestToken) {
          box.textContent = message;
        }
      });
  }

  function detailMeta(label, value) {
    return `<div class="rounded-2xl bg-slate-50 p-4"><dt class="text-xs font-black uppercase tracking-[0.14em] text-slate-500">${label}</dt><dd class="mt-2 font-black text-slate-950">${AprogosHelpers.escapeHtml(value)}</dd></div>`;
  }

  function init() {
    cacheDom();
    setupSongLibrary();
  }

  document.addEventListener("DOMContentLoaded", init);
  window.AprogosChants = { init, renderSongs, renderSongDetail };
})();