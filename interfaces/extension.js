"use strict";
// Usage of the extended interface
const myCar = {
    brand: "Toyota",
    model: "Camry",
    start() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    },
};
const huxn = {
    firstName: "HuXn",
    lastName: "WebDev",
    age: 18,
    printUserInfo(firstName, lastName, age) {
        return `Name: (${firstName} ${lastName}) Age: (${age})`;
    },
};
console.log(huxn.printUserInfo("HuXn", "WebDev", 18));
