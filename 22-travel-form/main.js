const container = document.getElementById("container")

container.addEventListener("submit", (event) => {
    event.preventDefault()

// For loop to alert users gender
let gender = []
for (let i = 0; i < container.genders.length; i++) {
    if (container.genders[i].checked) {
        gender.push(container.genders[i].value)
    }
}

// Control of location
let locations = document.getElementById("locations")
let userLocation = []
if (locations.value == "miami") {
    userLocation.push(locations.value)
}
else if (locations.value == "newYork") {
    userLocation.push(locations.value)
}
else if (locations.value == "chicago") {
    userLocation.push(locations.value)
}

// Control of dietary restrictions
let foodRestrict = []
if (container.vegetarian.checked) {
    foodRestrict.push(container.vegetarian.value)
}
if (container.kosher.checked) {
    foodRestrict.push(container.kosher.value)
}
if (container.lactose.checked) {
    foodRestrict.push(container.lactose.value)
}


// Alert Box
alert(
    `    First name: ${container.firstName.value}
    Last name: ${container.lastName.value}
    Age: ${container.age.value}
    Gender: ${gender}
    Location: ${userLocation}
    Dietary restrictions: ${foodRestrict}`
)    
})