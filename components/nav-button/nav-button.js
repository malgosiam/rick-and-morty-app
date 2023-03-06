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
