/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isEmptyArray } from './isEmptyArray'
import { isNotArray }   from './isNotArray'
import { isNotObject }  from '../objects/isNotObject'

/**
 * Check if given data is an array where all values are of object type
 *
 * @param data {any} The data to check against the array of object type
 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
 */
export function isArrayOfObject ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotObject( data[ index ] ) ) {
            return false
        }
    }

    return true

}
