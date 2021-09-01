const verifySumReturn = (k, el1, el2) => {
    if((el1 + el2) % k > 0) { 
        console.log('step: ' + el1 + '  ' + el2)
        return [el1, el2]
    }
    else { return -1 }
}

const verifyElementsForFirstElement = (k, s) => {
    const firstElement = s[0] //get first element of the array
    const [, ...rest] = s //get the rest of the elements in the array
    const arrArr = rest.map(x => verifySumReturn(k, firstElement, x)).filter(x => x != -1) //return arrays array
    return [...new Set([].concat(...arrArr))] //flatten and remove duplications
}

const recursiveShift = (k, s, result) => {
    if(s.length === 1) { return result }
    else {
        result.push(verifyElementsForFirstElement(k, s))
        s.shift()
        return recursiveShift(k, s, result)
    }
}

const nonDivisibleSubset = (k, s) => {
    const result = recursiveShift(k, s, [])
    return [...new Set([].concat(...result))] //flatten and remove duplications
}

const k = 3
const s = [1, 7, 2, 4]

console.log(nonDivisibleSubset(k, s))

// let result = []

// console.log(s.length)
// result.push(verifyElementsForFirstElement(k, s))
// console.log(result)

// s.shift()

// console.log(s.length)
// result.push(verifyElementsForFirstElement(k, s))
// console.log(result)
