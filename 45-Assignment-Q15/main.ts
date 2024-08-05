// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

let guestArr: string[] = ["Ubaid", "Warisha", "Shahnawaz", "Umar", "Anoosha"];
let cannotAttend: string = "Shahnawaz";
console.log(`${cannotAttend} cannot make it, for Dinner`);

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

let newGuest: string = "Hamza";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;

// • Print a second set of invitation messages, one for each person who is still
// in your list.

let message: string = "You Are invited to a Special Dinner";
for (let val of guestArr){
    console.log(`Dear ${val} ${message}`);
}