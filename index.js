/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
let fullName = "Abdulrazak Ahmad Alqallaf";
let yearOfBirth = 2005;
let hobby = "skiing";
let funFact = "i adore travelling";
const image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg/660px-Ski_Famille_-_Family_Ski_Holidays.jpg";

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 *
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `i am ${2024 - yearOfBirth}`;
const hobbyString = `my hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars++;
  // Increment stars by 1 👇🏻
}
function decrementBy1() {
  stars--;
  // decrement stars by 1 👇🏻
}

function incrementBy2() {
  stars = stars + 2;
  // Increment stars by 2 👇🏻
}
function decrementBy2() {
  stars = stars - 2;
  // decrement stars by 2 👇🏻
}
