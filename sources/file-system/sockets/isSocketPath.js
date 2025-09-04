/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/sockets/isSocketPath
 * @description Export function to validate if a value is a socket path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isSocketPath } from 'itee-validators'
 *
 * if( isSocketPath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import fs from 'fs'
import { isDefined } from '../../cores/voids/isDefined'
import {isNotString} from '../../cores/strings/isString';

/**
 * Check if given path is a socket path
 *
 * @param path {string|Buffer|URL} The data to check against the socket path type
 * @returns {boolean} true if path is a socket path, false otherwise
 */
export function isSocketPath ( path ) {
    if( isNotString(path) && !(path instanceof  Buffer) && !(path instanceof URL) ) {
        throw new TypeError('Invalid path type! Expect string, buffer or url.')
    }

    const stat = fs.statSync( path, { throwIfNoEntry: false } )
    return isDefined(stat) && stat.isSocket()
}

/**
 * Check if given path is not a socket path
 *
 * @param path {string|Buffer|URL} The data to check against the socket path type
 * @returns {boolean} true if path is not a socket path, false otherwise
 */
export function isNotSocketPath ( path ) {
    return !isSocketPath( path )
}
