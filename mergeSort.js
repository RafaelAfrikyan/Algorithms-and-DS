// 1. Binary search



// function findItem(arr, item) {
//   let first = 0;
//   let last = arr.length - 1;

//   while (first <= last) {
//     let mid = Math.floor((first + last) / 2);

//     if (item === arr[mid]) {
//       return mid;
//     }
//     if (item < arr[mid]) {
//       last = mid - 1;
//     } else {
//       first = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(findItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); //  3
// console.log(findItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 245)); //  -1


// 2. Bubble sorting with recursion

// let arr = [
//   0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
//   3, 32,
// ];
// let count = 0;


// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] < arr[i]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       count++;
//       return bubbleSort(arr);
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));
// console.log(count);


