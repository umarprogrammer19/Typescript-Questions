"use strict";
// Question 64: Combine Strings and Numbers:
// Write a function that merges a piece of text with a number.
// For example, if provided with "Age: " and 30, it should give back "Age: 30".
function combineTextAndNumber(text, number) {
    return text + number.toString();
}
// Example usage
const result = combineTextAndNumber("Age: ", 30);
console.log(result); // Output: "Age: 30"
