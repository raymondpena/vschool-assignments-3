// items
let button = document.getElementById("button")
let display = document.getElementById("display")
let counter = localStorage.getItem("counter")

// click funtion
function buttonClick () {
    button.addEventListener("click", () => {
        counter++
        display.textContent = counter
        localStorage.setItem("counter", counter)
    })
}
buttonClick()
if (display.textContent == 0) {
    display.textContent = counter
}
