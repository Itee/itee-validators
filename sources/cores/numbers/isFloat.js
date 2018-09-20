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
 * Check if given data is a floating point number
 *
 * @param data {any} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
export function isFloat ( data ) {
    return data % 1 !== 0
}

// #if IS_REMOVE
export function isFloat_1 ( n ) {
    return n === +n && n !== (n | 0)
}

export function isFloat_2 ( x ) {
    return !!(x % 1)
}

// #endif
