/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isFloat32Array
 * @desc Export function to validate if a value is a float 32 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a float 32 array
 *
 * @param data {*} The data to check against the float 32 array  type
 * @returns {boolean} true if data is a float 32 array , false otherwise.
 */
export function isFloat32Array ( data ) {
    return ( data instanceof Float32Array )
}

/**
 * Check if given data is not a float 32 array
 *
 * @param data {*} The data to check against the float 32 array  type
 * @returns {boolean} true if data is not a float 32 array , false otherwise.
 */
export function isNotFloat32Array ( data ) {
    return !isFloat32Array( data )
}
