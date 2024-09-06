"use strict";
// make function which removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop();
}
const fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
