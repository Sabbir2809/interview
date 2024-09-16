// 5. Write a function that checks whether  two strings are anagrams or not?

function isAnagram(str1, str2) {
  const s1 = str1.split("").sort().join("");
  const s2 = str2.split("").sort().join("");

  return s1 === s2;
}
console.log(isAnagram("listen", "silent"));
