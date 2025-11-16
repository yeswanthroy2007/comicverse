import { COMICS, listPublishers, listGenres } from "../data/comics.js";
import { renderComics } from "./ui.js";

const params = new URLSearchParams(window.location.search);

const state = {
  publisher: params.get("publisher") || "all",
  genre: "all",
  search: "",
  sort: "release-desc",
};

const publishers = ["all", ...listPublishers()];
const genres = ["all", ...listGenres()];

const publisherContainer = document.querySelector("[data-filter-publisher]");
const genreContainer = document.querySelector("[data-filter-genre]");
const cardsContainer = document.querySelector("[data-catalog]");
const sortSelect = document.querySelector("[data-sort]");
const searchInput = document.querySelector("[data-search]");
const summaryLabel = document.querySelector("[data-filter-summary]");

const buildFilterChips = () => {
  if (publisherContainer) {
    publisherContainer.innerHTML = publishers
      .map(
        (publisher) => `
        <button class="filter-chip ${
          state.publisher === publisher ? "active" : ""
        }" data-filter="publisher" data-value="${publisher}">
          ${publisher === "all" ? "All Publishers" : publisher}
        </button>
      `,
      )
      .join("");
  }

  if (genreContainer) {
    genreContainer.innerHTML = genres
      .map(
        (genre) => `
        <button class="filter-chip ${state.genre === genre ? "active" : ""}" data-filter="genre" data-value="${genre}">
          ${genre === "all" ? "All Genres" : genre}
        </button>
      `,
      )
      .join("");
  }
};

const applyFilters = () => {
  let filtered = [...COMICS];

  if (state.publisher !== "all") {
    filtered = filtered.filter((comic) => comic.publisher === state.publisher);
  }

  if (state.genre !== "all") {
    filtered = filtered.filter((comic) => comic.genre.includes(state.genre));
  }

  if (state.search.trim()) {
    const term = state.search.toLowerCase();
    filtered = filtered.filter(
      (comic) =>
        comic.title.toLowerCase().includes(term) ||
        comic.characters.some((character) =>
          character.toLowerCase().includes(term),
        ),
    );
  }

  filtered.sort((a, b) => {
    switch (state.sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "title-az":
        return a.title.localeCompare(b.title);
      case "release-asc":
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      case "release-desc":
      default:
        return new Date(b.releaseDate) - new Date(a.releaseDate);
    }
  });

  if (summaryLabel) {
    summaryLabel.textContent = `${filtered.length} titles displayed`;
  }

  renderComics(cardsContainer, filtered);
};

const handleFilterClick = (event) => {
  const target = event.target.closest(".filter-chip");
  if (!target) return;
  const { filter, value } = target.dataset;
  state[filter] = value;
  buildFilterChips();
  applyFilters();
};

publisherContainer?.addEventListener("click", handleFilterClick);
genreContainer?.addEventListener("click", handleFilterClick);

sortSelect?.addEventListener("change", (event) => {
  state.sort = event.target.value;
  applyFilters();
});

searchInput?.addEventListener("input", (event) => {
  state.search = event.target.value;
  applyFilters();
});

window.addEventListener("DOMContentLoaded", () => {
  buildFilterChips();
  if (sortSelect) sortSelect.value = state.sort;
  applyFilters();
});
