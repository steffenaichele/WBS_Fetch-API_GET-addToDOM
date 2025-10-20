import addSections from "/createSections.js";

const path = "https://pokeapi.co/api/v2/pokemon/";
let counter = 1;

const generations = [
    {name:"Generation 1", start: 1, end: 151 },
    {name:"Generation 2", start: 152, end: 251 },
    {name:"Generation 3", start: 252, end: 386 },
    {name:"Generation 4", start: 387, end: 493 },
    {name:"Generation 5", start: 494, end: 649 },
    {name:"Generation 6", start: 650, end: 721 },
    {name:"Generation 7", start: 722, end: 809 },
    {name:"Generation 8", start: 810, end: 905 },
    {name:"Generation 9", start: 906, end: 1025 }
];

for (let i = 0; i < generations.length; i++) {
    addSections(generations[i]);
}

async function fetchPokemon() {
    const response = await fetch(path + counter);
    const data = await response.json();
    console.log(data);
    displayPokemon(data);
    counter++;
}