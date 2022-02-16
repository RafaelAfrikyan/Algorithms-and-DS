

//2. Given an array of numbers. Write a recursive function to find its minimal positive
//element. (if such element does not exist, return -1).

let arr = [56, -9, 87, -23, 0, -105, 55, 1];

function minPositive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let firstNum = arr[0];
  let lastNum = arr[arr.length - 1];

  if (firstNum < 0) {
    arr.shift();
  }
  if (lastNum < 0) {
    arr.pop();
  }

  if (firstNum > lastNum) {
    arr.shift();
  } else {
    arr.pop();
  }

  return minPositive(arr);
}

console.log(minPositive(arr));
