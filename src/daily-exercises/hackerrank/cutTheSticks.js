const recursiveCutSticks = (sticks, result) => {
    if(sticks.length == 1) { return result } //exit recursive function when last stick left
    const cuttedSticksArr = sticks.map(x => x - sticks[0]).filter(x => x != 0)
    if(cuttedSticksArr.length === 0) { return result } //exit recursive function when multiple sticks left with the same lenght
    result.push(cuttedSticksArr.length)
    return recursiveCutSticks(cuttedSticksArr, result)
}

const cutTheSticks = (arr) => {
    //1. sort array
    const sortedArr = arr.sort((a, b) => (a - b))
    let result = []
    //2. Push initial array length to result array
    result.push(arr.length)
    return recursiveCutSticks(sortedArr, result)
}
const allTestCases = [
    [5, 4, 4, 2, 2, 8],
    [1, 2, 3, 4, 3, 3, 2, 1],
    [1, 13, 3, 8, 14, 9, 4, 4],
    [8, 8, 14, 10, 3, 5, 14, 12],
    [15, 10, 5]
].forEach(x => console.log(cutTheSticks(x)))