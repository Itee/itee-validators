/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/functions
 * @desc Export function to validate if a value is a function or not
 * @example todo
 *
 */

/**
 * Check if given data is a function
 *
 * @param data {*} The data to check against the functionality
 * @returns {boolean} true if data is a function, false otherwise.
 */
export function isFunction ( data ) {
    return (typeof data === 'function')
}
