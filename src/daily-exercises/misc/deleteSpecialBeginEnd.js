//DD: I think this is great idea to ask how many test cases required to verify functionality deleting <special> character
//at the beginning and at the end

const deleteSpecialCharBeginningEndTest = (str) => {
    return str.replace(/^"|"$/g,'')
}

const test = "blabla \" blabla"
const test1 = "\"blabla \" blabla\""
const test2 = " \"blabla \" blabla\""

console.log(deleteSpecialCharBeginningEndTest(test))
console.log(deleteSpecialCharBeginningEndTest(test1))
console.log(deleteSpecialCharBeginningEndTest(test2))