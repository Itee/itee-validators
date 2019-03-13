/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/booleans
 * @desc Export function to validate if a value is a boolean or not
 * @example todo
 *
 */

/**
 * Check if given data is a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is a boolean, false otherwise.
 */
export function isBoolean ( data ) {
    return ( typeof data === 'boolean' )
}

// #if IS_REMOVE
export function isBoolean_alt ( value ) {
    return typeof value === 'boolean' || ( typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean' )
}

// #endif

//////

/**
 * Check if given data is not a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
export function isNotBoolean ( data ) {
    return ( typeof data !== 'boolean' )
}

// #if IS_REMOVE
export function isNotBoolean_negbase ( data ) {
    return !isBoolean( data )
}

// #endif
