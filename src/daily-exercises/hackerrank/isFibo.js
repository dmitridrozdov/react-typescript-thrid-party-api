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

const isFibo = (n) => {
    const result = Math.sqrt(5 * n * n + 4)
    const result1 = Math.sqrt(5 * n * n - 4)
    return [Number.isInteger(result), Number.isInteger(result1)]
}

const n = 8
console.log(isFibo(n))
console.log(isFiboPavol(n))