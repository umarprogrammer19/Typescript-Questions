// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.

// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know 
// I am sorry I can’t invite You to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

let guestArr: string[] = ["Anoosha", "Umar", "Ubaid", "Warisha", "Hamza", "Umaima"];
let message: string = "sorry You can’t invited to a dinner.";
while (guestArr.length > 2) {
    let removeGuest = guestArr.pop();
    console.log(`Dear ${removeGuest} ${message}`);
}

for (let val of guestArr) {
    console.log(`Dear ${val} You Are Still Invited To A Dinner.`);
}

guestArr.splice(0,2);
console.log(guestArr);
