//1. Write a recursive function to determine whether all digits of the number are odd or not.

function myRecursion(num) {
  if (num < 10) {
    return !!(num % 2);
  }
  let lastDigit = num % 10;
  if (lastDigit % 2 === 0) return false;
  num = (num - (num % 10)) / 10;
  return myRecursion(num);
}

console.log(myRecursion(5));
