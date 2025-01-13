const cpf = "12345678900";
const cnpj = "12345678900";

function formatarCpf (nCpf) {
    if(nCpf.length != 11){
        console.log("CPF inválido")
    } else {    
    nCpf = nCpf.toString();
    return console.log(nCpf.slice(0,3) + "." + nCpf.slice(3,6) + "." + nCpf.slice(6,9) + "-" + nCpf.slice(9));
}
}


formatarCpf(cpf);