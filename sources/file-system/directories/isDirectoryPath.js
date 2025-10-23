/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isDirectoryPath
 * @description Export function to validate if a value is a directories path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isDirectoryPath } from 'itee-validators'
 *
 * if( isDirectoryPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { statSync }    from 'fs'
import { isNotString } from '../../cores/strings/isString'
import { isDefined }   from '../../cores/voids/isDefined'

/**
 * Check if given path is a directory path
 *
 * @param path {string|Buffer|URL} The data to check against the directory path type
 * @returns {boolean} true if path is a directory path, false otherwise
 */
export function isDirectoryPath( path ) {
    if ( isNotString( path ) && !( path instanceof Buffer ) && !( path instanceof URL ) ) {
        return false
        // throw new TypeError( 'Invalid path type! Expect string, buffer or url.' )
    }

    const stat = statSync( path, { throwIfNoEntry: false } )
    return isDefined( stat ) && stat.isDirectory()
}

/**
 * Check if given path is a not directory path
 *
 * @param path {string|Buffer|URL} The data to check against the directory path type
 * @returns {boolean} true if path is a not directory path, false otherwise
 */
export function isNotDirectoryPath( path ) {
    return !isDirectoryPath( path )
}
