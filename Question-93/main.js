"use strict";
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBanana(fruits) {
    const index = fruits.indexOf("Banana");
    index !== -1 ? fruits[index] = "Mango" : null;
}
const fruits = ["Apple", "Banana", "Cherry"];
replaceBanana(fruits);
console.log(fruits);
