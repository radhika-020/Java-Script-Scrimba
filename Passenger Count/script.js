// var counter = document.getElementById("count").innerText=5 // using this innerText, value of count will change from 0 to 5.
// var myAge = 21
// console.log(myAge)

// function increment(){
//     console.log("The button was clicked.")
// }
let countEl = document.getElementById("count-el") // getting the element with id = count-el.
//consle.log(countEl) // will print <h2 id = "count"> in console.
let saveEl = document.getElementById("save-el")

let count = 0

// This function is made to everytime increse the counter by 1 whenever we click on the button.
function increment(){
    count = count+1
    countEl.textContent=count // changing the inerText==textContent of h2 element to the value of count.
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count = 0
}