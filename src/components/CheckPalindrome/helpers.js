export const checkForPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str.toLowerCase() === reversedStr.toLowerCase();
};
