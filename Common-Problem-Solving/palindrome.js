// 3. Write a function that checks whether a given string is a palindrome or not?

function isPalindrome(str) {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString;
}

console.log(isPalindrome("madam"));
