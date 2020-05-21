/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import { Picture } from './js/Section.js';
import { picturesData } from './js/first-page-pictures.js';
import { Card } from './js/Card.js';
import { cardsData } from './js/cards.js';

const buttonTrain = document.querySelector('#radio-one');
const buttonPlay = document.querySelector('#radio-two');
const burgerMenu = document.querySelector('.header__burger');

// показать-спрятать бургер-меню
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

function addClassPlayFromCards() {
  if (document.querySelector('.card-container')) {
    const cardContainer = document.querySelector('.container').children;
    for (let i = 1; i < cardContainer.length; i++) {
      cardContainer[i].children[0].classList.add('card-cover');
      cardContainer[i].children[0].children[0].children[0].classList.add('none');
      cardContainer[i].children[0].children[2].classList.add('none');
    }
  }
}

function returnClassTrainFromCards() {
  if (document.querySelector('.card-container')) {
    const cardContainer = document.querySelector('.container').children;
    for (let i = 1; i < cardContainer.length; i++) {
      cardContainer[i].children[0].classList.remove('card-cover');
      cardContainer[i].children[0].children[0].children[0].classList.remove('none');
      cardContainer[i].children[0].children[2].classList.remove('none');
    }
  }
}

function addClassPlayFromBurgerMenu() {
  const headerMenu = document.querySelector('.header__menu');
  headerMenu.classList.add('play');
}

function removeClassPlayFromBurgerMenu() {
  const headerMenu = document.querySelector('.header__menu');
  headerMenu.classList.remove('play');
}

buttonTrain.addEventListener('click', () => {
  removeClassActiveFromPictures();
  returnClassTrainFromCards();
  removeClassPlayFromBurgerMenu();
});
buttonPlay.addEventListener('click', () => {
  addClassActiveFromPictures();
  addClassPlayFromCards();
  addClassPlayFromBurgerMenu();
});
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
  const rating = document.createElement('div');
  rating.className = 'rating';
  firstPageContent.append(rating);
  generatePictures(picturesData).forEach((picture) => {
    firstPageList.append(picture.generatePicture());
  });
  firstPageContent.append(firstPageList);
  if (buttonPlay.checked) {
    addClassActiveFromPictures();
  }
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
  const rating = document.createElement('div');
  rating.className = 'rating';
  secondPageContent.append(rating);
  generateCards(cardsData).forEach((picture) => {
    if (picture.id === Number(id)) {
      secondPageContent.append(picture.generateCard());
    }
    if (buttonPlay.checked) {
      addClassPlayFromCards();
    }
  });
}

// сорт 2 страницы из меню-бургер по id
const headerList = document.querySelector('.header__list');
headerList.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  if (event.target.dataset.id > 0) {
    renderCardsToDom(event.target.dataset.id);
    if (buttonPlay.checked) {
      addClassPlayFromCards();
    }
  } else {
    renderPicturesToDom();
  }
});

// возврат карточки в прежнее положение
function handler(event) {
  if (event.type === 'mouseout' && event.target.classList.contains('back')) {
    event.target.parentElement.classList.remove('rot');
  }
}

// Обработчики на контейнере первой и второй страниц
const firstPageGallery = document.querySelector('.container');
firstPageGallery.onmouseout = handler;
firstPageGallery.addEventListener('click', (event) => {
  // если обратная сторона картинки то ничего не делаем
  if (event.target.className === 'back') return;
  // если есть id и  id > 0 то это титульная страница и можно по ним сделать сортировку 2 страницы
  if (event.target.dataset.id > 0) {
    renderCardsToDom(event.target.dataset.id);
  }

  // если это div class = 'rotate' то делаем переворот картинки
  if (event.target.classList.contains('rotate')) {
    event.target.parentElement.classList.add('rot');
    handler(event);
  }

  // если картинка и режим тренировки то воспроизвести озвучку
  if (event.target.classList.contains('front') && buttonTrain.checked) {
    const sourceNameAudio = event.target.firstElementChild.innerText;
    const audio = new Audio(`audio/${sourceNameAudio}.mp3`);
    audio.play();
  }
});
