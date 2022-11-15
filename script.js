let guest = document.getElementById("score-guest");
let home = document.getElementById("score-home");

let countGuest = 0;
let countHome = 0;

function num() {

    countGuest +=1
    guest.textContent= countGuest 
}
function num2() {
    countGuest +=2
    guest.textContent= countGuest 
}
function num3() {
    countGuest +=3
    guest.textContent= countGuest 
}

function numH() {
    countHome +=1
    home.textContent= countHome
}
function numH2() {
    countHome +=2
    home.textContent= countHome 
}
function numH3() {
    countHome +=3
    home.textContent= countHome
}
