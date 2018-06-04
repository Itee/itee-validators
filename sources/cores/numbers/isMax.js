/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */


export function isMaxSafeInteger ( data ) {
    return (data === Number.MAX_SAFE_INTEGER)
}

export function isMaxPositive ( data ) {
    return (data === Number.MAX_VALUE)
}


export function isMaxNegative ( data ) {
    return (data === -Number.MAX_VALUE)
}
