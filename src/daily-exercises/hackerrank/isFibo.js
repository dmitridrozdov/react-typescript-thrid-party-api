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
    const result = Math.sqrt(5 * n) - 4
    return result
}

const n = 11
console.log(isFibo(n))
console.log(isFiboPavol(n))