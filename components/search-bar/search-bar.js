export function createSearchBar(onSubmit) {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const searchButton = document.createElement("button");
  const searchImage = document.createElement("img");

  input.setAttribute("name", "query");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "search characters");
  input.setAttribute("aria-label", "character name");
  searchButton.setAttribute("type", "submit");
  searchButton.setAttribute("aria-label", "search for character");
  searchImage.setAttribute("src", "assets/magnifying-glass.png");
  searchImage.setAttribute("alt", "searchIcon");

  searchButton.classList.add("search-bar__button");
  searchImage.classList.add("search-bar__icon");
  input.classList.add("search-bar__input");
  form.classList.add("search-bar");
  searchButton.append(searchImage);
  form.append(input, searchButton);

  form.addEventListener("submit", onSubmit);

  return form;
}
