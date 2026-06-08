'use strict';   // has to be first line of code

/*
// Strict Mode Lecture

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// Some variable names reserved: Uncaught SyntaxError: Unexpected strict mode reserved word
const interface = "audio";
const private = 123;


// Functions Lecture

function logger() {
    console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(numApples, numOranges) {
    console.log(numApples, numOranges);
    const juice = `Juice with ${numApples} apples and ${numOranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


// Function Declarations vs Expressions Lecture

const age1 = calcAge1(1991);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow Functions Lecture

// Arrow function, good for one line functions, don't get a this keyword
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


// Functions Calling Other Functions Lecture

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(numApples, numOranges) {
    const applePieces = cutFruitPieces(numApples);
    const orangePieces = cutFruitPieces(numOranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

// Reviewing Functions Lecture

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));