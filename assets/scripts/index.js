import {
  COMICS,
  featuredComics,
  newReleaseComics,
  popularComics,
  listPublishers,
} from "../data/comics.js";
import { renderComics } from "./ui.js";

const heroSlides = featuredComics();

const buildHero = () => {
  const track = document.querySelector("[data-carousel-track]");
  const dotsContainer = document.querySelector("[data-carousel-dots]");
  if (!track || !dotsContainer) return;

  track.innerHTML = heroSlides
    .map(
      (comic) => `
        <article class="carousel-slide">
          <div>
            <p class="badge">Featured</p>
            <h3>${comic.title}</h3>
            <p>${comic.description}</p>
            <div class="card-meta">
              <span>${comic.publisher}</span>
              <span class="price-tag">$${comic.price.toFixed(2)}</span>
            </div>
            <div style="margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
              <a class="btn btn-primary" href="comic-detail.html?id=${comic.id}">Read profile</a>
              <a class="btn btn-secondary" href="browse.html">Browse all</a>
            </div>
          </div>
          <img src="${comic.coverImg}" alt="Featured comic ${comic.title}" />
        </article>
      `,
    )
    .join("");

  dotsContainer.innerHTML = heroSlides
    .map(
      (_, idx) =>
        `<button aria-label="Go to slide ${idx + 1}" data-dot="${idx}"></button>`,
    )
    .join("");

  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  const dots = Array.from(dotsContainer.querySelectorAll("button"));

  let index = 0;
  let intervalId;

  const setSlide = (newIndex) => {
    index = (newIndex + heroSlides.length) % heroSlides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, dotIndex) =>
      dot.classList.toggle("active", dotIndex === index),
    );
  };

  const startAutoplay = () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => setSlide(index + 1), 7000);
  };

  prev?.addEventListener("click", () => {
    setSlide(index - 1);
    startAutoplay();
  });

  next?.addEventListener("click", () => {
    setSlide(index + 1);
    startAutoplay();
  });

  dots.forEach((dot) =>
    dot.addEventListener("click", () => {
      setSlide(Number(dot.dataset.dot));
      startAutoplay();
    }),
  );

  setSlide(0);
  startAutoplay();
};

const hydrateSections = () => {
  renderComics(
    document.querySelector("[data-new-releases]"),
    newReleaseComics(),
  );
  renderComics(document.querySelector("[data-popular]"), popularComics());

  const publisherContainer = document.querySelector(
    "[data-publisher-spotlights]",
  );
  if (publisherContainer) {
    const cards = listPublishers().map((publisher) => {
      const bucket = COMICS.filter((comic) => comic.publisher === publisher);
      const sampleTitles = bucket
        .slice(0, 2)
        .map((comic) => comic.title)
        .join(" • ");
      return `
        <article class="publisher-card">
          <p class="badge">${publisher}</p>
          <h3>${bucket.length} titles</h3>
          <p>${sampleTitles}</p>
          <a class="btn btn-secondary" href="browse.html?publisher=${encodeURIComponent(
            publisher,
          )}">Explore publisher</a>
        </article>
      `;
    });
    publisherContainer.innerHTML = cards.join("");
  }
};

const hydrateStats = () => {
  const statList = document.querySelector("[data-hero-stats]");
  if (!statList) return;
  const totalTitles = COMICS.length;
  const uniquePublishers = new Set(COMICS.map((comic) => comic.publisher)).size;
  const uniqueCharacters = new Set(COMICS.flatMap((comic) => comic.characters))
    .size;
  statList.innerHTML = `
    <li><span>${totalTitles}</span>Total issues</li>
    <li><span>${uniquePublishers}</span>Publishers</li>
    <li><span>${uniqueCharacters}</span>Iconic heroes</li>
  `;
};

window.addEventListener("DOMContentLoaded", () => {
  buildHero();
  hydrateSections();
  hydrateStats();
});
