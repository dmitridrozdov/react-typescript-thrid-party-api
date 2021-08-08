const makeAnagram = (a, b) => {
    let freqs = {}
    a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1) // increment
    // Object.keys(freqs).forEach((value, key) => console.log(key + ' : ' + value ))
    console.log(freqs['e'])
    b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1) // decrement
    return Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0)
}

let a = 'ccdeml'
let b = 'dccfmp'
let result = makeAnagram(a, b)
console.log(result)