// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descFinland = describeCountry("Finland", 6, "Helsinki");
const descCanada = describeCountry("Canada", 41, "Ottawa");
const descBrazil = describeCountry("Brazil", 213, "Brasilia");
console.log(descFinland, descCanada, descBrazil);


// Function declarations vs. expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const popFinland1 = percentageOfWorld1(6);
const popCanada1 = percentageOfWorld1(41);
const popBrazil1 = percentageOfWorld1(213);
console.log(popFinland1, popCanada1, popBrazil1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const popFinland2 = percentageOfWorld2(6);
const popCanada2 = percentageOfWorld2(41);
const popBrazil2 = percentageOfWorld2(213);
console.log(popFinland2, popCanada2, popBrazil2);


// Arrow functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const popFinland3 = percentageOfWorld2(6);
const popCanada3 = percentageOfWorld2(41);
const popBrazil3 = percentageOfWorld2(213);
console.log(popFinland3, popCanada3, popBrazil3);


// Functions calling other functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

const describeFinland = describePopulation("Finland", 6, "Helsinki");
const describeCanada = describePopulation("Canada", 41, "Ottawa");
const describeBrazil = describePopulation("Brazil", 213, "Brasilia");
console.log(describeFinland, describeCanada, describeBrazil);