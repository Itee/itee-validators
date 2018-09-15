/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/functions
 * @description Export the validation methods about functions
 *
 */

/**
 * Check if given data is a function
 *
 * @param data {any} The data to check against the functionality
 * @returns {boolean} true if data is a function, false otherwise.
 */
export function isFunction ( data ) {
    return (typeof data === 'function')
}

/**
 * Check if given data is not a function
 *
 * @param data {any} The data to check against the functionality
 * @returns {boolean} true if data is not a function, false otherwise.
 */
export function isNotFunction ( data ) {
    return (typeof data !== 'function')
}
