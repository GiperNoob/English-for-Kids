/* eslint-disable import/extensions */
import { Card } from '../classes/Card.js';
import { cardsData } from '../data/cards.js';

let container = document.querySelector('.container');
function removePageContent() {
  container.innerHTML = '';
  return container;
}

function generateCards(data) {
  const cardsList = [];
  data.forEach((cardsAttributes) => cardsList.push(new Card(cardsAttributes)));
  return cardsList;
}

function createRating() {
  const rating = document.createElement('div');
  rating.className = 'rating';
  return rating;
}

function createButtonStartGame(id) {
  const buttonStartGame = document.createElement('button');
  buttonStartGame.classList = 'start-game none';
  buttonStartGame.innerText = 'Start Game';
  buttonStartGame.id = id;
  return buttonStartGame;
}

export default function renderSecondPageToDom(category) {
  container = removePageContent();
  container.classList.remove('main-container');
  let string = '';
  generateCards(cardsData[category]).forEach((card) => {
    string += (card.generateCard());
    return string;
  });
  container.innerHTML = string;
  container.prepend(createRating());
  container.append(createButtonStartGame(category));
  return (cardsData[category]);
}
