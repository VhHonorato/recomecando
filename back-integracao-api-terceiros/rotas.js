const express = require('express');
const {consultarDominio} = require('./controladores/empresas')
const rotas = express();



rotas.get("/empresas/:dominio", consultarDominio);

module.exports = {rotas};