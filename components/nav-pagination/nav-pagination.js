//<span class="navigation__pagination" data-js="pagination"></span>

export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.textContent = `${page} / ${maxPage}`;
  return pagination;
}
