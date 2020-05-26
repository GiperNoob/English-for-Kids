/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import renderPicturesToDom from './pages/first-page.js';
import renderSecondPageToDom from './pages/second-page.js';
import {
  toggleClassActiveBurgerMenu, addClassActiveFromPictures,
  removeClassActiveFromPictures, removeClassActiveBurgerMenu,
  showButtonStartGame, hiddenButtonStartGame,
} from './listeners/header.js';
import {
  rotationCard, rotationCardComeback, addClassPlayFromCards,
  returnClassTrainFromCards, addClassRepeatButtonStartGame,
  removeClassRepeatButtonStartGame,
} from './listeners/container.js';
import playSoundWord from './audio/play-word.js';
import {
  wrightAnswerAudio, wrongAnswerAudio, soundWinner, soundLost,
} from './audio/sound-for-game.js';
import {
  gettingOnArrayOfSoundsForGame, handleWrongAnswer, opacityWrightCard,
  addEmptyStar, gameOver, showWinner, showLost,
} from './game/game.js';


window.onload = () => {
  renderPicturesToDom();
};

const container = document.querySelector('.container');
const header = document.querySelector('.header-container');

const buttonTrain = document.querySelector('#radio-one');
const buttonPlay = document.querySelector('#radio-two');

let musicArray;
const wordsForPlay = [];
let currentWord = 0;
let wrongAnswer = 0;


header.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    if (event.target.id !== 'Main Page') {
      renderSecondPageToDom(event.target.id);

      if (buttonPlay.checked) {
        showButtonStartGame();
        addClassPlayFromCards();
      }
    } else {
      renderPicturesToDom();

      if (buttonPlay.checked) {
        addClassActiveFromPictures();
      }
    }
  }

  if (event.target === document.querySelector('.header__burger')) {
    toggleClassActiveBurgerMenu();
  }

  if (event.target === buttonPlay) {
    addClassActiveFromPictures();
    removeClassActiveBurgerMenu();
    showButtonStartGame();
    addClassPlayFromCards();
    document.querySelector('.header__burger').classList.remove('active');
  }

  if (event.target === buttonTrain) {
    removeClassActiveFromPictures();
    removeClassActiveBurgerMenu();
    hiddenButtonStartGame();
    returnClassTrainFromCards();
    removeClassRepeatButtonStartGame();

    document.querySelector('.header__burger').classList.remove('active');

    if (document.querySelector('.rating')) {
      document.querySelector('.rating').innerHTML = '';
    }

    wordsForPlay.length = 0;

    container.querySelectorAll('.front').forEach((card) => {
      card.classList.remove('wright');
    });
  }
});

const handleRightAnswer = () => {
  if (buttonPlay.checked) {
    wordsForPlay[currentWord].play();
  }
};

container.onmouseout = rotationCardComeback;

container.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    renderSecondPageToDom(event.target.id);

    if (buttonPlay.checked) {
      showButtonStartGame();
      addClassPlayFromCards();
    }
  }

  if (event.target.classList.contains('rotate')) {
    rotationCard(event);
  }

  if (event.target.classList.contains('front') && buttonTrain.checked) {
    playSoundWord(event);
  }

  if (event.target.className === 'start-game repeat') {
    handleRightAnswer();
  }

  if (event.target.className === 'start-game') {
    addClassRepeatButtonStartGame(event);

    musicArray = gettingOnArrayOfSoundsForGame(event.target.id);
    musicArray.forEach((word) => {
      const wordSound = new Audio(word);
      wordsForPlay.push(wordSound);
    });

    handleRightAnswer();

    const images = container.querySelectorAll('.front');
    images.forEach((image) => {
      image.addEventListener('click', () => {
        if (image.id === musicArray[currentWord]) {
          if (currentWord !== 7) {
            setTimeout(handleRightAnswer, 1500);
          }

          if (image.classList.value !== 'front wright') {
            opacityWrightCard(image);
            addEmptyStar();
            wrightAnswerAudio();
            currentWord++;

            if (currentWord === 8) {
              setTimeout(gameOver, 3000);
              if (wrongAnswer === 0) {
                showWinner();
                soundWinner();
              }
              if (wrongAnswer !== 0) {
                showLost();
                soundLost();
              }
            }
          }
        } else if (image.classList.value !== 'front wright') {
          handleWrongAnswer();
          wrongAnswerAudio();
          wrongAnswer++;
        }
      });
    });
  }
});
