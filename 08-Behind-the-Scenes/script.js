'use strict';

/*
// Scoping in Practice lecture

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear < 1996) {
            var millenial = true;

            // Create new variable
            const firstName = "Steven";

            // Reassign old variable
            output = "New output";

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
            return a + b;
            }
        }

        // console.log(str)   // Not defined here, block scoped
        console.log(millenial);   // Millenial defined, var variable
        // add(2, 3);   // Not defined, block scoped, but only with strict mode
        console.log(output);
        
    }

    printAge()
    
    return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age);   // Not in scope
// printAge();   // Not defined in scope



// Hoisting and TDZ in Practice lecture

// Variables
console.log(me);   // undefined
// console.log(job);   // ReferenceError: Cannot access 'job' before initialization
// console.log(year);   // ReferenceError: Cannot access 'year' before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));   // Can call declarations before defined
// console.log(addExpr(2, 3));   // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3));   // TypeError: addArrow is not a function, equivalent of calling undefined(2, 3)

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();
// numProducts undefined in line above, so code executes

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All Products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



// The this Keyword Lecture

console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);   // this undefined here, because strict mode used
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);   // this is window, keyword for parent scope
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

// Method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();   // Undefined, because f is not attached to an object



// Regular Functions vs Arrow Functions Lecture

// var firstName = "Matilda";   // Creates property on global object

const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function() {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1, create self in parent scope to preserve this keyword
        // const self = this;   // self or that
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        // Solution 2, use arrow function to inherit the this keyword from parent scope
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),   // this.firstName undefined in arrow function
};
jonas.greet();
console.log(this.firstName);   // Also undefined

jonas.calcAge();

// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments)
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);   // arguments not defined
    return a + b;
};
addArrow(2, 5, 8);
*/


// Memory Management Lecture

const jessica1 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
};
const marriedJessica = marryPerson(jessica1, "Davis");

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

console.log("Before:", jessica1);
console.log("After:", marriedJessica);

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],   // Nested object, has its own memory address
};

// Shallow copy
const jessicaCopy = {...jessica};
jessicaCopy.lastName = "Davis";

// jessicaCopy.family.push("Carol");   // Changes array in both ojects
// jessicaCopy.family.push("Dave");
// console.log("Before:", jessica);
// console.log("After:", jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Carol");
jessicaClone.family.push("Dave");

console.log("Original:", jessica);
console.log("Clone:", jessicaClone);