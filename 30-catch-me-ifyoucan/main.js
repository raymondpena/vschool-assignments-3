//Plus
function sum(x, y){
    try {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Please use numbers for both!")
        }
    }
    catch (err) {
        console.log(err)
    }
    return x + y;
}

try {
    throw (sum(1, 2))
}
catch (err) {
    console.log(err)
}


// login
var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if (username !== user.username || password !== user.password) {
            throw new Error("Username, or Password does not match. Please try again")
        }
        else {
            throw "Login successful!"
        }
    }
    catch (err) {
        console.log(err)
    }
}
try {
    throw login("sam", "123abc")
}
catch (err) {
    console.log(err)
}
try {
    throw login("ray", "abc123")
}
catch (err) {
    console.log(err)
}