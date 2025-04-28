const solution = (investment, income) => {
    let maxIncome = 0;
    let maxInvestment = 0;
    
    for (let i = 0; i < investment.length; i++) {
        if (investment[i] > maxInvestment) {
        maxInvestment = investment[i];
        maxIncome = income[i];
        } else if (investment[i] === maxInvestment) {
        maxIncome = Math.max(maxIncome, income[i]);
        }
    }
    
    return maxIncome;
}

// Example usage:
const investment = [100, 200, 300, 400, 500];
const income = [10, 20, 30, 40, 50];
console.log(solution(investment, income)); // Output: 50
// Explanation:
// The maximum investment is 500, and the corresponding income is 50.