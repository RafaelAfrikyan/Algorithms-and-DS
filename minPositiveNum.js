//2. Given an array of numbers. Write a recursive function to find its minimal positive
//element. (if such element does not exist, return -1).

//another way of resolving with recursion

let arr = [-9, -23, -105];

function minPositive(arr) {
  if (arr.length === 1) {
    if (arr[0] < 0) {
      return -1;
    }
    return arr[0];
  }
  let firstNum = arr[0];
  let lastNum = arr[arr.length - 1];

  if (firstNum < 0 || (firstNum >= lastNum && lastNum >= 0)) {
    arr.shift();
  } else if (lastNum < 0 || (lastNum >= firstNum && firstNum >= 0)) {
    arr.pop();
  }
  return minPositive(arr);
}

console.log(minPositive(arr));
