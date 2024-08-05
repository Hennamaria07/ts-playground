"use strict";
// 1.
function throwError(msg) {
    throw new Error(msg);
}
// 2.
function infiniteLoop() {
    while (true) { }
}
// 3.
let empty;
function neverReturns() {
    while (true) { }
}
empty = neverReturns(); // This line will cause a compile-time error because the function never returns
