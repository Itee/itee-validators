/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/booleans/isBoolean
 * @desc Export function to validate if a value is a boolean or not
 * @example
 *
 * import { isBoolean } from 'itee-validators'
 *
 * if( isBoolean( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is a boolean, false otherwise.
 */
export function isBoolean( data ) {
    return ( typeof data === 'boolean' )
}

/**
 * Check if given data is not a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
export function isNotBoolean( data ) {
    return ( typeof data !== 'boolean' )
}

// #if IS_REMOVE_ON_BUILD

export function isBoolean_alt( data ) {
    return typeof data === 'boolean' || ( typeof data === 'object' && data !== null && typeof data.valueOf() === 'boolean' )
}

export function isNotBoolean_negbase( data ) {
    return !isBoolean( data )
}

// #endif
