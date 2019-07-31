/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/typed_arrays/isInt32Array
 * @desc Export function to validate if a value is a int 32 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a int 32 array
 *
 * @param data {*} The data to check against the int 32 array  type
 * @returns {boolean} true if data is a int 32 array , false otherwise.
 */
export function isInt32Array ( data ) {
    return ( data instanceof Int32Array )
}

/**
 * Check if given data is not a int 32 array
 *
 * @param data {*} The data to check against the int 32 array  type
 * @returns {boolean} true if data is not a int 32 array , false otherwise.
 */
export function isNotInt32Array ( data ) {
    return !isInt32Array( data )
}
