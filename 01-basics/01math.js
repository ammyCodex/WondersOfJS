console.log(Math); // Logs the Math object, which provides basic math operations and constants

let x = 123.75;

console.log(Math.abs(-5678)); // Returns the absolute value of -5678, converting negative to positive, returns 5678

console.log(Math.round(x)); // Rounds 123.75 to the nearest integer, returns 124

console.log(Math.ceil(x)); // Rounds 123.75 up to the nearest integer, returns 124

console.log(Math.floor(x)); // Rounds 123.75 down to the nearest integer, returns 123

console.log(Math.min(10, 45, 32, 8, 29)); // Returns the smallest value, 8

console.log(Math.max(10, 45, 32, 8, 29)); // Returns the largest value, 45

console.log(Math.cbrt(64)); // Returns the cube root of 64, which is 4

console.log(Math.random()); // Returns a random number between 0 and 1

console.log((Math.random() * 10) + 1); // Returns a random number between 1 and 11 (exclusive)

console.log(Math.floor(Math.random() * 10) + 1); // Returns a random integer between 1 and 10

// Formula to generate a random number between two custom numbers (inclusive)
const min = 15;
const max = 25;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Returns a random integer between 15 and 25
// console.warn("Error_B");


