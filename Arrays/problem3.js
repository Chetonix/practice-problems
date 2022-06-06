// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (i * i >= x) {
      if (i * i != x) {
        return i - 1;
      } else return i;
    }
  }
};

//BINARY SOLUTION

// var mySqrt = function(x) {
//     let start = 0;
//     let end = x;
//     let ans = 1;
    
//     while(start<=end) {
        
//         let mid = start + Math.floor((end - start) / 2);
        
//         if(mid*mid === x) {
//             return mid;
//         }else if (mid*mid < x) {
//             ans = mid;
//             start = mid + 1;
//         } else if (mid*mid > x) {
//             end = mid - 1;
//         }
//     }
    
//     return ans;
    
// };


//A simpler version (just sayin!) 
// var mySqrt = function(x) {
//     let start = 0;
//     let end = x;
    
//     while(start<=end) {
//         let mid = Math.floor((start + end) / 2);
//         if (mid * mid === x) {
//             return mid;
//         }else if (mid*mid > x) {
//             end = mid -1;
//         } else if (mid*mid < x) {
//             start = mid + 1;

//         }
//     }
//     return start-1;
// };

console.log(mySqrt(8));