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
  const pictures = firstPageGallery.querySelectorAll('.first-page__link');
  pictures.forEach((element) => {
    element.classList.add('red');
  });
}

function removeClassActiveFromPictures() {
  const firstPageGallery = document.querySelector('.first-page__list');
  const pictures = firstPageGallery.querySelectorAll('.first-page__link');
  pictures.forEach((element) => {
    element.classList.remove('red');
  });
}

buttonTrain.addEventListener('click', removeClassActiveFromPictures);
buttonPlay.addEventListener('click', addClassActiveFromPictures);
burgerMenu.addEventListener('click', toggleClassActiveBurgerMenu);
