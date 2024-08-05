// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// bigger dinner table. program informing people that you found a
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Ubaid", "Warisha", "Shahnawaz", "Umar", "Anoosha"];
var cannotAttend = "Shahnawaz";
var newGuest = "Umaima";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
// • Add one new guest to the beginning of your array.
var beginningGuest = "Touqeer";
guestArr.unshift(beginningGuest);
// • Add one new guest to the middle of your array.
var middleGuest = "Hamza";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// • Use append() to add one new guest to the end of your list.
var lastGuest = "Ayesha";
guestArr.push(lastGuest);
// • Print a new set of invitation messages, one for each person in your list.
var message = "You Are Invited For Special Dinner At Special Place On Special Day";
for (var _i = 0, guestArr_1 = guestArr; _i < guestArr_1.length; _i++) {
    var val = guestArr_1[_i];
    console.log("Dear ".concat(val, " ").concat(message));
}
