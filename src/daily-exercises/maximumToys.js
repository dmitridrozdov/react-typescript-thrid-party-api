function maximumToys(prices, k) {
  let numToys = 0;
  let currentSum = 0;
  prices.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < prices.length - 1; i++) {
    currentSum += prices[i];
    if (currentSum > k) {
      return numToys;
    }
    numToys++;
  }
  return numToys;
}

let prices = [1, 12, 5, 111, 200, 1000, 10];
let k = 50;

let result = maximumToys(prices, k);
console.log(result);
