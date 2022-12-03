function largest ([...data]) {
    if (data[0] >= data[1] && data[0] >=data[2]) {
        largest = data[0]
    } else if (data[1] >= data[0] && data[1] >= data[2]) {
        largest = data[1]
    } else {
        largest = data[2]
    }
    console.log(largest)
}
largest([2, 4, 6])

function lettersWithStrings ([...data], x) {
    let arrHolder = []
    let arrResult = []
    arrHolder.push(...data)
    for (let i = 0; i < arrHolder.length; i++) {
        for (let j = 0; j < arrHolder[i].length; j++) {
            if (arrHolder[i][j] == x) {
                arrResult.push(arrHolder[i])
            }
        }
    }
    console.log(arrResult)    
}
lettersWithStrings(["one!", "two!", "three", "four!", "five", "six!"], "!")

function isDivisible (num1, num2) {
    if (num1 % num2 === 0) {
        console.log(true)
    }else {
        console.log(false)
    }
}
isDivisible (15, 4)
// console.log(9 % 3)