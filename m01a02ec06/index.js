//Calcular o IMC.
// I = P/A ; P = peso, A = altura.
let peso = 76;
let altura = 1.79;
let alturaAoQuadrado = Math.pow(altura, 2);
let i = peso / alturaAoQuadrado;
console.log(`IMC é igua a: ${i}`);