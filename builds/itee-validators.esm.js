/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArray
 * @desc Export the validation methods about the "Arrayness"
 *
 */

/**
 * Check if given data is an array
 *
 * @param data {any} The data to check against the array type
 * @returns {boolean} true if data is array, false otherwise
 */
function isArray ( data ) {
    return Array.isArray( data )
}

/**
 * Check if given data is not an array
 *
 * @param data {any} The data to check against the array type
 * @returns {boolean} true if data is not array, false otherwise
 */
function isNotArray ( data ) {
    return !isArray( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isEmpty
 * @desc Export the validation methods about emptiness
 *
 */

/**
 * Check emptiness of given data
 *
 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as empty, false otherwise.
 */
function isEmpty ( data ) {

    // null and undefined are consider as "empty"
    if ( data === null ) {
        return true;
    }
    if ( data === undefined ) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if ( data.length > 0 ) {
        return false;
    }
    if ( data.length === 0 ) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false;
        }
    }

    return true;
}

/**
 * Check fullness of given data
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
function isNotEmpty ( data ) {
    return !isEmpty( data );
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isEmptyArray
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/arrays/isArray}
 * @requires {@link module:sources/cores/voids/isEmpty}
 *
 */

/**
 * Check if given data is an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is an empty array, false otherwise
 */
