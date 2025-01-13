const comentario = "Essa PANDEMIA é muito perigosa!";
let palavrasProibidas = ["covid", "pandemia"];
function bloquearConteudo(texto) {
    for(let palavra of palavrasProibidas) {
    if (texto.toLowerCase().includes(palavra)){
     return console.log("Comentário bloqueado por conter palavras proibidas!")

    } 

}
    console.log(texto);
}
bloquearConteudo(comentario);