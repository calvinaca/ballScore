let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-scs").textContent= homeScore;
let guestEl = document.getElementById("guest-scs").textContent = guestScore;

function plus1() {
 homeScore += 1;
  homeEl = homeScore;
}

// console.log(homeEl);
// console.log(guestEl);