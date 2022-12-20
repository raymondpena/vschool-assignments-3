const readline = require("readline-sync");
const name = readline.question("Enter Name - ")
console.log("")
console.log(`Welcome ${name}! I'd like to welcome you to my console version of "Elden Ring"!`)
console.log("")
console.log("Here are the controls:")
console.log(`"s": stats`)
console.log(`"w": Walk`)
console.log(`"a": Attack`)
console.log(`"r": Run`)
function Player (name) {
    this.Name = name
    this.Hp = 100
    this.Damage = 10
    this.aggro = 1
}
let newPlayer = new Player(name)
console.log("__________________________")
console.log("")
const firstS = readline.keyIn(`Lets try typing "s": `)
console.log("")
if ( firstS == "s") {
    console.log("This will display your CURRENT Hp, and Damage.")
    console.log("")
    console.log("HP:"+ " " + newPlayer.Hp)
    console.log("Damage:"+ " " + newPlayer.Damage)
}
console.log("")
readline.keyIn("press any key to continue and see a description of the other keybinds...")
console.log("__________________________________________________________________________")
console.log("")
console.log(`"w" will travel you 1 mile closer. Every iteration will have a 33% chance of spawning A boss.`)
console.log(`"a" will be your attack move against the bosses. You will start with a base of 10 damage.`)
console.log(`"r" will also only be avalible once a boss has spawned. You will have a 50% chance of escaping.`)
console.log("")
console.log(`How to beat the game? Kill all of the bosses, or reach "Roundtable Hold" which is 100 Miles away...`)
console.log("Every 10 miles, you'll recieve a random stat boost of 1-3 x Player Stats.")
console.log(`Every Boss kill, will reward 1 of 3 stat boost. Double HP, Double DAMAGE, or Both.`)
console.log(`Good Luck!`)
console.log("")
console.log(`Boss list:`)
const bosslist = [
    {
    Name: "Margit the Fell Omen",
    Hp: 100,
    Damage: 10
    },
    {
    Name: "Godrick the Grafted",
    Hp: 200,
    Damage: 20
    },
    {
    Name: "Red Wolf of Radagon",
    Hp: 300,
    Damage: 30
    },
    {
    Name: "Rennala, Queenof the Full Moon",
    Hp: 400,
    Damage: 40
    },
    {
    Name: "Rennala, Queenof the Full Moon",
    Hp: 500,
    Damage: 50
    },
    {
    Name: "God-devouring Serpent / Rykardn",
    Hp: 600,
    Damage: 60
    },
    {
    Name: "Starscourge Radahn",
    Hp: 700,
    Damage: 70
    },
    {
    Name: "Magma Wyrm Makar",
    Hp: 800,
    Damage: 80
    },
    {
    Name: "Godfrey, First Elden Lord",
    Hp: 900,
    Damage: 90
    },
    {
    Name: "Morgot, the Omen King",
    Hp: 1000,
    Damage: 100
    },
    {
    Name: "Fire Giant",
    Hp: 1100,
    Damage: 110
    },
    {
    Name: "Godskin Duo",
    Hp: 1200,
    Damage: 120
    },
    {
    Name: "Maliketh, the Black Blade",
    Hp: 1300,
    Damage: 130
    },
    {
    Name: "Hoarah Loux",
    Hp: 1400,
    Damage: 140
    },
    {
    Name: "Radagon / Elden Beast",
    Hp: 1500,
    Damage: 150
}]
console.log(bosslist)
console.log("_______________________________________________________________________________")
console.log("")
readline.keyIn("press any key to begin. ")
console.log("")
let distance = {
        MilesTraveled: 0
    }
