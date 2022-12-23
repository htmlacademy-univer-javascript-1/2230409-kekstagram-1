import {generatePhotos} from './data.js';
import {showAndFillBigPicture} from './show-big-picture.js';

const PHOTOS_TO_DRAW = 26;

const picturesNode = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const setOnMiniatureClickListener = (miniature, photo) => {
  miniature.addEventListener('click', () => {
    showAndFillBigPicture(photo);
  });
};

const drawMiniatures = (amount = PHOTOS_TO_DRAW) => {
  const photos = generatePhotos(amount);

  photos.forEach((photo) => {
    const newPictureFromTemplate = pictureTemplate.cloneNode(true);
    newPictureFromTemplate.querySelector('.picture__img').src = photo.url;
    newPictureFromTemplate.querySelector('.picture__likes').textContent = photo.likes;
    newPictureFromTemplate.querySelector('.picture__comments').textContent = photo.comments.length;
    setOnMiniatureClickListener(newPictureFromTemplate, photo);
    picturesNode.append(newPictureFromTemplate);
  });
};

export {drawMiniatures};
