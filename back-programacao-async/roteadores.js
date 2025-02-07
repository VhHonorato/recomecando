const express = require('express');
const {consultarListaPokemon, consultarPokemon} = require('./controladores/pokemon');
const roteador = express();

roteador.get("/pokemon/", consultarListaPokemon);

roteador.get("/pokemon/:idOuNome", consultarPokemon)

module.exports = roteador;
