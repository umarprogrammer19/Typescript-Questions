"use strict";
// Make dunction which return the sum of all the number in an array
function calculateSum(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
}
console.log("The Sum Of All The Number is: ", calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // The Sum Of All The Number is: 55
