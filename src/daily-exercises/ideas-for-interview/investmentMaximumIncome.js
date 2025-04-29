// const solution = (investment) => {
//     let maxIncome = investment[0]
//     let assetStatus = true
//     let bestPrice = 0
//     for (let i = 0; i < investment.length - 1; i++) {
//         if(assetStatus) {
//             if (investment[i] > investment[i + 1]) {
//                 maxIncome += investment[i]
//                 bestPrice = 0
//                 assetStatus = false
//         }
//         } else {
//             if (investment[i] < investment[i + 1]) {
//                 maxIncome -= investment[i]
//                 assetStatus = true
//             }
//         }
//     }
    
//     return maxIncome;
// }; 


// function solution(A) {
//     const MOD = 1000000000;
//     let income = A[0]; // initially sell
//     for (let i = 1; i < A.length; i++) {
//         if (A[i] > A[i-1]) {
//             income += (A[i] - A[i-1]);
//         }
//     }
//     return income % MOD;
// }


function solution(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] > minPrice) {
            maxProfit += prices[i] - minPrice;
            minPrice = prices[i]; // Reset minPrice for the next potential transaction
        }
    }

    return maxProfit;
}

// Examples:
const A1 = [4, 1, 2, 3];
console.log(solution(A1)); // Output: 6

const A2 = [1, 2, 3, 3, 2, 1, 5];
console.log(solution(A2)); // Output: 7

const A3 = [1000000000, 1, 2, 2, 1000000000, 1, 1000000000];
console.log(solution(A3)); // Output: 999999998

// const A4 = [1, 5];
// console.log(solution(A4)); // Output: 4

// const A5 = [5, 1];
// console.log(solution(A5)); // Output: 0

// const A6 = [1, 2, 3, 4, 5];
// console.log(solution(A6)); // Output: 4

// const A7 = [5, 4, 3, 2, 1];
// console.log(solution(A7)); // Output: 0