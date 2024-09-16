/*
  Author: Sabbir Hossain
  Problem Name: Given an integer n find the n th element Fibonacci sequence 
  In mathematics, the fibonacci sequence is a sequence in which each number is the sum of 
  the two preceding ones. The First two numbers in the sequence are 0 & 1.
*/

function recursiveFibonacci(n) {
  // base case 0, 1
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

/*
  Big-O Notation:-
  - Time Complexity: O(n) - Iterative way
  - Time Complexity: O(2^n) - recursive way
*/
