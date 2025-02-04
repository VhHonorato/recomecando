const express = require('express');
const {consultarAlunos, consultarAlunosId} = require('./controladores/alunos');
const roteador = express();

roteador.get("/alunos", consultarAlunos);
roteador.get("/alunos/:id", consultarAlunosId);

module.exports = roteador;