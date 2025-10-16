/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/typed-arrays/isBigInt64Array
 * @desc Export function to validate if a value is a big int 64 array buffer
 * @example
 *
 * import { isBigInt64Array } from 'itee-validators'
 *
 * if( isBigInt64Array( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a big int 64 array
 *
 * @param data {*} The data to check against the big int 64 array type
 * @returns {boolean} true if data is a big int 64 array, false otherwise.
 */
export function isBigInt64Array( data ) {
    return ( data instanceof BigInt64Array )
}

/**
 * Check if given data is not a big int 64 array
 *
 * @param data {*} The data to check against the big int 64 array type
 * @returns {boolean} true if data is not a big int 64 array, false otherwise.
 */
export function isNotBigInt64Array( data ) {
    return !isBigInt64Array( data )
}
