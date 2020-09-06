function rotateLeftByOne(arr) {
  let rotatedArr = [];
  for (let i = 1; i < arr.length; i++) {
    rotatedArr.push(arr[i]);
  }
  rotatedArr.push(arr[0]);
  return rotatedArr;
}

function rotLeft(a, d) {
  let rotatedArr = a;
  for (let i = 0; i < d; i++) {
    rotatedArr = rotateLeftByOne(rotatedArr);
  }
  return rotatedArr;
}

function rotLeftCorrect(a, d) {
  while (d) {
    a.push(a.shift());
    d--;
  }
  return a;
}

let a = [1, 2, 3, 4, 5];
let d = 4;

let result = rotLeft(a, d);
console.log(result);

let resultCorrect = rotLeftCorrect(a, d);
console.log(resultCorrect);
