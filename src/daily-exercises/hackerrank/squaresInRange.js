const squares = (a, b) => {
    const d = Math.ceil(Math.sqrt(a))
    const u = Math.floor(Math.sqrt(b))
    return u - d + 1
}

const a = 17
const b = 24
console.log(squares(a, b))