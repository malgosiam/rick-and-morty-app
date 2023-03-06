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
let maxPage;
let page;
const searchQuery = "";
let BASE_URL = "https://rickandmortyapi.com/api/character/";
async function fetchCharacters() {
  try {
    const query = `?page=${page}`;
    const response = await fetch(BASE_URL + query);
    if (!response.ok) {
      console.error("errorTrigger");
      return;
    }
    const data = await response.json();
    //console.log(data);
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
  prevPage(page, maxPage);
  await fetchCharacters(page);
});

nextButton.addEventListener("click", async () => {
  nextPage(page, maxPage);
  await fetchCharacters(page);
});
