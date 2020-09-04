function calculateSumByIndex(arr, row, col) {
  let rowSum =
    arr[row][col] +
    arr[row][col + 1] +
    arr[row][col + 2] +
    arr[row + 1][col + 1] +
    arr[row + 2][col] +
    arr[row + 2][col + 1] +
    arr[row + 2][col + 2];
  return rowSum;
}

function hourglassSum(arr) {
  let hourglassArray = [];
  for (let col = 0; col < arr.length - 2; col++) {
    for (let row = 0; row < arr.length - 2; row++) {
      console.log(row + " : " + col);
      let sum = calculateSumByIndex(arr, row, col);
      console.log(row + " : " + col + " = " + sum);
      hourglassArray.push(sum);
    }
  }
  let hourglassSortedArray = hourglassArray.sort(function (a, b) {
    return b - a;
  });
  return hourglassSortedArray[0];
}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let result = hourglassSum(arr);
console.log(result);
