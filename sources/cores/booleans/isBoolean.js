/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
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
