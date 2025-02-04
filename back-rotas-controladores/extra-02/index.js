const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
const roteador = require('./roteador');
app.use(roteador);




app.listen(8000);

