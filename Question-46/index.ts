// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, 
// model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function() {
        console.log(`This laptop is a ${laptop.year} ${laptop.make} ${laptop.model}.`);
    }
};
laptop.describe();