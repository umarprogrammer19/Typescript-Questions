// Question 84: Replacing Text in a String: 
// Write a function that takes a sentence and replaces all instances of the word 
// "JavaScript" with "TypeScript".

function replace(str: string){
    return str.replace(/Javascript/g , "Typescript")
};
console.log(replace("I Love Javascript , Javascript is Great"));