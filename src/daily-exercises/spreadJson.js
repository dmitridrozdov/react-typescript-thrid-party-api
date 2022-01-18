const jsonTest = { name: 'Alex', age: '26'}

const updatedJson = { ...jsonTest, age: '31', surename: 'Voron'}

console.log(jsonTest)
console.log(updatedJson)

//verify slice
const str = 'AlexUSDT'
console.log(str.slice(-4))