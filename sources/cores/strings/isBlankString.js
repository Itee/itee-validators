/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import {
    isEmptyString,
    isNotEmptyString
} from './isEmptyString'

export function isBlankString ( data ) {

    if ( isEmptyString( data ) ) {
        throw new TypeError( 'Expect a non empty string !' )
    }

    return ( !/\S/.test( data ) )
}

export function isBlankString_ ( data ) {
    return ( isNotEmptyString( data ) && !/\S/.test( data ) )
}

export function isNotBlankString ( data ) {
    return ( isNotEmptyString( data ) && /\S/.test( data ) )
}
