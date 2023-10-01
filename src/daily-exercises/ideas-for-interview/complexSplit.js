//

const complextSplit = str => {
    const arr = str.split('. ')
    return arr.map(item => item.replace(/[0-9.]/g, '').trim())
}

const correctComplexSplit = str => {
    return str.split(/1\.|2\.|3\./).filter(item => item !== '').map(item => item.trim())
}

const str = '1. I recall it was a confluence page. Let me attempt to locate this page. 2. I recollect it was a confluence page. Let me endeavor to discover this page. 3. I retain it was a confluence page. Let me strive to unearth this page.'

const testCase = "1. Important point. 2. Well Done. 3. See you later Aligator"
const testCase1 = '1. In case of any pressing demand, you can reach me through MS Teams, emails or call 0418268273. 2. Should you have any urgent request, you can get in touch with me through MS Teams, emails or telephone 0418268273. 3. For any immediate request, you can communicate with me via MS Teams, emails or telephone 0418268273.'

console.log(complextSplit(str))
console.log(correctComplexSplit(testCase))