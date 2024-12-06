//Importante: Neste exercício, não deveremos utilizar nenhum operador de comparação, nem de igualdade e nem de identidade. Para este exercício deveremos utilizar apenas o conceito de truthiness.

const primeiroNome = "Mario";
const sobrenome = "Andrade";
const apelido = "Bigode";

if(!primeiroNome){
    console.log("Preenchimento do primeiro nome é obrigatório")
} else if(apelido){
    console.log(apelido)
} else if(primeiroNome){
    console.log(sobrenome ? `${primeiroNome} ${sobrenome}` : primeiroNome)
}