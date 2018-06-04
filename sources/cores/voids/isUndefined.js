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
 * Check if given data is undefined
 * @param data
 * @returns {boolean|*} true if data is undefined, false otherwise.
 */
export function isUndefined ( data ) {
    return (typeof data === 'undefined')
}

export function isNotUndefined ( data ) {
    return (typeof data !== 'undefined')
}
