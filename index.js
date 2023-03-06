import { createCharacterCard } from "./components/card/card.js";
import {
  prevPage,
  nextPage,
  createButton,
} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

let maxPage = 42;
let page = 1;

const form = createSearchBar((event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  fetchCharacters();
});
searchBarContainer.append(form);
/* const searchBar = document.querySelector('[data-js="search-bar"]'); */
const navigation = document.querySelector('[data-js="navigation"]');
//const prevButton = document.querySelector('[data-js="button-prev"]');
//const nextButton = document.querySelector('[data-js="button-next"]');
//const pagination = document.querySelector('[data-js="pagination"]');

const prevButton = createButton(
  async () => {
    page = prevPage(page, maxPage);
    await fetchCharacters();
  },
  "button--prev",
  "previous"
);

const pagination = createPagination(page, maxPage);

const nextButton = createButton(
  async () => {
    page = nextPage(page, maxPage);
    await fetchCharacters();
  },
  "button--next",
  "next"
);

navigation.append(prevButton, pagination, nextButton);

// States

let searchQuery = "";
let BASE_URL = `https://rickandmortyapi.com/api/character/`;
async function fetchCharacters() {
  try {
    const response = await fetch(
      BASE_URL + `?page=${page}` + `&name=${searchQuery}`
    );
    console.log(BASE_URL);
    if (!response.ok) {
      console.error("errorTrigger");
      return;
    }
    const data = await response.json();
    maxPage = data.info.pages;
    const objects = data.results;
    cardContainer.innerHTML = "";
    pagination.textContent = `${page} / ${maxPage}`;

    objects.forEach((object) => {
      const card = createCharacterCard(object);
      cardContainer.append(card);
    });
  } catch (error) {
    console.error(error);
  }
}

/* prevButton.addEventListener("click", async () => {
  page = prevPage(page, maxPage);
  await fetchCharacters();
});

nextButton.addEventListener("click", async () => {
  page = nextPage(page, maxPage);
  await fetchCharacters();
}); */

/* searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  fetchCharacters();
});
 */
await fetchCharacters();
