// function sumRange(num: number) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// TODO: FIBONACCI-ITERATION
// const fibonacci = (num: number): 0 | 1 | number[] => {
//   if (num == 0) {
//     return [];
//   } else if (num == 1) {
//     return [1];
//   }

//   const fibSequence = [1, 1];
//   for (let i = 2; i < num; i++) {
//     fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//   }
//   return fibSequence;
// };
// console.log(fibonacci(8));

// // TODO: FIBONACCI-RESCURSIVE
// // function fibonacciRecursive(num: number): number[] {
// //   if (num == 0) return [num];
// //   else if (num == 1) return [1];
// //   else if (num == 2) return [1, 1];

// //   const fibRecSequence = [1, 1];
// //   fibRecSequence[num] =
// //     fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
// //   return fibRecSequence;
// // }
// // console.log(fibonacci(8));

// const fibonacciRecursive = (num: number): 0 | 1 | number[] => {
//   const fibRecursive = (n: number): number => {
//     if (n === 0) {
//       return 0;
//     } else if (n === 1) {
//       return 1;
//     } else {
//       return fibRecursive(n - 1) + fibRecursive(n - 2);
//     }
//   };

//   if (num === 0) {
//     return [];
//   } else if (num === 1) {
//     return [1];
//   } else {
//     return Array.from({ length: num }, (_, index) => fibRecursive(index));
//   }
// };

// console.log(fibonacciRecursive(8));

// TODO: MERGE SORT
function myMergeSort<T>(arr: T[]): T[] {
  // 0. base case
  if (arr.length < 2) return arr;

  // 1. split arr into two equal halves
  const mid = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return myMerge(myMergeSort(leftArr), myMergeSort(rightArr));
}

function myMerge<T>(leftArr: T[], rightArr: T[]): T[] {
  const sortedArr: T[] = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0]! <= rightArr[0]!) {
      // 2. sort lhs of arr
      sortedArr.push(leftArr.shift()!);
    } else {
      // 3. sort rhs of arr
      sortedArr.push(rightArr.shift()!);
    }
  }

  // 4. merge the two halves together
  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  return resultArr;
}

const unsortedArray: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray: number[] = myMergeSort(unsortedArray);

console.log(sortedArray);
