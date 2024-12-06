const idade = 70;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = true;


if(idade < 12 || idade > 65){
    console.log("ACESSO NEGADO")
} else if(altura < 150){
    console.log("ACESSO NEGADO")
} else if(possuiPatologia){
    console.log("ACESSO NEGADO")
} else if(ehEstudante){
    console.log("10 REAIS")
} else if(idade < 18){
    console.log("10 REAIS")
} else {
    console.log("20 REAIS")
}
