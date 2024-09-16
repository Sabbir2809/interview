// 8. Write a function to check if a given number is prime or not?

function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
