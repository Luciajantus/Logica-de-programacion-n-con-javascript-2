let numeroSecreto = generarNumeroSecreto(); // se llama a la función para generar el número secreto y se guarda en una variable
let intentos = 1; // variable que guarda la cantidad de intentos del usuario, se inicializa en 1 porque el usuario ya ha hecho un intento al cargar la página
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
function verificarIntento() { // función que se ejecuta cuando el usuario hace clic en el botón "Verificar"   
    let numeroUsuario = parseInt(document.getElementById(`valorUsuario`).value); // se obtiene el valor del input del usuario, se encuentra en la caja de texto del HTML
    
    console.log(intentos); // se imprime en la consola la cantidad de intentos del usuario, para ver si se incrementa correctamente
    if (numeroUsuario === numeroSecreto) { // se compara el número del usuario con el número secreto
        asignarTextoElemento(`p`, `¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos ===1) ? `vez` : `veces`}`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento(`p`, `El número secreto es mayor. Intenta de nuevo.`);
        } else {
            asignarTextoElemento(`p`, `El número secreto es menor. Intenta de nuevo.`);
        }
        intentos++; // se incrementa la cantidad de intentos del usuario
    }
    return; // se usa el return para que la función no retorne nada, es una buena práctica
}

asignarTextoElemento(`h1`, `Juego del número secreto`); // se llama a la función con los parámetros necesarios
asignarTextoElemento(`p`, `Adivina el número entre 1 y 10`); // se llama a la función con los parámetros necesarios

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; // se genera un número aleatorio entre 1 y 10
    return numeroSecreto; // se retorna el número secreto para que pueda ser usado en otras partes del código
}











