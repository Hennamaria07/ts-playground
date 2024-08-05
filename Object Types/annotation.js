"use strict";
// Define a person object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
// Access and log properties
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// Using objects as function return value
function printUser() {
    return {
        name: "Alex",
        age: 19,
        location: "USA",
    };
}
console.log(printUser());
