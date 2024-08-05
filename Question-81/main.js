"use strict";
// Question 81: Iterating Over Object Properties: 
// Write a function that takes an object as an argument and logs all of 
// its properties and values.
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
