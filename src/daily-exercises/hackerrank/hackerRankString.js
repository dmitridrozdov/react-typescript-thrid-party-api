const word = 'hackerrank'

// const findCharReturnSlice = (ch, str) => {
//     const index = str.indexOf(ch)
//     return index//str.slice(index)
// }

const recursiveCheck = (word, str) => {
    if(word.length === 0) {
        return 'YES'
    }
    const index = str.indexOf(word[0])
    if(index === -1) {
        return 'NO'
    } else {
        console.log('----')
        console.log(word.slice(1))
        console.log(str.slice(index))
        recursiveCheck(word.slice(1), str.slice(index))
    } 
} 

const hackerrankInString = (s) => {
    let currentWord = word
    return s.indexOf(word[1])
}

// const s = 'hhaacckkekraraannk'
// const s = 'ddddddd'
// const result = hackerrankInString(s)
// console.log(result)

// const s = 'hhaacckkekraraannk'
// const resultSlice = recursiveCheck('a', s)
// console.log(resultSlice)