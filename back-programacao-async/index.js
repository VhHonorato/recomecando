const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get("/pokemon/", async (req, res) => {
    let inicio = Number(req.query.inicio);
    let quantidade = Number(req.query.quantidade);
    console.log(inicio);
    console.log(quantidade);
    const pokemonList = await axios.get(` https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`)
    const {results} = pokemonList.data;
    res.send(results);
    
    
});

app.listen(8000);