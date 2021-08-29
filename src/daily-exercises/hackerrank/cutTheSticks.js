const recursiveCutSticks = (sticks, result) => {
    const currentRes = sticks.length
    if(currentRes <= 1) { return result.push(currentRes) }
    const firstElement = sticks[0]
    const cuttedSticksArr = sticks.map(x => x - firstElement).filter(x => x != 0)
    let updatedResult = result.push(cuttedSticksArr.length)
    return recursiveCutSticks(cuttedSticksArr, updatedResult)
}

const cutTheSticks = (arr) => {
    const sortedArr = arr.sort()
    return recursiveCutSticks(sortedArr, [])
}

const arr = [5, 4, 4, 2, 2, 8]
console.log(cutTheSticks(arr))