/**
 * Función para valuar una carta y retornar ese valor
 * @param {String} carta Ejemplo: 'KH'
 * @returns {Number} Retorna el valor númerico de la carta
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}

export default valorCarta;