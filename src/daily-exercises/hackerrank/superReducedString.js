const superReducedString = (s) => {
 let output = s.split('')
 for(let i = 0; i < output.length; i++) {
   if(output[i] === output[i+1]){
     output.splice(i, 2)
     i = -1
    }
  }
 return output.length === 0 ? 'Empty String' : output.join('')
}

const reducedRecursive = (s, index) => {
    if(s.length === index) return s
    if(s[index] === s[index+1]) {
        s.splice(index, 2)
        return reducedRecursive(s, 0)
    }
    return reducedRecursive(s, index+1)
}

const superReducedString2 = (s) => {
    let charsArray = s.split('')
    let result = reducedRecursive(charsArray, 0)
    return result.length === 0 ? 'Empty String' : result.join('')
}

// const s = 'aaabccddd'
const s = 'abba'
const result = superReducedString2(s)
console.log(result)