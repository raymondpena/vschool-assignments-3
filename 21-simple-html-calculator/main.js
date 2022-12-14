//Grab all the forms
let addBox = document.getElementById("add")
const subtractBox = document.getElementById("subtract")
const multiplyBox = document.getElementById("multiply")

// addition form
addBox.addEventListener("submit", (event) => {
    event.preventDefault()
    function sum(numOne, numTwo){
        return Number(numOne) + Number(numTwo)
    }
    const h1 = document.createElement("h1")
    h1.textContent = sum(addBox.addOne.value, addBox.addTwo.value)
    document.body.append(h1)
})

// subtraction form
subtractBox.addEventListener("submit", (event) => {
    event.preventDefault()
    function subtract(x, y){
        return x - y
    }
    const h1 = document.createElement("h1")
    h1.textContent = subtract(subtractBox.subtractOne.value, subtractBox.subtractTwo.value)
    document.body.append(h1)
})

// multiplication box
multiplyBox.addEventListener("submit", (event) => {
    event.preventDefault()
    function multiply(v, m){
        return v * m
    }
    const h1 = document.createElement("h1")
    h1.textContent = multiply(multiplyBox.multiplyOne.value, multiplyBox.multiplyTwo.value)
    document.body.append(h1)
})