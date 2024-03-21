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
const mole10 = document.querySelector(".mole10");
mole10.addEventListener("click", moleHole10);
//
const mole11 = document.querySelector(".mole11");
mole11.addEventListener("click", moleHole11);
//
const mole12 = document.querySelector(".mole12");
mole12.addEventListener("click", moleHole12);
//
const mole13 = document.querySelector(".mole13");
mole13.addEventListener("click", moleHole13);
//
const mole14 = document.querySelector(".mole14");
mole14.addEventListener("click", moleHole14);
//
const mole15 = document.querySelector(".mole15");
mole15.addEventListener("click", moleHole15);
//
const mole16 = document.querySelector(".mole16");
mole16.addEventListener("click", moleHole16);
// 
const mole17 = document.querySelector(".mole17");
mole17.addEventListener("click", moleHole17);
//
const mole18 = document.querySelector(".mole18");
mole18.addEventListener("click", moleHole18);
//
const mole19 = document.querySelector(".mole19");
mole19.addEventListener("click", moleHole19);
//
const mole20 = document.querySelector(".mole20");
mole20.addEventListener("click", moleHole20);
// 
const mole21 = document.querySelector(".mole21");
mole21.addEventListener("click", moleHole21);
//
const mole22 = document.querySelector(".mole22");
mole22.addEventListener("click", moleHole22);
//
const mole23 = document.querySelector(".mole23");
mole23.addEventListener("click", moleHole23);
//
const mole24 = document.querySelector(".mole24");
mole24.addEventListener("click", moleHole24);
//
const mole25 = document.querySelector(".mole25");
mole25.addEventListener("click", moleHole25);
// 
const goTo4 = document.querySelector(".goTo4");

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
  mole10.disabled = true;
  mole11.disabled = true;
  mole12.disabled = true;
  mole13.disabled = true;
  mole14.disabled = true;
  mole15.disabled = true;
  mole16.disabled = true;
  mole17.disabled = true;
  mole18.disabled = true;
  mole19.disabled = true;
  mole20.disabled = true;
  mole21.disabled = true;
  mole22.disabled = true;
  mole23.disabled = true;
  mole24.disabled = true;
  mole25.disabled = true;
  goTo4.disabled = true;
}
buttonDisabled();

// counter systeem
let counterDisplay = document.querySelector(".counter");
let credit = 26;
//
function updateDisplay() {
  counterDisplay.innerHTML = credit;
}

// math.random om een button undisabled te maken
function number() {
  let result = Math.floor(Math.random() * 25) + 1;
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
    case 10:
      mole10.disabled = false;
      break;
    case 11:
      mole11.disabled = false;
      break;
    case 12:
      mole12.disabled = false;
      break;
    case 13:
      mole13.disabled = false;
      break;
    case 14:
      mole14.disabled = false;
      break;
    case 15:
      mole15.disabled = false;
      break;
    case 16:
      mole16.disabled = false;
      break;
      case 17:
      mole17.disabled = false;
      break;
    case 18:
      mole18.disabled = false;
      break;
    case 19:
      mole19.disabled = false;
      break;
    case 20:
      mole20.disabled = false;
      break;
      case 21:
      mole21.disabled = false;
      break;
    case 22:
      mole22.disabled = false;
      break;
    case 23:
      mole23.disabled = false;
      break;
    case 24:
      mole24.disabled = false;
      break;
    case 25:
      mole25.disabled = false;
      break;
  }
  let result2 = Math.floor(Math.random() * 25) + 1;
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
    case 10:
      mole10.disabled = false;
      break;
    case 11:
      mole11.disabled = false;
      break;
    case 12:
      mole12.disabled = false;
      break;
    case 13:
      mole13.disabled = false;
      break;
    case 14:
      mole14.disabled = false;
      break;
    case 15:
      mole15.disabled = false;
      break;
    case 16:
      mole16.disabled = false;
      break;
      case 17:
      mole17.disabled = false;
      break;
    case 18:
      mole18.disabled = false;
      break;
    case 19:
      mole19.disabled = false;
      break;
    case 20:
      mole20.disabled = false;
      break;
      case 21:
      mole21.disabled = false;
      break;
    case 22:
      mole22.disabled = false;
      break;
    case 23:
      mole23.disabled = false;
      break;
    case 24:
      mole24.disabled = false;
      break;
    case 25:
      mole25.disabled = false;
      break;
  }
  let result3 = Math.floor(Math.random() * 25) + 1;
  switch (result3) {
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
    case 10:
      mole10.disabled = false;
      break;
    case 11:
      mole11.disabled = false;
      break;
    case 12:
      mole12.disabled = false;
      break;
    case 13:
      mole13.disabled = false;
      break;
    case 14:
      mole14.disabled = false;
      break;
    case 15:
      mole15.disabled = false;
      break;
    case 16:
      mole16.disabled = false;
      break;
      case 17:
      mole17.disabled = false;
      break;
    case 18:
      mole18.disabled = false;
      break;
    case 19:
      mole19.disabled = false;
      break;
    case 20:
      mole20.disabled = false;
      break;
      case 21:
      mole21.disabled = false;
      break;
    case 22:
      mole22.disabled = false;
      break;
    case 23:
      mole23.disabled = false;
      break;
    case 24:
      mole24.disabled = false;
      break;
    case 25:
      mole25.disabled = false;
      break;
  }
  console.log("result1=", result);
  console.log("result2=", result2);
  console.log("result3=", result3);
  if (credit >= 45) {
    goTo4.disabled = false;
  }
}
number();

