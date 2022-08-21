// function saveInput(){
//     console.log("button Clicked!")
// }

// This can be done using addEventListener.
let myLeads = [] 
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myName", "Radhika Arora")

// localStorage.getItem("myName")

// localStorage.clear()


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

// function renderLeads(){
// for(let i =0; i<myLeads.length; i++){
//     // ulEl.innerHtml += "<li>" + myLeads[i] + "</li>"
//     // Create an element
//     // set the Text Content
//     // Append to UL element
//     const li = document.createElement("li")
//     li.textContent=myLeads[i]
//     ulEl.append(li)
//     }}

function renderLeads(){
    let listItems =  ""
    for(i=0; i<myLeads.length; i++){
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target = '_blank' href = '${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}