import { getAllPokemon } from "../api/api.js";

const listAllPokemon = (pokemonArray) => {
  const pokemonList = document.getElementById("pokemonList");

  pokemonArray.map((pokemon) => {
    const pokemonUnit = pokemonCard(pokemon)
    pokemonList.appendChild(pokemonUnit)
  });

};

const pokemonCard = (pokemon) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const p = document.createElement("p");

  li.classList.add("main__pokemon");
  div.classList.add("main__pokemon-number");
  img.classList.add("main__pokemon-image");
  p.classList.add("main__pokemon-name");

  div.appendChild(span)

  span.innerText = `#00${pokemon.id}`
  img.src = pokemon.sprites.front_default
  img.alt = pokemon.name
  p.innerText = pokemon.name
  li.append(div, img, p)

  return li
};

const pokemon = await getAllPokemon();

listAllPokemon(pokemon)
