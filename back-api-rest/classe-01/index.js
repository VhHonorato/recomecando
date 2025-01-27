const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

// a) Consulta a lista inteira de convidados

app.get('/convidados', (req, res) => {
    res.json(convidados);
});
 //b) Consulta se existe um nome específico na lista de convidados

 app.get('/convidados/:nome', (req, res) => {
    const convidado = convidados.find((convidado) => convidado === req.params.nome);
    const lista = {
        mensagem: ""
    }
    console.log(convidado);
    if(req.params.nome !== undefined){
        if(!convidado){
            res.json(lista.mensagem = "O convidado buscado não está na lista.");
        }else{
            res.json(lista.mensagem = "O convidado presente.")
        }
    } else{
        res.json(convidados);
    }
});



app.listen(8000);