const recursiveFactorials = (n, result, index) => {
    if(index > n) { return result }
    return recursiveFactorials(n, result * (index + 1), index + 1)
}

const generateNumberFactorial = n => {
    n = BigInt(n)
    return n === 0n ? 1n : n * generateNumberFactorial(n - 1n)
}



const extraLongFactorials1 = (n) => {
    const result = generateNumberFactorial(n)
    return result.toString()
}

function extraLongFactorials(n) {
    let memoization = [BigInt(0), BigInt(1)];

    const factorial = num => (typeof memoization[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memoization[num]

    return String(factorial(BigInt(n)))
}

const n = 45
console.log(extraLongFactorials(n))