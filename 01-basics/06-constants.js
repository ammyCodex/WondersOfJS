let numHens = 7;
let numRoosters = 3;

// Adding the values of 'numHens' and 'numRoosters'
console.log(numHens + numRoosters); // output: 10

// Updating 'numRoosters' to be one more than 'numHens'
numRoosters = numHens + 1;

numHens += 2; // Incrementing 'numHens' by 2
console.log(numHens + numRoosters); // output: 17 (numHens = 9, numRoosters = 8)

var name = "Ammy"; // Variable 'name' can be reassigned due to 'var'
const age = 22; // Constant 'age' cannot be reassigned or modified

// Uncommenting the below line will throw an error because constants can't be changed
// age += 1;

console.log(age); // output: 22

const pi = 3.14; // Declaring a constant value for 'pi'
console.log(pi); // output: 3.14
