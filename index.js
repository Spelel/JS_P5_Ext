// function btnClic() {
//     console.log("Button Click")
// }

//------------------------------------------------------------------

// let boxInp = document.getElementById("box")

// boxInp.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })

//------------------------------------------------------------------
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const ledasdFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (ledasdFromLocalStorage) {
    myLeads = ledasdFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for ( i= 0 ; i < leads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
    
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
            </a>
        </li>
        `
    
        }
    ulEl.innerHTML = listItems 
    }

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    

    console.log( localStorage.getItem("myLeads"))
})


