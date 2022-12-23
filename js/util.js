import {COMMENT_MAX_LENGTH} from './constants.js';

const getRandomNonNegativeNumber = (from, to) => {
  if (from < 0 || to < 0 || to < from) {
    return NaN;
  }

  if (from === to) {
    return from;
  }

  return from + Math.floor(Math.random() * (to - from + 1));
};

const isStringLengthAllowed = (
  string, length = COMMENT_MAX_LENGTH
) => string.length <= length;

const getRandomArrayElement = (elements) =>
  elements[getRandomNonNegativeNumber(0, elements.length - 1)];

const createIdGenerator = () => {
  let id = 1;
  return () => id++;
};

const isEscPressed = (evt) =>
  evt.key === 'Escape';

const showPopupNode = (node) => {
  document.body.classList.add('modal-open');
  node.classList.remove('hidden');
};

const hidePopupNode = (node) => {
  document.body.classList.remove('modal-open');
  node.classList.add('hidden');
};

export {
  getRandomNonNegativeNumber,
  isStringLengthAllowed,
  getRandomArrayElement,
  createIdGenerator,
  isEscPressed,
  showPopupNode,
  hidePopupNode
};
