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
 * Check if given data is null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
export function isNull ( data ) {
    return (data === null)
}
