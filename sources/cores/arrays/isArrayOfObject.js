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

/**
 *
 * @param data
 * @return {boolean}
 */
export function isArrayOfObject ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotObject( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 *
 * @param data
 * @return {boolean}
 */
export function isNotArrayOfObject ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isObject( data[ index ] ) ) {
            return false
        }
    }

    return true

}
