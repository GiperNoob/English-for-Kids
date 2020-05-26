function wrightAnswerAudio() {
  const audio = new Audio('audio/correct.mp3');
  audio.play();
}

function wrongAnswerAudio() {
  const audio = new Audio('audio/error.mp3');
  audio.play();
}

function soundWinner() {
  const audio = new Audio('audio/success.mp3');
  return audio.play();
}

function soundLost() {
  const audio = new Audio('audio/failure.mp3');
  return audio.play();
}

export {
  wrightAnswerAudio, wrongAnswerAudio, soundWinner, soundLost,
};
