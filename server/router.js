const express = require('express');
const router = require('express').Router();
const controllers = require('./controllers.js');

router.route('/get').get(controllers.getPokemons);

router.route('/update').put(controllers.updatePokemonName);

module.exports = router;