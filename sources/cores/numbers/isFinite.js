/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isInfinite
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a finite number
 *
 * @param data {*} The data to check against the finite state
 * @returns {boolean} true if data is finite, false otherwise
 */
export function isFinite ( data ) {
    return Number.isFinite( data )
}
