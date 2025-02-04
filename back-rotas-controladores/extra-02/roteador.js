const express = require('express');
const {consultarAlunos, consultarAlunosId,cadastrarAluno, excluirAlunoId} = require('./controladores/alunos');
const roteador = express();

roteador.get("/alunos", consultarAlunos);
roteador.get("/alunos/:id", consultarAlunosId);
roteador.post("/alunos", cadastrarAluno);
roteador.delete("/alunos/:id", excluirAlunoId )

module.exports = roteador;