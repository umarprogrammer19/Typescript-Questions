// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// • Tests for equality and inequality with strings

let str1: string = "Hello";
let str2: string = "Hello";
console.log(str1 === str2); // True
console.log(str1 !== str2); // false

// • Tests using the lower case function

let str3: string = "HELLO";
console.log(str3.toLowerCase() !== str3); // true
console.log(str3.toLowerCase() === str3); // false

// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to.

let num1: number = 10;
let num2: number = 15;
console.log(num1 !== num2); // true
console.log(num1 === num2); // false
console.log(num1 < num2); // true
console.log(num1 > num2); // false
console.log(num1 <= num2); // true
console.log(num1 >= num2); // false

// • Tests using "and" and "or" operators

let x: number = 15;
let y: number = 20;

// &&
console.log(x > 0 && y <= 20); // true
console.log(x > 0 && y < 0); // false

// ||
console.log(x > 0 || y <= 20); // true
console.log(x < 0 || y < 0); // false

// • Test whether an item is in a array

let arr: number[] = [1, 2, 3, 4, 5];
let checkItem: number = 3;
console.log(arr.includes(checkItem)); // true

// • Test whether an item is not in a array

let arr2: number[] = [1, 2, 3, 4, 5];
let checkItem2: number = 6;
console.log(arr.includes(checkItem2)); // true
