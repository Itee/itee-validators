/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfString
 * @desc Export function to validate if a value is an array of string or not
 * @example
 *
 * import { isArrayOfString } from 'itee-validators'
 *
 * if( isArrayOfString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isNotString }  from '../strings/isString.js'
import { isNotArray }   from './isArray.js'
import { isEmptyArray } from './isEmptyArray.js'

/**
 * Check if given data is not an empty array where all values are string
 *
 * @param data {*} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
 */
export function isArrayOfString( data ) {

    if ( isNotArray( data ) ) { return false }
    if ( isEmptyArray( data ) ) { return false }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not string
 *
 * @param data {*} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
 */
export function isNotArrayOfString( data ) {

    if ( isNotArray( data ) ) { return true }
    if ( isEmptyArray( data ) ) { return true }

    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
        if ( isNotString( data[ index ] ) ) {
            return true
        }
    }

    return false

}

// #if IS_KEEP_ON_BUILD

export function isArrayOfString_1( data ) {

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
