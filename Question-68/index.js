"use strict";
// Question 68: Multiplying Decimals: 
// Create a function that accepts two decimal numbers and returns their product. 
// Round the result to two decimal places.
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
const result = multiplyDecimals(0.1, 0.2);
console.log(result);
