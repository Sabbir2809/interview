// 9. Write a function to calculate the factorial of a number.

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
