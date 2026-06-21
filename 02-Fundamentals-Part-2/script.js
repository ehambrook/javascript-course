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


// Intro to Arrays Lecture
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "S", 2037 - 1991, "teacher", friends];
console.log(jonas)

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operations (Methods) Lecture
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();   // remove first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));   // -1

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));   // false
console.log(friends.includes(23));   // false

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}


// Intro to Objects Lecture

const jonas = {
    firstName: "Jonas",
    lastName: "S",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};


// Dot vs Bracket Notation Lecture

const jonas = {
    firstName: "Jonas",
    lastName: "S",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}

jonas.location = "Portugal";
jonas['twitter'] = "@jonasS";
console.log(jonas);

// Challenge
// "Jonas has 3 friends and his best friend is called Michael"
const description = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`;
console.log(description);


// Object Methods Lecture
const jonas = {
    firstName: "Jonas",
    lastName: "S",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    // Create jonas.age, set to age
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // Challenge
    // "Jonas is a 46 year old teacher, and he has a driver's licence"
    getDescription: function () {
        // if (this.hasDriversLicense === true) {
        //     return `${this.firstName} is a ${this.age} year old ${this.job}, and he has a driver's license.`;
        // } else {
        //     return `${this.firstName} is a ${this.age} year old ${this.job}, and he does not have a driver's license.`;
        // }

        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : 'does not have'} a driver's license.`;
    },
};

console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));

console.log(jonas.age);

console.log(jonas.getDescription());


// The for Loop Lecture
console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


// Looping Arrays, Breaking and Continuing Lecture
const jonasArray = [
    "Jonas",
    "S",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


// Looping Backwards and Loops in Loops Lecture
const jonasArray = [
    "Jonas",
    "S",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise ${exercise} ---`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

// The while Loop Lecture
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end...`);
    }
}