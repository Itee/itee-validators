/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isUndefined
 * @desc Export the validation methods about the undefiness
 *
 */

/**
 * Check if given data is undefined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
export function isUndefined ( data ) {
    return (typeof data === 'undefined')
}

/**
 * Check if given data is defined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is defined, false otherwise.
 */
export function isNotUndefined ( data ) {
    return (typeof data !== 'undefined')
}
