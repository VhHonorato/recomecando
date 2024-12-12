const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 2, 982];
let numerosPares = 0;

for(numerosPar of numeros) {
    if(numerosPar % 2 === 0){
        numerosPares += numerosPar;
    } 
}
console.log(numerosPares);