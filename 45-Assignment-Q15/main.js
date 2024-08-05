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
var guestArr = ["Ubaid", "Warisha", "Shahnawaz", "Umar", "Anoosha"];
var cannotAttend = "Shahnawaz";
console.log("".concat(cannotAttend, " cannot make it, for Dinner"));
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
var newGuest = "Hamza";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
// • Print a second set of invitation messages, one for each person who is still
// in your list.
var message = "You Are invited to a Special Dinner";
for (var _i = 0, guestArr_1 = guestArr; _i < guestArr_1.length; _i++) {
    var val = guestArr_1[_i];
    console.log("Dear ".concat(val, " ").concat(message));
}
