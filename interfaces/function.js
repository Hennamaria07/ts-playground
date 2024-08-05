"use strict";
// ---------------------------
// Example 1
// Usage
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(5, 3));
console.log(subtract(7, 2));
// Function that accepts an object adhering to the Car interface
function displayCarInfo(car) {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}
// Create an object that adheres to the Car interface
const myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
};
// Call the function with the object
displayCarInfo(myCar);
// ---------------------------
