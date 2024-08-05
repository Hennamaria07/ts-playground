"use strict";
const printUserInfo = (user) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};
const result = printUserInfo({ name: "Alex", age: 20, location: "USA" });
console.log(result);
