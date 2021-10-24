const db = require('./index.js');

module.exports = {
  getPokemons: () => {
    return new Promise((resolve, reject) => {
      let queryStr = `
      SELECT p.name, t.type, i.img
      FROM pokemon AS p
      INNER JOIN types AS t
      ON p.typeNum = t.id
      INNER JOIN images AS i
      ON p.imageNum = i.id;`;

      db.query(queryStr, (err, results) => {
        if (err) {
          console.log('error querying db to get all pokemons');
          return reject(err);
        } else {
          console.log('got pokemons: ', results.length)
          resolve(results);
        }
      })
    })
  },

  addPokemon: (pokemon) => {

  },

  updatePokemonName: (name, newName) => {

  },

  deletePokemon: (name) => {

  }
};

