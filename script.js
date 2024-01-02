
// Aca el juego selecciona un numero al azar 
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado() {
    intentos ++;
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un número valido entre el 1 y el 100'
        mensaje.style.color = "black"
        return
    }
    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "Felicitaciones!! Has adivinado el número!"
        mensaje.style.color = "green"
        numeroEntrada.disable = true;
    } else if (numeroIngresado < numeroAzar){
        mensaje.textContent = "Más alto! El número es mayor al ingresado!"
        mensaje.style.color = "red"
    } else {
        mensaje.textContent = "Más bajo! El número es menor al ingresado"
        mensaje.style.color = "red"
    }


}













//Esta accion se va ejecutar cuando se toque el boton chequear