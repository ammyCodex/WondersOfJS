let Fname = 'Ammy'; // First name of the user
let Lname = 'sharma'; // Last name of the user
let gotra = new String('mudgil'); // User's gotra as a String object

// Logs the first and last name with a space
console.log(Fname, Lname); // Logs "Ammy sharma"

// Concatenates first and last name without a space
console.log(Fname + Lname); // Logs "AmmySharma"

// String interpolation to include the full name and gotra
console.log(`My name is ${Fname + Lname} and my gotra is ${gotra}.`);

// Function to display cosmetics purchase details
function cosmetics(product, price, quantity) {
    // Returns a formatted string detailing the purchase
    return `You bought ${quantity}ml of ${product} at ${price}.`;
}

// Logs details for purchased serum
console.log(cosmetics('serum', 546.56, 30)); // Logs "You bought 30ml of serum at 546.56."

// Logs details for purchased foundation
console.log(cosmetics('Foundation', 1680.56, 32)); // Logs "You bought 32ml of Foundation at 1680.56."

let myMachine = new String("HP pavilion"); // User's machine name as a String object

// Logs the length of the string
console.log(myMachine.length); // Logs the number of characters in the string

// Logs the prototype of the String object
console.log(myMachine.__proto__); // Logs the prototype, showing available String methods

for(let i =0;i<myMachine.length;i++)
{
    console.log(myMachine[i]);
}
console.log(myMachine.toLocaleUpperCase());
console.log(myMachine.toUpperCase());
console.log(myMachine.toLowerCase());

let myString = "ı"; // The dotless 'i' used in Turkish
console.log(myString.toLocaleUpperCase("tr-TR")); // Output: "I" (uppercase 'I' in Turkish)
console.log(myString.toLocaleUpperCase("en-US")); // Output: "I" (uppercase 'I' in English)

console.log(myMachine.charAt(7));

console.log(myMachine.charCodeAt(7));
console.log(myMachine.charCodeAt(7).toString());

// Get the Unicode value of the character at index 0
console.log(myMachine.charCodeAt(0)); // Output: 72

// Checking the type
console.log(typeof myMachine); // Output: "object"
console.log(myMachine instanceof String); // Output: true

// Comparing with a primitive string
console.log(myMachine === "HP pavilion"); // Output: false (object vs primitive)
console.log(myMachine.valueOf() === "HP pavilion"); // Output: true (compare primitive values)
// Slicing
const newString = myMachine.substring(1,7);
console.log(newString)

// we can pass negative value in this method but not in subString  
const AnotherString = myMachine.slice(-4,11)
console.log(myMachine.slice(4));
console.log(AnotherString);

const spaceString = "     Ammy     "
console.log(spaceString);
console.log(spaceString.trim());
