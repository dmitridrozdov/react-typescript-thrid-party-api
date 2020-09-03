// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let sortedAr = ar.sort();
  let pairs = 0;
  for (i = 0; i < n - 1; i++) {
    if (sortedAr[i] == sortedAr[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

let ar = [10, 20, 20, 10, 10, 10, 30, 50, 10, 20, 20, 50];
let len = ar.length;
let result = sockMerchant(len, ar);
console.log(result);
