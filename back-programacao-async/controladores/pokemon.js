const axios = require('axios');

async function consultarListaPokemon (req, res){
    let inicio = Number(req.query.inicio);
    let quantidade = Number(req.query.quantidade);
    console.log(inicio);
    console.log(quantidade);
    const pokemonList = await axios.get(` https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`)
    const {results} = pokemonList.data;
    res.send(results);
    
    
};

async function consultarPokemon (req, res){
    const nomeOuIdPokemon = req.params.idOuNome;
    const buscarPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nomeOuIdPokemon}/`);
    const {id, name, height, weight, base_experience, forms, abilities, species } = buscarPokemon.data;
    console.log(buscarPokemon);
    if(!buscarPokemon){
        res.status(404);
        res.send(404);
    }
    res.json({
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    }
    );
};

module.exports = {consultarListaPokemon, consultarPokemon};