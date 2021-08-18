const pattern = 'SOS'

const verifyPattern = (str) => {
    let result = 0;
    [...str].forEach((element, index) => {if(element != pattern[index]) { result++ }})
    return result
}

const marsExploration = (s) => {
    let msg = s.match(/.{1,3}/g)
    const resArray = msg.map(el => verifyPattern(el))
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return resArray.reduce(reducer)
}

// const s = 'SOSSPSSQSSOR'
const s = 'SOSTOT'
const result = marsExploration(s)
console.log(result)