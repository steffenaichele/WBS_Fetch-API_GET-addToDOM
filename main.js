import addSections from "/createSections.js";

const path = "https://pokeapi.co/api/v2/pokemon/";
let counter = 1;

const generations = {
    gen1: { start: 1, end: 151 },
    gen2: { start: 152, end: 251 },
    gen3: { start: 252, end: 386 },
    gen4: { start: 387, end: 493 },
    gen5: { start: 494, end: 649 },
    gen6: { start: 650, end: 721 },
    gen7: { start: 722, end: 809 },
    gen8: { start: 810, end: 905 },
    gen9: { start: 906, end: 1025 }
};

for (const gen in generations) {
    addSections(gen);
}

async function fetchPokemon() {
    const response = await fetch(path + counter);
    const data = await response.json();
    console.log(data);
    displayPokemon(data);
    counter++;
}