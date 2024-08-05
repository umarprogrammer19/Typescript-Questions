// Question 78: Function Expressions vs. Function Declarations: 
// Compare function expressions and declarations by creating one of each 
// that performs the same task, such as squaring a number.

function squareDeclaration(number: number): number {
    return number * number;
}
// Function expression for squaring a number
const squareExpression = function(number: number): number {
    return number * number;
};
console.log(squareDeclaration(4)); // Outputs: 16
console.log(squareExpression(4)); // Outputs: 16