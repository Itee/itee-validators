/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isInt8Array ( data ) {
    return ( data instanceof Int8Array )
}

export function isNotInt8Array ( data ) {
    return !isInt8Array( data )
}
