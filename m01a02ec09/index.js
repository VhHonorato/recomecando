//M: montante (o capital acrescido dos juros, ou seja, Capital + Juros)
//C: capital (valor inicial de uma dívida, empréstimo ou investimento)
//i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
//t: período de tempo
// M = C (1+i)ˆt
// C = 1000
//i = 0,125
//t = 5
let capital = 1000, taxa = 0.125, tempo = 5;

let montante = capital * Math.pow((1+taxa), tempo);
console.log(`O montande ao capital aplicado a uma taxa de 12,5% será de:R$${Math.round(montante)},00`);