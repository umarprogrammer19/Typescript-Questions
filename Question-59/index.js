"use strict";
// *Question 59:* Add a Special Number: Make a program that creates custom adders. 
// These adders can add a specific number to any other number you give them later.
function addSpecialNumber(specialNumber) {
    if (typeof specialNumber !== 'number') {
        throw new Error('Expected a number for the special number');
    }
    return (n) => {
        return n + specialNumber;
    };
}
const adderThatAdds5 = addSpecialNumber(5);
console.log(adderThatAdds5(3)); // Output: 8
