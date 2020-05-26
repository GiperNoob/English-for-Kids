/* eslint-disable import/extensions */
import { cardsData } from '../data/cards.js';

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function gettingOnArrayOfSoundsForGame(category) {
  const soundsForGame = [];
  cardsData[category].forEach((attributes) => {
    soundsForGame.push(attributes.audioSrc);
  });
  return shuffle(soundsForGame);
}

function handleWrongAnswer() {
  const starError = document.createElement('div');
  starError.className = 'star-error';
  document.querySelector('.rating').append(starError);
}

function opacityWrightCard(card) {
  card.classList.add('wright');
}

function addEmptyStar() {
  const starEmpty = document.createElement('div');
  starEmpty.className = 'star-succes';
  document.querySelector('.rating').append(starEmpty);
}

function gameOver() {
  window.location.reload();
}

function showWinner() {
  const appContainer = document.querySelector('.app-container');
  appContainer.innerHTML = '';
  const body = document.querySelector('body');
  body.classList.add('winner');
}

function showLost() {
  const appContainer = document.querySelector('.app-container');
  appContainer.innerHTML = '';
  const body = document.querySelector('body');
  body.classList.add('lost');
}


export {
  gettingOnArrayOfSoundsForGame, handleWrongAnswer, opacityWrightCard,
  addEmptyStar, gameOver, showWinner, showLost,
};
