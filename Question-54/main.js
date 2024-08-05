"use strict";
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
