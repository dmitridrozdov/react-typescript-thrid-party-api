const compoundInterest = (initialSum, monthes) => {
    const interestPercentage = 30
    let total = initialSum
    
    for (let i = 1; i <= monthes; i++) {
        total += total * interestPercentage/100
    }
    
    return total
}

console.log('One year: ' + compoundInterest(1000, 12))
console.log('Two years: ' + compoundInterest(1000, 24))
console.log('Three years: ' + compoundInterest(1000, 36))