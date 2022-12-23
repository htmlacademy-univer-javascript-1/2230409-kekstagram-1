import {isEscPressed, showPopupNode, hidePopupNode} from '../util.js';

import {commentNode, formNode, hashtagNode, pristine} from './text-inputs.js';
import {initFilters} from './filters.js';
import {initZoom, imageUploadNode, removeZoomOnCloseListeners} from './zoom.js';

const imageNode = formNode.querySelector('#upload-file');
const uploadImageNode = formNode.querySelector('.img-upload__overlay');
const submitNode = formNode.querySelector('#upload-submit');

const resetForm = () => {
  imageNode.value = '';
  document.removeEventListener('keydown', onEscPressed);
  removeZoomOnCloseListeners();
  formNode.reset();
  pristine.reset();
};

function onEscPressed(evt) {
  if (isEscPressed(evt)
    && evt.target !== hashtagNode
    && evt.target !== commentNode
  ) {
    resetForm();
    hidePopupNode(uploadImageNode);
  }
}

const setUploadPictureOnCloseListeners = () => {
  document.addEventListener('keydown',
    (evt) => {
      onEscPressed(evt);
    });
  uploadImageNode.querySelector('#upload-cancel')
    .addEventListener('click',
      () => {
        resetForm();
        hidePopupNode(uploadImageNode);
      }, {once: true}
    );
};

const fillImagePreview = (evt) => {
  const pickedImage = evt.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load',
    (pevt) => {
      imageUploadNode.children[0].src = pevt.target.result;
    });
  reader.readAsDataURL(pickedImage);
};

const showAndFillUploadImageForm = () => {
  setUploadPictureOnCloseListeners();
  initFilters();
  initZoom();
  showPopupNode(uploadImageNode);
};

imageNode.addEventListener('change', (evt) => {
  fillImagePreview(evt);
  showAndFillUploadImageForm();
});

formNode.addEventListener('submit',
  (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      submitNode.textContent = 'Загружаем…';
    }
  });
