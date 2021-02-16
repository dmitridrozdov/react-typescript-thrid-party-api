//Input: "aaaabbbcca"  Output: [("a", 4), ("b", 3), ("c", 2), ("a", 1)] 
//Write a function that converts the input to the output I ask it in the screening interview and give it 25 minutes How would you solve it?

function getMap(str) { //This is just example how to create quickly map from string
    let arr = str.split('')
    return arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
}

function getPairsFromString(str){
    let arr = []
    let pair1 = ('a', 1)
    let pair2 = ('b', 3)
    arr.push(pair1)
    arr.push(pair2)
    return [('a', 1) ('b', 4), ('a', 7)]
}

let tt = 'sdfasdfddd'
console.log(getPairsFromString(tt))
