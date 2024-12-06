//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorDoProdutoNoCredito = (valorDoProduto - (valorDoProduto * 0.05))/100; // valor em centavos
let valorDoProdutoNoCheque = (valorDoProduto - (valorDoProduto * 0.03))/100; // valor em centavos
let valorDoProdutoNoDinOuDeb = (valorDoProduto - (valorDoProduto * 0.10))/100; // valor em centavos

if(tipoDePagamento === "credito"){
    console.log(`R$${valorDoProdutoNoCredito.toFixed(2)}`)
} else if(tipoDePagamento === "cheque"){
    console.log(`R$${valorDoProdutoNoCheque.toFixed(2)}`)
} else if(tipoDePagamento === "debito" || "dinheiro"){
    console.log(`R$${valorDoProdutoNoDinOuDeb.toFixed(2)}`)
}