/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isFilePath
 * @description Export function to validate if a value is a file path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isFilePath } from 'itee-validators'
 *
 * if( isFilePath( value ) ) {
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
 * Check if given path is a file path
 *
 * @param path {string|Buffer|URL} The data to check against the file path type
 * @returns {boolean} true if path is a file path, false otherwise
 */
export function isFilePath ( path ) {
    if( isNotString(path) && !(path instanceof  Buffer) && !(path instanceof URL) ) {
        throw new TypeError('Invalid path type! Expect string, buffer or url.')
    }

    const stat = fs.statSync( path, { throwIfNoEntry: false } )
    return isDefined(stat) && stat.isFile()
}

/**
 * Check if given path is not a file path
 *
 * @param path {string|Buffer|URL} The data to check against the file path type
 * @returns {boolean} true if path is not a file path, false otherwise
 */
export function isNotFilePath ( path ) {
    return !isFilePath( path )
}
