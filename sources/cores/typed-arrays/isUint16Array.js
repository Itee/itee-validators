/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint16Array
 * @desc Export function to validate if a value is a unsigned int 16 array buffer
 * @example
 *
 * import { isUint16Array } from 'itee-validators'
 *
 * if( isUint16Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a unsigned int 16 array
 *
 * @param data {*} The data to check against the unsigned int 16 array  type
 * @returns {boolean} true if data is a unsigned int 16 array , false otherwise.
 */
export function isUint16Array( data ) {
    return ( data instanceof Uint16Array )
}

/**
 * Check if given data is not a unsigned int 16 array
 *
 * @param data {*} The data to check against the unsigned int 16 array  type
 * @returns {boolean} true if data is not a unsigned int 16 array , false otherwise.
 */
export function isNotUint16Array( data ) {
    return !isUint16Array( data )
}
