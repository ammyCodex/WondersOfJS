const tempVar = 10;
if(tempVar<=11)
{
    console.log("Executed...");
}
else{
    console.log("Not Executed...");
    
}
// will not work
// you directly can't check the value with datatype
// if(temp <= Number){
//     console.log("Executed");

// }
// else{
//     console.log("Not Executed");
// } //Not Executed

const user = Math.floor(Math.random() * 100) + 1;
console.log(user);

if (user < 10) {
  const superPower = "invisibility with a sparkly twist ✨";
  console.log(`She can ${superPower}`);
} else if (user >= 10 && user < 20) {
  const superPower = "shoot dazzling laser beams 💥";
  console.log(`She can ${superPower}`);
} else if (user >= 20 && user < 30) {
  const superPower = "run faster than a glittery unicorn 🦄";
  console.log(`She can ${superPower}`);
} else if (user >= 40 && user < 50) {
  const superPower = "soar through the clouds like a pink butterfly 🦋";
  console.log(`She can ${superPower}`);
} else if (user >= 50 && user < 60) {
  const superPower = "be super smart with a fashion-forward mind like Iron Girl 💼👠";
  console.log(`She has ${superPower}`);
} else if (user >= 60 && user < 70) {
  const superPower = "swing on glittery webs like a Spider Princess 🕸️👑";
  console.log(`She can ${superPower}`);
} else if (user >= 70 && user < 80) {
  const superPower = "lift anything with girl-power strength 💪✨";
  console.log(`She has ${superPower}`);
} else if (user >= 80 && user < 90) {
  const superPower = "summon lightning with sparkle ⚡💖";
  console.log(`She has ${superPower}`);
} else if (user >= 90) {
  const superPower = "be Wonder Girl with a cape and all 🦸‍♀️💫";
  var hero = "Wonder Girl 2.0";
  console.log(`She is ${superPower}`);
}

// console.log(`She is ${superPower}`); //it will give error because superPower declared in if scope
// console.log(`She is ${hero}`); //it will not give error because var gets leaked


const debitCard = true;
const userLoggedIn = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

// AND statement
// All conditions must be true for the code to execute
// If any condition is false, the code inside the block won't run
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to Enter the site");
}

// OR statement
// If any one of the conditions is true, the code inside the block will execute
if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("Allow to Enter the site");
}

// Nullish coalescing operator (??)
// Assigns the first non-null or non-undefined value to the variable

let val1 = 5 ?? 10;            // 5: because 5 is not null or undefined
let val2 = null ?? 10;         // 10: because null is treated as 'missing' and 10 is assigned
let val3 = null ?? undefined;  // undefined: as both values are nullish
let val4 = undefined ?? null;  // null: undefined is skipped, null is assigned
let val5 = undefined ?? 15 ?? 26;  // 15: first non-nullish value is 15
let val6 = null ?? 15 ?? 26;       // 15: first non-nullish value is 15

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);

// Ternary operator
// A compact way to write an if-else statement
let iceTeaPrice = 88;
iceTeaPrice <= 80 ? console.log("Price is good") : console.log("Ice Tea is expensive");
