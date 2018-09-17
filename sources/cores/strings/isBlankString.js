/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNotString }   from './isNotString'

/**
 * Check if the given data is a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
export function isBlankString ( data ) {

    if( isNotString(data) ) {
        return false
    }

    return (!/\S/.test( data ))
}
