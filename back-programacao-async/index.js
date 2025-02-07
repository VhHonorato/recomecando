const express = require('express');

const {consultarListaPokemon, consultarPokemon} = require('./controladores/pokemon')
const app = express();
app.use(express.json());


app.get("/pokemon/", consultarListaPokemon);

app.get("/pokemon/:idOuNome", consultarPokemon)

app.listen(8000);