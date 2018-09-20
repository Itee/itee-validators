/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array or not
 * @example
 *
 * import { isArray } from 'itee-validators'
 *
 * if( isArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is an array
 *
 * @param data {*} The data to check against the array type
 * @returns {boolean} true if data is array, false otherwise
 */
export function isArray ( data ) {
    return Array.isArray( data )
}

// #if IS_REMOVE

// Not exported alternative for benchmark
export function isArray_0 ( data ) {
    return data instanceof Array
}

// Not exported alternative for benchmark
export function isArray_1 ( data ) {
    return data.constructor === Array
}

// #endif
