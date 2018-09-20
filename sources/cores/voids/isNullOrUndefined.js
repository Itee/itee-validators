/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/voids
 * @desc Export function to validate if a value is a void
 * @example todo
 *
 */

/**
 * Check if given data is null or undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
export function isNullOrUndefined ( data ) {
    return ((data === null) || (typeof data === 'undefined'))
}
