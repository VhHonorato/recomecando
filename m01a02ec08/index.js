let verba = 80;
let valorDoTenis = 129.99;
let porcentagemDoDesconto = (((valorDoTenis - verba) * 100) / valorDoTenis);
console.log(`A porcentagem de desconto necessária é, aproximadamente: ${Math.ceil(porcentagemDoDesconto)}%`);
let valorDoDesconto = ((porcentagemDoDesconto / 100) * valorDoTenis);
console.log(`O valor do desconto é: R$${Math.ceil(valorDoDesconto)}`);