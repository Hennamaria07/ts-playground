"use strict";
// ------------- Without Generics -------------
// function printNumber(item: number, defaultValue: number): [number, number] {
//   return [item, defaultValue];
// }
// function printString(item: string, defaultValue: string): [string, string] {
//   return [item, defaultValue];
// }
// function printBoolean(
//   item: boolean,
//   defaultValue: boolean
// ): [boolean, boolean] {
//   return [item, defaultValue];
// }
// // Example usage
// const num = printNumber(42, 0);
// console.log(num); // Outputs: [42, 0]
// const str = printString("hello", "world");
// console.log(str); // Outputs: ['hello', 'world']
// const bool = printBoolean(true, false);
// console.log(bool); // Outputs: [true, false]
// -----------------------------------
// --------------- Using Generics ---------------
function uniqueDataTypeFunc(item, defaultValue) {
    return [item, defaultValue];
}
// Example usage
const num = uniqueDataTypeFunc(42, 0);
console.log(num); // Outputs: [42, 0]
const str = uniqueDataTypeFunc("hello", "world");
console.log(str); // Outputs: ['hello', 'world']
const dogPair = uniqueDataTypeFunc({ name: "Buddy", breed: "Labrador" }, { name: "Default", breed: "Unknown" });
console.log(dogPair); // Outputs: [{ name: 'Buddy', breed: 'Labrador' }, { name: 'Default', breed: 'Unknown' }]
