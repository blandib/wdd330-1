
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');

  prophets.forEach((prophet) => {

const cardTemplate = document.querySelector('#prophet-card');
const card = cardTemplate.content.cloneNode(true);
const h2 = card.querySelector('h2');
const birthDate = card.querySelector('p:nth-of-type(1)');
const birthPlace = card.querySelector('p:nth-of-type(2)');
const portrait = card.querySelector('.profile');

h2.textContent = `${prophet.name} ${prophet.lastname}`;

birthDate.textContent = `Date of birth: ${prophet.birthdate}`
birthPlace.textContent = `Place of birth: ${prophet.birthplace}`

portrait.setAttribute('src', prophet.imageurl);
portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.name}`);
portrait.setAttribute('loading', 'lazy');
portrait.setAttribute('width', '340');
portrait.setAttribute('height', '440');

card.appendChild(h2);
card.appendChild(birthDate);
card.appendChild(birthPlace);
card.appendChild(portrait);

document.body.appendChild(card);
});
}