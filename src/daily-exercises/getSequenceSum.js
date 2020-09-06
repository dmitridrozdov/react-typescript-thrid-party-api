const { get } = require("http");

function getSequenceSum(i, j, k) {
  let sum = i;
  for (let index = i + 1; index <= j; index++) {
    sum += index;
    console.log("first part " + index + " sum " + sum);
  }
  for (let index = j - 1; index >= k; index--) {
    sum += index;
    console.log("second part " + index + " sum " + sum);
  }
  return sum;
}

let i = 5;
let j = 9;
let k = 6;

let result = getSequenceSum(i, j, k);
console.log(result);
