/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays
 * @desc Export the validation methods about Arrays
 *
 */

import { isNull, isNotNull } from './voids/isNull'
import { isUndefined } from './voids/isUndefined'
import { isDefined } from './voids/isNullOrUndefined'
import { isEmpty, isNotEmpty } from './voids/isEmpty'
import { isString, isNotString } from './strings/isString'
import { isObject, isNotObject } from './objects/isObject'


/**
 * Check if given data is an array
 *
 * @param data {any} The data to check against the array type
 * @returns {boolean} true if data is array, false otherwise
 */
export function isArray ( data ) {
    return Array.isArray( data )
}

/**
 * Check if given data is not an array
 *
 * @param data {any} The data to check against the array type
 * @returns {boolean} true if data is not array, false otherwise
 */
export function isNotArray ( data ) {
    return !isArray( data )
}

/**
 * Check if given data is not an empty array where all values are null
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
 */
export function isArrayOfNull ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotNull( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not null
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are not null, false otherwise
 */
export function isNotArrayOfNull ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNull( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is an empty array, false otherwise
 */
export function isEmptyArray ( data ) {
    return ( isArray( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
export function isNotEmptyArray ( data ) {
    return ( isArray( data ) && isNotEmpty( data ) )
}

/**
 * Check if given data is not an empty array where all values are undefined
 *
 * @param data {any} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
 */
export function isArrayOfUndefined ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isDefined( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are defined
 *
 * @param data {any} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are defined, false otherwise
 */
export function isNotArrayOfUndefined ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isUndefined( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is an array of array, false otherwise
 */
export function isArrayOfArray ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an array of array, false otherwise
 */
export function isNotArrayOfArray ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isArray( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
 */
export function isArrayOfString ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotString( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an empty array where all values are not string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
 */
export function isNotArrayOfString ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isString( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is an array with a single value
 *
 * @param data {any} The data to check against the single valued array
 * @returns {boolean} true if data is an array with a single value, false otherwise
 */
export function isArrayOfSingleElement ( data ) {

    return ( isArray( data ) && data.length === 1 )

}

/**
 * Check if given data is an array with multiples values
 *
 * @param data {any} The data to check against the single valued array
 * @returns {boolean} true if data is an array with multiples values, false otherwise
 */
export function isArrayOfMultiElement ( data ) {

    return ( isArray( data ) && data.length > 1 )

}

/**
 * Check if given data is an array where all values are of object type
 *
 * @param data {any} The data to check against the array of object type
 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
 */
export function isArrayOfObject ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isNotObject( data[ index ] ) ) {
            return false
        }
    }

    return true

}

/**
 * Check if given data is not an array where all values are of object type
 *
 * @param data {any} The data to check against the array of object type
 * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
 */
export function isNotArrayOfObject ( data ) {

    if ( isEmptyArray( data ) ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( isObject( data[ index ] ) ) {
            return false
        }
    }

    return true

}
