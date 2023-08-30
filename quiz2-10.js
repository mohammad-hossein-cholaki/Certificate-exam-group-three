/*
Find the Largest and Smallest Numbers in Arrays

Examples:
findLargestAndSmallestNums([4, 2, 7, 1,20, 70, 40, 90, 1, 2, 0]) ➞ [90, 0]
findLargestAndSmallestNums([-34, -54, -74, -32, -2, -65, -54, 7, -43]) ➞ [7, -74]
findLargestAndSmallestNums([0.4321, 0.7634, 0.652, 1.324, 9.32, 2.5423, 6.4314, 9, 3, 6, 3]) ➞ [9.32,0.4321]

*/

function findLargestAndSmallestNums(array) {
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

assert(findLargestAndSmallestNums([4, 2, 7, 1, 20, 70, 40, 90, 1, 2, 0]), [90, 0]);
assert(findLargestAndSmallestNums([-34, -54, -74, -32, -2, -65, -54, 7, -43]), [7, -74]);
assert(findLargestAndSmallestNums([0.4321, 0.7634, 0.652, 1.324, 9.32, 2.5423, 6.4314, 9, 3, 6, 3]), [9.32, 0.4321]);
// DON'T modify the code above this line
