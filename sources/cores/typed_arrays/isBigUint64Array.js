/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isBigUint64Array ( data ) {
    return ( data instanceof BigUint64Array )
}

export function isNotBigUint64Array ( data ) {
    return !isBigUint64Array( data )
}
