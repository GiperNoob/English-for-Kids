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
    const unorderedList = document.createElement('li');
    unorderedList.setAttribute('data-id', this.id);

    if (this.urlToImage) {
      template += '<a href="#" class="first-page__link">';

      if (this.title) {
        template += `<img src=${this.urlToImage} alt="">`;
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
