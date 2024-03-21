// veld dat min punten geeft
const minusPoint = document.querySelector(".minusPoint");
minusPoint.addEventListener("click", minPoint);

function minPoint() {
    credit--;
    updateDisplay();
}

// selecteert elke button in de index
const mole1 = document.querySelector(".mole1");
mole1.addEventListener("click", moleHole1);
// 
const mole2 = document.querySelector(".mole2");
mole2.addEventListener("click", moleHole2);
// 
const mole3 = document.querySelector(".mole3");
mole3.addEventListener("click", moleHole3);
// 
const mole4 = document.querySelector(".mole4");
mole4.addEventListener("click", moleHole4);
// 
const mole5 = document.querySelector(".mole5");
mole5.addEventListener("click", moleHole5);
// 
const mole6 = document.querySelector(".mole6");
mole6.addEventListener("click", moleHole6);
// 
const mole7 = document.querySelector(".mole7");
mole7.addEventListener("click", moleHole7);
// 
const mole8 = document.querySelector(".mole8");
mole8.addEventListener("click", moleHole8);
// 
const mole9 = document.querySelector(".mole9");
mole9.addEventListener("click", moleHole9);
// 
const goTo2 = document.querySelector(".goTo2");

// disabled elke button op het begin
function buttonDisabled() {
    mole1.disabled = true;
    mole2.disabled = true;
    mole3.disabled = true;
    mole4.disabled = true;
    mole5.disabled = true;
    mole6.disabled = true;
    mole7.disabled = true;
    mole8.disabled = true;
    mole9.disabled = true;
    goTo2.disabled = true;

}
buttonDisabled()

// counter systeem
let counterDisplay = document.querySelector(".counter");
let credit = 0;
// 
function updateDisplay() {
        counterDisplay.innerHTML = credit;
}

// dit is de start button
const startButton = document.querySelector(".startButton");
startButton.addEventListener("click", start);

function start(button) {
    button.target.remove();
}

// math.random om een button undisabled te maken
function number() {
    let result = Math.floor(Math.random() * 9) + 1;
    switch (result) {
        case 1:
            mole1.disabled = false;
            break;
        case 2:
            mole2.disabled = false;
            break;
        case 3:
            mole3.disabled = false;
            break;
        case 4:
            mole4.disabled = false;
            break;
        case 5:
            mole5.disabled = false;
            break;
        case 6:
            mole6.disabled = false;
            break;
        case 7:
            mole7.disabled = false;
            break;
        case 8:
            mole8.disabled = false;
            break;
        case 9:
            mole9.disabled = false;
            break;
    }
    let result2 = Math.floor(Math.random() * 9) + 1;
    switch (result2) {
        case 1:
            mole1.disabled = false;
            break;
        case 2:
            mole2.disabled = false;
            break;
        case 3:
            mole3.disabled = false;
            break;
        case 4:
            mole4.disabled = false;
            break;
        case 5:
            mole5.disabled = false;
            break;
        case 6:
            mole6.disabled = false;
            break;
        case 7:
            mole7.disabled = false;
            break;
        case 8:
            mole8.disabled = false;
            break;
        case 9:
            mole9.disabled = false;
            break;
    }
    console.log("result1=", result);
    console.log("result2=", result2);
    if (credit >= 10) {
        goTo2.disabled = false;
    }
}
number()

// elke function met dat de score omhoog gaat
function moleHole1() {
    credit++;
    updateDisplay();
    number()
    mole1.disabled = true;
}
// 
function moleHole2() {
    credit++;
    updateDisplay();
    number()
    mole2.disabled = true;
}
// 
function moleHole3() {
    credit++;
    updateDisplay();
    number()
    mole3.disabled = true;
}
// 
function moleHole4() {
    credit++;
    updateDisplay();
    number()
    mole4.disabled = true;
}
// 
function moleHole5() {
    credit++;
    updateDisplay();
    number()
    mole5.disabled = true;
}
// 
function moleHole6() {
    credit++;
    updateDisplay();
    number()
    mole6.disabled = true;
}
// 
function moleHole7() {
    credit++;
    updateDisplay();
    number()
    mole7.disabled = true;
}
// 
function moleHole8() {
    credit++;
    updateDisplay();
    number()
    mole8.disabled = true;
}
// 
function moleHole9() {
    credit++;
    updateDisplay();
    number()
    mole9.disabled = true;
}