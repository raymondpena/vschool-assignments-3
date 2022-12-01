let fizzBuzz = []
for (let i = 1; i <= 100; i++) {
    fizzBuzz.push(i)
}
console.log(fizzBuzz)

 for (let i = 0; i < fizzBuzz.length; i++) {
    if (fizzBuzz[i] % 3 === 0 && fizzBuzz[i] % 5 === 0) {
        fizzBuzz[i] = "FizzBuzz"
    }
    if (fizzBuzz[i] % 3 === 0) {
        fizzBuzz[i] = "Fizz"
    }
    if (fizzBuzz[i] % 5 === 0) {
        fizzBuzz[i] = "Buzz"
    }
    
}
console.log(fizzBuzz)
