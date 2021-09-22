const fillJarsByRange = (arr, operation) => {
    const startIndex = operation[0]
    const endIndex = operation[1]
    const value = operation[2]
    const result = arr.map((a, index) => {
        if(index + 1 >= startIndex && index + 1 <= endIndex) {
            return a + value
        } else return a
    })
    // console.log(result)
    return result
}

const recursiveFillJars = (arr, operations) => {
    if(operations.length === 0) { return arr }
    else {
        const newArr = fillJarsByRange(arr, operations[0])
        console.log('before shift: ' + operations)
        operations.shift()
        console.log('after shift: ' + operations)
        return recursiveFillJars(newArr, operations)
    }
}

const fillingJars = (n, operations) => {
    let arr = [...Array(n)].fill(0)
    return recursiveFillJars(arr, operations)
}

const n = 5
const operations = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]

console.log(fillingJars(n, operations))