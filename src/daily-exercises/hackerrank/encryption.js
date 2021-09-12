const encryption = (s) => {
    const nChars = Math.ceil(Math.sqrt(s.length))
    return s.match(new RegExp('.{1,' + nChars + '}', 'g'))
}

const s = 'haveaniceday'
console.log(encryption(s))