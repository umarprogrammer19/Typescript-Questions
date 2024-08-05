// *Question 63:* Shape Shifter: 
// Write a program that can describe either a circle or a rectangle using a 
// special type alias, including properties unique to each shape.
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number;
    width?: number;
    height?: number;
};
// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};  
// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle