const recursiveCutSticks = (sticks, result) => {
    if(sticks.length <= 1) { 
        return result
    }
    const cuttedSticksArr = sticks.map(x => x - sticks[0]).filter(x => x != 0)
    result.push(cuttedSticksArr.length)
    console.log(cuttedSticksArr)
    console.log(cuttedSticksArr.length)
    return recursiveCutSticks(cuttedSticksArr, result)
}

const cutTheSticks = (arr) => {
    const sortedArr = arr.sort()
    let result = []
    result.push(arr.length)
    return recursiveCutSticks(sortedArr, result)
}

function cutTheSticks1(arr) {
    let result = [];

    while (arr.length > 0) {
        result.push(arr.length);

        arr.sort((a, b) => (a - b));

        let front = arr[0];

        arr.reduce((target, value, index) => {
            arr[index] -= front;

            return target;
        }, []);

        let remove = arr.lastIndexOf(0) + 1;

        arr.splice(0, remove);
    }

    return result;
}

// const arr = [5, 4, 4, 2, 2, 8]
// const arr = [1, 2, 3, 4, 3, 3, 2, 1]
// const arr = [1, 13, 3, 8, 14, 9, 4, 4]
const arr = [2,2,1,1]
console.log(cutTheSticks(arr))