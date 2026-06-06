/*
// Values and Variables lecture

let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

// Good variable names
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// Bad variable names
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


// Data Types lecture

// Declare new variable with let
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let, const, and var lecture

// let used for variables that can be changed later
let age = 30;
age = 31;

// const used for variables that are not supposed to be changed
// Use const as a default
const birthYear = 1991;

// var should be avoided, from older versions of JS
var job = "programmer";
job = "teacher";


// Math operators lecture

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas"
const lastName = "S"
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x /= 4; // 25
x++; // 26
x--; // 25
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence Lecture

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Strings and Template Literals Lecture

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);
console.log("string with \n\multiple \n\lines");
console.log(`String with
multiple
lines`)


// Taking Decisions: if/else Statements Lecture

const age = 15;

if (age >= 18) {
    console.log("Sarah can get her drivers licence 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Type Conversion and Coercion Lecture

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //NaN
console.log(typeof Nan);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // - triggers conversion to numbers
console.log("23" * "2"); // converts both to numbers, same for division

let n = 1 + "1"; // "11"
n = n - 1; // 11 - 1 = 10
console.log(n); // 10


// Truthy and Falsy Values Lecture

// 5 falsy values: 0, "", undefined, null, NaN
// truthy values: everything else

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("Yay, height is defined");
} else {
    console.log("Height is undefined"); // uhoh, there's a bug
}


// Equality Operators Lecture

const age = "18";
if (age === 18) console.log("You just became an adult! (strict)");

// assignment: =, loose equality (with type coercion): ==, strict equality: ====
// avoid loose equality as much as possible to avoid bugs
if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");


// Logical Operators Lecture

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}


// Switch Statement Lecture

const day = "thursday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a valid day");
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend!");
} else {
    console.log("Not a valid day");
}
*/

// Conditional Operator Lecture

const age = 15;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`)