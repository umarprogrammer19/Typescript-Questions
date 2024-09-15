"use strict";
// Calculates how many days are left until New Year's Day
function calculateDays() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 1, 0);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(`There are ${calculateDays()} Days Left in a New Year`);
