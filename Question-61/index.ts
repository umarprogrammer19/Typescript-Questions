// *Question 61:* Making Enums for Vehicles:
// Let's create categories for vehicles like cars, trucks, and motorcycles using enums,
// and show one example.

enum Vehicle {
    Car = 'CAR',
    Truck = 'TRUCK',
    Motorcycle = 'MOTORCYCLE'
}
function isCar(vehicle: Vehicle) {
    return vehicle === Vehicle.Car;
}
// Usage
let vehicleType: Vehicle = Vehicle.Car;

if (isCar(vehicleType)) {
    console.log('This is a car');
} else {
    console.log('This is not a car');
}