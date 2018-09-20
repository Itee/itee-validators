/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/voids
 * @description Export the validation methods about voids notions
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
    return (data !== null)
}

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
 * Check if given data is null or undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function isNullOrUndefined ( data ) {
    return ((data === null) || (typeof data === 'undefined'))
}

/**
 * Check if given data is not null and not undefined
 *
 * @param data {any} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
function isDefined ( data ) {
    return ((data !== null) && (typeof data !== 'undefined'))
}

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
        return true
    }
    if ( data === undefined ) {
        return true
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if ( data.length > 0 ) {
        return false
    }
    if ( data.length === 0 ) {
        return true
    }

    // Otherwise, does it have any properties of its own?
    for ( let key in data ) {
        if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
            return false
        }
    }

    return true
}

/**
 * Check fullness of given data
 *
 * @param data {any} The data to check against the emptiness
 * @returns {boolean} true if data is considered as not empty, false otherwise.
 */
function isNotEmpty ( data ) {
    return !isEmpty( data )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/strings
 * @description Export the validation methods about strings
 *
 */

/**
 * Check if given data is a string
 *
 * @param data {any} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
function isString ( data ) {
    return (typeof data === 'string' || data instanceof String)
}

// alt
//export function isString_1 ( data ) {
//    return (typeof data === 'string')
//}

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
 * Check if given data is an empty string
 *
 * @param data {any} The data to check against the emptiness of the string
 * @returns {boolean} true if data is an empty string, false otherwise.
 */
function isEmptyString ( data ) {

    console.assert( isString( data ), 'Expect a string !' )

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
 * Check if the given data is a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is a blank string, false otherwise.
 */
function isBlankString ( data ) {

    if ( isEmptyString( data ) ) {
        throw new TypeError( 'Expect a non empty string !' )
    }

    return (!/\S/.test( data ))
}

/**
 * Check if the given data is not a blank string
 *
 * @param data {any} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
function isNotBlankString ( data ) {
    return (isNotEmptyString( data ) && /\S/.test( data ))
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/objects
 * @description Export the validation methods about objects
 * @requires {@link module:sources/cores/voids/isNull}
 * @requires {@link module:sources/cores/voids/isEmpty}
 */

/**
 * Check if given data is an object
 *
 * @param data {any} The data to check against the object type
 * @returns {boolean} true if data is object, false otherwise
 */
function isObject ( data ) {
    return (isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ))
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
 * Check if given data is an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is an empty object, false otherwise
 */
function isEmptyObject ( data ) {
    return (isObject( data ) && isEmpty( data ))
}

/**
 * Check if given data is not an empty object
 *
 * @param data {any} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
function isNotEmptyObject ( data ) {
    return (isObject( data ) && isNotEmpty( data ))
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/arrays
 * @description Export the validation methods about Arrays
 * @requires {@link module:sources/cores/voids}
 * @requires {@link module:sources/cores/strings}
 * @requires {@link module:sources/cores/objects}
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
    return !Array.isArray( data )
}

// alt
//export function isNotArray_1 ( data ) {
//    return !isArray( data )
//}

/**
 * Check if given data is not an empty array where all values are null
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
 */
function isArrayOfNull ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return false
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( data[ index ] !== null ) {
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

    if ( !Array.isArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( data[ index ] === null ) {
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
function isEmptyArray ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    return (data.length === 0)

}

/**
 * Check if given data is not an empty array
 *
 * @param data {any} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
function isNotEmptyArray ( data ) {

    if ( !Array.isArray( data ) ) {
        return true
    }

    return (data.length > 0)
}

/**
 * Check if given data is not an empty array where all values are undefined
 *
 * @param data {any} The data to check against the array of undefined
 * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
 */
function isArrayOfUndefined ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return false
    }

    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
        if ( typeof data[ index ] !== 'undefined' ) {
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

    if ( !Array.isArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( typeof data[ index ] !== 'undefined' ) {
            return true
        }
    }

    return false

}

/**
 * Check if given data is an array of array
 *
 * @param data {any} The data to check against the array of array type
 * @returns {boolean} true if data is an array of array, false otherwise
 */
function isArrayOfArray ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return false
    }

    for ( let index = 0 ; index < dataLength ; index += 1 ) {
        if ( !Array.isArray( data[ index ] ) ) {
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

    if ( !Array.isArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( Array.isArray( data[ index ] ) ) {
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
function isArrayOfString ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return false
    }

    let subData = undefined
    for ( let index = 0 ; index < dataLength ; index++ ) {
        subData = data[ index ]
        if ( !(typeof subData === 'string' || subData instanceof String) ) {
            return false
        }
    }

    return true

}

//alt
//export function isArrayOfString_1 ( data ) {
//
//    if ( !Array.isArray( data ) ) {
//        return false
//    }
//
//    const dataLength = data.length
//    if ( dataLength === 0 ) {
//        return false
//    }
//
//    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
//        if ( typeof data[ index ] !== 'string' ) {
//            return false
//        }
//    }
//
//    return true
//
//}

/**
 * Check if given data is not an empty array where all values are not string
 *
 * @param data {any} The data to check against the array of strings
 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
 */
function isNotArrayOfString ( data ) {

    if ( !Array.isArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        if ( typeof data[ index ] === 'string' ) {
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
function isArrayOfSingleElement ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    if ( data.length !== 1 ) {
        return false
    }

    return true

}

/**
 * Check if given data is an array with multiples values
 *
 * @param data {any} The data to check against the single valued array
 * @returns {boolean} true if data is an array with multiples values, false otherwise
 */
function isArrayOfMultiElement ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    if ( data.length <= 1 ) {
        return false
    }

    return true

}

/**
 * Check if given data is an array where all values are of object type
 *
 * @param data {any} The data to check against the array of object type
 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
 */
function isArrayOfObject ( data ) {

    if ( !Array.isArray( data ) ) {
        return false
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
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

    if ( !Array.isArray( data ) ) {
        return true
    }

    const dataLength = data.length
    if ( dataLength === 0 ) {
        return true
    }

    for ( let index = 0 ; index < dataLength ; index++ ) {
        let subData = data[ index ]
        if ( subData === null ||
            (typeof subData !== 'object') ||
            Array.isArray( subData ) ||
            (subData instanceof String) ) {
            return true
        }
    }

    return false

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/booleans
 * @description Export the validation methods about booleans
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
 * @module sources/cores/functions
 * @description Export the validation methods about functions
 *
 */

/**
 * Check if given data is a function
 *
 * @param data {any} The data to check against the functionality
 * @returns {boolean} true if data is a function, false otherwise.
 */
function isFunction ( data ) {
    return (typeof data === 'function')
}

/**
 * Check if given data is not a function
 *
 * @param data {any} The data to check against the functionality
 * @returns {boolean} true if data is not a function, false otherwise.
 */
function isNotFunction ( data ) {
    return (typeof data !== 'function')
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/numbers
 * @description Export the validation methods about numbers
 *
 */

/**
 * Check if given data is a number
 *
 * @param data {any} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a number, false otherwise.
 */
function isNumber ( data ) {
    return (typeof data === 'number' && !Number.isNaN( data ))
}

function isNumber_1 ( data ) {
    return (Number( data ) === data)
}

/**
 * Check if given data is not a number
 *
 * @param data {any} The data to check against the number type
 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
 */
function isNotNumber ( data ) {
    return (typeof data !== 'number' || Number.isNaN( data ))
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
 * Check if the given data is numerical
 *
 * @param data {any} The data to check against the numerical type
 * @returns {boolean} true if data is numeric, false otherwise
 */
function isNumeric ( data ) {
    return (typeof data === 'number')
}

/**
 * Check if the given data is not numerical
 *
 * @param data {any} The data to check against the numerical type
 * @returns {boolean} true if data is not numeric, false otherwise
 */
function isNotNumeric ( data ) {
    return (typeof data !== 'number')
}

/**
 * Check if the given data is an integer number
 *
 * @param data {any} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
function isInteger ( data ) {
    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
}

// alt
//export function isInteger_1 ( data ) {
//    return data % 1 === 0
//}
//
//export function isInteger_2 ( n ) {
//    return n === +n && n === (n | 0);
//}
//
//export function isInteger_3 ( nVal ) {
//    return typeof nVal === "number" && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal;
//}

/**
 * Check if given data is a floating point number
 *
 * @param data {any} The data to check against the floating point
 * @returns {boolean} true if data is a float, false otherwise
 */
function isFloat ( data ) {
    return data % 1 !== 0
}

// Alt
//export function isFloat_1 ( n ) {
//    return n === +n && n !== (n | 0)
//}
//
//export function isFloat_2 ( x ) {
//    return !!(x % 1)
//}

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
 * Check if the given data is a finite number
 *
 * @param data {any} The data to check against the finite state
 * @returns {boolean} true if data is finite, false otherwise
 */
function isFinite ( data ) {
    return Number.isFinite( data )
}

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
 * @module sources/cores/symbols
 * @description Export the validation methods about symbols
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
 * @module sources/cores/cores
 * @description Export the Validator singleton instance that allow to validate complex data structure
 * @example
 *
 const validator = Itee.Validators.Validator

 // Using unique function for One registered type
 // Usefull when a simple data structure is used multiple times
 validator.add( 'ColorType', color => {

                const r = color.r
                if ( color.r === undefined || Itee.Validators.isNotNumber( r ) ) {
                    return false
                }

                const g = color.g
                if ( color.g === undefined || Itee.Validators.isNotNumber( g ) ) {
                    return false
                }

                const b = color.b
                if ( color.b === undefined || Itee.Validators.isNotNumber( b ) ) {
                    return false
                }

                return true
            } )

 // Using schema composition
 // Usefull for design validation schema faster and based on previous declared validation types
 validator.add( 'Range_0_255', ( value ) => {

                if ( Itee.Validators.isNotNumber( value ) ) {
                    return false
                }

                return !(value < 0 || value > 255)

            } )

 validator.add( 'ColorSchema', {
                r: {
                    required: true,
                    type:     'Range_0_255'
                },
                g: {
                    required: true,
                    type:     'Range_0_255'
                },
                b: {
                    required: true,
                    type:     'Range_0_255'
                }
            } )

 validator.add( 'ColorStructure', {
                color_from_type: {
                    type: 'ColorType'
                },
                col_from_schema: {
                    type: 'ColorSchema'
                },
                col_from_fn:     {
                    // Inner function
	                // Usefull for specific validation requirement that cannot match other previous validation schema or type
                    fn: function ColorValidator ( color ) {

                        const r = color.r
                        if ( color.r === undefined || Itee.Validators.isNotNumber( r ) ) {
                            return false
                        }

                        const g = color.g
                        if ( color.g === undefined || Itee.Validators.isNotNumber( g ) ) {
                            return false
                        }

                        const b = color.b
                        if ( color.b === undefined || Itee.Validators.isNotNumber( b ) ) {
                            return false
                        }

                        return true
                    }
                }
            } )

 // The data to validate
 const colorStruct = {
                color_from_type: {
                    r: 0,
                    g: 1,
                    b: 2
                },
                col_from_schema: {
                    r: 10,
                    g: 20,
                    b: 30
                },
                col_from_fn:     {
                    r: 0,
                    g: 127,
                    b: 255
                }
            }

 // Execute

 try {

    if ( validator.check( colorStruct, 'ColorStructure' ) ) {
        alert( 'ColorStructure is valid !' )
    } else {
        alert( validator.errors )
    }

} catch ( err ) {
    alert( err )
}
 *
 */

class Validator {

    constructor () {

        /**
         * The validators store, by default it contains validators for Boolean, Number, Integer, Float, Array, String, Object, Symbol and Function
         *
         * @type {(function|object)}
         */
        this.validators = {
            Boolean:  isBoolean,
            Number:   isNumber,
            Integer:  isInteger,
            Float:    isFloat,
            Array:    isArray,
            String:   isString,
            Object:   isObject,
            Symbol:   isSymbol,
            Function: isFunction
        }

        /**
         * The list of errors occured during the check
         *
         * @type {Array.<string>}
         */
        this.errors = []

    }

    /**
     * Add a new validator schema to the validator instance
     *
     * @param type {string} - A string that represent the type of data to validate
     * @param validator {(function|object)} - A function or validation schema that represent the type of data to validate
     */
    add ( type, validator ) {

        if ( isNotString( type ) ) {
            throw new TypeError( `Validator: Expect type to be a string` )
        }

        if ( isNotFunction( validator ) && isNotObject( validator ) ) {
            throw new TypeError( `Validator: Expect validator to be an object or a function` )
        }

        if ( isDefined( this.validators[ type ] ) ) {
            throw new TypeError( `Validator: a validator is already defined for type '${type}'` )
        }

        this.validators[ type ] = validator

    }

    /**
     * To remove a registered type
     *
     * @param type {string} - The type to remove
     */
    remove ( type ) {

        delete this.validators[ type ]

    }

    /**
     * Allow to known the available types store in current validator instance
     *
     * @return {Array.<string>} - The list of registered type
     */
    getAvalaibleTypes () {

        const availablesTypes = []

        for ( let key in this.validators ) {
            availablesTypes.push( key )
        }

        return availablesTypes

    }

    /**
     * Will perform a deep structural comparison between the given data and the validation schema of the given type
     *
     * @param data {any} - The data to validate
     * @param type {string} - The type of the validation schema to apply
     * @param breakOnError {boolean} - Return on first validation error ( true by default )
     * @return {boolean} - Return true is the data is validated, false otherwise
     */
    check ( data, type, breakOnError = true ) {

        const validator = this.validators[ type ]
        if ( isNullOrUndefined( validator ) ) {
            throw new TypeError( `Validator: Unable to find schema validation of type '${type}'` )
        }

        let result = true
        if ( isFunction( validator ) ) {

            result = validator( data )

        } else if ( isObject( validator ) ) {

            let subResult = true
            for ( let key in validator ) {

                const subValidator = validator[ key ]
                if ( isNullOrUndefined( subValidator ) ) {
                    throw new TypeError( `Validator: Missing validator for key '${key}' of type '${type}'` )
                }

                const value      = data[ key ]
                const isRequired = subValidator.required
                if ( isNullOrUndefined( value ) ) {
                    if ( isRequired ) {
                        subResult = false
                    } else {
                        continue
                    }
                }

                // In case of overriden validation function check it first
                let validatorFunction = subValidator.fn
                if ( isDefined( validatorFunction ) ) {

                    if ( isNotFunction( validatorFunction ) ) {
                        throw new TypeError( `Validator: Invalid validation function for '${key}' with type '${type}'` )
                    }

                    subResult = validatorFunction( value )

                } else {

                    subResult = this.check( value, subValidator.type, breakOnError )

                }

                if ( subResult === false ) {

                    this.errors.push( `Validator: Invalid property '${key}' of type '${subValidator.type}' with value '${value}' in object of type '${type}'` )
                    result = false
                    if ( breakOnError ) {
                        break
                    }

                }

            }

        } else {

            throw new TypeError( `Validator: Unknown validator of type '${type}'` )

        }

        return result

    }

}

/**
 * The singleton instance
 *
 * @type {Validator}
 */
let validatorInstance = undefined
if ( isNullOrUndefined( validatorInstance ) ) {
    validatorInstance = new Validator()
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/cores/_cores
 * @description This is the cores main export entry point.
 * It expose all exports of the voids, booleans, numbers, symbols, strings, arrays, objects and functions validators.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/maths/maths
 * @description This is the maths export entry point.
 * It expose all exports of the ... sub-folder.
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/temperatures
 * @description Export the validation methods about temperatures
 * @requires {@link module:sources/cores/numbers}
 */

    // Todo: itee-physics
const ABSOLUTE_ZERO_KELVIN     = 0.00000000045
const ABSOLUTE_ZERO_CELSIUS    = -273.14999999955
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67

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
    return (isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ))
}

/**
 *
 * @param data
 * @return {boolean}
 */
function isNotTemperature ( data ) {
    return (isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ))
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module sources/physics/physics
 * @description This is the physics export entry point.
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
 * @description This is the main entry point to bundle the itee validators package.
 * It expose all exports of the cores, maths and physics sub-folder.
 *
 */

export {
    isArray,
    isNotArray,
    isArrayOfNull,
    isNotArrayOfNull,
    isEmptyArray,
    isNotEmptyArray,
    isArrayOfUndefined,
    isNotArrayOfUndefined,
    isArrayOfArray,
    isNotArrayOfArray,
    isArrayOfString,
    isNotArrayOfString,
    isArrayOfSingleElement,
    isArrayOfMultiElement,
    isArrayOfObject,
    isNotArrayOfObject,
    isBoolean,
    isNotBoolean,
    isFunction,
    isNotFunction,
    isNumber,
    isNumber_1,
    isNotNumber,
    isNaN,
    isNumberPositive,
    isNumberNegative,
    isNumeric,
    isNotNumeric,
    isInteger,
    isFloat,
    isZero,
    isZeroPositive,
    isZeroNegative,
    isMinSafeInteger,
    isMinPositive,
    isMinNegative,
    isMaxSafeInteger,
    isMaxPositive,
    isMaxNegative,
    isFinite,
    isInfinite,
    isInfiniteNegative,
    isInfinitePositive,
    isObject,
    isNotObject,
    isEmptyObject,
    isNotEmptyObject,
    isString,
    isNotString,
    isEmptyString,
    isNotEmptyString,
    isBlankString,
    isNotBlankString,
    isSymbol,
    isNotSymbol,
    isNull,
    isNotNull,
    isUndefined,
    isNotUndefined,
    isNullOrUndefined,
    isDefined,
    isEmpty,
    isNotEmpty,
    validatorInstance as Validator,
    ABSOLUTE_ZERO_KELVIN,
    ABSOLUTE_ZERO_CELSIUS,
    ABSOLUTE_ZERO_FAHRENHEIT,
    isKelvin,
    isNotKelvin,
    isCelsius,
    isNotCelsius,
    isFahrenheit,
    isNotFahrenheit,
    isTemperature,
    isNotTemperature
}
