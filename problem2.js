// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// var searchInsert = function (nums, target) {
  // if (target < nums[0]) {
  //   return 0;
  // }

  // if (target > nums[nums.length - 1]) {
  //   return nums.length;
  // }

  // for (let i in nums) {
  //   if (nums[i] === target) {
  //     return i;
  //   }
  //   if (nums[i] < target && nums[i + 1] > target) {
  //     //   console.log(i);
  //     return i + 1;
  //   }
  // }
 
    // if(target > right[-1]) {
    //     arrHalf(right);
    // } 
    

//     while(left.length  && right.length) {

//       let left = arrHalf[0];
//       let right = arrHalf[1];

//       if (target > left[-1]) {
//         arrHalf(right);
//       } else if (target < left[-1]) {
//         arrHalf(left);
//       } else {

//       }
//     }
    

// };


// function arrHalf (nums) {
//     let center = Math.floor(nums.length / 2);
//     let left = nums.slice(0, center);
//     let right = nums.slice(center);
//     return [left, right];
// }



// var searchInsert = function (nums, target) {
//   let start = 0;
//   let end = nums.length-1;
//   while(start <= end) {

  
//   let mid = ( start + end ) / 2;

//   if (nums[mid] === target) {
//     return mid;
//   } else if (nums[mid] > target) {
//     end = mid - 1 ;

//   } else if (nums[mid] < target) {
//     start = mid + 1;
//   }
// }
// return start;
// }


function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length-1;
  
  while(start <= end) {

  let mid = Math.floor(( start + end ) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    end = mid - 1 ;

  } else if (nums[mid] < target) {
    start = mid + 1;
  }
}
return start;
}


// var searchInsert = function (nums, target) {};

console.log(searchInsert([1, 3, 5, 6], 8));
