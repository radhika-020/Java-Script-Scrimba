let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// console.log(messageEl)
// let sumEl = document.getElementById("sum-el") OR
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards :" + " " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum :" + " " + sum
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

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    renderGame()
    
}