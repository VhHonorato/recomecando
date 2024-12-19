

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
    }
 
}
// carro.ligar();
carro.desligar();
console.log(carro.ligado);
console.log(carro.velocidade);