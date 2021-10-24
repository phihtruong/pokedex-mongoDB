const express = require('express');
const router = require('express').Router();
const controllers = require('./controllers.js');

router.route('/get').get(controllers.getPokemons);

module.exports = router;