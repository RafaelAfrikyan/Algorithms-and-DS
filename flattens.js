"use strict";

// 5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
//     function that concats arrays).

let arr = [1, [3, 4, [1, 2]], 10];

function flattens(arr) {
  let resultArr = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattens(element).forEach((element) => {
        resultArr.push(element);
      });
    } else {
      resultArr.push(element);
    }
  });

  return resultArr;
}

console.log(flattens([1, [3, 4, [1, 2]], 10])); // [1, 3, 4, 1, 2, 10]
console.log(flattens([14, [1, [[[3, []]], 1], 0]])); // [14, 1, 3, 1, 0]
