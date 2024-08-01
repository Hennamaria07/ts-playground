// Here we're inferring the type
let x = 5;
let tech = "TypeScript";
let favNumber = 8;
let tsHard = true;

console.log(tech, favNumber, tsHard);

// ERROR
// tech = false
// favNumber = "Hello"
// tsHard = 20

// x = 'hello' //this will throw an error
// by default the type is number for the x
// The type of the x variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.