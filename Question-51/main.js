"use strict";
// Question 51:* Refactoring to Arrow Functions: 
// Take a simple function that calculates the area of a rectangle and 
// refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
let areaOfReactangle = (length, width) => {
    return length * width;
};
console.log(`The Area Of Reactangle is ${areaOfReactangle(5, 9)}`);
