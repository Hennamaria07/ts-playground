"use strict";
function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
    person.sayHello();
}
const john = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello() {
        console.log("Hi there!");
    },
};
const huxn = {
    firstName: "HuXn",
    lastName: "WebDev",
    age: 18,
    sayHello() {
        console.log("What's good");
    },
};
greet(john);
greet(huxn);
const song1 = {
    songName: "Natural",
    singerName: "Imagin Drigon",
    printSongInfo: (songName, singerName) => {
        return `Song: (${songName}) Singer: (${singerName})`;
    },
};
console.log(song1.printSongInfo("Natural", "Imagin Drigon"));
// ---------------------------
