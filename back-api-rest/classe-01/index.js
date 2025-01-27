const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

// a) Consulta a lista inteira de convidados

app.get('/convidados', (req, res) => {
    res.json(convidados);
})

app.listen(8000);