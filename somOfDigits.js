"use strict";

// 7. Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function calcSum(num, result = 0) {
  if (num < 1 && result >= 10) {
    num = result;
    result = 0;
    return calcSum(num, result);
  }
  if (num < 1 && result < 10) {
    return result;
  }
  let digit = num % 10;
  result += digit;

  num = (num - digit) / 10;
  return calcSum(num, result);
}

console.log(calcSum(999999999999)); // 9
console.log(calcSum(14)); // 5
console.log(calcSum(29)); // 2
