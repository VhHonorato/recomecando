const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro', 'Aracaju'];
const oitoCaracteres = cidades.filter(x => x.length <= 8);
console.log(oitoCaracteres.join(", "));