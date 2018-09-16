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
 *
 * @param data {any} The data to check against the symbol type
 * @returns {boolean} true if data is a symbol, false otherwise.
 */
export function isSymbol ( data ) {
    return (typeof data === 'symbol')
}
