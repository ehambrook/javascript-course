// Values and Varibles lecture
const country = "Canada";
const continent = "North America";
let population = 41.29;
console.log(country, continent, population);


// Data Types lecture
const isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);


// let, const and var lecture
language = "English";
// Changed contry, contintent and isIsland to constants
// Population changes with time, language changes by region


// Basic Operators lecture
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = country + " is in " + continent + ", and most of its " + --population + " million people speak " + language;
console.log(description)