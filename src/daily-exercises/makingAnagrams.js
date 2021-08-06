const checkCharInString = (ch, str) => {
    return str.includes(ch)
}

const makeAnagram = (a, b) => {
    let str = 'asdf'
    let ch = 'm'
    return checkCharInString(ch, str)
}

let a = 'cde'
let b = 'dcf'
let result = makeAnagram(a, b)
console.log(result)