/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/character-devices/isCharacterDevicePath
 * @description Export function to validate if a value is a character device path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isCharacterDevicePath } from 'itee-validators'
 *
 * if( isCharacterDevicePath( value ) ) {
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
 * Check if given path is a character device path
 *
 * @param path {string|Buffer|URL} The data to check against the character device path type
 * @returns {boolean} true if path is a character device path, false otherwise
 */
export function isCharacterDevicePath( path ) {
    if ( isNotString( path ) && !( path instanceof Buffer ) && !( path instanceof URL ) ) {
        throw new TypeError( 'Invalid path type! Expect string, buffer or url.' )
    }

    const stat = statSync( path, { throwIfNoEntry: false } )
    return isDefined( stat ) && stat.isCharacterDevice()
}

/**
 * Check if given path is not a character device path
 *
 * @param path {string|Buffer|URL} The data to check against the character device path type
 * @returns {boolean} true if path is not a character device path, false otherwise
 */
export function isNotCharacterDevicePath( path ) {
    return !isCharacterDevicePath( path )
}
