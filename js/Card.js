/* eslint-disable import/prefer-default-export */
export class Card {
  constructor({
    id, word, translate, image, audioSrc,
  }) {
    this.id = id;
    this.word = word;
    this.translate = translate;
    this.image = image;
    this.audioSrc = audioSrc;
  }

  generateCard() {
    let template = '';
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    if (this.id) {
      template += '<div class = "card">';
      template += `<div class="front" data-id = "${this.id}" style = "background-image: url(${this.image});">`;
      template += `<div class = "card-header">${this.word}</div>`;
      template += '</div>';
      template += `<div class="back" data-id = "${this.id}" style = "background-image: url(${this.image});">`;
      template += `<div class = "card-header">${this.translate}</div>`;
      template += '</div>';
      template += '<div class = "rotate"></div>';
      template += '</div>';
    }
    cardContainer.innerHTML = template;
    return cardContainer;
  }
}
