/* eslint-disable import/extensions */
import { Picture } from './js/Section.js';
import { pictures } from './js/first-page-pictures.js';

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
  data.forEach((picture) => {
    picturesList.push(new Picture(picture));
  });
  return picturesList;
}

function renderPicturesToDom() {
  const firstPageContent = removeFirstPageContent();
  generatePictures(pictures).forEach((picture) => {
    firstPageContent.append(picture.generatePicture());
  });
}

window.onload = () => {
  if (pictures) {
    renderPicturesToDom();
  }
};
