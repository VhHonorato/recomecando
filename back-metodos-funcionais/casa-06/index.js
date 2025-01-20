const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];
let nCep = 11222333;

function buscaPorCep(nCep) {
const endereço = endereços.find(x => x.cep == nCep);
console.log(endereço.rua);
};
buscaPorCep(nCep);