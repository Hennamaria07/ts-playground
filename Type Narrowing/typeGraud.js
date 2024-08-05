"use strict";
const graud = (val) => {
    if (typeof val === 'number') {
        console.log(`The value is a number: ${val}`);
    }
    else {
        console.log(`The value is a string: ${val}`);
    }
};
graud(5);
graud('Hello');
// graud(true); // throws error as true is not a number or string
