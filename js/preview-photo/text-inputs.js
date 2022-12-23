import {HASHTAG_PATTERN, HASHTAGS_LIMIT} from '../constants.js';
import {isStringLengthAllowed} from '../util.js';

const formNode = document.querySelector('#upload-select-image');

const hashtagNode = formNode.querySelector('.text__hashtags');
const commentNode = formNode.querySelector('.text__description');

const pristine = new Pristine(formNode, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
}, false);

const split = (string) => string.split(' ');

const isHashtagsInLimit = (string) =>
  split(string).length <= HASHTAGS_LIMIT;

const isHashtagsUnique = (string) => {
  const lowered = [];
  for (const hashtag of split(string)) {
    lowered.push(hashtag.toLowerCase());
  }
  return new Set(lowered).size === lowered.length;
};

const isHashtagCorrect = (string) =>
  HASHTAG_PATTERN.test(string);

const isHashtagsCorrect = (string) => {
  if (string === '') {
    return true;
  }
  split(string).every(isHashtagCorrect);
};

pristine.addValidator(
  hashtagNode, (string) => isHashtagsCorrect(string),
  'Хэш-тег начинается с символа #, должен состоять из букв и чисел, максимальная длина 20 символов'
);

pristine.addValidator(
  hashtagNode, (string) => isHashtagsUnique(string),
  'Один и тот же хэш-тег не может быть использован дважды'
);

pristine.addValidator(
  hashtagNode, (string) => isHashtagsInLimit(string),
  'Нельзя указать больше 5 хэш-тегов'
);

pristine.addValidator(
  commentNode,
  (string) => isStringLengthAllowed(string),
  'Длина комментария не может составлять больше 140 символов'
);

export {formNode, hashtagNode, commentNode, pristine};
