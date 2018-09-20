/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isNotArray } from './isNotArray'
import { isObject } from '../objects/isObject'

/**
 * Check if given data is not an array where all values are of object type
 *
 * @param data {any} The data to check against the array of object type
 * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
 */
export function isNotArrayOfObject ( data ) {

    if ( isNotArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        // Todo: Must be isNotObject because in case we have a single undefined in the array it match
        if ( isObject( data[ index ] ) ) {
            return true
        }
    }

    return false

}
