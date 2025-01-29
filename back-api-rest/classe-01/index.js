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
            res.json(lista.mensagem = "Convidado presente.")
        }
    } else{
        res.json(convidados);
    }
});

//c) Adicionar um nome na lista de convidados

app.post('/convidados', (req, res) => {
    const novoConvidado = {
        nome: req.body.nome.trim()
    };
    console.log(novoConvidado.nome);
    const convidado = convidados.find((convidado) => convidado === novoConvidado.nome);
    const lista = {
        mensagem: "" 
    }
    console.log(convidado);
    if(convidado){
        res.json(lista.mensagem = "O nome do convidado a ser adicionado já existe na lista. Caso queira adicionar outro convidado do mesmo nome, favor fornecer o sobrenome também.")
    } else {
        convidados.push(novoConvidado.nome);
        res.json(lista.mensagem = "Convidado adicionado.")
    };
})

// d) Remover um nome da lista de convidados

app.delete('/convidados/:nome', (req, res) => {
    const convidado = convidados.find((convidado) => convidado === req.params.nome);
    const lista = {
        mensagem: "" 
    }
    console.log(convidado); 
    if(convidado){
        const indice = convidados.indexOf(convidado, 0);
        convidados.splice(indice, 1);
        res.json(lista.mensagem = "Convidado removido.")
    } else {
        res.json(lista.mensagem = "O nome do convidado a ser removido não existe na lista. Nenhum convidado removido.")
    }
})

app.listen(8000);