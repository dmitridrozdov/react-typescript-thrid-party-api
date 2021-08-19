const word = 'hackerrank'

const hackerrankInString = (s) => {
    return s.indexOf(word[1])
}

const s = 'hhaacckkekraraannk'
const result = hackerrankInString(s)
console.log(result)