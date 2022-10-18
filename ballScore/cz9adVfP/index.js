let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-scs");
let guestEl = document.getElementById("guest-scs");

function homePlus1() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}
function homePlus2() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}
function homePlus3() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}
function guestPlus1() {
  guestScore += 1;
  guestEl.textContent = guestScore;
}
function guestPlus2() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}
function guestPlus3() {
  guestScore += 3;
  guestEl.textContent = guestScore;
}

