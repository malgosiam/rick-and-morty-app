export function createCharacterCard(object) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `<div class="card__image-container">
<img
  class="card__image"
  src=${object.image}
  alt=${object.name}
/>
<div class="card__image-gradient"></div>
</div>
<div class="card__content">
<h2 class="card__title">${object.name}</h2>
<dl class="card__info">
  <dt class="card__info-title">Status</dt>
  <dd class="card__info-description">${object.status}</dd>
  <dt class="card__info-title">Type</dt>
  <dd class="card__info-description">${object.type}</dd>
  <dt class="card__info-title">Occurrences</dt>
  <dd class="card__info-description">${object.episode.length}</dd>
</dl>
</div>`;
  return card;
}
