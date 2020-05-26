const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');


function toggleClassActiveBurgerMenu() {
  burgerMenu.classList.toggle('active');
  headerMenu.classList.toggle('active');
}

function removeClassActiveBurgerMenu() {
  headerMenu.classList.remove('active');
}

function addClassActiveFromPictures() {
  const container = document.querySelector('.container');
  const picturesLinks = container.querySelectorAll('.main-card');
  picturesLinks.forEach((element) => {
    element.classList.remove('green');
  });
}

function removeClassActiveFromPictures() {
  const container = document.querySelector('.container');
  const picturesLinks = container.querySelectorAll('.main-card');
  picturesLinks.forEach((element) => {
    element.classList.add('green');
  });
}

function showButtonStartGame() {
  if (document.querySelector('.start-game')) {
    const buttonStartGame = document.querySelector('.start-game');
    buttonStartGame.classList.remove('none');
  }
}

function hiddenButtonStartGame() {
  if (document.querySelector('.start-game')) {
    const buttonStartGame = document.querySelector('.start-game');
    buttonStartGame.classList.add('none');
  }
}

export {
  toggleClassActiveBurgerMenu, addClassActiveFromPictures,
  removeClassActiveFromPictures, removeClassActiveBurgerMenu,
  showButtonStartGame, hiddenButtonStartGame,
};
