/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isUint8ClampedArray
 * @desc Export function to validate if a value is a unsigned clamped int 8 array buffer
 * @example todo
 *
 */

/**
 * Check if given data is a unsigned clamped int 8 array
 *
 * @param data {*} The data to check against the unsigned clamped int 8 array  type
 * @returns {boolean} true if data is a unsigned clamped int 8 array , false otherwise.
 */
export function isUint8ClampedArray ( data ) {
    return ( data instanceof Uint8ClampedArray )
}

/**
 * Check if given data is not a unsigned clamped int 8 array
 *
 * @param data {*} The data to check against the unsigned clamped int 8 array  type
 * @returns {boolean} true if data is not a unsigned clamped int 8 array , false otherwise.
 */
export function isNotUint8ClampedArray ( data ) {
    return !isUint8ClampedArray( data )
}
