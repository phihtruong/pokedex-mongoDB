const db = require('../database/models.js');

module.exports = {
  getPokemons: (req, res) => {
    db.getPokemons()
      .then((results) => {
        res.status(201).send(results);
       })
      .catch(err => {
        console.log('error getting pokemons: ', err);
        res.status(404).send(err);
      });
  },

  addPokemon: (req, res) => {

  },

  updatePokemon: (req, res) => {

  },

  deletePokemon: (req, res) => {

  }
};