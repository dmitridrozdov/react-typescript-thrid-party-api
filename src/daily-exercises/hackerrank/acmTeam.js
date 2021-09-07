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

const recursivePermutation = (topics, result) => {
    if(topics.length === 1) { return [].concat(...result) }
    else {
        let topicsPermutation = [...topics] 
        result.push(recursiveCalculation(topicsPermutation, []))
        topics.shift()
        return recursivePermutation(topics, result)
    }
}

const recursivePermutationArray = (topics, result) => {    
    if(topics.length === 1) { 
        return result
    } else {
        result.push([...topics])
        topics.shift()
        return recursivePermutationArray(topics, result)
    }
}

const acmTeam = (topics) => {
    const attAndTopics = topics[0].split(' ')
    const attendees = attAndTopics[0]
    const numTopics = attAndTopics[1]
    topics.shift()
    const arrayResult = recursivePermutation(topics, [])
    console.log('arrayResult: ' + arrayResult)
    const maxAttendees = Math.max(...arrayResult)
    let count = 0
    arrayResult.forEach(x => {
        if(x === maxAttendees) { count += 1 }
    });
    return [maxAttendees, count]
}

// const topics = ['3 5', '10101', '11110', '00010']
const topics = ['4 5', '10101', '11100', '11010', '00101']
topics.shift()
console.log(recursivePermutationArray(topics, []))
//console.log(acmTeam(topics))