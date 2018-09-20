/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/symbols
 * @desc Export function to validate if a value is a symbol
 * @example todo
 *
 */

/**
 * Check if given data is not a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is not a symbol, false otherwise.
 */
export function isNotSymbol ( data ) {
    return (typeof data !== 'symbol')
}
