const texto = "O rato roeu a roupa do rei de Roma";

function urlFormato (url){
  const array = url.split(" ");
  console.log(array.join("-")); 
}

urlFormato(texto);