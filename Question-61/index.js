"use strict";
// *Question 61:* Making Enums for Vehicles:
// Let's create categories for vehicles like cars, trucks, and motorcycles using enums,
// and show one example.
var Vehicle;
(function (Vehicle) {
    Vehicle["Car"] = "CAR";
    Vehicle["Truck"] = "TRUCK";
    Vehicle["Motorcycle"] = "MOTORCYCLE";
})(Vehicle || (Vehicle = {}));
function isCar(vehicle) {
    return vehicle === Vehicle.Car;
}
// Usage
let vehicleType = Vehicle.Car;
if (isCar(vehicleType)) {
    console.log('This is a car');
}
else {
    console.log('This is not a car');
}
