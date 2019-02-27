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


var threeSum = function (nums) {
  let results = [];

};

threeSum([-1, 0, 1, 2, -1, -4]);