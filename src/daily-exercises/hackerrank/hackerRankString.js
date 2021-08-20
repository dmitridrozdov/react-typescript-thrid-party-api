const recursiveCheck = (word, str) => {
    if(word.length === 0) { return 'YES' }
    const index = str.indexOf(word[0])
    if(index === -1) { return 'NO' } 
    else { return recursiveCheck(word.slice(1), str.slice(index + 1)) } 
} 

const hackerrankInString = (s) => {
    const word = 'hackerrank'
    return recursiveCheck(word, s)
}

// const s = 'hhaacckkekraraannk'
const s = 'haddddddd'
// const s = 'llllhdddaiiiii'
// const s = 'ddddd'
const result = hackerrankInString(s)
console.log(result)