export default function playSoundWord(parent) {
  const sourceNameAudio = parent.target.firstElementChild.innerText;
  const audio = new Audio(`audio/${sourceNameAudio}.mp3`);
  return audio.play();
}
