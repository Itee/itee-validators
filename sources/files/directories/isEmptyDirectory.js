/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import fs from 'fs'

export function isEmptyDirectory ( directoryPath ) {
    return ( fs.readdirSync( directoryPath ).length === 0 )
}

export function isNotEmptyDirectory ( directoryPath ) {
    return !isEmptyDirectory( directoryPath )
}
