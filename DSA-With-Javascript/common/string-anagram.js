// String Anagram
// 'hello' -> 'llheo'
// 'sabbir' -> 'ribbas

// Condition:
// length check for both strings
// str1 'hello' -> {h:1, e:1, l:2, o:1}
// str2 'llheo' check -> {h:0, e:0, l:0, o:0}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter[letter]);
  }
  // console.log(counter);
  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items]--;
  }
  return true;
}
// Time Complexity: O(n) -> Linear
const output = isAnagram('sabbir', 'ribbas');
console.log(output);
