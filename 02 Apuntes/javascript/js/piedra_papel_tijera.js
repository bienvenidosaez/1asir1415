function comparar(eleccion1, eleccion2){
    
    if(eleccion1 == 'piedra' || eleccion1 == 'papel' || eleccion1 == 'tijera'){

        if(eleccion1===eleccion2){
            return '¡Es un empate!';
        }else if(eleccion1 === 'piedra'){
            if(eleccion2 === 'tijera'){
                return 'gana priedra';
            }else{
                return 'gana papel';
            }
        }else if(eleccion1 === 'papel'){
            if(eleccion2 ==='tijera'){
                return 'gana tijera';
            }else{
                return 'gana papel';
            }   
        }else{
            if(eleccion2 === 'papel'){
                return 'gana tijera';
            }else{
                return 'gana piedra';
            }
        }
    }else{
        return 'No ha escogido una opción correcta.';
    }
    
}//Fin de la función



var usuarioElige = prompt("piedra, papel o tijera?");

var computadoraElige = Math.random();
if (computadoraElige <0.34){
    computadoraElige = "piedra";
}else if(computadoraElige <=0.67){
    computadoraElige = "papel";
}else{
    computadoraElige = "tijera";
}

console.log('Yo he escogido ' + usuarioElige + ' y la máquina ha escogido ' + computadoraElige);

var resultado = comparar(usuarioElige, computadoraElige);
console.log(resultado);

