// Complete the jumpingOnClouds function below.

function jumpingOnClouds(c) {
  var jumpCount = 0;
  let step = 0;
  for (let i = 0; i < c.length; i) {
    if (c[i] === 0 && i !== c.length - 2) {
      console.log("first if: " + i);
      i = i + 2;
      jumpCount++;
    } else if (c[i] === 0 && i === c.length - 2) {
      console.log("else if: " + i);
      i = i + 1;
      jumpCount++;
    } else {
      console.log("else: " + i);
      i = i - 1;
    }
  }
  return jumpCount - 1;
}

function jumpingOnClouds1(c) {
  var count = 0;
  for (var i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i] === c[i + 1]) {
        count++;
        i++;
      }
    } else {
      count++;
    }
  }

  return count;
}

let ar = [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0];
let len = ar.length;
let result = jumpingOnClouds(ar);
console.log(result);
let result1 = jumpingOnClouds1(ar);
console.log(result1);
