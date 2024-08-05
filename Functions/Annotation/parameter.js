"use strict";
// Regular Func
function addOne(num) {
    return num + 1;
}
const result = addOne(3);
console.log(result);
// Arrow Func Annotations
const double = (x, y) => x * y;
const res = double(2, 10);
console.log(res);
// Also notice, TypeScript will gives you warning if you provide more or less arguments then you specifiy in your parameters area.
//   double(2, 10, 20); // 👈 Warning - This will throws an error
// default parameters
function greet(person = "Anonymous") {
    return `Hello ${person}`;
}
const response = greet();
console.log(response);
