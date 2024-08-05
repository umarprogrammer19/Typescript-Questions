"use strict";
// *Question 56:* Keep Only Strings: Given a mix of different types of items,
// make a new list that has only the words.
let mixedArray = [1, "banana", 2, 3, "apple", 4, "mango", "orange", 5];
let stringArray = mixedArray.filter(val => typeof val === "string");
console.log(stringArray);
