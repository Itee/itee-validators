/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/fifo-pipes/isFIFOPath
 * @description Export function to validate if a value is a fifo pipes path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isFIFOPath } from 'itee-validators'
 *
 * if( isFIFOPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { statSync }    from 'fs'
import { isDefined }   from '../../cores/voids/isDefined'
import { isNotString } from '../../cores/strings/isString'

/**
 * Check if given path is a fifo path
 *
 * @param path {string|Buffer|URL} The data to check against the fifo path type
 * @returns {boolean} true if path is a fifo path, false otherwise
 */
export function isFIFOPath( path ) {
    if ( isNotString( path ) && !( path instanceof Buffer ) && !( path instanceof URL ) ) {
        throw new TypeError( 'Invalid path type! Expect string, buffer or url.' )
    }

    const stat = statSync( path, { throwIfNoEntry: false } )
    return isDefined( stat ) && stat.isFIFO()
}

/**
 * Check if given path is not a fifo path
 *
 * @param path {string|Buffer|URL} The data to check against the fifo path type
 * @returns {boolean} true if path is not a fifo path, false otherwise
 */
export function isNotFIFOPath( path ) {
    return !isFIFOPath( path )
}
