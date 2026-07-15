'use strict';

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

