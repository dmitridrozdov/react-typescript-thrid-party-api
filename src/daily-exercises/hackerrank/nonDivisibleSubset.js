const verifySumReturn = (k, el1, el2) => {
    if((el1 + el2) % k > 0) { 
        console.log('step: ' + el1 + '  ' + el2)
        return [el1, el2]
    }
    else { return -1 }
}

const verifyElementsForFirstElement = (k, s) => {
    const firstElement = s[0] //get first element of the array
    s.shift() //shift the array
    console.log('current s: ' + s)
    const arrArr = s.map(x => verifySumReturn(k, firstElement, x)).filter(x => x != -1) //return arrays array
    return [...new Set([].concat(...arrArr))] //flatten and remove duplications
}

const recursiveShift = (k, s, result) => {
    if(s.lenght === 1) { return result }
    else {
        result.push(verifyElementsForFirstElement(k, s))
        s.shift()
        return recursiveShift(k, s, result)
    }
}

const nonDivisibleSubset = (k, s) => {
    return recursiveShift(k, s, [])
}

const k = 3
const s = [1, 7, 2, 4]

console.log(nonDivisibleSubset(k, s))