const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const {consultaImoveis, consultaImoveisId} = require('./controladores/imoveis');

app.get("/imoveis", consultaImoveis);
app.get("/imoveis/:id", consultaImoveisId);

app.listen(8000);