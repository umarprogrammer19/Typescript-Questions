// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of magicians' names
var magicins = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to add "Great" to each magician's name
function makeGreat(names) {
    var greatMagicians = [];
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        greatMagicians.push("Great " + name_1);
    }
    return greatMagicians;
}
// Function to show the list of magicians
function showMagicians(names) {
    for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
        var name_2 = names_2[_i];
        console.log(name_2);
    }
}
// Call makeGreat() with a copy of the original array
var greatMagicians = makeGreat(__spreadArray([], magicins, true));
// Call showMagicians() with both arrays
console.log("Original Magicians:");
showMagicians(magicins);
console.log("Great Magicians:");
showMagicians(greatMagicians);
