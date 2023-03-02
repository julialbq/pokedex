import { getPokemonInfo } from "../api/api.js";

const listOnePokemon = (pokemon) => {
  const color = pokemon.types[0].type.name

  const body = document.querySelector('body')
  const h2 = document.querySelectorAll('h2')
  const p = document.querySelectorAll('p')
  const header = document.getElementById("header");
  const headerDiv = document.getElementById("headerDiv");
  const imageDiv = document.getElementById("imageDiv");
  const typeDiv = document.getElementById("typeDiv");
  const weightDiv = document.getElementById("weightDiv");
  const heightDiv = document.getElementById("heightDiv");
  const movesDiv = document.getElementById("movesDiv");
  const aboutText = document.getElementById("aboutText");
  const weight = document.createElement("p");
  const height = document.createElement("p");
  const moves = document.createElement("p");
  const hp = document.getElementById("hp");
  const atk = document.getElementById("atk");
  const def = document.getElementById("def");
  const stak = document.getElementById("stak");
  const sdef = document.getElementById("sdef");
  const spd = document.getElementById("spd");

  const pokemonName = document.createElement("h1");
  const pokemonNumber = document.createElement("span");
  const pokemonImage = document.createElement("img");

  imageDiv.appendChild(pokemonImage);
  pokemon.types.map((type) => {
    const span = document.createElement("span");
    span.innerText = type.type.name;
    span.classList.add('card__main-type')
    span.classList.add(`${type.type.name}-bckg`);
    typeDiv.appendChild(span);
  });

  pokemonName.innerText = pokemon.name;
  pokemonNumber.innerText = `#00${pokemon.id}`;
  pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default
  pokemonImage.alt = pokemon.name;
  weight.innerText = pokemon.weight;
  height.innerText = pokemon.height;
  moves.innerText = pokemon.moves[0].move.name;
  aboutText.innerText = pokemon.name;
  hp.innerText = pokemon.stats[0].base_stat;
  atk.innerText = pokemon.stats[1].base_stat;
  def.innerText = pokemon.stats[2].base_stat;
  stak.innerText = pokemon.stats[3].base_stat;
  sdef.innerText = pokemon.stats[4].base_stat;
  spd.innerText = pokemon.stats[5].base_stat;

  body.classList.add(`${pokemon.types[0].type.name}-bckg`)
  
  h2.forEach((title) => title.classList.add(`${color}-color`))
  p.forEach((text) => text.classList.add(`${color}-color`))

  pokemonName.classList.add("card__header-title");
  pokemonNumber.classList.add("card__header-number");
  pokemonImage.classList.add("card__main-image");

  headerDiv.appendChild(pokemonName);
  header.appendChild(pokemonNumber);
  weightDiv.appendChild(weight);
  heightDiv.appendChild(height);
  movesDiv.appendChild(moves);
  
};

const renderStatsBars = (pokemon) => {
  const color = pokemon.types[0].type.name

  const barHp = document.getElementById('barHp')
  const barAtk = document.getElementById('barAtk')
  const barDef = document.getElementById('barDef')
  const barStak = document.getElementById('barStak')
  const barSdef = document.getElementById('barSdef')
  const barSpd = document.getElementById('barSpd')

  barHp.classList.add(`${color}-bckg`)
  barAtk.classList.add(`${color}-bckg`)
  barDef.classList.add(`${color}-bckg`)
  barStak.classList.add(`${color}-bckg`)
  barSdef.classList.add(`${color}-bckg`)
  barSpd.classList.add(`${color}-bckg`)

  const barHpFilled = document.getElementById('barHpFilled')
  const barAtkFilled = document.getElementById('barAtkFilled')
  const barDefFilled = document.getElementById('barDefFilled')
  const barStakFilled = document.getElementById('barStakFilled')
  const barSdefFilled = document.getElementById('barSdefFilled')
  const barSpdFilled = document.getElementById('barSpdFilled')

  barHpFilled.classList.add(`${color}-bckg`)
  barAtkFilled.classList.add(`${color}-bckg`)
  barDefFilled.classList.add(`${color}-bckg`)
  barStakFilled.classList.add(`${color}-bckg`)
  barSdefFilled.classList.add(`${color}-bckg`)
  barSpdFilled.classList.add(`${color}-bckg`)

  barHpFilled.value = pokemon.stats[0].base_stat
  barAtkFilled.value = pokemon.stats[1].base_stat 
  barDefFilled.value = pokemon.stats[2].base_stat 
  barStakFilled.value = pokemon.stats[3].base_stat 
  barSdefFilled.value = pokemon.stats[4].base_stat 
  barSpdFilled.value = pokemon.stats[5].base_stat 
}

const pokemonInfo = await getPokemonInfo(1)

listOnePokemon(pokemonInfo)
renderStatsBars(pokemonInfo)
