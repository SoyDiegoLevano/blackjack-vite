/**
 * Función para recortar el último ítem del deck y enviar el elemento recortado.
 * @param {Array<String>} deck Ejemplo: ['10H','5S','JC','AD',...]
 * @returns {String} Retorna último ítem del deck.
 */

export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0) {
        throw 'No hay más cartas en el Deck';
    } 
    return deck.pop();
};

export default pedirCarta;