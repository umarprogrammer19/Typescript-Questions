"use strict";
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals = ["dog", "cat", "rabbit"];
animals.forEach((str) => {
    console.log(str);
    if (str === "dog") {
        console.log("A dog would make a great pet.");
    }
    else if (str === "cat") {
        console.log("A cat would be a wonderful companion.");
    }
    else if (str === "rabbit") {
        console.log("A rabbit can bring joy to your home.");
    }
});
console.log("Any of these animals would make a great pet!");
