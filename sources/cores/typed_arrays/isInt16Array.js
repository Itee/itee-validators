/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isInt16Array ( data ) {
    return ( data instanceof Int16Array )
}

export function isNotInt16Array ( data ) {
    return !isInt16Array( data )
}
