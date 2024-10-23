let a = 10;
let b = NaN;
// 'typeof' will return 'number' because NaN is categorized as a number in JavaScript
// However, any operation involving NaN results in NaN
console.log(typeof (a + b), ":", a + b); // output: 'number : NaN'

let c = 200 + 0 / 0; // Division by zero returns NaN, so 'c' will be NaN
console.log(c); // output: NaN

let numPuppies = 30;
console.log(numPuppies); // output: 30

// Changing number to boolean; JavaScript allows dynamic type changes since it's loosely typed
numPuppies = false;
console.log(numPuppies); // output: false

// Changing back to a Number
numPuppies = 100;
console.log(numPuppies); // output: 100

// 'undefined' and 'null' have their own types
console.log(typeof undefined); // output: 'undefined'
console.log(typeof null); // output: 'object' (historical JavaScript quirk)

// Type conversion: Empty string is treated as a string
let num = "";
console.log(typeof num); // output: 'string'

// Convert string to Number; an empty string converts to 0
let valueInInt = Number(num);
console.log(typeof valueInInt); // output: 'number'

// Convert number to string
let valueInString = String(valueInInt);
console.log(typeof valueInString); // output: 'string'

// Attempting to convert a non-numeric string to a number will return NaN
let name = "Ammy";
let nameNum = Number(name);
console.log(nameNum); // output: NaN

// NaN is of type 'number'
console.log(typeof nameNum); // output: 'number'

// Convert boolean to number; false becomes 0
let isBool = false;
let isBoolNum = Number(isBool);
console.log(typeof isBoolNum); // output: 'number'
console.log(isBoolNum); // output: 0

// Convert number to boolean; non-zero numbers convert to true
let isNum = 1;
let isNumBool = Boolean(isNum);
console.log(typeof isNumBool); // output: 'boolean'
console.log(isNumBool); // output: true

// Unary plus operator converts true to number (1)
console.log(+true); // output: 1

// Empty string converts to number (0)
console.log(+""); // output: 0
