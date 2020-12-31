const formatDate = () => {
    const d = new Date()
    const month = `${d.getMonth() + 1}`
    const day = `${d.getDay()}`
    const year = d.getFullYear()

    const normalizedMonth = month.length === 1 ? `0${month}` : month

    return normalizedMonth
}

console.log(formatDate())