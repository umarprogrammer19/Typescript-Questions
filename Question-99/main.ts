// Generates a Date object for the next occurrence of a specific birthday
function getBirthday(month: number, day: number): Date {
    let today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

const nextBirthday = getBirthday(8, 19);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());