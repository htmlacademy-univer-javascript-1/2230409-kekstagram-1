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

const getRandomArrayElement = (elements) => (
  elements[getRandomNonNegativeNumber(0, elements.length - 1)]
);

const createIdGenerator = () => {
  let id = 1;
  return function () {
    return id++;
  };
};

export {
  getRandomNonNegativeNumber,
  isStringLengthAllowed,
  getRandomArrayElement,
  createIdGenerator
};
