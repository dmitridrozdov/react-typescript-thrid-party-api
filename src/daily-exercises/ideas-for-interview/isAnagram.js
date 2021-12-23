// Given two strings, return true if they are anagrams of one another

// Problem
// For example: Mary is an anagram of Army

const getNormalizedString = (str) => {
    return str.toLowerCase().split('').sort().join('')
}

const isAnagram = (str1, str2) => {
    return getNormalizedString(str1) === getNormalizedString(str2)
}

const str1 = 'Mary'
const str2 = 'Army'

console.log(isAnagram(str1, str2))