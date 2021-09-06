const getIntArray = (topic) => {
    return topic.split('').map(x => parseInt(x))
}

const returnCalc = (val1, val2) => {
    if(val1 + val2 > 0) { return 1 }
    else { return 0 }
}

const countTopicsByPair = (n1, n2, topics) => {
    const topicsIntArr1 = getIntArray(topics[n1])
    const topicsIntArr2 = getIntArray(topics[n2])
    const result = topicsIntArr1.map((x, index) => returnCalc(x, topicsIntArr2[index]))
    return result.reduce((a, b) => a + b, 0)
}

const calculatePermutationForFirst = (topics) => {
    console.log('current topics: ' + topics)
    let result = []
    for(let i = 1; i < topics.length; i++) {
        result.push(countTopicsByPair(0, i, topics))
    }
    return result
}

const recursiveCalculation = (topics, result) => {
    if(topics.length === 1) { return [].concat(...result) }
    else {
        result.push(calculatePermutationForFirst(topics))
        topics.shift()
        return recursiveCalculation(topics, result)
    }
}

// const recursivePermutation = (topics, result) => {
//     if(topics.length === 1) { return [].concat(...result) }
//     else {
//         result.push(recursiveCalculation(topics, []))
//         topics.shift()
//         return recursivePermutation(topics, result)
//     }
// }

const acmTeam = (topics) => {
    const attAndTopics = topics[0].split(' ')
    const attendees = attAndTopics[0]
    const numTopics = attAndTopics[1]
    topics.shift()

    let result = []
    result.push(recursiveCalculation(topics, []))
    // topics.shift()
    // result.push(recursiveCalculation(topics, []))

    return result

    // return recursivePermutation(topics, [])
}

const topics = ['3 5', '10101', '11110', '00010']
console.log(acmTeam(topics))

// console.log(calculatePermutationForFirst(topics))