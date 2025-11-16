import { getCartCount } from "./cart.js";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (value) =>
  currencyFormatter.format(Number(value));

export const renderComics = (container, comics) => {
  if (!container) return;
  if (!comics.length) {
    container.innerHTML = `<div class="catalog-empty">No comics match your filters. Try a different combination.</div>`;
    return;
  }
  container.innerHTML = comics.map((comic) => createComicCard(comic)).join("");
};

export const createComicCard = (comic) => {
  const detailUrl = `comic-detail.html?id=${encodeURIComponent(comic.id)}`;
  return `
    <article class="card-comic">
      <img src="${comic.coverImg}" alt="Cover for ${comic.title}" loading="lazy" />
      <div class="card-body">
        <p class="badge">${comic.publisher}</p>
        <h3>${comic.title}</h3>
        <p class="card-meta">
          <span>${comic.genre.join(", ")}</span>
          <span class="price-tag">${formatCurrency(comic.price)}</span>
        </p>
        <a class="btn btn-secondary" href="${detailUrl}">View Details</a>
      </div>
    </article>
  `;
};

export const showToast = (message) => {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
};

export const syncCartBadge = () => {
  const badge = document.querySelector("[data-cart-count]");
  if (badge) {
    badge.textContent = getCartCount();
  }
};

window.addEventListener("cart:update", syncCartBadge);
window.addEventListener("DOMContentLoaded", syncCartBadge);

export const getQueryParam = (key) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
};
