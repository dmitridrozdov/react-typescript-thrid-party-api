// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz...


const fizzBuzz = (num) => {
    for(let i=1; i<=num; i++) {
        if(i%3 === 0 && i%5 === 0) {
            console.log('FizzBuzz')
        } if(i%3 === 0) {
            console.log('Fizz')
        } if(i%5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(100);