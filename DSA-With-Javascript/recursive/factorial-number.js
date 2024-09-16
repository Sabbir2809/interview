/*
  Author: Sabbir Hossain
  Problem Name: Given an integer n find the  factorial of that integer. 
  In mathematics, the factorial of a non-negative integer n denoted n!, is the product of all
  positive integers less than or equal to n. Factorial of zero is 1.
*/

function recursiveFactorial(n) {
  // base case 0
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

/*
  Big-O Notation:-
  - Time Complexity: O(n) Linear
*/
