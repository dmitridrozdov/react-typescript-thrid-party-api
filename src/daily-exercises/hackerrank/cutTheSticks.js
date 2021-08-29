const recursiveCutSticks = (sticks, result) => {
    if(sticks.length <= 1) { 
        return result
    }
    const cuttedSticksArr = sticks.map(x => x - sticks[0]).filter(x => x != 0).sort((a, b) => (a - b))
    result.push(cuttedSticksArr.length)
    return recursiveCutSticks(cuttedSticksArr, result)
}

const cutTheSticks = (arr) => {
    const sortedArr = arr.sort((a, b) => (a - b))
    let result = []
    result.push(arr.length)
    return recursiveCutSticks(sortedArr, result)
}

// const arr = [5, 4, 4, 2, 2, 8]
// const arr = [1, 2, 3, 4, 3, 3, 2, 1]
const arr = [1, 13, 3, 8, 14, 9, 4, 4]
// const arr = [2,2,1,1]
console.log(cutTheSticks(arr))