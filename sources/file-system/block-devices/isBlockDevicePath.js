/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/file-system/block-devices/isBlockDevicePath
 * @description Export function to validate if a value is a block device path
 *
 * @requires {@link module: [fs]{@link https://nodejs.org/api/fs.html}}
 *
 * @example
 *
 * import { isBlockDevicePath } from 'itee-validators'
 *
 * if( isBlockDevicePath( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

import fs            from 'fs'
import { isDefined } from '../../cores/voids/isDefined'

/**
 * Check if given path is a block device path
 *
 * @param path {string|Buffer|URL} The data to check against the block device path type
 * @returns {boolean} true if path is a block device path, false otherwise
 */
export function isBlockDevicePath ( path ) {
    const stat = fs.statSync( path, { throwIfNoEntry: false } )
    return isDefined(stat) && stat.isBlockDevice()
}

/**
 * Check if given path is not a block device path
 *
 * @param path {string|Buffer|URL} The data to check against the block device path type
 * @returns {boolean} true if path is not a block device path, false otherwise
 */
export function isNotBlockDevicePath ( path ) {
    return !isBlockDevicePath( path )
}
