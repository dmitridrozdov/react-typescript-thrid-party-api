function removeChar(arr) {
    let s = arr[0]; index = arr[1]; result = arr[2]
    if(index == s.length-1) {
        return result
    }
    if(s[index] == s[index + 1]) {
        return removeChar([s.substring(0, index) + s.substring(index + 1), index, result + 1])
    }
    return removeChar([s, index + 1, result])
}

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let result = []
    for(let i = 1; i <= s[0]; i++) {
        console.log(s[i])
        result.push(removeChar([s[i], 0, 0]))
    }
    return result
}

let inputList = [5, "AAAA", "BBBBB", "ABABABAB", "BABABA", "AAABBB"]
console.log(alternatingCharacters(inputList))