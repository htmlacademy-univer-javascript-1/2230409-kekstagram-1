function randomNumber(from, to) {
  if (from < 0 || to < 0) {
    return NaN;
  } else if (to < from) {
    return NaN;
  } else if (from === to) {
    return from;
  } else {
    return from + Math.floor(Math.random() * (to - from + 1));
  }
}

function isStringLengthAllowed(string, allowedLength) {
  return string.length <= allowedLength;
}

randomNumber(2, 5);
isStringLengthAllowed('privet', 2);
