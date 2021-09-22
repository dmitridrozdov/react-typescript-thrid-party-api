const fillJarsByRange = (arr, operation) => {
    const startIndex = operation[0]
    const endIndex = operation[0]
    const value = operation[2]
    const result = arr.map((a, index) => {
        if(index + 1 >= startIndex && index + 1 <= endIndex) {
            return a + value
        } else return a
    })
    return result
}

const fillingJars = (n, operations) => {
    let a = [...Array(n)].fill(0)
    return fillJarsByRange(a, operations[0])
}

const n = 5
const operations = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]

console.log(fillingJars(n, operations))