// 6. Write a function that returns the number of vowels in a string.

function countVowels(srt) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of srt.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));
