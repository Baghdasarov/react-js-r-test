const removePunctuationSpaces = (str) => {
  return str.replace(/[^\w]|_/g, "");
};

export const checkForAnagram = (a, b) => {
  const strOne = removePunctuationSpaces(a)
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const strTwo = removePunctuationSpaces(b)
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return strOne === strTwo;
};
