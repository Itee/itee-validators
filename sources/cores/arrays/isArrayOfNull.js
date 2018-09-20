/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module cores/arrays
 * @desc Export function to validate if a value is an array of array or not
 * @example todo
 *
 */

import { isEmptyArray } from './isEmptyArray'
import { isNotArray }   from './isNotArray'
import { isNotNull }    from '../voids/isNotNull'

/**
 * Check if given data is not an empty array where all values are null
 *
 * @param data {*} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
 */
export function isArrayOfNull ( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotNull( data[ index ] ) ) {
            return false
        }
    }

    return true

}
