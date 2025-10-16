/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/symbolic-links/isSocketPath
 * @description Export function to validate if a value is a valid symbolic links path
 * @example
 *
 * import { isValidSymbolicLinkPath } from 'itee-validators'
 *
 * if( isValidSymbolicLinkPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isValidPath }        from '../paths/isValidPath'
import { isSymbolicLinkPath } from './isSymbolicLinkPath'

/**
 * Check if given data is a valid symbolic link path
 *
 * @param data {*} The data to check against the symbolic link path type
 * @returns {boolean} true if data is a valid symbolic link path, false otherwise
 */
export function isValidSymbolicLinkPath( data ) {
    return ( isValidPath( data ) && isSymbolicLinkPath( data ) )
}

/**
 * Check if given data is an invalid symbolic link path
 *
 * @param data {*} The data to check against the symbolic link path type
 * @returns {boolean} true if data is an invalid symbolic link path, false otherwise
 */
export function isInvalidSymbolicLinkPath( data ) {
    return !isValidSymbolicLinkPath( data )
}
