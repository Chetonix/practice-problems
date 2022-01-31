// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  for (let i in nums) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      //   console.log(i);
      return i + 1;
    }
  }
};

var searchInsert = function (nums, target) {};

console.log(searchInsert([1, 3, 5, 6], 4));
