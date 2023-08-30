/*
Tuck in Array
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
After that concat arrays and sort index

Examples
filterArray([1, 5, "a", "b", 2],["de", 70, "a"]) ➞ [[1, 5, 2], [70]] ➞ [1, 2, 5, 70]
filterArray([1, "a", "b", 0, 15],[44,60,"k","bb",8]) ➞ [[1, 0, 15],[44, 60, 8]] ➞ [0, 1, 8, 15, 44, 60]
filterArray([1, 2, "aasf", "1", "123", 123 , 40],[5,"5","sdf","fg",90,"a","90"]) ➞ [[1, 2, 123, 40],[5,90]] ➞ [1, 2, 5, 40, 90, 123]
filterArray([1, 2, 0.15, 123 , 40],[5,"5","sdf","fg",90,"a","90"]) ➞ Inputs are not valid
filterArray([9, 9, 9, 6],[-15,"90"]) ➞ Inputs are not valid
*/

function filterArray(arr1, arr2) {
  // Your code goes below this line
  // Your code goes above this line
}

// Don't modify code below this line.
function assert(arr1, arr2) {
  if (typeof arr2 !== "string") {
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
  } else {
    if (arr1 !== arr2) {
      throw new Error("FAILED: !The answer is not correct");
    }
  }
  console.log("PASSED");
}
assert(filterArray([1, 5, "a", "b", 2], ["de", 70, "a"]), [1, 2, 5, 70]);
assert(filterArray([1, "a", "b", 0, 15], [44, 60, "k", "bb", 8]), [0, 1, 8, 15, 44, 60]);
assert(filterArray([1, 2, "aasf", "1", "123", 123, 40], [5, "5", "sdf", "fg", 90, "a", "90"]), [1, 2, 5, 40, 90, 123]);
assert(filterArray([1, 2, 0.15, 123, 40], [5, "5", "sdf", "fg", 90, "a", "90"]), "Inputs are not valid");
assert(filterArray([9, 9, 9, 6], [-15, "90"]), "Inputs are not valid");
// DON'T modify the code above this line
