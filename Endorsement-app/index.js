import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://endorsement-cf37b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementDB = ref(database, "endorsement")
const inputEl = document.getElementById("input")
const addButtonEl = document.getElementById("btn")
const ulTag = document.querySelector(".ulEl")

onValue(endorsementDB, function(snapshot) {
    if (snapshot.exists()) {
        let endorseList = Object.entries(snapshot.val())
        
        clearChatList()
        
        for (let i = 0; i < endorseList.length; i++) {
            let current = endorseList[i]
            let itemID = endorseList[0]
            let itemValue = endorseList[1]
            render(current)
        }

    } else {
        ulTag.innerHTML = "<li>Endorsement needed...</li>"
    }
})

addButtonEl.addEventListener("click", function() {
    let inputValue = inputEl.value
    
    if (inputValue !== "") {
        push(endorsementDB, inputValue)

        clearInputField()
    }
    
})

function clearInputField() {
    inputEl.value = ""
}

function clearChatList() {
    ulTag.innerHTML = ""
}

function render(shopValue) {
    let itemID = shopValue[0]
    let itemValue = shopValue[1]
    let li = document.createElement("li")

    li.textContent = itemValue

    ulTag.append(li)

    li.addEventListener("dblclick", function() {
        let exactLocationInDB = ref(database, `endorsement/${itemID}`)
        remove(exactLocationInDB)
    })
}