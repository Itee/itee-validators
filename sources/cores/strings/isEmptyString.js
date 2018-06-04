/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

// Alternative to
//
//  if( isString( data ) && isEmpty( data ) ) {
//      //...foo
//  } else {
//      //...bar
//  }
//
//  instead of
//
//  if( isEmptyString( data ) ) {
//      //...foo
//  } else {
//      //...bar
//  }
//

import {
    isString,
    isNotString
} from './isString'

/**
 * Check if given data is an empty string
 * @param data
 * @returns {boolean|*} true if data is an empty string, false otherwise.
 */
export function isEmptyString ( data ) {

    console.assert( isString( data ), 'Expect a string !' )

    return (isString( data ) && data.length === 0)
}

/**
 * Check if given data is not an empty string
 * @param data
 * @returns {boolean|*} true if data is not an empty string, false otherwise.
 */
export function isNotEmptyString ( data ) {

    if ( isNotString( data ) ) {
        throw new TypeError( 'Expect a string !' )
    }

    return (data.length > 0)
}

export function isNotEmptyString_ ( data ) {
    return (isString( data ) && data.length > 0)
}
