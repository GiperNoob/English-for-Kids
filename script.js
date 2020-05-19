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
  if (document.querySelector('.first-page__list')) {
    const firstPageGallery = document.querySelector('.first-page__list');
    const picturesActive = firstPageGallery.querySelectorAll('.first-page__link');
    picturesActive.forEach((element) => {
      element.classList.add('red');
    });
  }
}

function removeClassActiveFromPictures() {
  if (document.querySelector('.first-page__list')) {
    const firstPageGallery = document.querySelector('.first-page__list');
    const picturesActive = firstPageGallery.querySelectorAll('.first-page__link');
    picturesActive.forEach((element) => {
      element.classList.remove('red');
    });
  }
}

buttonTrain.addEventListener('click', removeClassActiveFromPictures);
buttonPlay.addEventListener('click', addClassActiveFromPictures);
burgerMenu.addEventListener('click', toggleClassActiveBurgerMenu);

function removePageContent() {
  const secondPageContent = document.querySelector('.container');
  secondPageContent.innerHTML = '';
  return secondPageContent;
}

function generatePictures(data) {
  const picturesList = [];
  data.forEach((pictureAttributes) => {
    picturesList.push(new Picture(pictureAttributes));
  });
  return picturesList;
}

function renderPicturesToDom() {
  const firstPageContent = removePageContent();
  const firstPageList = document.createElement('div');
  firstPageList.className = 'first-page__list';
  generatePictures(picturesData).forEach((picture) => {
    firstPageList.append(picture.generatePicture());
  });
  firstPageContent.append(firstPageList);
}

function generateCards(data) {
  const cardsList = [];
  data.forEach((cardsAttributes) => {
    cardsList.push(new Card(cardsAttributes));
  });
  return cardsList;
}

function renderCardsToDom(id) {
  const secondPageContent = removePageContent();
  generateCards(cardsData).forEach((picture) => {
    if (picture.id === Number(id)) {
      secondPageContent.append(picture.generateCard());
    }
  });
}

const headerList = document.querySelector('.header__list');
headerList.addEventListener('click', (event) => {
  if (event.target.dataset.id > 0) {
    renderCardsToDom(event.target.dataset.id);
  } else {
    renderPicturesToDom();
  }
});

const firstPageGallery = document.querySelector('.container');
firstPageGallery.addEventListener('click', (event) => {
  if (event.target.dataset.id > 0) {
    renderCardsToDom(event.target.dataset.id);
  }
  if (event.target.classList.contains('rotate')) {
    event.target.parentElement.classList.add('rot');
  }
  if (event.target.classList.contains('front')) {
    const sourceNameAudio = event.target.firstElementChild.innerText;
    const audio = new Audio(`audio/${sourceNameAudio}.mp3`);
    audio.play();
  }
});
