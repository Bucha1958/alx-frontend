let container = document.querySelector(".sub-container")

let meter = document.getElementById("meter")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let input = document.getElementById("input-text")
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    let inputEl = input.value
    meter.innerHTML = `
                        <p id="meter">${inputEl} meters = ${meterToFeet(inputEl)} 
                            feet | ${inputEl} feet = ${feetToMeter(inputEl)} meters
                        </p>`
    
    volume.innerHTML = `
                        <p id="volume">${inputEl} liters = ${volumeToLiter(inputEl)} 
                            gallons | ${inputEl} gallons = ${literToVolume(inputEl)} liters
                        </p>`

    mass.innerHTML = `
                        <p id="mass">${inputEl} kilos = ${massToPound(inputEl)} 
                            pounds | ${inputEl} pounds = ${poundToMass(inputEl)} kilos
                        </p>`

})

meter.innerHTML = `
                    <p id="meter">${0} meters = ${0} 
                        feet | ${0} feet = ${0} meters
                    </p>`
    
volume.innerHTML = `
                        <p id="volume">${0} liters = ${0} 
                            gallons | ${0} gallons = ${0} liters
                        </p>`

mass.innerHTML = `
                        <p id="mass">${0} kilos = ${0} 
                            pounds | ${0} pounds = ${0} kilos
                        </p>`


function meterToFeet(meters) {
    const feet = meters * 3.28084;
    return feet.toFixed(3)
}

function feetToMeter(feet) {
    const meter = feet *  0.3048
    return meter.toFixed(3)
}

function volumeToLiter(volume) {
    const liters = volume *  0.264
    return liters.toFixed(3)
}

function literToVolume(liter) {
    const cubicMeters = liter / 1000
    cubicMeters.toFixed(3)
    return cubicMeters;
}

function massToPound(mass) {
    const pounds = mass * 2.204
    return pounds.toFixed(3)
}

function poundToMass(pound) {
    const kilograms = pound * 0.453592
    return kilograms.toFixed(3);
}
