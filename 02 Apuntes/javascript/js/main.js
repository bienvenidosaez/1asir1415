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

var base = prompt('Introduce la base del triángulo.');
var altura = prompt('Introduce la altura del triángulo.');
var area = areaTriangulo(base, altura);
if(area === false){
  console.log('No has introducido un número correctamente.');
}else{
  console.log('El área del triángulo es: ' + area);
}
