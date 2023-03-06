export function createButton(onClick, style, text) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.classList.add(style);
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

// Turn page functions
export function nextPage(page, maxPage) {
  if (page === maxPage) {
    page = 1;
    return page;
  }
  page += 1;
  return page;
}
export function prevPage(page, maxPage) {
  if (page === 1) {
    page = maxPage;
    return page;
  }
  page -= 1;
  return page;
}
