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
 * Check if the given data is an integer number
 *
 * @param data {*} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
export function isInteger ( data ) {
    return Number.isInteger(data)
}

// #if IS_REMOVE
export function isInteger_0 ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

export function isInteger_1 ( data ) {
    return data % 1 === 0
}

export function isInteger_2 ( n ) {
    return n === +n && n === (n | 0)
}

export function isInteger_3 ( nVal ) {
    return typeof nVal === 'number' && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal
}
// #endif
