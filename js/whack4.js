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
const mole26 = document.querySelector(".mole26");
mole26.addEventListener("click", moleHole26);
//
const mole27 = document.querySelector(".mole27");
mole27.addEventListener("click", moleHole27);
//
const mole28 = document.querySelector(".mole28");
mole28.addEventListener("click", moleHole28);
//
const mole29 = document.querySelector(".mole29");
mole29.addEventListener("click", moleHole29);
//
const mole30 = document.querySelector(".mole30");
mole30.addEventListener("click", moleHole30);
//
const mole31 = document.querySelector(".mole31");
mole31.addEventListener("click", moleHole31);
//
const mole32 = document.querySelector(".mole32");
mole32.addEventListener("click", moleHole32);
//
const mole33 = document.querySelector(".mole33");
mole33.addEventListener("click", moleHole33);
//
const mole34 = document.querySelector(".mole34");
mole34.addEventListener("click", moleHole34);
//
const mole35 = document.querySelector(".mole35");
mole35.addEventListener("click", moleHole35);
//
const mole36 = document.querySelector(".mole36");
mole36.addEventListener("click", moleHole36);
// 
const goTo1 = document.querySelector(".goTo1");


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
  mole26.disabled = true;
  mole27.disabled = true;
  mole28.disabled = true;
  mole29.disabled = true;
  mole30.disabled = true;
  mole31.disabled = true;
  mole32.disabled = true;
  mole33.disabled = true;
  mole34.disabled = true;
  mole36.disabled = true;
  goTo1.disabled = true;
}
buttonDisabled();

// counter systeem
let counterDisplay = document.querySelector(".counter");
let credit = 46;
//
function updateDisplay() {
  counterDisplay.innerHTML = credit;
}

// math.random om een button undisabled te maken
function number() {
  let result = Math.floor(Math.random() * 36) + 1;
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
    case 26:
      mole26.disabled = false;
      break;
    case 27:
      mole27.disabled = false;
      break;
    case 28:
      mole28.disabled = false;
      break;
    case 29:
      mole29.disabled = false;
      break;
    case 30:
      mole30.disabled = false;
      break;
    case 31:
      mole31.disabled = false;
      break;
    case 32:
      mole32.disabled = false;
      break;
    case 33:
      mole33.disabled = false;
      break;
    case 34:
      mole34.disabled = false;
      break;
    case 35:
      mole35.disabled = false;
      break;
    case 36:
      mole36.disabled = false;
      break;
  }
  let result2 = Math.floor(Math.random() * 36) + 1;
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
    case 26:
      mole26.disabled = false;
      break;
    case 27:
      mole27.disabled = false;
      break;
    case 28:
      mole28.disabled = false;
      break;
    case 29:
      mole29.disabled = false;
      break;
    case 30:
      mole30.disabled = false;
      break;
    case 31:
      mole31.disabled = false;
      break;
    case 32:
      mole32.disabled = false;
      break;
    case 33:
      mole33.disabled = false;
      break;
    case 34:
      mole34.disabled = false;
      break;
    case 35:
      mole35.disabled = false;
      break;
    case 36:
      mole36.disabled = false;
      break;
  }
  let result3 = Math.floor(Math.random() * 36) + 1;
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
    case 26:
      mole26.disabled = false;
      break;
    case 27:
      mole27.disabled = false;
      break;
    case 28:
      mole28.disabled = false;
      break;
    case 29:
      mole29.disabled = false;
      break;
    case 30:
      mole30.disabled = false;
      break;
    case 31:
      mole31.disabled = false;
      break;
    case 32:
      mole32.disabled = false;
      break;
    case 33:
      mole33.disabled = false;
      break;
    case 34:
      mole34.disabled = false;
      break;
    case 35:
      mole35.disabled = false;
      break;
    case 36:
      mole36.disabled = false;
      break;
  }
  console.log("result1=", result);
  console.log("result2=", result2);
  console.log("result3=", result3);
  const p1 = document.querySelector(".p1").innerHTML = "JE HEBT 60 PUNTEN GEHAALD \n SPEEL OPNIEUW DOOR HIER OP TE CLICKEN"
  if (credit >= 60) {
    Swal.fire({
      title: "je hebt gewonnen!",
      timer: 10000,
      timerProgressBar: true,
      width: "600px",
      icon: 'success',
    });
    goTo1.disabled = false;
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
// 
function moleHole26() {
  credit++;
  updateDisplay();
  number();
  mole26.disabled = true;
}
//
function moleHole27() {
  credit++;
  updateDisplay();
  number();
  mole27.disabled = true;
}
//
function moleHole28() {
  credit++;
  updateDisplay();
  number();
  mole28.disabled = true;
}
//
function moleHole29() {
  credit++;
  updateDisplay();
  number();
  mole29.disabled = true;
}
//
function moleHole30() {
  credit++;
  updateDisplay();
  number();
  mole30.disabled = true;
}
//
function moleHole31() {
  credit++;
  updateDisplay();
  number();
  mole31.disabled = true;
}
//
function moleHole32() {
  credit++;
  updateDisplay();
  number();
  mole32.disabled = true;
}
//
function moleHole33() {
  updateDisplay();
  number();
  mole33.disabled = true;
}
//
function moleHole34() {
  credit++;
  updateDisplay();
  number();
  mole34.disabled = true;
}
//
function moleHole35() {
  credit++;
  updateDisplay();
  number();
  mole35.disabled = true;
}
//
function moleHole36() {
  credit++;
  updateDisplay();
  number();
  mole36.disabled = true;
}