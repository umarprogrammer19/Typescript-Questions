// Question 65: Determine the Remainder: 
// Make a function that gets two numbers and shows the leftover 
// from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function remainder(num1: number, num2: number): number {
    return num1 % num2;
}

// Test the function

const result = remainder(5, 2);
console.log(`The remainder of 5 divided by 2 is: ${result}`);