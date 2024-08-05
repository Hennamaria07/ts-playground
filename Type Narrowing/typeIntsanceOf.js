"use strict";
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
// Example function with instanceof type guard
function animalSound(animal) {
    if (animal instanceof Dog) {
        // Within this block, TypeScript knows that 'animal' is an instance of Dog
        animal.bark();
    }
    else {
        // Within this block, TypeScript knows that 'animal' is an instance of Cat
        animal.meow();
    }
}
// Example usage
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog); // Outputs: Woof!
animalSound(myCat); // Outputs: Meow!
