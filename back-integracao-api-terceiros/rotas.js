const express = require('express');
const {consultarDominio} = require('./controladores/empresas')
const rotas = express();

rotas.get("/empresas/:dominioEmpresa", consultarDominio);

module.exports = rotas;