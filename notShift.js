"use strict";

// 4. Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())

function dontUseShift(arr, i = 0) {
  let newArr = [...arr];
  if (newArr.length === 0) {
    return newArr;
  }
  if (newArr.length === i) {
    newArr.length = i - 1;
    return newArr;
  }

  newArr[i] = newArr[i + 1];
  i++;

  return dontUseShift(newArr, i);
}

console.log(dontUseShift([6, 78, "n", 0, 1])); // [78, "n", 0, 1]
console.log(dontUseShift([5])); // []
console.log(dontUseShift([])); //[]
