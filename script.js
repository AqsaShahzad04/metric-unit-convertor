const inputEl = document.getElementById('input-el');
const metFet = document.getElementById('met-fet');
const litGal = document.getElementById('lit-gal');
const kilPou = document.getElementById('kil-pou');
const btn = document.getElementById('btn');
// // Meter ↔ Feet
// metersToFeet = meters => meters * 3.28084;
// feetToMeters = feet => feet * 0.3048;

// // Liter ↔ Gallon (US)
// litersToGallons = liters => liters * 0.264172;
// gallonsToLiters = gallons => gallons * 3.78541;

// // Kilogram ↔ Pound
// kgToPounds = kg => kg * 2.20462;
// poundsToKg = pounds => pounds * 0.453592;



// 1 meter = 3.28084 feet
// 1 foot = 0.3048 meters
let meterToFeet = 1;
let feetToMeter = 1;
let litersToGalon = 1;
let galonToLiters = 1;
let kilogramToPound = 1;
let poundToKilogram = 1;
btn.addEventListener('click', () => {
    let userInput = Number(inputEl.value);
    meterToFeet = (userInput * 3.28084).toFixed(3);
    feetToMeter = (userInput / 3.28084).toFixed(3);
    litersToGalon = (userInput * 0.264172).toFixed(3);
    galonToLiters = (userInput * 3.78541).toFixed(3);
    kilogramToPound = (userInput * 2.20462).toFixed(3);
    poundToKilogram = (userInput / 2.20462).toFixed(3);
    inputEl.value = '';
    renderResult(userInput)
})
// 20 meters =61.6 feet | 20 feet=6.096 meters
function renderResult(userInput) {
    metFet.innerHTML = `${userInput} meters = ${meterToFeet} feet | ${userInput} feet =${feetToMeter} meter`;
    litGal.innerHTML = `${userInput} liters = ${litersToGalon} gallons | ${userInput} gallons =${galonToLiters} liters`;
    kilPou.innerHTML=`${userInput} kilograms = ${kilogramToPound} pounds | ${userInput} pounds =${poundToKilogram} kilograms`;
}