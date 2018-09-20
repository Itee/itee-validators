/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isArray }    from './isArray'
import { isNotArray } from './isNotArray'


/**
 * Check if given data is not an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an array of array, false otherwise
 */
export function isNotArrayOfArray ( data ) {

    if ( isNotArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( isArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}
