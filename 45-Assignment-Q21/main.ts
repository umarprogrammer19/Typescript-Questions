// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

type person = {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    contact: number,
}
let user: person = {
    firstName: "Umar Farooq",
    lastName: "Farooq Jamal",
    age: 16,
    email: "uhhfj0345@gmail.com",
    contact: 923172472531
}
console.log(user);
