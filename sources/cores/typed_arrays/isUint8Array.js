/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/typed_arrays/isUint8Array
 * @desc Export function to validate if a value is a unsigned int 8 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a unsigned int 8 array
 *
 * @param data {*} The data to check against the unsigned int 8 array  type
 * @returns {boolean} true if data is a unsigned int 8 array , false otherwise.
 */
export function isUint8Array ( data ) {
    return ( data instanceof Uint8Array )
}

/**
 * Check if given data is not a unsigned int 8 array
 *
 * @param data {*} The data to check against the unsigned int 8 array  type
 * @returns {boolean} true if data is not a unsigned int 8 array , false otherwise.
 */
export function isNotUint8Array ( data ) {
    return !isUint8Array( data )
}
