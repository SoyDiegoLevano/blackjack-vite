/**
 * Funcion para imprimir en consol el ganador
 * @param {Array[Number]} puntosJugadores Array con los puntajes de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
    setTimeout(() => {
        const [puntosMinimos, puntosComputador] = puntosJugadores;

        if (puntosMinimos > 21) {
            console.warn('Perdiste, Computadora Gana.');
        } else if (puntosComputador > 21) {
            console.warn('Jugador Gana');
        } else if (puntosComputador > puntosMinimos && puntosComputador <= 21) {
            console.warn('Computadora Gana');
        } else if (puntosComputador == puntosMinimos) {
            console.warn('Empate')
        }
    }, 100)
};