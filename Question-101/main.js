"use strict";
// Generate Random Number Between 1 - 100;
function randomNumber() {
    const random = Math.floor(Math.random() * 100 + 1);
    return random;
}
console.log(randomNumber());
