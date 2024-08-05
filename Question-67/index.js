"use strict";
// Question 67: Arithmetic with Mixed Types:
// Write a function that takes two parameters:
// a number and a string that represents a number (e.g., "5").
// Return their sum as a number. 
Object.defineProperty(exports, "__esModule", { value: true });
function arithmeticMixedType(value1, value2) {
    return value1 + Number(value2);
}
const result = arithmeticMixedType(5, "10");
console.log(result);
