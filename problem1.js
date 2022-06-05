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

// Comment to just check out if git is working
// console.log(maxSubArray([1, 2, 3]))