// Generate Random Number Between 1 - 100;
function randomNumber(): number {
    const random = Math.floor(Math.random() * 100 + 1);
    return random;
}
console.log(randomNumber());
