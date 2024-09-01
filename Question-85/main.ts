// Q-85 Make a Function which finds where "code" first shows up in a text

function find(str: string): number {
    return str.indexOf("code");
}

console.log("The index of code is: ",find("I am writing a code"));
