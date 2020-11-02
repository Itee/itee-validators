/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isArrayBuffer
 * @desc Export function to validate if a value is a array buffer
 * @example
 *
 * import { isArrayBuffer } from 'itee-validators'
 *
 * if( isArrayBuffer( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a array buffer
 *
 * @param data {*} The data to check against the array buffer type
 * @returns {boolean} true if data is a array buffer, false otherwise.
 */
export function isArrayBuffer ( data ) {
    return ( data instanceof ArrayBuffer )
}

/**
 * Check if given data is not a array buffer
 *
 * @param data {*} The data to check against the array buffer type
 * @returns {boolean} true if data is not a array buffer, false otherwise.
 */
export function isNotArrayBuffer ( data ) {
    return !isArrayBuffer( data )
}
