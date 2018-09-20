/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/**
 * Check if the given data is an integer number
 *
 * @param data {any} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
export function isInteger ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

// #if IS_REMOVE
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
