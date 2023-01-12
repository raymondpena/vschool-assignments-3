// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce((final, num) => {
        final += num
        return final
    }, 0)
}
console.log(total([1,2,3])); // 6

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce((final, num) => {
        return final + num
    }, "")
}
console.log(stringConcat([1,2,3])); // "123"

// 3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return arr.reduce((final, voter) =>{
        if (voter.voted) {
            final += 1
        }
        return final
    }, 0)
}
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    return arr.reduce((final, obj) => {
        final += obj.price
        return final
    }, 0)
}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array
// function flatten(arrs) {
//     return arrs.reduce((final, arr) => {
//         arr.reduce((mid, cnt) => {
//             final.push(mid + cnt)
//             return mid
//         }, "")
//         return final
//     }, [])
// }
function flatten(arrs) {
    return arrs.reduce((final, arr) => {
        for (let i = 0; i < arr.length; i++) {
            final.push(arr[i])
        }
        return final
    }, [])
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];