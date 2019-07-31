/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/typed_arrays/isFloat64Array
 * @desc Export function to validate if a value is a float 64 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a float 64 array
 *
 * @param data {*} The data to check against the float 64 array  type
 * @returns {boolean} true if data is a float 64 array , false otherwise.
 */
export function isFloat64Array ( data ) {
    return ( data instanceof Float64Array )
}

/**
 * Check if given data is not a float 64 array
 *
 * @param data {*} The data to check against the float 64 array  type
 * @returns {boolean} true if data is not a float 64 array , false otherwise.
 */
export function isNotFloat64Array ( data ) {
    return !isFloat64Array( data )
}
