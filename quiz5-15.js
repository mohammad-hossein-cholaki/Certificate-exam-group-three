/*
Printer Levels
Given an object of how many more pages each ink color can print,
 output the maximum number of pages the printer can print before any of the colors run out.

Examples:
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0 ➞ "printing is not possible"

Notes:
A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).
*/

function inkLevels(obj) {
  // Your code goes below this line
  let maxPage=Object.values(obj)
  let max=Math.max(...maxPage)
  let findValue=obj.filter((value)=> value=max)
  return findValue


  // Your code goes above this line
}

// Don't modify code below this line.
function assert(result, answer) {
  if (result !== answer) {
    throw new Error("FAILED: !The answer is not correct");
  } else {
    console.log("PASSED");
  }
}

assert(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  }),
  10
);

assert(
  inkLevels({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  }),
  432
);

assert(
  inkLevels({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  }),
  "printing is not possible"
);
// DON'T modify the code above this line
