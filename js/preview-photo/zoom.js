import {formNode} from './text-inputs.js';

const scaleNode = formNode.querySelector('.scale__control--value');
const unZoomNode = formNode.querySelector('.scale__control--smaller');
const zoomNode = formNode.querySelector('.scale__control--bigger');

const imageUploadNode = formNode.querySelector('.img-upload__preview');

const unZoom = () => {
  let intScale = parseInt(scaleNode.value, 10);
  if (intScale >= 50) {
    intScale -= 25;
    scaleNode.value = `${intScale}%`;
    imageUploadNode.style.transform = `scale(${intScale * 0.01})`;
  }
};

const zoom = () => {
  let intScale = parseInt(scaleNode.value, 10);
  if (intScale <= 75) {
    intScale += 25;
    scaleNode.value = `${intScale}%`;
    imageUploadNode.style.transform = `scale(${intScale * 0.01})`;
  }
};

const removeZoomOnCloseListeners = () => {
  unZoomNode.removeEventListener('', unZoom);
  zoomNode.removeEventListener('', zoom);
};


const initZoom = () => {
  unZoomNode.addEventListener('click', unZoom);
  zoomNode.addEventListener('click', zoom);
};

export {initZoom, imageUploadNode, removeZoomOnCloseListeners};
