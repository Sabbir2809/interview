/*
  Author: Sabbir Hossain
  Problem Name: Summation loop Solution
*/

function summation(n) {
  let sum = 0; // 1 time
  for (let i = 1; i <= n; i++) {
    sum = sum + i; // 4 times
  }
  return sum; // 1 time
}
console.log(summation(10));

/*
  Time Complexity: O(n) -> Linear
*/
