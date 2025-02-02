import { pedirCarta, crearCarta, acumularPuntos, determinarGanador } from './index';

/**
 * Funcion para empezar el turno de la computadora.
 * @param {Number} puntosMinimos Numero de puntos del turno anterior.
 * @param {Array[Number]} puntosJugadores Array con los puntajes de los jugadores.
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, deck) => {
    let puntosComputador;

    do {
        const carta = pedirCarta(deck);
        puntosComputador = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);
        crearCarta(carta, puntosJugadores.length - 1);
    } while ((puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
};