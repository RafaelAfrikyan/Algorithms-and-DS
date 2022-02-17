// 3. Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.

let arr = [2, 12, 15, 48, 64];

function isViolated(arr) {
  const newArr = [...arr];
  for (let i = 0; i <= newArr.length; i++) {
    if (newArr[i] <= newArr[i + 1]) {
      continue;
    } else {
      return newArr.indexOf(newArr[i + 1]);
    }
  }

  return isViolated(newArr);
}

console.log(isViolated(arr));
