function comparar(e_usuario, e_ordenador){
    
    /* 
        La función devolverá:
            - 1 si gana el usuario
            - 2 si es empate
            - 3 si gana el ordenador
    */

    if(e_usuario === e_ordenador){
        return 2;
    }else if(e_usuario === 'piedra'){
        if(e_ordenador === 'tijera'){
            return 1;
        }else{
            return 3;
        }
    }else if(e_usuario === 'papel'){
        if(e_ordenador ==='tijera'){
            return 3;
        }else{
            return 1;
        }   
    }else{
        if(e_ordenador === 'papel'){
            return 1;
        }else{
            return 3;
        }
    }   
}//Fin de la función

function textoResultado(resultado){
    if(resultado === 1){
        return 'Gana el usuario';
    }else if(resultado === 2){
        return 'Ha ocurrido un empate';
    }else{
        return 'Gana la máquina';
    }
}//Fin de la función

function ordenadorElige(){
    var computadoraElige = Math.random();
    if (computadoraElige <0.34){
        computadoraElige = "piedra";
    }else if(computadoraElige <=0.67){
        computadoraElige = "papel";
    }else{
        computadoraElige = "tijera";
    }

    return computadoraElige;
}//Fin de la funcion


//Comienza mi programa

var rondas = 0;
var ganoYo = 0;
var ganaMaquina = 0;
var empates = 0;
var opcionMia = '';
var opcionMaquina = '';
var resultadoRonda = '';

rondas = prompt('Introduce el número de rondas a jugar, mayor que 0');
while(isNaN(rondas) || rondas<=0){
    rondas = prompt('No ha introducido un número correctamente, por favor vuelva a intentarlo');
}


for(var i=0; i<rondas; i++){
    opcionMia = prompt('Elige piedra, papel o tijera');
    while(opcionMia !== 'piedra' && opcionMia !== 'papel' && opcionMia !== 'tijera'){
        opcionMia = prompt('No te enteras, elige piedra, papel o tijera');
    }

    opcionMaquina = ordenadorElige();

    resultadoRonda = comparar(opcionMia, opcionMaquina);

    if(resultadoRonda === 1){
        ganoYo++;
    }else if(resultadoRonda === 2){
        empates++;
    }else{
        ganaMaquina++;
    }
    console.log('Yo he escogido ' + opcionMia + ' la máquina ha escogido ' + opcionMaquina + ' y el resultado es: ' + resultadoRonda);
}


//Una vez terminadas todas las rondas evaluamos los resultados
if(ganoYo > ganaMaquina){
    console.log('He ganado');
}else if(ganoYo === ganaMaquina){
    console.log('Hemos empatado');
}else{
    console.log('Gana la máquina');
}







