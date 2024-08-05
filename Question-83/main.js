"use strict";
// Question 83: Converting to Upper and Lower Case: 
// Create a function that takes a string, converts it to uppercase, 
// then to lowercase, and logs both.
Object.defineProperty(exports, "__esModule", { value: true });
function convert(str) {
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();
    console.log(`UpperCase : ${upperCase}\nLowerCase : ${lowerCase}`);
}
;
convert("Umar Farooq");
