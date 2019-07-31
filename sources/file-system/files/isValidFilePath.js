/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/files/isValidFilePath
 * @description Export function to validate if a value is a valid file path
 * @example todo
 *
 */

import { isValidPath } from '../paths/isValidPath'
import { isFilePath }  from './isFilePath'

/**
 * Check if given data is a valid file path
 *
 * @param data {*} The data to check against the file path type
 * @returns {boolean} true if data is a valid file path, false otherwise
 */
export function isValidFilePath ( data ) {
    return ( isValidPath( data ) && isFilePath( data ) )
}

/**
 * Check if given data is an invalid file path
 *
 * @param data {*} The data to check against the file path type
 * @returns {boolean} true if data is an invalid file path, false otherwise
 */
export function isInvalidFilePath ( data ) {
    return !isValidFilePath( data )
}
