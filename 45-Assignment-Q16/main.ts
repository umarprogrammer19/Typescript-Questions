// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your 
// bigger dinner table. program informing people that you found a

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guestArr: string[] = ["Ubaid", "Warisha", "Shahnawaz", "Umar", "Anoosha"];
let cannotAttend: string = "Shahnawaz";
let newGuest: string = "Umaima";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
// • Add one new guest to the beginning of your array.
let beginningGuest: string = "Touqeer";
guestArr.unshift(beginningGuest);
// • Add one new guest to the middle of your array.
let middleGuest: string = "Hamza";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// • Use append() to add one new guest to the end of your list.
let lastGuest: string = "Ayesha";
guestArr.push(lastGuest);
// • Print a new set of invitation messages, one for each person in your list.
let message: string = "You Are Invited For Special Dinner At Special Place On Special Day"
for (let val of guestArr) {
    console.log(`Dear ${val} ${message}`);
}
