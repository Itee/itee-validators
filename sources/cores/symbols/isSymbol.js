/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * Check if given data is a symbol
 * @param data
 * @returns {boolean|*} true if data is a symbol, false otherwise.
 */
export function isSymbol ( data ) {
    return (typeof data === 'symbol')
}

/**
 * Check if given data is not a symbol
 * @param data
 * @returns {boolean|*} true if data is not a symbol, false otherwise.
 */
export function isNotSymbol ( data ) {
    return !isSymbol( data )
}

//OR faster... //TODO BENCH THEM
/**
 * Check if given data is not a symbol
 * @param data
 * @returns {boolean|*} true if data is not a symbol, false otherwise.
 */
export function isNotSymbol2 ( data ) {
    return (typeof data !== 'symbol')
}

