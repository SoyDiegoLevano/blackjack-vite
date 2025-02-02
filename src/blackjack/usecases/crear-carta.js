/**
 * Funcion para crear (añadir) cartas al div del turno perteneciente
 * @param {String} carta String de una carta del deck.
 * @param {Number} turno Turno actual.
 */
export const crearCarta = (carta, turno) => {
    const divCartas = document.querySelectorAll('.div-cartas');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.webp`;
    imgCarta.classList = 'carta';
    divCartas[turno].append(imgCarta);
};