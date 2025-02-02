import _ from 'underscore';
import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from './usecases/index';


let deck = [];

const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['J', 'Q', 'K', 'A']

//Puntos
let puntosJugadores = [];

// Referencias
const btnNuevo = document.querySelector('#nuevo-juego'),
    btnPedir = document.querySelector('#pedir-carta'),
    btnDetener = document.querySelector('#detener');

const lblPuntos = document.querySelectorAll('small'),
    divCartas = document.querySelectorAll('.div-cartas');


//Iniciar Juego
const iniciarJuego = (numJugadores = 2) => {
    puntosJugadores = [];

    deck = crearDeck(tipos, especiales);
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0)
    }

    //Reiniciar cartas
    divCartas.forEach(elem => elem.innerText = '');

    //Reiniciar puntajes
    lblPuntos.forEach(elem => elem.innerText = 0);

    //Activar botones
    btnPedir.disabled = false;
    btnDetener.disabled = false;
};


//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, deck);
    } else if (puntosJugador == 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosJugadores, deck)
});

btnNuevo.addEventListener('click', () => {
    //Reiniciar
    iniciarJuego();
})
