const encryption = (s) => {
    const nChars = Math.ceil(Math.sqrt(s.length))
    const rowsStr = s.match(new RegExp('.{1,' + nChars + '}', 'g'))
    let result = ''
    const firstRowLenght = rowsStr[0].length
    for(let i = 0; i < firstRowLenght; i++) {
        for(let j = 0; j < rowsStr.length; j++) {
            console.log(rowsStr[j] + ': ' + rowsStr[j].length + '  current i: ' + i)
            if(rowsStr[j].length > i) {
                result += rowsStr[j][i]
            }
        }
        result += ' '
    }
    return result
}

// const s = 'haveaniceday'
const s = 'feedthedog'
console.log(encryption(s))