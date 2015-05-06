function primo(numero){
  
  var mitad = numero/2;

  for(var i=2; i<=mitad; i++){
    if(numero%i == 0){
      return false;
    }
  }

  return true;
}

var contador = 1;
var encontrados = 0; //Variable que lleva el contador de números primos encontrados

while(encontrados<100){
  
  if(primo(contador)){
    console.log('Hemos encontrado el ' + encontrados +' número primo: ' + contador);
    encontrados++;
  }

  contador++;
}