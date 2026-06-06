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

population--;
const description = country + " is in " + continent + ", and most of its " + population + " million people speak " + language;
console.log(description)


// String and Template Literals
const newDescription = `${country} is in ${continent}, and most of its ${population} million people speak ${language}`;
console.log(newDescription)


// if / else Statements
if (population > 33) {
    console.log(`${country}'s population is ${population - 33} above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}


// Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1149 - 6 -> 1143


// Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


// Logical Operators
if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


// The switch Statement
switch (language) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}


// The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`)