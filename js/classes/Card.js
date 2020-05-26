/* eslint-disable import/prefer-default-export */
export class Card {
  constructor({
    word, translate, image, audioSrc,
  }) {
    this.word = word;
    this.translate = translate;
    this.image = image;
    this.audioSrc = audioSrc;
  }

  generateCard() {
    let template = '';

    if (this.word) {
      template += '<div class = "card-container">';
      template += '<div class = "card">';
      template += `<div class="front" id = ${this.audioSrc} style = "background-image: url(${this.image});">`;
      template += `<div class = "card-header">${this.word}</div>`;
      template += '</div>';
      template += `<div class="back" style = "background-image: url(${this.image});">`;
      template += `<div class = "card-header">${this.translate}</div>`;
      template += '</div>';
      template += '<div class = "rotate"></div>';
      template += '</div>';
      template += '</div>';
    }
    return template;
  }
}
