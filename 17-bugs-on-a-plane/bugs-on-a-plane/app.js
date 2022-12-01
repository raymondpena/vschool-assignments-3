function formAlert() {
    var firstName = document.querySelector("#first-name").value;
    var lastName = document.querySelector("#last-name").value;
    var age = document.querySelector("#age").value;
    var gender = []
    if (document.getElementById("male").checked) {
        gender.push(document.getElementById("male").value);
    } 
    if (document.getElementById("female").checked) {
        gender.push(document.getElementById("female").value)
    }
    if (document.getElementById("meh").checked) {
        gender.push(document.getElementById("meh").value)
    }
    var location = document.querySelector("#travel-location").value;
    var diet = [];
    if (document.getElementById("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById("gluten").checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (document.getElementById("paleo").checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", () => {
    formAlert()
});
