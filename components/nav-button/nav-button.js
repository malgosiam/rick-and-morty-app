export function nextPage(page, maxPage) {
  if (page < maxPage) {
    page += 1;
  } /* else {
    page = 1;
  } */
  console.log(page, maxPage);
}

export function prevPage(page, maxPage) {
  if (page === 1) {
    page = maxPage;
  } /* else {
    page -= 1;
  } */
  console.log(page, maxPage);
}
