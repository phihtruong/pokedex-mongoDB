const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokedex', { useNewUrlParser: true, useUnifiedTopology: true });

const PokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;