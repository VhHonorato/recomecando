const express = require('express');
const roteador = express();
const {consultarEndereco} = require('./controladores/enderecos')

roteador.get("/endereco/:cep",consultarEndereco );

module.exports = roteador;