/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isEmptyFile
 * @description Export function to validate if a value is an empty file
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isEmptyFile } from 'itee-validators'
 *
 * if( isEmptyFile( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import { statSync }    from 'node:fs'
import { isNotString } from '../../cores/strings/isString.js'
import { isFilePath }  from './isFilePath.js'

/**
 * Check if given file path is an empty file more or less a threshold in bytes.
 *
 * @param filePath {string|Buffer|URL} The directory path to check the emptiness
 * @param threshold {number} An amount of byte below which it consider the file as empty ( 0 as default ).
 * @returns {boolean} true if file is empty, false otherwise
 */
export function isEmptyFile( filePath, threshold = 0 ) {
    if ( isNotString( filePath ) && !( filePath instanceof Buffer ) && !( filePath instanceof URL ) ) {
        return false
        // throw new TypeError( 'Invalid path type! Expect string, buffer or url.' )
    }

    return isFilePath( filePath ) && ( statSync( filePath ).size <= threshold )
}

/**
 * Check if given file path is not an empty file more or less a threshold in bytes.
 *
 * @param filePath {string|Buffer|URL} The directory path to check the emptiness
 * @param threshold {number} An amount of byte above which it consider the file as not empty ( 0 as default ).
 * @returns {boolean} true if file is not empty, false otherwise
 */
export function isNotEmptyFile( filePath, threshold = 0 ) {
    return !isEmptyFile( filePath, threshold )
}
