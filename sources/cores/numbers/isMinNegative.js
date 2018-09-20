/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/numbers/isMin
 * @desc Export function to validate if a value is a finite number
 * @example todo
 *
 */

/**
 * Check if the given data is a minimum negative number
 *
 * @param data {*} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
export function isMinNegative ( data ) {
    return (data === -Number.MIN_VALUE)
}
