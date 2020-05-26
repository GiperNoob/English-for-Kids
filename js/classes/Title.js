/* eslint-disable import/prefer-default-export */
export class TitleLink {
  constructor({ title, urlToImage, alt }) {
    this.title = title;
    this.urlToImage = urlToImage;
    this.alt = alt;
  }

  generateTitleLink() {
    let template = '';
    const container = document.createElement('div');
    container.className = 'container main-container';


    if (this.title) {
      template += `<a class = "main-card green" id = "${this.alt}" href = "#">`;
      template += `<img src = "${this.urlToImage}" id = "${this.alt}" alt = "${this.alt}">`;
      template += `${this.title}`;
      template += '</a>';
    }
    return template;
  }
}
