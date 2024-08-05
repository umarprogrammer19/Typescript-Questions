"use strict";
// Question 77: Default Parameters: Write a function that greets a user. 
// It should take the user's name as a parameter and say hello. 
// If no name is given, it should greet an anonymous user.
function greetUser(name = "anonymous") {
    // Says hello to the given name or to an anonymous user
    console.log(`Hello, ${name}!`);
}
greetUser("Alice"); // Outputs: Hello, Alice!
greetUser();
