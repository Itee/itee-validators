/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/symbols/isSymbol
 * @desc Export function to validate if a value is a symbol
 * @example
 *
 * import { isSymbol } from 'itee-validators'
 *
 * if( isSymbol( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is a symbol, false otherwise.
 */
export function isSymbol ( data ) {
    return ( typeof data === 'symbol' )
}

/**
 * Check if given data is not a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is not a symbol, false otherwise.
 */
export function isNotSymbol ( data ) {
    return ( typeof data !== 'symbol' )
}
