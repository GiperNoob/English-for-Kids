/* eslint-disable import/prefer-default-export */
export class Picture {
  constructor({ id, title, urlToImage }) {
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
  }

  // picture generator
  generatePicture() {
    let template = '';
    const unorderedList = document.createElement('div');

    if (this.id) {
      template += `<a href="#" data-id = "${this.id}" class="first-page__link">`;

      if (this.urlToImage) {
        template += `<img src=${this.urlToImage} data-id = "${this.id}" alt="">`;
      }

      if (this.title) {
        template += this.title;
      }

      template += '</a>';
    }
    unorderedList.innerHTML = template;
    return unorderedList;
  }
}
