"use strict";
// Question 69: Dividing and Finding the Remainder: 
// Write a function that divides two numbers and returns both the quotient 
// and the remainder. Use an object to return both values.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
