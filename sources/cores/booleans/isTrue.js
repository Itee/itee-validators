/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isBoolean } from './isBoolean'

export function isTrue ( value ) {
    return ( isBoolean( value ) && ( value === true ) )
}

export function isFalse ( value ) {
    return ( isBoolean( value ) && ( value === false ) )
}
