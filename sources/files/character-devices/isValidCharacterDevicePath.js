/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isValidPath }           from '../paths/isValidPath'
import { isCharacterDevicePath } from './isCharacterDevicePath'

export function isValidCharacterDevicePath ( path ) {
    return ( isValidPath( path ) && isCharacterDevicePath( path ) )
}

export function isInvalidCharacterDevicePath ( path ) {
    return !isValidCharacterDevicePath( path )
}
