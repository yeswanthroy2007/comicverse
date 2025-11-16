import { COMICS, getComicById } from "../data/comics.js";
import { addToCart } from "./cart.js";
import {
  formatCurrency,
  getQueryParam,
  renderComics,
  showToast,
  getImagePath,
} from "./ui.js";

const detailRoot = document.querySelector("[data-detail-root]");

const renderDetail = () => {
  if (!detailRoot) return;
  const comicId = getQueryParam("id");
  const comic = getComicById(comicId);

  if (!comic) {
    detailRoot.innerHTML = `
      <div class="catalog-empty">
        <p>We couldn't find that issue. Try returning to the <a href="browse.html">catalog</a>.</p>
      </div>
    `;
    return;
  }

  detailRoot.querySelector("[data-detail-title]").textContent = comic.title;
  detailRoot.querySelector("[data-detail-description]").textContent =
    comic.description;
  detailRoot.querySelector("[data-detail-price]").textContent = formatCurrency(
    comic.price,
  );
  detailRoot.querySelector("[data-detail-cover]").src = getImagePath(comic.coverImg);
  detailRoot.querySelector("[data-detail-cover]").alt =
    `Cover of ${comic.title}`;

  detailRoot.querySelector("[data-detail-meta]").innerHTML = `
    <div class="meta-row"><strong>Publisher:</strong> ${comic.publisher}</div>
    <div class="meta-row"><strong>Release:</strong> ${new Date(
      comic.releaseDate,
    ).toLocaleDateString()}</div>
    <div class="meta-row"><strong>Characters:</strong> ${comic.characters.join(
      ", ",
    )}</div>
    <div class="meta-row"><strong>Genres:</strong> ${comic.genre.join(", ")}</div>
  `;

  const addButton = detailRoot.querySelector("[data-add-to-cart]");
  addButton.addEventListener("click", () => {
    addToCart(comic, 1);
    showToast(`${comic.title} added to cart`);
  });

  const relatedContainer = document.querySelector("[data-related]");
  if (relatedContainer) {
    const related = COMICS.filter(
      (entry) => entry.publisher === comic.publisher && entry.id !== comic.id,
    ).slice(0, 3);
    renderComics(relatedContainer, related);
  }
};

window.addEventListener("DOMContentLoaded", renderDetail);
