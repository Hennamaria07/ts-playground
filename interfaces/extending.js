"use strict";
const movie1 = {
    name: "John Wick",
    ratings: 7,
    printMovieInfo(name, price, ratings) {
        return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    },
    genra: "Action",
};
const res = movie1.printMovieInfo("John Wick", 100, 8);
console.log(res);
