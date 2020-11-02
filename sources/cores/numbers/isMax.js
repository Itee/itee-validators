/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isMax
 * @desc Export function to validate if a value is a maximum javascript number
 * @example
 *
 * import { isMaxPositive } from 'itee-validators'
 *
 * if( isMaxPositive( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {*} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
export function isMaxPositive ( data ) {
    return ( data === Number.MAX_VALUE )
}

/**
 * Check if the given data is a maximum negative number
 *
 * @param data {*} The data to check against the maximum infinite state
 * @returns {boolean} true if data is negative maximum, false otherwise
 */
export function isMaxNegative ( data ) {
    return ( data === -Number.MAX_VALUE )
}
