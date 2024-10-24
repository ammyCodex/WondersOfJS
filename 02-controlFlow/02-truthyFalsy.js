// Falsy values in JavaScript:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values in JavaScript:
// Any value that is not falsy is considered truthy

// Some surprising truthy values:
// "0" (string), 'false' (string), " " (space string), [], {}, function(){} (empty function)

// Example of truthy values being evaluated in if conditions

const arrEmpty = []; // Empty array is truthy

if (arrEmpty) {
    console.log("Executed using truthy values (empty array)");
}

if (function(){}) { 
    console.log("Executed using truthy values (anonymous function)");
}

let a = function(){}; // Function stored in a variable is also truthy
if (a) {
    console.log("Executed using truthy values (function in variable)");
}

if ([]) { 
    console.log("Executed using truthy values (empty array literal)");
}

if ({}) { 
    console.log("Executed using truthy values (empty object literal)");
}

if ('false') { 
    console.log("Executed using truthy values (string 'false')");
}
