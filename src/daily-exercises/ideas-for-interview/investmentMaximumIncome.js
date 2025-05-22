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


function solutionGPT(A) {
    const MOD = 1000000000;
    let income = A[0]; // initially sell
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i-1]) {
            income += (A[i] - A[i-1]);
        }
    }
    return income % MOD;
}


function solutionClaude1(A) {
    if (!A || A.length <= 1) {
        return 0;
    }

    const MOD = 1000000000;
    let totalIncome = 0;
    let currentHolding = A[0]; // Start with holding the asset
    
    // Strategy: Whenever we see a price drop, sell before the drop and buy after
    // Whenever we see a price increase, keep the asset to sell at the higher price
    for (let i = 1; i < A.length; i++) {
        // If price increases, we want to sell at this higher price
        if (A[i] > currentHolding) {
            // Sell at current price and get income
            totalIncome = (totalIncome + A[i] - currentHolding) % MOD;
            currentHolding = A[i]; // Buy back immediately at the same price
        } else if (A[i] < currentHolding) {
            // If price drops, sell before the drop and buy at lower price
            currentHolding = A[i]; // Sell previously and buy at this lower price
        }
        // If the price is the same, we don't need to do anything
    }

    return totalIncome;
}

// Examples:
const A1 = [4, 1, 2, 3];
console.log(solution(A1)); // Output: 6

const A2 = [1, 2, 3, 3, 2, 1, 5];
console.log(solution(A2)); // Output: 7

const A3 = [1000000000, 1, 2, 2, 1000000000, 1, 1000000000];
console.log(solution(A3)); // Output: 999999998

console.log('additional test cases');

const A4 = [1, 5];
console.log(solution(A4)); // Output: 4

const A5 = [5, 1];
console.log(solution(A5)); // Output: 0

const A6 = [1, 2, 3, 4, 5];
console.log(solution(A6)); // Output: 4

const A7 = [5, 4, 3, 2, 1];
console.log(solution(A7)); // Output: 0