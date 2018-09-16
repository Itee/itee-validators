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
import { isNotString } from '../strings/isNotString'

/**
 * Check if given data is not an empty array where all values are string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
 */
export function isArrayOfString ( data ) {

    if ( isNotArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return false
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return false
        }
    }

    return true

}

// #if IS_REMOVE
export function isArrayOfString_1 ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( typeof data[ index ] !== 'string' ) {
            return false
        }
    }

    return true

}
// #endif
