/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/directories/isEmptyDirectory
 * @description Export function to validate if a value is a empty directories
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isEmptyDirectory } from 'itee-validators'
 *
 * if( isEmptyDirectory( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import fs from 'fs'
import { isDirectoryPath } from './isDirectoryPath'

/**
 * Check if given directory path is an empty directory
 *
 * @param directoryPath {string|Buffer|URL} The directory path to check the emptiness
 * @returns {boolean} true if directory is empty, false otherwise
 */
export function isEmptyDirectory ( directoryPath ) {
    return isDirectoryPath(directoryPath) && ( fs.readdirSync( directoryPath ).length === 0 )
}

/**
 * Check if given directory path is not an empty directory
 *
 * @param directoryPath {string|Buffer|URL} The directory path to check the emptiness
 * @returns {boolean} true if directory is not empty, false otherwise
 */
export function isNotEmptyDirectory ( directoryPath ) {
    return !isEmptyDirectory( directoryPath )
}
