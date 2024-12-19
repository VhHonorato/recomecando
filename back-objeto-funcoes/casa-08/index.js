

const carro = {
    ligado: false,
    velocidade: 10,
    ligar: function(){
        if(this.ligado){
          return  console.log("Este carro já está ligado")
        } else{
            this.ligado = true;
        }
    },
    desligar: function(){
        if(!this.ligado){
            return console.log("Este carro já está desligado");
        } else {
            this.ligado = false;
            this.velocidade = 0;
        }
    },
    acelerar: function(){
        if(!this.ligado){
            return console.log("Não é possivél acelerar um carro desligado")
        } else {
            this.velocidade += 10;
        }
    }
 
}
// carro.ligar();
// carro.desligar();
carro.acelerar();
console.log(carro.ligado);
console.log(carro.velocidade);