/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isMin
 * @desc Export function to validate if a value is a minimum javascript number
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
 * Check if the given data is a minimum positive number
 *
 * @param data {*} The data to check against the positive minimum state
 * @returns {boolean} true if data is positive minimum, false otherwise
 */
export function isMinPositive( data ) {
    return ( data === Number.MIN_VALUE )
}

/**
 * Check if the given data is a minimum negative number
 *
 * @param data {*} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
export function isMinNegative( data ) {
    return ( data === -Number.MIN_VALUE )
}
