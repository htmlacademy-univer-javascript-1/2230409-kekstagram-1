const DESCRIPTIONS = [
  'Моё лучшее фото',
  'Таких фото ещё никто не видел!',
  'Вчерашняя прогулка',
  'Когда все надоело',
  'What does the fox say?',
  'Blinded by the lights'
];

const COMMENTS = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'There are no bad pictures; that’s just how your face looks sometimes',
  'The quickest way to make money at photography is to sell your camera',
  'I bought Fifty Shades of Grey in the hopes it would help me understand white balance – I was very wrong',
  'The only person happy with a 100% crop is a farmer'
];

const NAMES = [
  'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф',
  'Виктор', 'Юлия', 'Люпита', 'Вашингтон',
];

const PHOTOS_TO_GENERATE = 25;

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const getRandomNonNegativeNumber = (from, to) => {
  if (from < 0 || to < 0 || to < from) {
    return NaN;
  }

  if (from === to) {
    return from;
  }

  return from + Math.floor(Math.random() * (to - from + 1));
};

const isStringLengthAllowed = (string, length) => (
  string.length <= length
);

isStringLengthAllowed('privet', 2);

const getRandomPhotoSource = () => (
  `photos/${getRandomNonNegativeNumber(1, 25)}.jpg`
);

const getRandomAvatarSource = () => (
  `img/avatar-${getRandomNonNegativeNumber(1, 6)}.svg`
);

const getRandomArrayElement = (elements) => (
  elements[getRandomNonNegativeNumber(0, elements.length - 1)]
);

let commentId = 1;
const createComment = () => ({
  id: commentId++,
  avatar: getRandomAvatarSource(),
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

let photoId = 1;
const createPhoto = () => ({
  id: photoId++,
  url: getRandomPhotoSource(),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNonNegativeNumber(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length: getRandomNonNegativeNumber(1, 3)}, () => createComment())
});

const GENERATED_DATA = Array.from(
  {length: PHOTOS_TO_GENERATE},
  () => createPhoto()
);

// eslint-disable-next-line no-console
console.log(GENERATED_DATA);
