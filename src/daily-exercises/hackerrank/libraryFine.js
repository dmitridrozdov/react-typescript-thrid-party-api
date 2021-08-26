const libraryFine = (d1, m1, y1, d2, m2, y2) => {
    if (y1 === y2 && m1 === m2 && d1 > d2) {
        return 15 * (d1 - d2)
    } else if (y1 === y2 && m1 > m2) {
        return 500 * (m1 - m2)
    } else if (y1 > y2) {
        return 10000
    } else if (y1 <= y2 || m1 <= m2 || d1 <= d2) {
        return 0
    }
}

const [d1, m1, y1] = [9, 6, 2015]
const [d2, m2, y2] = [6, 6, 2015]

console.log(libraryFine(d1, m1, y1, d2, m2, y2))