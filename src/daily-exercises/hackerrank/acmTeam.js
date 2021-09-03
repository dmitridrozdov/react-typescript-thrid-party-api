const getIntArray = (topic) => {
    return topic.split('').map(x => parseInt(x))
}

const returnCalc = (val1, val2) => {
    if(val1 + val2 > 0) { return 1 }
    else { return 0 }
}

const countTopicsByPair = (n1, n2, topics) => {
    const topicsIntArr1 = getIntArray(topics[n1 - 1])
    const topicsIntArr2 = getIntArray(topics[n2 - 1])
    const result = topicsIntArr1.map((x, index) => returnCalc(x, topicsIntArr2[index]))
    return result.reduce((a, b) => a + b, 0)
}

const acmTeam = (topics) => {
    const attAndTopics = topics[0].split(' ')
    const attendees = attAndTopics[0]
    const numTopics = attAndTopics[1]
    topics.shift()
    return topics
}

const topics = ['3 5', '10101', '11110', '00010']
console.log(acmTeam(topics))

console.log(countTopicsByPair(1,3, topics))