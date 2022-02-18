// 6. Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotateNum(arr, num) {
  let newArr = [...arr];
  if (!num) {
    return newArr;
  }
  if (num < 0) {
    newArr.unshift(newArr[newArr.length - 1]);
    newArr.pop();
    num++;
    return rotateNum(newArr, num);
  }
  newArr.push(newArr[0]);
  newArr.shift();
  num--;
  return rotateNum(newArr, num);
}

console.log(rotateNum(["a", "b", "c", "d", "e", "f", "g", "h"], 3)); // [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
console.log(rotateNum(["a", "b", "c", "d", "e", "f", "g", "h"], -2)); // [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
