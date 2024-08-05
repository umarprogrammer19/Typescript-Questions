"use strict";
// Question 71: Compare let and const: 
// Create two examples where let allows reassignment but const does not. 
// Try to reassign a const-declared variable and catch the error.
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
const name = "Alice";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
