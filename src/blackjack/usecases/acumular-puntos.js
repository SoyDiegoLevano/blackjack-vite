import { valorCarta } from './index';

/**
 * Funcion para calcular los puntos de un jugador.
 * @param {String} carta Una carta del deck.
 * @param {Number} turno Numero del turno actual.
 * @param {Array[Number]} puntosJugadores Array con los puntajes de todos los jugadores.
 * @returns 
 */
export const acumularPuntos = (carta, turno, puntosJugadores) => {
    const lblPuntos = document.querySelectorAll('small');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    lblPuntos[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
};