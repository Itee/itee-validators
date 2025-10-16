/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint32Array
 * @desc Export function to validate if a value is a unsigned int 32 array buffer
 * @example
 *
 * import { isUint32Array } from 'itee-validators'
 *
 * if( isUint32Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a unsigned int 32 array
 *
 * @param data {*} The data to check against the unsigned int 32 array  type
 * @returns {boolean} true if data is a unsigned int 32 array , false otherwise.
 */
export function isUint32Array( data ) {
    return ( data instanceof Uint32Array )
}

/**
 * Check if given data is not a unsigned int 32 array
 *
 * @param data {*} The data to check against the unsigned int 32 array  type
 * @returns {boolean} true if data is not a unsigned int 32 array , false otherwise.
 */
export function isNotUint32Array( data ) {
    return !isUint32Array( data )
}
