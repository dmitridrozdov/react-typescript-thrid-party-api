const fillJarsByRange = (arr, operation) => {
    const result = arr.map((a, index) => {
        if(index + 1 >= operation[0] && index + 1 <= operation[1]) { //from start index to end index
            return a + operation[2] //value
        } else return a
    })
    return result
}

const recursiveFillJars = (arr, operations) => {
    if(operations.length === 0) { return arr }
    else {
        const newArr = fillJarsByRange(arr, operations[0])
        operations.shift()
        return recursiveFillJars(newArr, operations)
    }
}

const fillingJars = (n, operations) => {
    let arr = [...Array(n)].fill(0)
    const resultArray = recursiveFillJars(arr, operations) 
    return Math.floor(resultArray.reduce((a, b) => a + b, 0) / n)
}

const fillingJars2 = (n, operations) => {
    let sum = 0
    for(let i = 0; i < operations.length; i++) {
        let a = operations[i][0] //start index
        let b = operations[i][1] //end index
        let candies = operations[i][2]
        sum += (b - a + 1) * candies
    }
    let avg = sum / n
    return parseInt(Math.floor(avg))
}

const n = 5
const operations = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]

// console.log(fillingJars(n, operations))
console.log(fillingJars2(n, operations))