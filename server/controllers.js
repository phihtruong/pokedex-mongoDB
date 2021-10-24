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

  updatePokemonName: (req, res) => {
    let { oldName, newName } = req.body
    db.updatePokemonName(oldName, newName)
      .then(() => {
        res.status(202).send()
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  deletePokemon: (req, res) => {
    let { name } = req.body;
    db.deletePokemon(name, (err, Pokemon) => {
      if (err) {
        console.log('controller: error deleting...', err);
        res.status(404).send(err)
      } else {
        res.status(203).send(Pokemon);
      }
    })
  }
};