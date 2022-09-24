const randomNonNegativeNumber = (from, to) => {
  if (from < 0 || to < 0 || to < from) {
    return NaN;
  } else if (from === to) {
    return from;
  }

  return from + Math.floor(Math.random() * (to - from + 1));
};

const isStringLengthAllowed = (string, allowedLength) => (
  string.length <= allowedLength
);

randomNonNegativeNumber(2, 5);
isStringLengthAllowed('privet', 2);
