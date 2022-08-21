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


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
    leads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)
    // Grab the URL of the curent tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

function render(leads){
    let listItems =  ""
    for(i=0; i<leads.length; i++){
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target = '_blank' href = '${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
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

