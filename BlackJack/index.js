let firstCard = 20
let secondCard = 1
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)
// let sumEl = document.getElementById("sum-el") OR
let sumEl = document.querySelector("#sum-el")

function startGame(){
    sumEl.textContent = "Sum :" + sum
    if (sum <= 20){ // if(false)
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){ // if(true)
        message = "Wohoo! You've got a Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}