const burger = document.querySelector('.header__burger');
burger.addEventListener('click', () => {
  const menu = document.querySelector('.header__menu');
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

const train = document.querySelector('#radio-one');
const play = document.querySelector('#radio-two');

train.addEventListener('click', () => {
  const gallery = document.querySelector('.first-page__list');
  const pictures = gallery.querySelectorAll('.first-page__link');
  pictures.forEach((element) => {
    element.classList.remove('red');
  });
});

play.addEventListener('click', () => {
  const gallery = document.querySelector('.first-page__list');
  const pictures = gallery.querySelectorAll('.first-page__link');
  pictures.forEach((element) => {
    element.classList.add('red');
  });
});
