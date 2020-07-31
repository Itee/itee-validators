/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/fifo-pipes/isValidFIFOPath
 * @description Export function to validate if a value is a valid fifo pipes path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isValidFIFOPath } from 'itee-validators'
 *
 * if( isValidFIFOPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { isValidPath } from '../paths/isValidPath'
import { isFIFOPath }  from './isFIFOPath'

/**
 * Check if given data is a valid fifo path
 *
 * @param data {*} The data to check against the fifo path type
 * @returns {boolean} true if data is a valid fifo path, false otherwise
 */
export function isValidFIFOPath ( data ) {
    return ( isValidPath( data ) && isFIFOPath( data ) )
}

/**
 * Check if given data is an invalid fifo path
 *
 * @param data {*} The data to check against the fifo path type
 * @returns {boolean} true if data is an invalid fifo path, false otherwise
 */
export function isInvalidFIFOPath ( data ) {
    return !isValidFIFOPath( data )
}
