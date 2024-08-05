// Question 83: Converting to Upper and Lower Case: 
// Create a function that takes a string, converts it to uppercase, 
// then to lowercase, and logs both.

import { log } from "console";

function convert(str: string) {
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();
    console.log(`UpperCase : ${upperCase}\nLowerCase : ${lowerCase}`);
};
convert("Umar Farooq")