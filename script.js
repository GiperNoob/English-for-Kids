/* eslint-disable import/extensions */
import { Picture } from './js/Section.js';
import { picturesData } from './js/first-page-pictures.js';
import { Card } from './js/Card.js';
import { cardsData } from './js/cards.js';

const buttonTrain = document.querySelector('#radio-one');
const buttonPlay = document.querySelector('#radio-two');
const burgerMenu = document.querySelector('.header__burger');


function toggleClassActiveBurgerMenu() {
  const headerMenu = document.querySelector('.header__menu');
  burgerMenu.classList.toggle('active');
  headerMenu.classList.toggle('active');
}

function addClassActiveFromPictures() {
  const firstPageGallery = document.querySelector('.first-page__list');
  const picturesActive = firstPageGallery.querySelectorAll('.first-page__link');
  picturesActive.forEach((element) => {
    element.classList.add('red');
  });
}

function removeClassActiveFromPictures() {
  const firstPageGallery = document.querySelector('.first-page__list');
  const picturesActive = firstPageGallery.querySelectorAll('.first-page__link');
  picturesActive.forEach((element) => {
    element.classList.remove('red');
  });
}

buttonTrain.addEventListener('click', removeClassActiveFromPictures);
buttonPlay.addEventListener('click', addClassActiveFromPictures);
burgerMenu.addEventListener('click', toggleClassActiveBurgerMenu);

function removeFirstPageContent() {
  const firstPageContent = document.querySelector('.first-page__list');
  firstPageContent.innerHTML = '';
  return firstPageContent;
}

function generatePictures(data) {
  const picturesList = [];
  data.forEach((pictureAttributes) => {
    picturesList.push(new Picture(pictureAttributes));
  });
  return picturesList;
}

function renderPicturesToDom() {
  const firstPageContent = removeFirstPageContent();
  generatePictures(picturesData).forEach((picture) => {
    firstPageContent.append(picture.generatePicture());
  });
}

function removeSecondPageContent() {
  const secondPageContent = document.querySelector('.container');
  secondPageContent.innerHTML = '';
  return secondPageContent;
}

function generateCards(data) {
  const cardsList = [];
  data.forEach((cardsAttributes) => {
    cardsList.push(new Card(cardsAttributes));
  });
  return cardsList;
}

function renderCardsToDom() {
  const secondPageContent = removeSecondPageContent();
  generateCards(cardsData).forEach((picture) => {
    secondPageContent.append(picture.generateCard());
  });
}

window.onload = () => {
  if (picturesData) {
    renderPicturesToDom();
    renderCardsToDom();
  }
};