// elke function met dat de score omhoog gaat
function moleHole1() {
  credit++;
  updateDisplay();
  number();
  mole1.disabled = true;
}
//
function moleHole2() {
  credit++;
  updateDisplay();
  number();
  mole2.disabled = true;
}
//
function moleHole3() {
  credit++;
  updateDisplay();
  number();
  mole3.disabled = true;
}
//
function moleHole4() {
  credit++;
  updateDisplay();
  number();
  mole4.disabled = true;
}
//
function moleHole5() {
  credit++;
  updateDisplay();
  number();
  mole5.disabled = true;
}
//
function moleHole6() {
  credit++;
  updateDisplay();
  number();
  mole6.disabled = true;
}
//
function moleHole7() {
  credit++;
  updateDisplay();
  number();
  mole7.disabled = true;
}
//
function moleHole8() {
  updateDisplay();
  number();
  mole8.disabled = true;
}
//
function moleHole9() {
  credit++;
  updateDisplay();
  number();
  mole9.disabled = true;
}
//
function moleHole10() {
  credit++;
  updateDisplay();
  number();
  mole10.disabled = true;
}
//
function moleHole11() {
  credit++;
  updateDisplay();
  number();
  mole11.disabled = true;
}
//
function moleHole12() {
  credit++;
  updateDisplay();
  number();
  mole12.disabled = true;
}
//
function moleHole13() {
  credit++;
  updateDisplay();
  number();
  mole13.disabled = true;
}
//
function moleHole14() {
  credit++;
  updateDisplay();
  number();
  mole14.disabled = true;
}
//
function moleHole15() {
  credit++;
  updateDisplay();
  number();
  mole15.disabled = true;
}
//
function moleHole16() {
  credit++;
  updateDisplay();
  number();
  mole16.disabled = true;
}
// 
function moleHole17() {
  credit++;
  updateDisplay();
  number();
  mole17.disabled = true;
}
//
function moleHole18() {
  updateDisplay();
  number();
  mole18.disabled = true;
}
//
function moleHole19() {
  credit++;
  updateDisplay();
  number();
  mole19.disabled = true;
}
//
function moleHole20() {
  credit++;
  updateDisplay();
  number();
  mole20.disabled = true;
}
//
function moleHole21() {
  credit++;
  updateDisplay();
  number();
  mole21.disabled = true;
}
//
function moleHole22() {
  credit++;
  updateDisplay();
  number();
  mole22.disabled = true;
}
//
function moleHole23() {
  credit++;
  updateDisplay();
  number();
  mole23.disabled = true;
}
//
function moleHole24() {
  credit++;
  updateDisplay();
  number();
  mole24.disabled = true;
}
//
function moleHole25() {
  credit++;
  updateDisplay();
  number();
  mole25.disabled = true;
}
