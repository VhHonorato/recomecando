const frutas = ["manga", "UVA", "abacaxi", "banaNA", "MAçã", "cAjArANA"];
const novoArray = frutas.map((x, i) => {
    const letraMinuscula = x.toLowerCase();
    const letraMaiuscula = letraMinuscula[0].toUpperCase() + letraMinuscula.slice(1);
    return `${i} - ${letraMaiuscula}` 
});
console.log(novoArray);