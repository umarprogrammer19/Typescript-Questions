// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

// Define an array of magicians' names
let magicins: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to add "Great" to each magician's name
function makeGreat(names: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let name of names) {
    greatMagicians.push("Great " + name);
  }
  return greatMagicians;
}

// Function to show the list of magicians
function showMagicians(names: string[]): void {
  for (let name of names) {
    console.log(name);
  }
}

// Call makeGreat() with a copy of the original array
let greatMagicians = makeGreat([...magicins]);

// Call showMagicians() with both arrays
console.log("Original Magicians:");
showMagicians(magicins);
console.log("Great Magicians:");
showMagicians(greatMagicians);