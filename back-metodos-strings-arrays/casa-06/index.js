const cpf = "12345678900";
const cnpj = "12345678000199";

function formatarCpf (nCpf) {
    if(nCpf.length != 11){
        console.log("CPF inválido")
    } else {    
    nCpf = nCpf.toString();
    return console.log(nCpf.slice(0,3) + "." + nCpf.slice(3,6) + "." + nCpf.slice(6,9) + "-" + nCpf.slice(9));
}
}

function formatarCnpj(nCnpj) {
    if(nCnpj.length != 14){
        console.log("CNPJ inválido");
    } else { 
        nCnpj = nCnpj.toString();
        return console.log(nCnpj.slice(0,2) + "." + nCnpj.slice(2,5) + "." + nCnpj.slice(5,8) + "/" + nCnpj.slice(8,12) + "-" + nCnpj.slice(12));
    }
}
formatarCpf(cpf);
formatarCnpj(cnpj);