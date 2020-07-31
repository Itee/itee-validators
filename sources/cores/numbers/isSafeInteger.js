/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isSafeInteger
 * @desc Export function to validate if a value is a safe integer number
 * @example
 *
 * import { isMaxSafeInteger } from 'itee-validators'
 *
 * if( isMaxSafeInteger( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is a maximum safe integer number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a maximum safe integer, false otherwise
 */
export function isMaxSafeInteger ( data ) {
    return ( data === Number.MAX_SAFE_INTEGER )
}
// Todo: Neg

/**
 * Check if the given data is a minimum safe integer number
 *
 * @param data {*} The data to check against the minimum safe integer state
 * @returns {boolean} true if data is a minimum safe integer, false otherwise
 */
export function isMinSafeInteger ( data ) {
    return ( data === Number.MIN_SAFE_INTEGER )
}
// Todo: Neg
