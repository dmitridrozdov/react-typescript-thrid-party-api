const fillingJars = (n, operations) => {
    let a = [...Array(n)].fill(0)
    return a
}

const n = 5
const operations = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]

console.log(fillingJars(n, operations))