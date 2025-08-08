let numeroSecreto = generarNumeroSecreto(); // se llama a la función para generar el número secreto y se guarda en una variable

/* function asignarTextoElemento() {                    IMPORTANTE: aca se muestrann las dos formas de definir una función para cambiar el texto
    let titulo = document.querySelector(`h1`);
    titulo.innerHTML = `Juego del número secreto actualizado`;
} */

function asignarTextoElemento(elemento, texto) { // la función ahora recibe parámetros, para ser lo más reutilizable y genérica posible, por otro lado, no se usan las comillas porque es una variable
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

//CON ESTO PODEMOS SABER SI EL USUARIO ACIERTA O NO Y VER QUE PASA CUANDO ELIGE UN NÚMERO
function verificarIntento() {   
    let numeroUsuario = parseInt(document.getElementById(`valorUsuario`).value); // se obtiene el valor del input del usuario, se encuentra en la caja de texto del HTML
  
    console.typeof numeroUsuario; // se muestra el tipo de dato del número ingresado por el usuario en la consola para propósitos de depuración
    console.log(typeof(numeroSecreto))
      console.log(numeroSecreto)
      console.log(typeof(numeroUsuario)); // se muestra el tipo de dato del número ingresado por el usuario en la consola para propósitos de depuració
    console.log(numeroUsuario); // se muestra el número ingresado por el usuario en la consola para propósitos de depuración
    console.log(numeroUsuario === numeroSecreto); // se muestra en la consola si el número del usuario es igual al número secreto, para propósitos de depuración


    return; // se usa el return para que la función no retorne nada, es una buena práctica

}

asignarTextoElemento(`h1`, `Juego del número secreto`); // se llama a la función con los parámetros necesarios
asignarTextoElemento(`p`, `Adivina el número entre 1 y 10`); // se llama a la función con los parámetros necesarios

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; // se genera un número aleatorio entre 1 y 10
    return numeroSecreto; // se retorna el número secreto para que pueda ser usado en otras partes del código
}









