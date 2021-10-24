const Pokemon = require('./index.js');

module.exports = {
  getPokemons: () => {
    return Pokemon.find();
  },

  addPokemon: (pokemon) => {
    let newPokemon = new Pokemon({
      name: pokemon.name,
      type: pokemon.type,
      img: pokemon.img
    });

    return newPokemon.save();
  },

  updatePokemonName: (oldName, newName) => {
    return Pokemon.findOneAndUpdate({ name: oldName }, { name: newName });
  },

  deletePokemon: (name, callback) => {
    return Pokemon.findOneAndDelete({ name }, (err, Pokemon) => {
      if (err) {
        callback(err);
      } else {
        callback(null, Pokemon);
      }
    });
  }
}