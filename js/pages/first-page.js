/* eslint-disable import/extensions */
import { TitleLink } from '../classes/Title.js';
import { picturesData } from '../data/title-link.js';

function generatePictures(data) {
  const picturesList = [];
  data.forEach((pictureAttributes) => {
    picturesList.push(new TitleLink(pictureAttributes));
  });
  return picturesList;
}

export default function renderPicturesToDom() {
  const container = document.querySelector('.container');
  let string = '';
  generatePictures(picturesData).forEach((picture) => {
    string += (picture.generateTitleLink());
  });
  container.innerHTML = string;
  container.classList.add('main-container');
  return container;
}
