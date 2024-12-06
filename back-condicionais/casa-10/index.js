//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorDoProdutoNoCredito = valorDoProduto - (valorDoProduto * 0,05);
let valorDoProdutoNoCheque = valorDoProduto - (valorDoProduto * 0,03);
let valorDoProdutoNoDinOuDeb = valorDoProduto - (valorDoProduto * 0,10);

if(tipoDePagamento === "credito"){
    
}