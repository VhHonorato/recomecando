const jogada1 = "tesoura"
const jogada2 = "pedra"

//seu código aqui

if(jogada1 === jogada2){
    console.log("EMPATE")
} else if(jogada1 === "pedra" && jogada2 === "tesoura"){
    console.log("Jogador 1 venceu")
} else if(jogada1 === "papel" && jogada2 === "pedra"){
    console.log("Jogador 1 venceu")
} else if(jogada1 === "tesoura" && jogada2 === "papel"){
    console.log("Jogador 1 venceu")
}else if(jogada2 === "pedra" && jogada1 === "tesoura"){
    console.log("Jogador 2 venceu")
} else if(jogada2 === "papel" && jogada1 === "pedra"){
    console.log("Jogador 2 venceu")
} else if(jogada2 === "tesoura" && jogada1 === "papel"){
    console.log("Jogador 2 venceu")
}