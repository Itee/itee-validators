/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isMax
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is a maximum safe integer number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a maximum safe integer, false otherwise
 */
export function isMaxSafeInteger ( data ) {
    return (data === Number.MAX_SAFE_INTEGER)
}

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {any} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
export function isMaxPositive ( data ) {
    return (data === Number.MAX_VALUE)
}

/**
 * Check if the given data is a maximum negative number
 *
 * @param data {any} The data to check against the maximum infinite state
 * @returns {boolean} true if data is negative maximum, false otherwise
 */
export function isMaxNegative ( data ) {
    return (data === -Number.MAX_VALUE)
}
