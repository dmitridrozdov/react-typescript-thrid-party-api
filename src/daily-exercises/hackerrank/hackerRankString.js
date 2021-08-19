const word = 'hackerrank'


const recursiveCheck = (word, str) => {
    if(word.length === 0) {
        return 'YES'
    }
    const index = str.indexOf(word[0])
    console.log('something wrong what is the index: ' + index)
    if(index === -1) {
        console.log('index equal -1')
        return 'NO'
    } else {
        console.log('----')
        console.log(word)
        console.log(str)
        console.log('current letter to check: ' + word[0]) 
        console.log('current index: ' + index)
        recursiveCheck(word.slice(1), str.slice(index + 1))
    } 
} 

const hackerrankInString = (s) => {
    return recursiveCheck(word, s)
}

// const s = 'hhaacckkekraraannk'
// const s = 'haddddddd'
const s = 'llllhdddaiiiii'
// const s = 'ddddd'
const result = hackerrankInString(s)
console.log(result)

// const s = 'hhaacckkekraraannk'
// const resultSlice = recursiveCheck('a', s)
// console.log(resultSlice)