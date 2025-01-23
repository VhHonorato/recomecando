const express = require('express');
const app = express();

app.get("/somar",(req, res) => {
    console.log(req.query);
    const primeiroNumero = Number(req.query.num1);
    const segundoNumero = Number(req.query.num2);
    res.send(`Resposta: ${String(primeiroNumero + segundoNumero)}`);

});

app.get("/subtrair", (req, res) => {
    console.log(req.query);
    const primeiroNumero = Number(req.query.num1);
    const segundoNumero = Number(req.query.num2);
    res.send(`Resposta: ${String(primeiroNumero - segundoNumero)}`);
});

app.get("/multiplicar", (req, res) => {
    console.log(req.query);
    const primeiroNumero = Number(req.query.num1);
    const segundoNumero = Number(req.query.num2);
    res.send(`Resposta: ${String(primeiroNumero * segundoNumero)}`);
});

app.get("/dividir", (req,res) => {
    console.log(req.query);
    const primeiroNumero = Number(req.query.num1);
    const segundoNumero = Number(req.query.num2);
    res.send(`Resposta: ${String(primeiroNumero / segundoNumero)}`);
})


app.listen(8000);