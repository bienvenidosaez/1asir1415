function areaCuadrado(lado){
  lado = parseFloat(lado);
  if(isNaN(lado)){
    return false;
  }else{
    return lado*lado;
  }
}

// var l = prompt('Introduce el tamaño del lado del cuadrado');
// area = areaCuadrado(l);
// if(area === false){
//   console.log('No has introducido un número correctamente.');
// }else{
//   console.log('El área del cuadrado es: ' + area);
// }



/* ============================================= */

function areaTriangulo(b, h){
  b = parseFloat(b);
  h = parseFloat(h);
  if(isNaN(b) || isNaN(h)){
    return false;
  }else{
    return b*h/2;
  }
}

// var base = prompt('Introduce la base del triángulo.');
// var altura = prompt('Introduce la altura del triángulo.');
// var area = areaTriangulo(base, altura);
// if(area === false){
//   console.log('No has introducido un número correctamente.');
// }else{
//   console.log('El área del triángulo es: ' + area);
// }

/* ============================================= */

function areaRombo(dMayor, dMenor){
  dMayor = parseFloat(dMayor);
  dMenor = parseFloat(dMenor);
  if(isNaN(dMayor) || isNaN(dMenor)){
    return false;
  }else{
    return dMayor*dMenor/2;
  }
}

// var diagonalMayor = prompt('Introduce la diagonal mayor del rombo.');
// var diagonalMenor = prompt('Introduce la diagonal menor del rombo.');
// var area = areaRombo(diagonalMayor, diagonalMenor);
// if(area === false){
//   console.log('No has introducido un número correctamente.');
// }else{
//   console.log('El área del rombo es: ' + area);
// }


/* ============================================= */


//Versión con for
// var fin = prompt('Introduce un número mayor que 0');
// fin = parseInt(fin);
// if(isNaN(fin) || fin <= 0){
//   console.log('No has introducido un número correcto');
// }else{
//   for(var i =0; i<=fin; i++){
//     console.log(i);
//   }
// }


//Versión con while
// var fin = prompt('Introduce un número mayor que 0');
// fin = parseInt(fin);
// if(isNaN(fin) || fin <= 0){
//   console.log('No has introducido un número correcto');
// }else{
//   var contador = 0;
//   while(contador<=fin){
//     console.log(contador);
//     contador++;
//   }
// }


//Versión tabla de multiplicar
// var n = prompt('Introduce un número mayor que 0');
// n = parseInt(n);
// if(isNaN(n) || n <= 0){
//   console.log('No has introducido un número correcto');
// }else{
//   for(var i =1; i<=10; i++){
//     console.log(n + '*' + i + '=' + n*i);
//   }
// }


// //Ejercicio de pares entre límites
// var limiteInferior = parseInt(prompt('Introduce el límite inferior'));
// var limiteSuperior = parseInt(prompt('Introduce el límite superior'));

// for(var i =limiteInferior; i<=limiteSuperior; i++){
//   if(i%2 == 0){
//     console.log(i);
//   }
// }


//Ejercicio de divisores entre límites
// var n = parseInt(prompt('Introduce el número del que quieras saber sus divisores'));

// for(var i =1; i<=n/2; i++){
//   if(n%i == 0){
//     console.log(i);
//   }
// }
// console.log(n);


//Ejercicio de calcular si un número es primo
function esPrimo(n){
  for(var i = 2; i<n/2; i++){
    if(n%i ==0){
      return false;
    }
  }
  return true;
}


var n = parseInt(prompt('Introduce el número del que quieras saber sus divisores'));

if(esPrimo(n)){
  console.log('El número es primo');
}else{
  console.log('No es primo');
}
