/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isBigUint64Array
 * @desc Export function to validate if a value is a big unsigned int 64 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a big unsigned int 64 array
 *
 * @param data {*} The data to check against the big unsigned int 64 array type
 * @returns {boolean} true if data is a big unsigned int 64 array, false otherwise.
 */
export function isBigUint64Array ( data ) {
    return ( data instanceof BigUint64Array )
}

/**
 * Check if given data is not a big unsigned int 64 array
 *
 * @param data {*} The data to check against the big unsigned int 64 array type
 * @returns {boolean} true if data is not a big unsigned int 64 array, false otherwise.
 */
export function isNotBigUint64Array ( data ) {
    return !isBigUint64Array( data )
}
