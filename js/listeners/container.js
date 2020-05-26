/* eslint-disable no-plusplus */
function rotationCardComeback(eventOnCard) {
  if (eventOnCard.type === 'mouseout' && eventOnCard.target.classList.contains('back')) {
    eventOnCard.target.parentElement.classList.remove('rot');
  }
}


function rotationCard(parent) {
  parent.target.parentElement.classList.add('rot');
  rotationCardComeback(parent);
}

function addClassPlayFromCards() {
  if (document.querySelector('.card-container')) {
    const cardContainer = document.querySelector('.container').children;
    for (let i = 1; i < (cardContainer.length - 1); i++) {
      cardContainer[i].children[0].classList.add('card-cover');
      cardContainer[i].children[0].children[0].children[0].classList.add('none');
      cardContainer[i].children[0].children[2].classList.add('none');
    }
  }
}

function returnClassTrainFromCards() {
  if (document.querySelector('.card-container')) {
    const cardContainer = document.querySelector('.container').children;
    for (let i = 1; i < (cardContainer.length - 1); i++) {
      cardContainer[i].children[0].classList.remove('card-cover');
      cardContainer[i].children[0].children[0].children[0].classList.remove('none');
      cardContainer[i].children[0].children[2].classList.remove('none');
    }
  }
}

function addClassRepeatButtonStartGame(parent) {
  parent.target.classList.add('repeat');
}

function removeClassRepeatButtonStartGame() {
  if (document.querySelector('.start-game')) {
    document.querySelector('.start-game').classList.remove('repeat');
  }
}

export {
  rotationCard, rotationCardComeback, addClassPlayFromCards,
  returnClassTrainFromCards, addClassRepeatButtonStartGame,
  removeClassRepeatButtonStartGame,
};
