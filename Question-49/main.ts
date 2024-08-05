// *Question 49:* Function with Rest Parameters: 
// Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.

function enjoyHobbies(...hobbies: string[]): void {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}
enjoyHobbies("Gaming","Coding","Helping");