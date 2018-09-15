/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/booleans
 * @description Export the validation methods about booleans
 *
 */

/**
 * Check if given data is a boolean
 *
 * @param data {any} The data to check against the booleaness
 * @returns {boolean} true if data is a boolean, false otherwise.
 */
export function isBoolean ( data ) {
    return (typeof data === 'boolean')
}

// #if IS_REMOVE
export function isBoolean_alt ( value ) {

    return typeof value === 'boolean' || (typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean')

}
// #endif

/**
 * Check if given data is not a boolean
 *
 * @param data {any} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
export function isNotBoolean ( data ) {
    return (typeof data !== 'boolean')
}

// #if IS_REMOVE
export function isNotBoolean_negbase ( data ) {
    return !isBoolean( data )
}
// #endif
