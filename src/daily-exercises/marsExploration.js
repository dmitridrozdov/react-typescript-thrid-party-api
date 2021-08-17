const pattern = 'SOS'

const verifyPattern = (p) => {
    let result = 0
    for(i = 0; i <= 2; i++) {
        if(p[i] != pattern[i]) {
            result++
        }
    }
    return result
}

const marsExploration = (s) => {
    let msg = s.match(/.{1,3}/g)
    const resArray = msg.map(el => verifyPattern(el))
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return resArray.reduce(reducer)
}

const s = 'SOSSPSSQSSOR'
const result = marsExploration(s)
console.log(result)