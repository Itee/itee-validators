/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

import { isNotObject }  from '../objects/isNotObject'
import { isEmptyArray } from './isEmptyArray'
import { isNotArray }   from './isNotArray'

/**
 * Check if given data is not an array where all values are of object type
 *
 * @param data {*} The data to check against the array of object type
 * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
 */
export function isNotArrayOfObject ( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotObject( data[ index ] ) ) {
            return true
        }
    }

    return false

}
