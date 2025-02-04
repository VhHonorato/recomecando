const express = require('express');
const {consultarAlunos, consultarAlunosId,cadastrarAluno} = require('./controladores/alunos');
const roteador = express();

roteador.get("/alunos", consultarAlunos);
roteador.get("/alunos/:id", consultarAlunosId);
roteador.post("/alunos", cadastrarAluno);

module.exports = roteador;