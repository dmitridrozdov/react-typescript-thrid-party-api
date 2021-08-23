const rotate = (alph, nm = 0) => {
  const n = nm % alph.length
  const p1 = alph.slice(0, n)
  const p2 = alph.slice(n)
  return `${p2}${p1}`
}

const isUpperCase = (ch) => {
    if (ch == ch.toUpperCase()) { return true }
    else { return false }
}

const cipherChar = (ch, originalAlphabet, rotateAlphabet) => {
    const isChUpper = isUpperCase(ch)
    const index = originalAlphabet.indexOf(ch.toLowerCase())
    if(index >= 0) {
        if(isChUpper) { return rotateAlphabet[index].toUpperCase() }
        else { return rotateAlphabet[index] }
    } else { return ch }
}

const caesarCipher = (s, k) => {
    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const rotateAlphabet = rotate(originalAlphabet, k)
    return s.split('').map(char => cipherChar(char, originalAlphabet, rotateAlphabet)).join('')
}

const s = 'middle-Outz'
const k = 2
const result = caesarCipher(s, k)
console.log(result)