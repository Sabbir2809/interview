// 7. Write a function to find the largest number in an array.

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargestNumber([1, 2, 3, 4, 5, 100]));
