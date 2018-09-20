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
import { isNotNull }    from '../voids/isNotNull'


/**
 * Check if given data is not an empty array where all values are not null
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are not null, false otherwise
 */
export function isNotArrayOfNull ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNull( data[ index ] ) ) {
            return true
        }
    }

    return false

}
