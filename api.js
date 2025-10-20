const path = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (id) => {
	try {
        const response = await fetch(path + id);
        if (!response.ok) throw new Error(`Network response was not ok. Status: ${result.response}`);
        const data = await response.json();
	    return data;
    } catch (error) {
        console.error("Fetch error: ", error);
        return null;
    }
};

export default fetchPokemon;