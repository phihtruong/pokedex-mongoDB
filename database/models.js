const Pokemon = require('./index.js');

module.exports = {
  getPokemons: () => {
    return Pokemon.find();
  },

  addPokemon: (pokemon) => {

  },

  updatePokemonName: (oldName, newName) => {
    return Pokemon.findOneAndUpdate({ name: oldName }, { name: newName });
  },

  deletePokemon: (pokemon) => {

  }
}