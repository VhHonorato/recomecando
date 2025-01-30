const express = require('express');
const {consultaImoveis, consultaImoveisId} = require('./controladores/imoveis');
const roteador = express();

roteador.get("/imoveis", consultaImoveis);
roteador.get("/imoveis/:id", consultaImoveisId);

module.exports = roteador;