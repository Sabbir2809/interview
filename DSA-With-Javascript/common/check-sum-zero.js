// Problem-1: Checking sum zero
// Input: [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// Output: [-4, 4]

function checkSumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// Time Complexity: O(n) -> Linear
const output = checkSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(output);

/*
function checkSumZero(array) {
  for (const number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}
const output = checkSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(output);
// Time Complexity: O(n^2)
*/
