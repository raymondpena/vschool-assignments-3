// Value for math
const goombas = {
    value : 5
}
const bobOmbs = {
    value : 7
}
const cheeps = {
    value : 11
}
let cheepsTotal = document.getElementById("cheepTotal")
let bobTotal = document.getElementById("bobTotal")
let goombasTotal = document.getElementById("goombasTotal")
let main = document.getElementById("main")

// the math
function multi(num1, num2) {
    return num1 * num2
}
function addMulti () {
    let enemieArr = []
    enemieArr.push(multi(goombasTotal.value, goombas.value))
    enemieArr.push(multi(bobTotal.value, bobOmbs.value))
    enemieArr.push(multi(cheepsTotal.value, cheeps.value))
    function addArr (num1, num2, num3) {
        return num1 + num2 + num3
    }
    main.textContent = addArr(enemieArr[0], enemieArr[1], enemieArr[2])
} 

//Submit button
const button = document.getElementById("sum")
button.addEventListener("click", (event) => {
    event.preventDefault()
    addMulti()
})






