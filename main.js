let listaPreguntas = ["Como se llama el desarrollador de esta app?", "Cuantos años tiene el desarrollador?", "Jorge el culiao?"];

let respuestasPos0 = ["Facundo", "Juan", "Sergio"];
let respuestasPos1 = ["12", "20", "15"];
let respuestasPos2 = ["Si po", "No", "Si"];



function agarrarPregunta(lista){
    return lista[numeroRandom(3)];
}


function numeroRandom(max) {

    return Math.floor(Math.random() * max);

  }



function cambiarColorVerde(elem){
    elem.style.backgroundColor = 'green';

}

function cambiarColorRojo(elem){
    elem.style.backgroundColor = 'red';


}

function cambiarPregunta(){

    const pregunta = document.getElementById('preg');

    const respuesta1 = document.getElementById('rta1');

    const respuesta2 = document.getElementById('rta2');

    const respuesta3 = document.getElementById('rta3');

    let preguntaFinal = agarrarPregunta(listaPreguntas);

    if (preguntaFinal == listaPreguntas[0]) {
        respuesta1.innerText = respuestasPos0[0];
        respuesta2.innerText = respuestasPos0[1];
        respuesta3.innerText = respuestasPos0[2];
        
    }
    else if(preguntaFinal == listaPreguntas[1]){
        respuesta1.innerText = respuestasPos1[0];
        respuesta2.innerText = respuestasPos1[1];
        respuesta3.innerText = respuestasPos1[2];
    }

    else{
        respuesta1.innerText = respuestasPos2[0];
        respuesta2.innerText = respuestasPos2[1];
        respuesta3.innerText = respuestasPos2[2];
    }

    pregunta.innerText = preguntaFinal;


    respuesta1.parentNode.style.backgroundColor = 'black';
    
    respuesta2.parentNode.style.backgroundColor = 'black';
    respuesta3.parentNode.style.backgroundColor = 'black';
}


function controlar(elem){
    
    const preguntaActual = document.getElementById('preg');
    console.log(preguntaActual);
    console.log(elem);
    const caja1 = document.getElementById('respuestaUno');
    const caja2 = document.getElementById('respuestaDos');
    const caja3 = document.getElementById('respuestaTres');


    if (preguntaActual.textContent == listaPreguntas[0]) {
        if (elem.textContent == respuestasPos0[0]){
            cambiarColorVerde(elem.parentNode);

            sumarAcierto();
            
            setTimeout(cambiarPregunta,3000);
        }
        else{
            cambiarColorRojo(elem.parentNode);

            setTimeout(cambiarPregunta, 3000);
        }
        
    }

    if (preguntaActual.textContent == listaPreguntas[1]) {
        if (elem.textContent == respuestasPos1[1]){
            cambiarColorVerde(pelem.parentNode);

            sumarAcierto();
            
            setTimeout(cambiarPregunta,3000);
        }
        else{
            cambiarColorRojo(elem.parentNode);

            setTimeout(cambiarPregunta, 3000);
        }
        
    }

    if (preguntaActual.textContent == listaPreguntas[2]) {
        if (elem.textContent == respuestasPos2[0]){
            cambiarColorVerde(elem.parentNode);

            sumarAcierto();
            
            setTimeout(cambiarPregunta,3000);
        }
        else{
            cambiarColorRojo(elem.parentNode);

            setTimeout(cambiarPregunta, 3000);
        }
        
    }

   
}


function sumarAcierto(){
    const aciertos = document.getElementById('aciertosNum');
    aciertos.textContent++;
}

