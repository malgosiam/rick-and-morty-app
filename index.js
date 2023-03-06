import { createCharacterCard } from "./components/card/card.js";
import { prevPage, nextPage } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 0;
let page = 1;
const searchQuery = "";
let BASE_URL = `https://rickandmortyapi.com/api/character/`;
async function fetchCharacters() {
  try {
    const response = await fetch(BASE_URL + `?page=${page}`);
    if (!response.ok) {
      console.error("errorTrigger");
      return;
    }
    const data = await response.json();
    maxPage = data.info.pages;
    const objects = data.results;
    cardContainer.innerHTML = "";

    objects.forEach((object) => {
      const card = createCharacterCard(object);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error(error);
  }
}

prevButton.addEventListener("click", async () => {
  page = prevPage(page, maxPage);
  pagination.textContent = `${page} / ${maxPage}`;
  await fetchCharacters();
});

nextButton.addEventListener("click", async () => {
  page = nextPage(page, maxPage);
  pagination.textContent = `${page} / ${maxPage}`;
  await fetchCharacters();
});

await fetchCharacters();
