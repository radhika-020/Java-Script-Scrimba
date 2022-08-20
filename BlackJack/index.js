let firstCard = 20
let secondCard = 0
hasBlackJack = false

let sum = firstCard + secondCard
console.log(sum)

if (sum < 21){ // if(false)
    console.log("Do you want to draw a new card?")
}
else if (sum === 21){ // if(true)
    console.log("You've got a Blackjack!")
    hasBlackJack = true
}
else {
    console.log("You're out of the game!")
}
console.log(hasBlackJack)