while (newPlayer.Hp > 0 && distance.MilesTraveled < 100) {
    function bossBoost () {
        let bossGen = Math.floor(Math.random() * 5 + 1)
        if (bossGen === 1 || bossGen === 2) {
            newPlayer.Hp *= 2
            console.log("Your HP has been DOUBLED!")
        }
        else if (bossGen === 3 || bossGen === 4) {
            newPlayer.Damage *= 2
            console.log("Your DAMAGE has been DOUBLED!")
        }
        else if (bossGen === 5) {
            newPlayer.Hp *= 2
            newPlayer.Damage *= 2
            console.log("Your HP and your DAMAGE have been DOUBLED!")
        }
    }
    if (newPlayer.aggro === 0) {
        newPlayer.aggro = 1
    }
    console.log("Walk or Stats?")
    let choiceOne = readline.keyIn("w or s - ")
    if (choiceOne == "w") {
        let numGenOne = Math.floor(Math.random() * 3 + 1)
        if (numGenOne === 3) {
            let numGenTwo = Math.random() * 100
            console.log("")
            if (numGenTwo <= 50 && bosslist.length > 0) {
                while (newPlayer.aggro > 0 && newPlayer.Hp > 0) {
                console.log("!!!A Boss has appeared!!!")
                console.log("")    
                console.log(`${bosslist[0].Name} is in your sight! What will it be?`)
                console.log("")
                console.log(bosslist[0])
                console.log("")
                console.log("Attack or Run?")
                console.log("")
                let choiceTwo = readline.keyIn("a, r or s - ")
                if (choiceTwo == "a") {
                    let bossHit =  Math.floor(Math.random() * newPlayer.Damage + 1)
                    console.log("")
                    bosslist[0].Hp -= bossHit
                    console.log(`You STRIKE ${bosslist[0].Name} for (${bossHit})`)
                    console.log("")
                    let bossHitGen = Math.floor(Math.random() * 4 + 1)
                    if (bossHitGen === 2) {
                        let playerHit = Math.floor(Math.random() * bosslist[0].Damage + 1)
                        newPlayer.Hp -= playerHit
                        console.log(`${bosslist[0].Name} returns a blow of (${playerHit})`)
                        console.log("")
                        console.log(`Your current HP is (${newPlayer.Hp})`)
                    }
                    console.log("___________________________________________________________>")    
                }
                else if (choiceTwo == "r") {
                    let runNumGen = Math.floor(Math.random() * 2 + 1)
                    if (runNumGen === 1) {
                        newPlayer.aggro -= 1    
                    }
                    else {
                        console.log("You fail to escape this time.")
                        console.log("")
                        let playerHit = Math.floor(Math.random() * bosslist[0].Damage + 1)
                        newPlayer.Hp -= playerHit
                        console.log(`${bosslist[0].Name} delivers a blow of (${playerHit})`)
                        console.log("")
                        console.log(`Your current HP is (${newPlayer.Hp})`)
                        console.log("___________________________________________________________>")
                    }
                }
                else if (choiceTwo == "s") {
                    console.log("")
                    console.log("HP:"+ " " + newPlayer.Hp)
                    console.log("Damage:"+ " " + newPlayer.Damage)
                    console.log("_____________________________>")
                }
                else {
                    console.log("")
                    console.log(`Try typing "a" or "r"`)
                    console.log("_____________________________>")
                }
                if (bosslist[0].Hp <= 0) {
                    console.log(`${bosslist[0].Name} has been SLAIN!`)
                    let bossOneDead = bosslist.splice(0, 1)
                    console.log(bosslist)
                    console.log("")
                    bossBoost()
                    newPlayer.aggro -= 1
                }
                }}
            else if (numGenTwo <= 76.56 && bosslist.length > 1) {
                while (newPlayer.aggro > 0 && newPlayer.Hp > 0) {
                    console.log("!!!A Boss has appeared!!!")
                    console.log("")    
                    console.log(`${bosslist[1].Name} is in your sight! What will it be?`)
                    console.log("")
                    console.log(bosslist[1])
                    console.log("")
                    console.log("Attack or Run?")
                    console.log("")
                    let choiceTwo = readline.keyIn("a, r or s - ")
                    if (choiceTwo == "a") {
                        let bossHit =  Math.floor(Math.random() * newPlayer.Damage + 1)
                        console.log("")
                        bosslist[1].Hp -= bossHit
                        console.log(`You STRIKE ${bosslist[1].Name} for (${bossHit})`)
                        console.log("")
                        let bossHitGen = Math.floor(Math.random() * 4 + 1)
                        if (bossHitGen === 2) {
                            let playerHit = Math.floor(Math.random() * bosslist[1].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[1].Name} returns a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                        }
                        console.log("___________________________________________________________>")    
                    }
                    else if (choiceTwo == "r") {
                        let runNumGen = Math.floor(Math.random() * 2 + 1)
                        if (runNumGen === 1) {
                            newPlayer.aggro -= 1    
                        }
                        else {
                            console.log("You fail to escape this time.")
                            console.log("")
                            let playerHit = Math.floor(Math.random() * bosslist[1].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[1].Name} delivers a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                            console.log("___________________________________________________________>")
                        }
                    }
                    else if (choiceTwo == "s") {
                        console.log("")
                        console.log("HP:"+ " " + newPlayer.Hp)
                        console.log("Damage:"+ " " + newPlayer.Damage)
                        console.log("_____________________________>")
                    }
                    else {
                        console.log("")
                        console.log(`Try typing "a" or "r"`)
                        console.log("_____________________________>")
                    }
                    if (bosslist[1].Hp <= 0) {
                        console.log(`${bosslist[1].Name} has been SLAIN!`)
                        let bossOneDead = bosslist.splice(1, 1)
                        console.log(bosslist)
                        console.log("")
                        bossBoost()
                        newPlayer.aggro -= 1
                    }
                }}
            else if (numGenTwo <= 89.065 && bosslist.length > 2) {
                while (newPlayer.aggro > 0 && newPlayer.Hp > 0) {
                    console.log("!!!A Boss has appeared!!!")
                    console.log("")    
                    console.log(`${bosslist[2].Name} is in your sight! What will it be?`)
                    console.log("")
                    console.log(bosslist[2])
                    console.log("")
                    console.log("Attack or Run?")
                    console.log("")
                    let choiceTwo = readline.keyIn("a, r or s - ")
                    if (choiceTwo == "a") {
                        let bossHit =  Math.floor(Math.random() * newPlayer.Damage + 1)
                        console.log("")
                        bosslist[2].Hp -= bossHit
                        console.log(`You STRIKE ${bosslist[2].Name} for (${bossHit})`)
                        console.log("")
                        let bossHitGen = Math.floor(Math.random() * 4 + 1)
                        if (bossHitGen === 2) {
                            let playerHit = Math.floor(Math.random() * bosslist[2].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[2].Name} returns a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                        }
                        console.log("___________________________________________________________>")    
                    }
                    else if (choiceTwo == "r") {
                        let runNumGen = Math.floor(Math.random() * 2 + 1)
                        if (runNumGen === 1) {
                            newPlayer.aggro -= 1    
                        }
                        else {
                            console.log("You fail to escape this time.")
                            console.log("")
                            let playerHit = Math.floor(Math.random() * bosslist[2].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[2].Name} delivers a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                            console.log("___________________________________________________________>")
                        }
                    }
                    else if (choiceTwo == "s") {
                        console.log("")
                        console.log("HP:"+ " " + newPlayer.Hp)
                        console.log("Damage:"+ " " + newPlayer.Damage)
                        console.log("_____________________________>")
                    }
                    else {
                        console.log("")
                        console.log(`Try typing "a" or "r"`)
                        console.log("_____________________________>")
                    }
                    if (bosslist[2].Hp <= 0) {
                        console.log(`${bosslist[2].Name} has been SLAIN!`)
                        let bossOneDead = bosslist.splice(2, 1)
                        console.log(bosslist)
                        console.log("")
                        bossBoost()
                        newPlayer.aggro -= 1
                    }
                }}
            else if (numGenTwo <= 95.315 && bosslist.length > 3) {
                while (newPlayer.aggro > 0 && newPlayer.Hp > 0) {
                    console.log("!!!A Boss has appeared!!!")
                    console.log("")    
                    console.log(`${bosslist[3].Name} is in your sight! What will it be?`)
                    console.log("")
                    console.log(bosslist[3])
                    console.log("")
                    console.log("Attack or Run?")
                    console.log("")
                    let choiceTwo = readline.keyIn("a, r or s - ")
                    if (choiceTwo == "a") {
                        let bossHit =  Math.floor(Math.random() * newPlayer.Damage + 1)
                        console.log("")
                        bosslist[3].Hp -= bossHit
                        console.log(`You STRIKE ${bosslist[3].Name} for (${bossHit})`)
                        console.log("")
                        let bossHitGen = Math.floor(Math.random() * 4 + 1)
                        if (bossHitGen === 2) {
                            let playerHit = Math.floor(Math.random() * bosslist[3].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[3].Name} returns a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                        }
                        console.log("___________________________________________________________>")    
                    }
                    else if (choiceTwo == "r") {
                        let runNumGen = Math.floor(Math.random() * 2 + 1)
                        if (runNumGen === 1) {
                            newPlayer.aggro -= 1    
                        }
                        else {
                            console.log("You fail to escape this time.")
                            console.log("")
                            let playerHit = Math.floor(Math.random() * bosslist[3].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[3].Name} delivers a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                            console.log("___________________________________________________________>")
                        }
                    }
                    else if (choiceTwo == "s") {
                        console.log("")
                        console.log("HP:"+ " " + newPlayer.Hp)
                        console.log("Damage:"+ " " + newPlayer.Damage)
                        console.log("_____________________________>")
                    }
                    else {
                        console.log("")
                        console.log(`Try typing "a" or "r"`)
                        console.log("_____________________________>")
                    }
                    if (bosslist[3].Hp <= 0) {
                        console.log(`${bosslist[3].Name} has been SLAIN!`)
                        let bossOneDead = bosslist.splice(3, 1)
                        console.log(bosslist)
                        console.log("")
                        bossBoost()
                        newPlayer.aggro -= 1
                    }
                }}
            else if (numGenTwo <= 98.435 && bosslist.length > 4) {
                while (newPlayer.aggro > 0 && newPlayer.Hp > 0) {
                    console.log("!!!A Boss has appeared!!!")
                    console.log("")    
                    console.log(`${bosslist[4].Name} is in your sight! What will it be?`)
                    console.log("")
                    console.log(bosslist[4])
                    console.log("")
                    console.log("Attack or Run?")
                    console.log("")
                    let choiceTwo = readline.keyIn("a, r or s - ")
                    if (choiceTwo == "a") {
                        let bossHit =  Math.floor(Math.random() * newPlayer.Damage + 1)
                        console.log("")
                        bosslist[4].Hp -= bossHit
                        console.log(`You STRIKE ${bosslist[4].Name} for (${bossHit})`)
                        console.log("")
                        let bossHitGen = Math.floor(Math.random() * 4 + 1)
                        if (bossHitGen === 2) {
                            let playerHit = Math.floor(Math.random() * bosslist[4].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[4].Name} returns a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                        }
                        console.log("___________________________________________________________>")    
                    }
                    else if (choiceTwo == "r") {
                        let runNumGen = Math.floor(Math.random() * 2 + 1)
                        if (runNumGen === 1) {
                            newPlayer.aggro -= 1    
                        }
                        else {
                            console.log("You fail to escape this time.")
                            console.log("")
                            let playerHit = Math.floor(Math.random() * bosslist[4].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[4].Name} delivers a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                            console.log("___________________________________________________________>")
                        }
                    }
                    else if (choiceTwo == "s") {
                        console.log("")
                        console.log("HP:"+ " " + newPlayer.Hp)
                        console.log("Damage:"+ " " + newPlayer.Damage)
                        console.log("_____________________________>")
                    }
                    else {
                        console.log("")
                        console.log(`Try typing "a" or "r"`)
                        console.log("_____________________________>")
                    }
                    if (bosslist[4].Hp <= 0) {
                        console.log(`${bosslist[4].Name} has been SLAIN!`)
                        let bossOneDead = bosslist.splice(4, 1)
                        console.log(bosslist)
                        console.log("")
                        bossBoost()
                        newPlayer.aggro -= 1
                    }
                }}
            else if (numGenTwo <= 100 && bosslist.length > 5) {
                while (newPlayer.aggro > 0 && newPlayer.Hp > 0) {
                    console.log("!!!A Boss has appeared!!!")
                    console.log("")    
                    console.log(`${bosslist[5].Name} is in your sight! What will it be?`)
                    console.log("")
                    console.log(bosslist[5])
                    console.log("")
                    console.log("Attack or Run?")
                    console.log("")
                    let choiceTwo = readline.keyIn("a, r or s - ")
                    if (choiceTwo == "a") {
                        let bossHit =  Math.floor(Math.random() * newPlayer.Damage + 1)
                        console.log("")
                        bosslist[5].Hp -= bossHit
                        console.log(`You STRIKE ${bosslist[5].Name} for (${bossHit})`)
                        console.log("")
                        let bossHitGen = Math.floor(Math.random() * 4 + 1)
                        if (bossHitGen === 2) {
                            let playerHit = Math.floor(Math.random() * bosslist[5].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[5].Name} returns a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                        }
                        console.log("___________________________________________________________>")    
                    }
                    else if (choiceTwo == "r") {
                        let runNumGen = Math.floor(Math.random() * 2 + 1)
                        if (runNumGen === 1) {
                            newPlayer.aggro -= 1    
                        }
                        else {
                            console.log("You fail to escape this time.")
                            console.log("")
                            let playerHit = Math.floor(Math.random() * bosslist[5].Damage + 1)
                            newPlayer.Hp -= playerHit
                            console.log(`${bosslist[5].Name} delivers a blow of (${playerHit})`)
                            console.log("")
                            console.log(`Your current HP is (${newPlayer.Hp})`)
                            console.log("___________________________________________________________>")
                        }
                    }
                    else if (choiceTwo == "s") {
                        console.log("")
                        console.log("HP:"+ " " + newPlayer.Hp)
                        console.log("Damage:"+ " " + newPlayer.Damage)
                        console.log("_____________________________>")
                    }
                    else {
                        console.log("")
                        console.log(`Try typing "a" or "r"`)
                        console.log("_____________________________>")
                    }
                    if (bosslist[5].Hp <= 0) {
                        console.log(`${bosslist[5].Name} has been SLAIN!`)
                        let bossOneDead = bosslist.splice(5, 1)
                        console.log(bosslist)
                        console.log("")
                        bossBoost()
                        newPlayer.aggro -= 1
                    }
                }}
        }
        distance.MilesTraveled += 1
        console.log("")
        console.log("Miles Travels:" + " " + distance.MilesTraveled)
        console.log("_____________________________>")
    } 
    else if (choiceOne == "s") {
        console.log("")
        console.log("HP:"+ " " + newPlayer.Hp)
        console.log("Damage:"+ " " + newPlayer.Damage)
        console.log("_____________________________>")
    }
    else {
        console.log("")
        console.log(`Try typing "w" or "s"`)
        console.log("_____________________________>")
    }
    console.log("")
    if (distance.MilesTraveled % 10 === 0 && choiceOne == "w") {
        let milesBoost = Math.floor(Math.random() * 3 + 1)
        newPlayer.Hp *= milesBoost
        newPlayer.Damage *= milesBoost
        console.log(`Boost: ${milesBoost} x Player stats`)
        console.log(newPlayer)
        console.log("_____________________________>")
        console.log("")
    }
    if (bosslist.length === 0) {
        distance.MilesTraveled += 100
    }
}
if (newPlayer.Hp <= 0) {
    console.log("You've died. Game Over.")
    console.log("")
}
else {
    console.log("WINNER WINNER CHICKEN DINNER")
    console.log("GG. Good game!")
    console.log("")
}
