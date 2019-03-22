/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isValidPath } from '../paths/isValidPath'
import { isFIFOPath }  from './isFIFOPath'

export function isValidFIFOPath ( path ) {
    return ( isValidPath( path ) && isFIFOPath( path ) )
}

export function isInvalidFIFOPath ( path ) {
    return !isValidFIFOPath( path )
}
