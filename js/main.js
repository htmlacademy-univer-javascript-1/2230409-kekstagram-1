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

getRandomNonNegativeNumber(2, 5);
isStringLengthAllowed('privet', 2);
