let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// console.log(messageEl)
// let sumEl = document.getElementById("sum-el") OR
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
    // renderGame()
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function getRandomCard(){
    // Math.floor gives us positive valuex without decimal values.
    // math.random gives values betweeen 0.000 to 0.999...
    // To return a range between 1 to 6, 
    // let randomNumber = Math.floor(Math.random() * 6) + 1
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function renderGame(){
    cardsEl.textContent = "Cards :" 
    for (let i =0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    
}