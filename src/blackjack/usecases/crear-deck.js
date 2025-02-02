import _ from 'underscore';

/**
 * Función para crear y retornar un deck
 * @param {Array<String>} tiposCartas Ejemplo: ['C', 'D', 'H', 'S'] 
 * @param {Array<String>} tiposEspeciales Ejemplo: ['J', 'Q', 'K', 'A']]
 * @returns {Array<String>} retorna un deck de cartas
 */

export const crearDeck = (tiposCartas, tiposEspeciales) => {

    if(!tiposCartas || tiposCartas.length === 0 )
        throw new Error('tiposCartas es un campo obligatorio como un arreglo de string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0 )
        throw new Error('tiposEspeciales es un campo obligatorio como un arreglo de string');

    let deck = []
    for (let tipo of tiposCartas) {
        for (let i = 2; i <= 10; i++) {
            deck.push(i + tipo);
        }
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
};

export default crearDeck;
