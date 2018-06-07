/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/symbols
 * @description Export the validation methods about symbols
 */

/**
 * Check if given data is a symbol
 *
 * @param data {any} The data to check against the symbol type
 * @returns {boolean} true if data is a symbol, false otherwise.
 */
export function isSymbol ( data ) {
    return (typeof data === 'symbol')
}

/**
 * Check if given data is not a symbol
 *
 * @param data {any} The data to check against the symbol type
 * @returns {boolean} true if data is not a symbol, false otherwise.
 */
export function isNotSymbol ( data ) {
    return (typeof data !== 'symbol')
}
