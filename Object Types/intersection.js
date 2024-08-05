"use strict";
const luffy = {
    first: "HuXn",
    last: "WebDev",
    age: 18,
    email: "test@gmail.com",
    password: "strongpassword123",
};
console.log(`Name: (${luffy.first} ${luffy.last}) Age: (${luffy.age}) Email: (${luffy.email}) Password: (${luffy.password})`);
//   ERROR CASE
// type Detail1 = {
//     name: string;
//     age: number;
// }
// type Detail2 = {
//     name: number;
//     password: string;
// }
// type InvalidUserDetail = Detail1 & Detail2;
// const invalidUser: InvalidUserDetail = {
//     name: "Alex", 
//     age: 20,
//     password: "strongpassword123",
// }
