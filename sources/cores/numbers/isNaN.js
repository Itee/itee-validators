/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isNumber
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is not a number, false otherwise.
 */
export function isNaN ( data ) {
    return Number.isNaN( data )
}
