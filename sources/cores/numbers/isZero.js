/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isZero
 * @desc Export function to validate if a value is zero, with a special sign
 * @example
 *
 * import { isZero } from 'itee-validators'
 *
 * if( isZero( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is zero
 *
 * @param data {*} The data to check against the zero value
 * @returns {boolean} true if data is zero, false otherwise
 */
export function isZero ( data ) {
    return ( data === 0 )
}

/**
 * Check if the given data is a positive zero
 *
 * @param data {*} The data to check against the positive zero value
 * @returns {boolean} true if data is a positive zero, false otherwise
 */
export function isZeroPositive ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}

/**
 * Check if the given data is a negative zero
 *
 * @param data {*} The data to check against the negative zero value
 * @returns {boolean} true if data is a negative zero, false otherwise
 */
export function isZeroNegative ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.NEGATIVE_INFINITY )
}
