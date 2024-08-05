// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, 
// each with properties make, model, and year, use array destructuring to assign the
// first and second laptops to variables.Then, log these variables.

interface Laptop {
    make: string;
    model: string;
    year: number;
}

const laptops: Laptop[] = [
    { make: "Dell", model: "XPS 13", year: 2020 },
    { make: "Apple", model: "MacBook Pro", year: 2021 },
    { make: "Lenovo", model: "ThinkPad X1", year: 2019 }
];

const [firstLaptop, secondLaptop] = laptops.slice(0, 2);

console.log(firstLaptop);
console.log(secondLaptop);