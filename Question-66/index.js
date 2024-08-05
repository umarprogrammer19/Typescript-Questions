"use strict";
// Question 66: Logical AND Verification:
// Create a function that checks two boolean (true or false) values.
// It should only say true if both are true, using the && operator.
// For instance, checkBothTrue(true, false) should be false.
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
// Test the function
const result = checkBothTrue(true, false);
console.log(`Result: ${result}`); // Output: false
