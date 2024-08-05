"use strict";
// *Question 60:* Self-Running User Profile: Create a quick, 
// self-setup profile for a user that can tell you the user's name and age.
function promptUser() {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question('What is your name? ', (name) => {
            readline.question('What is your age? ', (age) => {
                readline.close();
                const parsedAge = parseInt(age);
                if (isNaN(parsedAge) || parsedAge < 1) {
                    console.error('Invalid age entered. Please enter a valid age.');
                    process.exit(1);
                }
                resolve({ name, age: parsedAge });
            });
        });
    });
}
promptUser().then(({ name, age }) => {
    console.log(`Hi, ${name}! You are ${age} years old.`);
});
