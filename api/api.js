const apiURL = "https://pokeapi.co/api/v2/";
const limit = 150;
const offset = 0;

export const getAllPokemon = async () => {
  try {
    const response = await axios.get(
      `${apiURL}pokemon/?limit=${limit}&offset=${offset}`
    );
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

export const getPokemonInfo = async (id) => {
  try {
    const response = await axios.get(`${apiURL}pokemon/${id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
