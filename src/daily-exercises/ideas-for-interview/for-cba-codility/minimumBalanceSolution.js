/**
 * Finds the minimum initial account balances for banks A and B
 * to complete all transfers without going into debt.
 *
 * @param {string} R - String of recipients ('A' or 'B')
 * @param {number[]} V - Array of transfer values
 * @returns {number[]} - Array [minBalanceA, minBalanceB]
 */
function solution(R, V) {
    if (!R || !V || R.length !== V.length || R.length === 0) {
        return [0, 0];
    }
    
    let balanceA = 0; // Current balance of bank A
    let balanceB = 0; // Current balance of bank B
    let minBalanceA = 0; // Minimum balance A needs to start with
    let minBalanceB = 0; // Minimum balance B needs to start with
    
    // Process each transfer in order
    for (let i = 0; i < R.length; i++) {
        const recipient = R[i];
        const value = V[i];
        
        if (recipient === 'A') {
            // Transfer from B to A
            balanceB -= value; // B loses money
            balanceA += value; // A gains money
            
            // Check if B would go negative
            if (balanceB < 0) {
                // B needs more initial balance
                minBalanceB = Math.max(minBalanceB, -balanceB);
            }
        } else if (recipient === 'B') {
            // Transfer from A to B
            balanceA -= value; // A loses money
            balanceB += value; // B gains money
            
            // Check if A would go negative
            if (balanceA < 0) {
                // A needs more initial balance
                minBalanceA = Math.max(minBalanceA, -balanceA);
            }
        }
    }
    
    return [minBalanceA, minBalanceB];
}

// Test cases
console.log("Test Case 1:");
console.log("R='BAABA', V=[2,4,1,1,2]");
console.log("Expected: [2, 4]");
console.log("Result:", solution("BAABA", [2, 4, 1, 1, 2]));

console.log("\nTest Case 2:");
console.log("R='ABAB', V=[10,5,10,15]");
console.log("Expected: [0, 15]");
console.log("Result:", solution("ABAB", [10, 5, 10, 15]));

console.log("\nTest Case 3:");
console.log("R='B', V=[100]");
console.log("Expected: [100, 0]");
console.log("Result:", solution("B", [100]));

// Additional test to verify the logic step by step for Test Case 1
console.log("\n--- Step by step verification for Test Case 1 ---");
function solutionWithSteps(R, V) {
    let balanceA = 2; // Start with minimum required
    let balanceB = 4; // Start with minimum required
    
    console.log(`Initial: A=${balanceA}, B=${balanceB}`);
    
    for (let i = 0; i < R.length; i++) {
        const recipient = R[i];
        const value = V[i];
        
        if (recipient === 'A') {
            balanceB -= value;
            balanceA += value;
            console.log(`Transfer ${value} from B to A: A=${balanceA}, B=${balanceB}`);
        } else {
            balanceA -= value;
            balanceB += value;
            console.log(`Transfer ${value} from A to B: A=${balanceA}, B=${balanceB}`);
        }
    }
}

solutionWithSteps("BAABA", [2, 4, 1, 1, 2]);