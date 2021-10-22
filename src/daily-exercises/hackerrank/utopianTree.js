const utopianTree = (n) => {
    let res = 1
    for(let i = 1; i <= n; i++) {
        if(i%2 === 0) {
            console.log(i + ' is even')
        } else {
            console.log(i + ' is odd')
        }
    }
    return 'hevy metal'
}

const n = 5
console.log(utopianTree(n))