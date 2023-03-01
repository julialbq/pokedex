const apiURL = "https://pokeapi.co/api/v2/";

export const getAllPokemon = async () => {
  try {
    const response = await axios.get(`${apiURL}pokemon/?limit=150&offset=0`);
    const pokemon = response.data.results.map(async (pokemon) => {
      return await getPokemon(pokemon.url);
    });
    return await Promise.all(pokemon);
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (pokemonUrl) => {
  try {
    const response = await axios.get(pokemonUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
