const utopianTree = (n) => {
    let res = 1
    for(let i = 1; i <= n; i++) {
        if(i%2 === 0) { res += 1 } else { res *= 2 }
    }
    return res
}

const n = 60
console.log(utopianTree(n))