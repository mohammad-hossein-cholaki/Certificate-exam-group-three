/*
Number Split
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples:
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4]

Notes:
All numbers will be integers.
You can expect negative numbers too.
*/

function numberSplit(number) {
  // Your code goes below this line
  // Your code goes above this line
}

// Don't modify code below this line.
function assert(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays have different lengths");
  }
  // let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // result = false;
      throw new Error("FAILED: !Arrays are not equal");
    }
  }
  console.log("PASSED");
}
assert(numberSplit(4), [2, 2]);
assert(numberSplit(10), [5, 5]);
assert(numberSplit(11), [5, 6]);
assert(numberSplit(-9), [-5, -4]);

// DON'T modify the code above this line
