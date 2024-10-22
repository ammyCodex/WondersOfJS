const score = 850;
console.log(score); // Logs the number 850

let num = new Number(250);
console.log(num); // Logs the Number object { [Number: 250] }
console.log(num.toFixed(2)); // Converts the number to a string with 2 decimal places, returns '250.00'

console.log(Math.PI.toFixed(4)); // Returns the value of PI rounded to 4 decimal places, '3.1416'

const updatedNumber1 = 45.78912; // Value is 45.8 because toPrecision(3) rounds it based on 3 significant digits
const updatedNumber2 = 12.45678; // Value is 12.5 because toPrecision(3) rounds to 3 significant digits
const updatedNumber3 = 789.9876;  // Value is 790 because toPrecision(3) rounds up (since the next digit is greater than 5)
const updatedNumber4 = 98.2345;   // Value is 98.2 because toPrecision(3) rounds down based on 3 significant digits

// toPrecision() will round the value to the specified number of significant digits
console.log(updatedNumber1.toPrecision(3)); // Logs '45.8'
console.log(updatedNumber2.toPrecision(3)); // Logs '12.5'
console.log(updatedNumber3.toPrecision(3)); // Logs '790'
console.log(updatedNumber4.toPrecision(3)); // Logs '98.2'

const largeNum = 5000000;

console.log(largeNum.toLocaleString()); // Converts the number to a string with comma-separated format, returns '5,000,000'
console.log(largeNum.toLocaleString('en-IN')); // Converts to Indian numbering system, returns '50,00,000'
