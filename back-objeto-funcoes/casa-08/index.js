

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function(){
        if(this.ligado){
          return  console.log("Este carro já está ligado")
        } else{
            this.ligado = true;
            return console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
        }
    },
    desligar: function(){
        if(!this.ligado){
            return console.log("Este carro já está desligado");
        } else {
            this.ligado = false;
            this.velocidade = 0;
            return console.log(`Carro desligado. Velocidade: ${this.velocidade}`)
        }
    },
    acelerar: function(){
        if(!this.ligado){
            return console.log("Não é possivél acelerar um carro desligado")
        } else {
            this.velocidade += 10;
            return console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
        }
    },
    desacelerar: function(){
        if(!this.ligado){
            return console.log("Não é possível desacelerar um carro desligado")
        } else if(this.velocidade > 0){
            this.velocidade -= 10;
            return console.log(`Carro ligado. Velocidade: ${this.velocidade}`)
        }
    }
 
}
carro.ligar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
console.log(carro.ligado);
console.log(carro.velocidade);