const express = require('express');
const app = express();

//Primeira rota - recurso raiz
let segundos = 0;
let minutos = 0;
// function cronometro(minutos, segundos) {
   setInterval(() => { 
        segundos++;  
        if(segundos == 60){
            minutos+=1;
            segundos = 0;
        } 
        
    }, 1000);
  
    console.log(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)

app.get("/", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)
});

app.get("/iniciar", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
    
})


app.listen(8000);