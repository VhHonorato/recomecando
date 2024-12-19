

const carro = {
    ligado: true,
    velocidade: 0,
    ligar: function(){
        if(this.ligado){
          return  console.log("Este carro já está ligado")
        } else{
            this.ligado = true;
        }
    }
 
}
carro.ligar();