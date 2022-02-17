let arr = [2, 12, 15, 48, 64];

function isViolated(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    } else {
      return arr.indexOf(arr[i + 1]);
    }
  }

  return isViolated(arr);
}

console.log(isViolated(arr));
