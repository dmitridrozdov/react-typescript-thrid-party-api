function countingValleys(n, ar) {
  let level = 0;
  let valleys = 0;
  for (let i = 0; i < n; i++) {
    if (ar[i] == "D") {
      level--;
    }
    if (ar[i] == "U") {
      level++;
      if (level == 0) {
        valleys++;
      }
    }
  }
  return valleys;
}

// let ar = ["U", "D", "D", "D", "U", "D", "U", "U"];
let ar = ["D", "U", "D", "D", "U", "D", "U", "U", "U", "D", "D", "U"];
let len = ar.length;
let result = countingValleys(len, ar);
console.log(result);
