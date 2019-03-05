/*
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * 
 * 
 */
// var threeSum = function (nums) {
//   let result = {};
//   nums = nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if ((nums[i] + nums[j] + nums[k] === 0)) {
//           result[[nums[i], nums[j], nums[k]].sort()] = [nums[i], nums[j], nums[k]].sort();
//         }
//       }
//     }
//   }
//   // console.log(Object.values(result))
//   return Object.values(result);
// };


// var threeSum = function (nums) {
//   let result = [];
//   let sorted = nums.sort((a, b) => a - b);
//   let isZero = function (num) {
//     return num === 0
//   }

//   if (nums.length < 3) return [];
//   if (sorted.every(isZero)) return [sorted]
//   let currentSum = 0;
//   for (let i = 0; i < sorted.length; i++) {
//     let j = 1;
//     let k = sorted.length - 1;
//     let current = sorted[i];
//     while ((i <= j) && ((j < sorted.length && k >= 0) && (sorted[j] < sorted[k]))) {
//       let leftPointer = sorted[j];
//       let rightPointer = sorted[k];
//       currentSum = current + leftPointer + rightPointer
//       if (currentSum === 0) {
//         result.push([current, leftPointer, rightPointer]);
//         j++;
//         k--;
//       } else if (currentSum < 0) {
//         j++;
//       } else if (currentSum > 0) {
//         k--;
//         // } else if (leftPointer > rightPointer || leftPointer === rightPointer){
//         //   i++;
//       }
//     }
//   }
//   return result;
// };

// var threeSum = function (nums) {
//   let result = [];
//   let sorted = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length - 2; i++) {
//     let left = i + 1;
//     let right = sorted.length - 1;
//     while (left < right) {
//       let currentSum = sorted[i] + sorted[left] + sorted[right];
//       if (currentSum === 0) {
//         result.push([sorted[i], sorted[left], sorted[right]]);
//         left++;
//         right++;
//       } else if (currentSum < 0) {
//         left++;
//       } else if (currentSum > 0) {
//         right++;
//       }
//     }
//   }
//   return result;
// };

var threeSum = function (nums) {
  let result = [];
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    while (sorted[i] === sorted[i - 1]) i++
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      let currentSum = sorted[i] + sorted[left] + sorted[right];
      if (currentSum === 0) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (sorted[left] === sorted[left - 1]) left++;
        while (sorted[right] === sorted[right + 1]) right--;
      } else if (currentSum < 0) {
        left++;
      } else if (currentSum > 0) {
        right--;
      }
    }
  }
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);