const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


const frutasA = frutas.reverse().join(", ");
console.log(frutasA);

const frutasB = frutas.reverse().slice(1);
frutasB.splice(frutasB.length - 1,1,"Melão");
console.log(frutasB);