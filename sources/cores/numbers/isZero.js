/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

export function isZero ( data ) {
    return (data === 0)
}

export function isZeroPositive ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

export function isZeroNegative ( data ) {
    return (data === 0 && (1 / data) === Number.NEGATIVE_INFINITY)
}
