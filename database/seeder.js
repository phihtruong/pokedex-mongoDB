const mongoose = require('mongoose');
const Pokemon = require('./index.js');
const pokemonData = require('../pokemon.json');

const modelMakers = () => {
  let results = [];
  pokemonData.forEach(pokemon => {
    let newPokemon = new Pokemon({
      name: pokemon.name,
      type: pokemon.type,
      img: pokemon.img
    });
    results.push(newPokemon);
  })

  return results;
}

let pokemons = modelMakers();

mongoose.connect('mongodb://localhost/pokedex', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return Pokemon.insertMany(pokemons);
  })
  .then(() => {
    mongoose.disconnect();
  });