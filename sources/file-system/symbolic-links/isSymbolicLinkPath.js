/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/symbolic-links/isSocketPath
 * @description Export function to validate if a value is a symbolic links path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isSymbolicLinkPath } from 'itee-validators'
 *
 * if( isSymbolicLinkPath( value ) ) {
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
 * Check if given path is a symbolic link path
 *
 * @param path {string|Buffer|URL} The data to check against the symbolic link path type
 * @returns {boolean} true if path is a symbolic link path, false otherwise
 */
export function isSymbolicLinkPath( path ) {
    if ( isNotString( path ) && !( path instanceof Buffer ) && !( path instanceof URL ) ) {
        throw new TypeError( 'Invalid path type! Expect string, buffer or url.' )
    }

    const stat = statSync( path, { throwIfNoEntry: false } )
    return isDefined( stat ) && stat.isSymbolicLink()
}

/**
 * Check if given path is not a symbolic link path
 *
 * @param path {string|Buffer|URL} The data to check against the symbolic link path type
 * @returns {boolean} true if path is not a symbolic link path, false otherwise
 */
export function isNotSymbolicLinkPath( path ) {
    return !isSymbolicLinkPath( path )
}
