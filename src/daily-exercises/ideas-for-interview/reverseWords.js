//Given a string, reverse each word in the sentence

const reverseWords = (str) => {
    const words = str.split(' ')
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('')
    })
    return reversedWords.join(' ')
}

console.log(reverseWords('hello world')) 