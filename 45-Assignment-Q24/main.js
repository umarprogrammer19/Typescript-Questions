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
var str1 = "Hello";
var str2 = "Hello";
console.log(str1 === str2); // True
console.log(str1 !== str2); // false
// • Tests using the lower case function
var str3 = "HELLO";
console.log(str3.toLowerCase() !== str3); // true
console.log(str3.toLowerCase() === str3); // false
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to.
var num1 = 10;
var num2 = 15;
console.log(num1 !== num2); // true
console.log(num1 === num2); // false
console.log(num1 < num2); // true
console.log(num1 > num2); // false
console.log(num1 <= num2); // true
console.log(num1 >= num2); // false
// • Tests using "and" and "or" operators
var x = 15;
var y = 20;
// &&
console.log(x > 0 && y <= 20); // true
console.log(x > 0 && y < 0); // false
// ||
console.log(x > 0 || y <= 20); // true
console.log(x < 0 || y < 0); // false
// • Test whether an item is in a array
var arr = [1, 2, 3, 4, 5];
var checkItem = 3;
console.log(arr.includes(checkItem)); // true
// • Test whether an item is not in a array
var arr2 = [1, 2, 3, 4, 5];
var checkItem2 = 6;
console.log(arr.includes(checkItem2)); // true