function isEmptyArray ( data ) {
    return ( isArray( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
function isNotEmptyArray ( data ) {
    return ( isArray( data ) && isNotEmpty( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfArray
 * @desc Export the validation methods about array containing other array
 * @requires {@link module:sources/cores/arrays/isArray}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

/**
 * Check if given data is an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is an array of array, false otherwise
 */
function isArrayOfArray ( data ) {

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
function isNotArrayOfArray ( data ) {

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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isNull
 * @desc Export the validation methods about nullity
 *
 */

/**
 * Check if given data is null
 *
 * @param data {any} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
function isNull ( data ) {
    return (data === null)
}

/**
 * Check if given data is not null
 *
 * @param data {any} The data to check against the nullity
 * @returns {boolean} true if data is not null, false otherwise.
 */
function isNotNull ( data ) {
    return !isNull( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfNull
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/voids/isNull}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

/**
 * Check if given data is not an empty array where all values are null
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
 */
function isArrayOfNull ( data ) {

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
function isNotArrayOfNull ( data ) {

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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects/isObject
 * @desc Export the validation methods about objects
 * @requires {@link module:sources/cores/voids/isNull}
 *
 */


/**
 * Check if given data is an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
function isObject ( data ) {
    return ( isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ) )
}

/**
 * Check if given data is not an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is not an object, false otherwise
 */
function isNotObject ( data ) {
    return !isObject( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfObject
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/objects/isObject}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

/**
 * Check if given data is an array where all values are of object type
 *
 * @param data {any} The data to check against the array of object type
 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
 */
function isArrayOfObject ( data ) {

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
function isNotArrayOfObject ( data ) {

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

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

function isArrayOfSingleElement ( data ) {
    return ( isArray( data ) && data.length === 1 )
}

function isArrayOfMultiElement ( data ) {
    return ( isArray( data ) && data.length > 1 )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings/isString
 * @desc Export the validation methods about strings
 *
 */

/**
 * Check if given data is a string
 *
 * @param data {any} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
function isString ( data ) {
    return (typeof data === 'string')
}

/**
 * Check if given data is not a string
 *
 * @param data {any} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
function isNotString ( data ) {
    return (typeof data !== 'string')
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfString
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/strings/isString}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

/**
 * Check if given data is not an empty array where all values are string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
 */
function isArrayOfString ( data ) {

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
function isNotArrayOfString ( data ) {

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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isUndefined
 * @desc Export the validation methods about the undefiness
 *
 */

/**
 * Check if given data is undefined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
function isUndefined ( data ) {
    return (typeof data === 'undefined')
}

/**
 * Check if given data is defined
 *
 * @param data {any} The data to check against the undefiness
 * @returns {boolean} true if data is defined, false otherwise.
 */
function isNotUndefined ( data ) {
    return (typeof data !== 'undefined')
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/isNullOrUndefined
 * @desc Export the validation methods about nullity and undefiness
 *
 * @requires {@link module:sources/cores/voids/isNull}
 * @requires {@link module:sources/cores/voids/isUndefined}
 *
 */

/**
 * Check if given data is null or undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function isNullOrUndefined ( data ) {
    return (isNull( data ) || isUndefined( data ))
}

/**
 * Check if given data is null or undefined
 *
 * @alias isNullOrUndefined
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function no ( data ) {
    return ( (data === null) || (typeof data === 'undefined') )
}

/**
 * Check if given data is not null and not undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
function isDefined ( data ) {
    return (isNotNull( data ) && isNotUndefined( data ))
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/isArrayOfUndefined
 * @desc Export the validation methods about array containing other types
 * @requires {@link module:sources/cores/voids/isUndefined}
 * @requires {@link module:sources/cores/voids/isNullOrUndefined}
 * @requires {@link module:sources/cores/arrays/isEmptyArray}
 *
 */

/**
 * Check if given data is not an empty array where all values are undefined
 *
 * @param data {any} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
 */
function isArrayOfUndefined ( data ) {

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
function isNotArrayOfUndefined ( data ) {

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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays/arrays
 * @desc This is the arrays export entry point.
 * It expose all exports of the arrays validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/booleans/isBoolean
 * @desc Export the validation methods about booleans
 *
 */

/**
 * Check if given data is a boolean
 *
 * @param data {any} The data to check against the booleaness
 * @returns {boolean} true if data is a boolean, false otherwise.
 */
function isBoolean ( data ) {
    return (typeof data === 'boolean')
}

/**
 * Check if given data is not a boolean
 *
 * @param data {any} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
function isNotBoolean ( data ) {
    return (typeof data !== 'boolean')
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/booleans/booleans
 * @desc This is the booleans export entry point.
 * It expose all exports of the booleans validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/functions/isFunction
 * @desc Export the validation methods about functions
 *
 */

/**
 * Check if given data is a function
 *
 * @param data {any} The data to check against the functionality
 * @returns {boolean} true if data is a function, false otherwise.
 */
function isFunction ( data ) {
    return (typeof data === "function")
}

/**
 * Check if given data is not a function
 *
 * @param data {any} The data to check against the functionality
 * @returns {boolean} true if data is not a function, false otherwise.
 */
function isNotFunction ( data ) {
    return (typeof data !== "function")
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/functions/functions
 * @desc This is the functions export entry point.
 * It expose all exports of the functions validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isFinite
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is a finite number
 *
 * @param data {any} The data to check against the finite state
 * @returns {boolean} true if data is finite, false otherwise
 */
function isFinite$1 ( data ) {
    return Number.isFinite( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isFloat
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if given data is a floating point number
 *
 * @param data {any} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
function isFloat ( data ) {
    return data % 1 !== 0
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isInfinite
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is an infinite number
 *
 * @param data {any} The data to check against the infinite state
 * @returns {boolean} true if data is infinite, false otherwise
 */
function isInfinite ( data ) {
    return !Number.isFinite( data )
}

/**
 * Check if the given data is an infinite negative number
 *
 * @param data {any} The data to check against the negative infinite state
 * @returns {boolean} true if data is negative infinite, false otherwise
 */
function isInfiniteNegative ( data ) {
    return (data === Number.NEGATIVE_INFINITY)
}

/**
 * Check if the given data is an infinite positive number
 *
 * @param data {any} The data to check against the positive infinite state
 * @returns {boolean} true if data is positive infinite, false otherwise
 */
function isInfinitePositive ( data ) {
    return (data === Number.POSITIVE_INFINITY)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isInteger
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is an integer number
 *
 * @param data {any} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
function isInteger ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isMax
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is a maximum safe integer number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a maximum safe integer, false otherwise
 */
function isMaxSafeInteger ( data ) {
    return (data === Number.MAX_SAFE_INTEGER)
}

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {any} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
function isMaxPositive ( data ) {
    return (data === Number.MAX_VALUE)
}

/**
 * Check if the given data is a maximum negative number
 *
 * @param data {any} The data to check against the maximum infinite state
 * @returns {boolean} true if data is negative maximum, false otherwise
 */
function isMaxNegative ( data ) {
    return (data === -Number.MAX_VALUE)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isMin
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is a minimum safe integer number
 *
 * @param data {any} The data to check against the minimum safe integer state
 * @returns {boolean} true if data is a minimum safe integer, false otherwise
 */
function isMinSafeInteger ( data ) {
    return (data === Number.MIN_SAFE_INTEGER)
}

/**
 * Check if the given data is a minimum positive number
 *
 * @param data {any} The data to check against the positive minimum state
 * @returns {boolean} true if data is positive minimum, false otherwise
 */
function isMinPositive ( data ) {
    return (data === Number.MIN_VALUE)
}

/**
 * Check if the given data is a minimum negative number
 *
 * @param data {any} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
function isMinNegative ( data ) {
    return (data === -Number.MIN_VALUE)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isNumber
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if given data is a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
function isNumber ( data ) {
    return (typeof data === 'number' && !Number.isNaN( data ) )
}

/**
 * Check if given data is not a number
 *
 * @param data {any} The data to check against the number type
 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
 */
function isNotNumber ( data ) {
    return (typeof data !== 'number' || Number.isNaN( data ) )
}

/**
 * Check if given data is not a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is not a number, false otherwise.
 */
function isNaN ( data ) {
    return Number.isNaN( data )
}

///

/**
 * Check if the data is a positive number
 *
 * @param data {any} The data to check against the positivity
 * @returns {boolean} true if data is a positive number, false otherwise.
 */
function isNumberPositive ( data ) {
    return (isNumber( data ) && data > 0)
}

/**
 * Check if the data is a negative number
 *
 * @param data {any} The data to check against the negativity
 * @returns {boolean} true if data is a negative number, false otherwise.
 */
function isNumberNegative ( data ) {
    return (isNumber( data ) && data < 0)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isNumeric
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is numerical
 *
 * @param data {any} The data to check against the numerical type
 * @returns {boolean} true if data is numeric, false otherwise
 */
function isNumeric ( data ) {
    return ( typeof data === 'number' )
}

/**
 * Check if the given data is not numerical
 *
 * @param data {any} The data to check against the numerical type
 * @returns {boolean} true if data is not numeric, false otherwise
 */
function isNotNumeric ( data ) {
    return ( typeof data !== 'number' )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/isZero
 * @desc Export the validation methods about numbers
 *
 */

/**
 * Check if the given data is zero
 *
 * @param data {any} The data to check against the zero value
 * @returns {boolean} true if data is zero, false otherwise
 */
function isZero ( data ) {
    return (data === 0)
}

/**
 * Check if the given data is a positive zero
 *
 * @param data {any} The data to check against the positive zero value
 * @returns {boolean} true if data is a positive zero, false otherwise
 */
function isZeroPositive ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

/**
 * Check if the given data is a negative zero
 *
 * @param data {any} The data to check against the negative zero value
 * @returns {boolean} true if data is a negative zero, false otherwise
 */
function isZeroNegative ( data ) {
    return (data === 0 && (1 / data) === Number.NEGATIVE_INFINITY)
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers/numbers
 * @desc This is the numbers export entry point.
 * It expose all exports of the numbers validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects/isEmptyObject
 * @desc Export the validation methods about empty objects
 * @requires {@link module:sources/cores/voids/isEmpty}
 * @requires {@link module:sources/cores/objects/isObject}
 *
 */

/**
 * Check if given data is an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
function isEmptyObject ( data ) {
    return ( isObject( data ) && isEmpty( data ) )
}

/**
 * Check if given data is not an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
function isNotEmptyObject ( data ) {
    return ( isObject( data ) && isNotEmpty( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects/objects
 * @desc This is the objects export entry point.
 * It expose all exports of the objects validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings/isEmptyString
 * @desc Export the validation methods about strings
 * @requires {@link module:sources/cores/strings/isString}
 *
 */

/**
 * Check if given data is an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
function isEmptyString ( data ) {

    console.assert( isString( data ), 'Expect a string !' );

    return (data.length === 0)

}

/**
 * Check if given data is not an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
function isNotEmptyString ( data ) {

    if ( isNotString( data ) ) {
        throw new TypeError( 'Expect a string !' )
    }

    return (data.length > 0)

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings/isBlanktring
 * @desc Export the validation methods about strings
 * @requires {@link module:sources/cores/strings/isEmptyString}
 *
 */

/**
 * Check if the given data is a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
function isBlankString ( data ) {

    if ( isEmptyString( data ) ) {
        throw new TypeError( 'Expect a non empty string !' )
    }

    return ( !/\S/.test( data ) )
}

/**
 * Check if the given data is not a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
function isNotBlankString ( data ) {
    return ( isNotEmptyString( data ) && /\S/.test( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings/strings
 * @desc This is the strings export entry point.
 * It expose all exports of the strings validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/symbols/isSymbol
 * @desc Export the validation methods about symbols
 *
 */

/**
 * Check if given data is a symbol
 *
 * @param data {any} The data to check against the symbol type
 * @returns {boolean} true if data is a symbol, false otherwise.
 */
function isSymbol ( data ) {
    return (typeof data === 'symbol')
}

/**
 * Check if given data is not a symbol
 *
 * @param data {any} The data to check against the symbol type
 * @returns {boolean} true if data is not a symbol, false otherwise.
 */
function isNotSymbol ( data ) {
    return (typeof data !== 'symbol')
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/symbols/symbols
 * @desc This is the symbols export entry point.
 * It expose all exports of the symbols validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids/voids
 * @desc This is the voids export entry point.
 * It expose all exports of the voids validators files.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/cores
 * @desc This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/maths/maths
 * @desc This is the maths export entry point.
 * It expose all exports of the ... sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

// Todo: itee-physics
const ABSOLUTE_ZERO_KELVIN     = 0.00000000045;
const ABSOLUTE_ZERO_CELSIUS    = -273.14999999955;
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isKelvin ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN)
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotKelvin ( data ) {
    return !isKelvin( data )
}

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isCelsius ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS)
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotCelsius ( data ) {
    return !isCelsius( data )
}

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isFahrenheit ( data ) {
    return (isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT)
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotFahrenheit ( data ) {
    return !isFahrenheit( data )
}

/**
 *
 * @param data
 * @return {boolean|*|boolean}
 */
function isTemperature ( data ) {
    return ( isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ) )
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotTemperature ( data ) {
    return ( isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/physics
 * @desc This is the physics export entry point.
 * It expose all exports of the temperatures sub-folder.
 *
 */

/**
 * __________________________________________________________________________________________________________________________________________________________________________________________________
 * _/\\\\\\\\\\\________________________________________________________/\\\________/\\\_________________/\\\\\\__________________/\\\_______________________________________________________________
 * _\/////\\\///________________________________________________________\/\\\_______\/\\\________________\////\\\_________________\/\\\______________________________________________________________
 * ______\/\\\_________/\\\______________________________________________\//\\\______/\\\____________________\/\\\_____/\\\________\/\\\_____________________/\\\____________________________________
 * _______\/\\\______/\\\\\\\\\\\_____/\\\\\\\\______/\\\\\\\\_____________\//\\\____/\\\____/\\\\\\\\\_______\/\\\____\///_________\/\\\___/\\\\\\\\\_____/\\\\\\\\\\\_____/\\\\\_____/\\/\\\\\\\___
 * ________\/\\\_____\////\\\////____/\\\/////\\\___/\\\/////\\\_____________\//\\\__/\\\____\////////\\\______\/\\\_____/\\\___/\\\\\\\\\__\////////\\\___\////\\\////____/\\\///\\\__\/\\\/////\\\_
 * _________\/\\\________\/\\\_______/\\\\\\\\\\\___/\\\\\\\\\\\_______________\//\\\/\\\_______/\\\\\\\\\\_____\/\\\____\/\\\__/\\\////\\\____/\\\\\\\\\\_____\/\\\_______/\\\__\//\\\_\/\\\___\///_
 * __________\/\\\________\/\\\_/\\__\//\\///////___\//\\///////_________________\//\\\\\_______/\\\/////\\\_____\/\\\____\/\\\_\/\\\__\/\\\___/\\\/////\\\_____\/\\\_/\\__\//\\\__/\\\__\/\\\_______
 * ________/\\\\\\\\\\\____\//\\\\\____\//\\\\\\\\\\__\//\\\\\\\\\\________________\//\\\_______\//\\\\\\\\/\\__/\\\\\\\\\_\/\\\_\//\\\\\\\/\\_\//\\\\\\\\/\\____\//\\\\\____\///\\\\\/___\/\\\______
 * ________\///////////______\/////______\//////////____\//////////__________________\///_________\////////\//__\/////////__\///___\///////\//___\////////\//______\/////_______\/////_____\///______
 * __________________________________________________________________________________________________________________________________________________________________________________________________
 *
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/main
 * @desc This is the main entry point to bundle the itee validators package.
 * It expose all exports of the cores, maths and physics sub-folder.
 *
 */

export { isArray, isNotArray, isArrayOfArray, isNotArrayOfArray, isArrayOfNull, isNotArrayOfNull, isArrayOfObject, isNotArrayOfObject, isArrayOfSingleElement, isArrayOfMultiElement, isArrayOfString, isNotArrayOfString, isArrayOfUndefined, isNotArrayOfUndefined, isEmptyArray, isNotEmptyArray, isBoolean, isNotBoolean, isFunction, isNotFunction, isFinite$1 as isFinite, isFloat, isInfinite, isInfiniteNegative, isInfinitePositive, isInteger, isMaxNegative, isMaxPositive, isMaxSafeInteger, isMinNegative, isMinPositive, isMinSafeInteger, isNumber, isNotNumber, isNaN, isNumberNegative, isNumberPositive, isNumeric, isNotNumeric, isZero, isZeroNegative, isZeroPositive, isObject, isNotObject, isEmptyObject, isNotEmptyObject, isBlankString, isNotBlankString, isEmptyString, isNotEmptyString, isString, isNotString, isSymbol, isNotSymbol, isEmpty, isNotEmpty, isNull, isNotNull, no, isNullOrUndefined, isDefined, isUndefined, isNotUndefined, ABSOLUTE_ZERO_KELVIN, ABSOLUTE_ZERO_CELSIUS, ABSOLUTE_ZERO_FAHRENHEIT, isKelvin, isNotKelvin, isCelsius, isNotCelsius, isFahrenheit, isNotFahrenheit, isTemperature, isNotTemperature };
