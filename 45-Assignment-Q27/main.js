// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed
// for the appropriate color alien.
var alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("player earned 5 points.");
}
else if (alienColor1 === "red") {
    console.log("player earned 10 points.");
}
else {
    console.log("player earned 15 points.");
}
alienColor1 = "red";
if (alienColor1 === "green") {
    console.log("player earned 5 points.");
}
else if (alienColor1 === "red") {
    console.log("player earned 10 points.");
}
else {
    console.log("player earned 15 points.");
}
alienColor1 = "yellow";
if (alienColor1 === "green") {
    console.log("player earned 5 points.");
}
else if (alienColor1 === "red") {
    console.log("player earned 10 points.");
}
else {
    console.log("player earned 15 points.");
}
