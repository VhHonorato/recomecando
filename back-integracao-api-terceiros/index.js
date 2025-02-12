const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const {rotas} = require('./rotas');

app.use(rotas);

app.listen(8000);
