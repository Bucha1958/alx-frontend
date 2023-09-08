import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-6f683-default-rtdb.asia-southeast1.firebasedatabase.app/"

}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const ulTag = document.querySelector(".ulEl")

onValue(shoppingListInDB, function(snapshot) {

    if (snapshot.exists()) {
        let addToCart = Object.entries(snapshot.val())
        
        clearShoppingListEl()
        
        for (let i = 0; i < addToCart.length; i++) {
            let currentCat = addToCart[i]
            let itemID = addToCart[0]
            let itemValue = addToCart[1]
            render(currentCat)
        }
    } else {
        ulTag.innerHTML = "no item exists yet..."
    }
})

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppingListInDB, inputValue)
    
    clearInputField()
    
})

function clearInputField() {
    inputFieldEl.value = ""
}

function clearShoppingListEl() {
    ulTag.innerHTML = ""
}

function render(shopValue) {
    let itemID = shopValue[0]
    let itemValue = shopValue[1]
    let li = document.createElement("li")

    li.textContent = itemValue

    ulTag.append(li)

    li.addEventListener("dblclick", function() {
        let exactLocationInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationInDB)
    })
}