// 4. Write a function to remove duplicate elements from an array.

function removeDuplicates(arr) {
  const uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
  // return [...new Set(arr)];
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5]));
