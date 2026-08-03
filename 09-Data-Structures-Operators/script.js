'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const weekdays = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`${weekdays[5]}`]: {   // computes property name: sat
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  // Added functions
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  // Older way to write functions, with function keyword
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


/////////////////////////////////////////////////////////
// Looping Objects Lecture

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}.`);
}

/*
/////////////////////////////////////////////////////////
// Optional Chaining Lecture

// console.log(restaurant.openingHours.mon.open);   // Uncaught TypeError: Cannot read properties of undefined
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining:
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.Hours?.mon?.open);   // undefined

// Example
const days = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist.");
console.log(restaurant.orderFood?.(0, 1) ?? "Method does not exist.");

// Arrays
const users = [{name: "Jonas", email: "hello@jonas.io"}];
// const users = [];
console.log(users[0]?.name ?? "User array empty.");


/////////////////////////////////////////////////////////
// Looping Arrays: for-of Loop Lecture
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// console.log(...menu.entries());

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}



/////////////////////////////////////////////////////////
// Logical Assignment Operators Lecture

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator, assigns values if variable is falsy
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);


/////////////////////////////////////////////////////////
// The Nullish Coalescing Operator Lecture

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// nullish: null and undefined (not 0 or "")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);


/////////////////////////////////////////////////////////
// Short Circuiting Lecture

// Use any data type, return any data type, do short-circuit evaluation
// OR short circuiting: returns first truthy value
console.log("---- OR ----");
console.log(3 || "Jonas");   // 3 truthy
console.log("" || "Jonas");   // "" falsy
console.log(true || 0);
console.log(undefined || null);   // both falsy

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 23;   // Cannot use 0 here
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND short circuiting: returns first falsy value or last truthy value
console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("hello" && 23 && null && "Jonas");
console.log("hello" && 23 && "Jonas");

// Practical example, if statement easier to read
if (restaurant.orderPizza) {
  restaurant.orderPizza("mozzarella", "basil");
}

restaurant.orderPizza && restaurant.orderPizza("ham", "pineapple");


/////////////////////////////////////////////////////////
// Rest Pattern and Parameters Lecture

// Part 1: Destructuring

// SPREAD, on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Part 2: Functions
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("pepperoni", "cheese", "olives", "peppers");
restaurant.orderPizza("tomatoes");


/////////////////////////////////////////////////////////
// Spread Operator Lecture

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

// Copy array
const mainmenuCopy = [...restaurant.mainMenu];

// Join 2 (or more) arrays (or other iterables)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = "Jonas";
const letters = [...str, " ", "S"];
console.log(letters);
console.log(...str);
// console.log(`${...str} S`);   // Uncaught SyntaxError: Unexpected token '...'

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"), 
  // prompt("Ingredient 2?"), 
  // prompt("Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe"}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristaurante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);


/////////////////////////////////////////////////////////
// Destructuring Objects Lecture

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);


/////////////////////////////////////////////////////////
// Destructuring Arrays Lecture

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(x);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
