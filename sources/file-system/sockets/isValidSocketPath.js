/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/sockets/isValidSocketPath
 * @description Export function to validate if a value is a valid socket path
 * @example
 *
 * import { isValidSocketPath } from 'itee-validators'
 *
 * if( isValidSocketPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isValidPath }  from '../paths/isValidPath'
import { isSocketPath } from './isSocketPath'

/**
 * Check if given data is a valid socket path
 *
 * @param data {*} The data to check against the socket path type
 * @returns {boolean} true if data is a valid socket path, false otherwise
 */
export function isValidSocketPath ( data ) {
    return ( isValidPath( data ) && isSocketPath( data ) )
}

/**
 * Check if given data is an invalid socket path
 *
 * @param data {*} The data to check against the socket path type
 * @returns {boolean} true if data is an invalid socket path, false otherwise
 */
export function isInvalidSocketPath ( data ) {
    return !isValidSocketPath( data )
}
