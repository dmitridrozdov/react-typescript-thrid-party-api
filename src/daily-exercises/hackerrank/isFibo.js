let isFiboPavol = n => {
    let fib0 = 0;
    let fib1 = 1;
    while(fib0 <= n) {
        if (fib0 == n) return "IsFibo";
        let temp = fib0;
        fib0 = fib1;
        fib1 += temp;
    }
    return "IsNotFibo"
}

const isPerfectSquare = (n) => {
    return Number.isInteger(Math.sqrt(n))
}

const isFibo = (n) => {
    if(isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)) {
        return 'IsFibo'
    } else {
        return 'IsNotFibo'
    }
}

const n = 8
console.log(isFibo(n))
console.log(isFiboPavol(n))