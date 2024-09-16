/*
  Author: Sabbir Hossain
  Problem Name: Given an natural number n, determine if the number is prime or not.
  A prime number is a natural number greater then 1 that is not a product fo two smaller natural numbers.
  
  isPrime(5) = true (1 * 5 or 5 * 1)
  isPrime(4) = true (1 * 4 or 2 * 2 or 4 * 1)
*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // if n is divisible by any number then it is not prime
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

/*
  Big-O Notation:-
  - Time Complexity: O(n) Linear

  Optimized Code:-
  - Time Complexity: O(sqrt(n)) 
*/
