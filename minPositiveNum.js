//2. Given an array of numbers. Write a recursive function to find its minimal positive
//element. (if such element does not exist, return -1).

//another way of resolving with recursion

let arr = [-9, -23, 15, 5, -105];

function minPositive(arr) {
  const newArr = [...arr];
  if (newArr.length === 1) {
    if (newArr[0] < 0) {
      return -1;
    }
    return newArr[0];
  }
  let firstNum = newArr[0];
  let lastNum = newArr[newArr.length - 1];
  if (firstNum < 0 || (firstNum >= lastNum && lastNum >= 0)) {
    newArr.shift();
  } else if (lastNum < 0 || (lastNum >= firstNum && firstNum >= 0)) {
    newArr.pop();
  }
  return minPositive(newArr);
}

console.log(minPositive(arr));
