/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isUint16Array ( data ) {
    return ( data instanceof Uint16Array )
}

export function isNotUint16Array ( data ) {
    return !isUint16Array( data )
}
