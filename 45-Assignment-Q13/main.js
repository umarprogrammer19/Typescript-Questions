// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Honda Bike", "Carrola Car"];
var statements = "I would like to own a";
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var val = transportation_1[_i];
    console.log("".concat(statements, " ").concat(val));
}
