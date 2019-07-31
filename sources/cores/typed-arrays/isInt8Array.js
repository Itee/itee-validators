/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isInt8Array
 * @desc Export function to validate if a value is a int 8 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a int 8 array
 *
 * @param data {*} The data to check against the int 8 array  type
 * @returns {boolean} true if data is a int 8 array , false otherwise.
 */
export function isInt8Array ( data ) {
    return ( data instanceof Int8Array )
}

/**
 * Check if given data is not a int 8 array
 *
 * @param data {*} The data to check against the int 8 array  type
 * @returns {boolean} true if data is not a int 8 array , false otherwise.
 */
export function isNotInt8Array ( data ) {
    return !isInt8Array( data )
}
