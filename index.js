import { createCharacterCard } from "./components/card/card.js";

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
const maxPage = 1;
const page = 1;
const searchQuery = "";
const BASE_URL = "https://rickandmortyapi.com/api/character/";
async function fetchCharacters() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      console.error("errorTrigger");
      return;
    }
    const data = await response.json();
    console.log(data);
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
await fetchCharacters();
