/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNotArray }  from './isNotArray'
import { isUndefined } from '../voids/_voids'

/**
 * Check if given data is not an empty array where all values are defined
 *
 * @param data {any} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are defined, false otherwise
 */
export function isNotArrayOfUndefined ( data ) {

    if ( isNotArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( isUndefined( data[ index ] ) ) {
            return true
        }
    }

    return false

}
