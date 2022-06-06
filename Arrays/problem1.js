// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

/* Kaden's ALgorithm */

var maxSubArray = function (nums) {
  let maxGlobal = nums[0];
  let currGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currGlobal >= 0) {
      currGlobal += nums[i];
    } else {
      currGlobal = nums[i];
    }
    if (currGlobal > maxGlobal) {
      maxGlobal = currGlobal;
    }
  }
  return maxGlobal;
};

// var maxSubArray = function(nums) {
//     let sum = 0;
//     let max = -Infinity;
//     let n = nums.length;
//     for (let i = 0; i < n; i++){
//         sum = 0;
//     for (let j = i; j < n; j++) {
//             sum += nums[j];
        
//         if (sum > max)
//             max = sum;
//     }
    
// }
//     return max;
// }


// console.log(maxSubArray([1, 2, 3]))