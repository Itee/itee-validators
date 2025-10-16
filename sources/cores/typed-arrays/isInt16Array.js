/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isInt16Array
 * @desc Export function to validate if a value is a int 16 array buffer
 * @example
 *
 * import { isInt16Array } from 'itee-validators'
 *
 * if( isInt16Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a int 16 array
 *
 * @param data {*} The data to check against the int 16 array  type
 * @returns {boolean} true if data is a int 16 array , false otherwise.
 */
export function isInt16Array( data ) {
    return ( data instanceof Int16Array )
}

/**
 * Check if given data is not a int 16 array
 *
 * @param data {*} The data to check against the int 16 array  type
 * @returns {boolean} true if data is not a int 16 array , false otherwise.
 */
export function isNotInt16Array( data ) {
    return !isInt16Array( data )
}
