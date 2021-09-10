// const numCharsInWord = (s) => {
//     const nChars = Math.ceil(Math.sqrt(s.length))
//     return nChars
// }

const encryption = (s) => {
    const nChars = Math.ceil(Math.sqrt(s.length))
    return s.match(/.{1,2}/g)
}

const s = 'haveaniceday'
console.log(encryption(s))