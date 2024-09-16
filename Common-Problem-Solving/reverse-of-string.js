// 1. Write a function that returns the reverse of a string?

const reverseString = (str) => {
  let reversed = "";

  const stringLength = str.length - 1;
  for (let i = stringLength; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
};
reverseString("hello");

// function reverseStringShortcut(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseStringShortcut("hello"));
