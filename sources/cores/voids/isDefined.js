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
 * Check if given data is not null and not undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
export function isDefined ( data ) {
    return ((data !== null) && (typeof data !== 'undefined'))
}
