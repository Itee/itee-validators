this.Itee = this.Itee || {};
this.Itee.Validators = (function (exports) {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is an array
	 * @param data
	 * @returns {boolean} true if data is array, false otherwise
	 */
	function isArray ( data ) {
	    return Array.isArray( data )
	}

	/**
	 * Check if given data is not an array
	 * @param data
	 * @returns {boolean} true if data is not array, false otherwise
	 */
	function isNotArray ( data ) {
	    return !isArray( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check emptiness of given data
	 *
	 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
	 *
	 * @param data
	 * @returns {boolean} true if data is consider as empty, false otherwise.
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
	 * @param data
	 * @returns {boolean} true if data is consider as empty, false otherwise.
	 */
	function isNotEmpty ( data ) {
	    return !isEmpty( data );
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is an empty array
	 * @param data
	 * @returns {boolean|*} true if data is an empty array, false otherwise
	 */
	function isEmptyArray ( data ) {
	    return ( isArray( data ) && isEmpty( data ) )
	}

	/**
	 * Check if given data is not an empty array
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array, false otherwise
	 */
	function isNotEmptyArray ( data ) {
	    return ( isArray( data ) && isNotEmpty( data ) )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean}
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
	 *
	 * @param data
	 * @return {boolean}
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are null
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array where all values are null, false otherwise
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
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array where all values are not null, false otherwise
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean}
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
	 *
	 * @param data
	 * @return {boolean}
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are string
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array where all values are string, false otherwise
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
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array where all values are not string, false otherwise
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are undefined
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array where all values are undefined, false otherwise
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
	 * @param data
	 * @returns {boolean|*} true if data is not an empty array where all values are defined, false otherwise
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is a boolean
	 * @param data
	 * @returns {boolean|*} true if data is a boolean, false otherwise.
	 */
	function isBoolean ( data ) {
	    return (typeof data === 'boolean')
	}

	/**
	 * Check if given data is not a boolean
	 * @param data
	 * @returns {boolean|*} true if data is not a boolean, false otherwise.
	 */
	function isNotBoolean ( data ) {
	    return (typeof data !== 'boolean')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is a function
	 * @param data
	 * @returns {boolean|*} true if data is a function, false otherwise.
	 */
	function isFunction ( data ) {
	    return (typeof data === "function")
	}

	/**
	 * Check if given data is not a function
	 * @param data
	 * @returns {boolean|*} true if data is not a function, false otherwise.
	 */
	function isNotFunction ( data ) {
	    return (typeof data !== "function")
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isFinite$1 ( data ) {
	    return Number.isFinite( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isFloat ( data ) {
	    return data % 1 !== 0
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isInfinite ( data ) {
	    return !Number.isFinite( data )
	}

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isInfiniteNegative ( data ) {
	    return (data === Number.NEGATIVE_INFINITY)
	}

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isInfinitePositive ( data ) {
	    return (data === Number.POSITIVE_INFINITY)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isInteger ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */


	function isMaxSafeInteger ( data ) {
	    return (data === Number.MAX_SAFE_INTEGER)
	}

	function isMaxPositive ( data ) {
	    return (data === Number.MAX_VALUE)
	}


	function isMaxNegative ( data ) {
	    return (data === -Number.MAX_VALUE)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isMinSafeInteger ( data ) {
	    return (data === Number.MIN_SAFE_INTEGER)
	}

	function isMinPositive ( data ) {
	    return (data === Number.MIN_VALUE)
	}

	function isMinNegative ( data ) {
	    return (data === -Number.MIN_VALUE)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */


	/**
	 * Check if given data is a number
	 * @param data
	 * @returns {boolean|*} true if data is a number, false otherwise.
	 */
	function isNumber ( data ) {
	    return (typeof data === 'number' && !Number.isNaN( data ) )
	}

	function isNotNumber ( data ) {
	    return (typeof data !== 'number' || Number.isNaN( data ) )
	}

	/**
	 * Check if given data is not a number
	 * @param data
	 * @returns {boolean|*} true if data is not a number, false otherwise.
	 */
	function isNaN ( data ) {
	    return Number.isNaN( data )
	}

	///

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isNumberNegative ( data ) {
	    return (isNumber( data ) && data < 0)
	}

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isNumberPositive ( data ) {
	    return (isNumber( data ) && data > 0)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isNumeric ( data ) {
	    return ( typeof data === 'number' )
	}

	function isNotNumeric ( data ) {
	    return ( typeof data !== 'number' )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isZero ( data ) {
	    return (data === 0)
	}

	function isZeroPositive ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
	}

	function isZeroNegative ( data ) {
	    return (data === 0 && (1 / data) === Number.NEGATIVE_INFINITY)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is null
	 * @param data
	 * @returns {boolean|*} true if data is null, false otherwise.
	 */
	function isNull$1 ( data ) {
	    return (data === null)
	}

	/**
	 * Check if given data is not null
	 * @param data
	 * @returns {boolean|*} true if data is not null, false otherwise.
	 */
	function isNotNull$1 ( data ) {
	    return !isNull$1( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isObject$1 ( data ) {
	    return ( isNotNull$1( data ) && (typeof data === 'object') && !Array.isArray( data ) )
	}


	/**
	 * Check if given data is not an object
	 * @param data
	 * @returns {boolean} true if data is not an object, false otherwise
	 */
	function isNotObject$1 ( data ) {
	    return !isObject$1( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is an empty object
	 * @param data
	 * @returns {boolean|*} true if data is an empty object, false otherwise
	 */
	function isEmptyObject ( data ) {
	    return ( isObject$1( data ) && isEmpty( data ) )
	}

	/**
	 * Check if given data is not an empty object
	 * @param data
	 * @returns {boolean|*} true if data is not an empty object, false otherwise
	 */
	function isNotEmptyObject ( data ) {
	    return ( isObject$1( data ) && isNotEmpty( data ) )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is a string
	 * @param data
	 * @returns {boolean|*} true if data is a string, false otherwise.
	 */
	function isString$1 ( data ) {
	    return (typeof data === 'string')
	}

	/**
	 * Check if given data is not a string
	 * @param data
	 * @returns {boolean|*} true if data is not a string, false otherwise.
	 */
	function isNotString$1 ( data ) {
	    return (typeof data !== 'string')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is an empty string
	 * @param data
	 * @returns {boolean|*} true if data is an empty string, false otherwise.
	 */
	function isEmptyString ( data ) {

	    console.assert( isString$1( data ), 'Expect a string !' );

	    return (isString$1( data ) && data.length === 0)
	}

	/**
	 * Check if given data is not an empty string
	 * @param data
	 * @returns {boolean|*} true if data is not an empty string, false otherwise.
	 */
	function isNotEmptyString ( data ) {

	    if ( isNotString$1( data ) ) {
	        throw new TypeError( 'Expect a string !' )
	    }

	    return (data.length > 0)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isBlankString ( data ) {

	    if ( isEmptyString( data ) ) {
	        throw new TypeError( 'Expect a non empty string !' )
	    }

	    return ( !/\S/.test( data ) )
	}

	function isNotBlankString ( data ) {
	    return ( isNotEmptyString( data ) && /\S/.test( data ) )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is a symbol
	 * @param data
	 * @returns {boolean|*} true if data is a symbol, false otherwise.
	 */
	function isSymbol ( data ) {
	    return (typeof data === 'symbol')
	}

	/**
	 * Check if given data is not a symbol
	 * @param data
	 * @returns {boolean|*} true if data is not a symbol, false otherwise.
	 */
	function isNotSymbol ( data ) {
	    return !isSymbol( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is undefined
	 * @param data
	 * @returns {boolean|*} true if data is undefined, false otherwise.
	 */
	function isUndefined$1 ( data ) {
	    return (typeof data === 'undefined')
	}

	function isNotUndefined ( data ) {
	    return (typeof data !== 'undefined')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isNullOrUndefined ( data ) {
	    return (isNull( data ) || isUndefined$1( data ))
	}

	/**
	 * Check if given data is not undefined
	 * @param data
	 * @returns {boolean|*} true if data is not undefined, false otherwise.
	 */
	function isDefined$1 ( data ) {
	    return (isNotNull( data ) && isNotUndefined( data ))
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * _____________________________________________________________________________________________________________________________________________________________________________________________________
	 * ___/\\\\\\\\\\\________________________________________________________/\\\________/\\\_________________/\\\\\\__________________/\\\________________________________________________________________
	 * ___\/////\\\///________________________________________________________\/\\\_______\/\\\________________\////\\\_________________\/\\\_______________________________________________________________
	 * ________\/\\\_________/\\\______________________________________________\//\\\______/\\\____________________\/\\\_____/\\\________\/\\\_____________________/\\\_____________________________________
	 * _________\/\\\______/\\\\\\\\\\\_____/\\\\\\\\______/\\\\\\\\_____________\//\\\____/\\\____/\\\\\\\\\_______\/\\\____\///_________\/\\\___/\\\\\\\\\_____/\\\\\\\\\\\_____/\\\\\_____/\\/\\\\\\\____
	 * __________\/\\\_____\////\\\////____/\\\/////\\\___/\\\/////\\\_____________\//\\\__/\\\____\////////\\\______\/\\\_____/\\\___/\\\\\\\\\__\////////\\\___\////\\\////____/\\\///\\\__\/\\\/////\\\__
	 * ___________\/\\\________\/\\\_______/\\\\\\\\\\\___/\\\\\\\\\\\_______________\//\\\/\\\_______/\\\\\\\\\\_____\/\\\____\/\\\__/\\\////\\\____/\\\\\\\\\\_____\/\\\_______/\\\__\//\\\_\/\\\___\///__
	 * ____________\/\\\________\/\\\_/\\__\//\\///////___\//\\///////_________________\//\\\\\_______/\\\/////\\\_____\/\\\____\/\\\_\/\\\__\/\\\___/\\\/////\\\_____\/\\\_/\\__\//\\\__/\\\__\/\\\________
	 * __________/\\\\\\\\\\\____\//\\\\\____\//\\\\\\\\\\__\//\\\\\\\\\\________________\//\\\_______\//\\\\\\\\/\\__/\\\\\\\\\_\/\\\_\//\\\\\\\/\\_\//\\\\\\\\/\\____\//\\\\\____\///\\\\\/___\/\\\_______
	 * __________\///////////______\/////______\//////////____\//////////__________________\///_________\////////\//__\/////////__\///___\///////\//___\////////\//______\/////_______\/////_____\///_______
	 * _____________________________________________________________________________________________________________________________________________________________________________________________________
	 *
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	exports.isArray = isArray;
	exports.isNotArray = isNotArray;
	exports.isArrayOfArray = isArrayOfArray;
	exports.isNotArrayOfArray = isNotArrayOfArray;
	exports.isArrayOfNull = isArrayOfNull;
	exports.isNotArrayOfNull = isNotArrayOfNull;
	exports.isArrayOfObject = isArrayOfObject;
	exports.isNotArrayOfObject = isNotArrayOfObject;
	exports.isArrayOfSingleElement = isArrayOfSingleElement;
	exports.isArrayOfMultiElement = isArrayOfMultiElement;
	exports.isArrayOfString = isArrayOfString;
	exports.isNotArrayOfString = isNotArrayOfString;
	exports.isArrayOfUndefined = isArrayOfUndefined;
	exports.isNotArrayOfUndefined = isNotArrayOfUndefined;
	exports.isEmptyArray = isEmptyArray;
	exports.isNotEmptyArray = isNotEmptyArray;
	exports.isBoolean = isBoolean;
	exports.isNotBoolean = isNotBoolean;
	exports.isFunction = isFunction;
	exports.isNotFunction = isNotFunction;
	exports.isFinite = isFinite$1;
	exports.isFloat = isFloat;
	exports.isInfinite = isInfinite;
	exports.isInfiniteNegative = isInfiniteNegative;
	exports.isInfinitePositive = isInfinitePositive;
	exports.isInteger = isInteger;
	exports.isMaxNegative = isMaxNegative;
	exports.isMaxPositive = isMaxPositive;
	exports.isMaxSafeInteger = isMaxSafeInteger;
	exports.isMinNegative = isMinNegative;
	exports.isMinPositive = isMinPositive;
	exports.isMinSafeInteger = isMinSafeInteger;
	exports.isNumber = isNumber;
	exports.isNotNumber = isNotNumber;
	exports.isNaN = isNaN;
	exports.isNumberNegative = isNumberNegative;
	exports.isNumberPositive = isNumberPositive;
	exports.isNumeric = isNumeric;
	exports.isNotNumeric = isNotNumeric;
	exports.isZero = isZero;
	exports.isZeroNegative = isZeroNegative;
	exports.isZeroPositive = isZeroPositive;
	exports.isObject = isObject$1;
	exports.isNotObject = isNotObject$1;
	exports.isEmptyObject = isEmptyObject;
	exports.isNotEmptyObject = isNotEmptyObject;
	exports.isBlankString = isBlankString;
	exports.isNotBlankString = isNotBlankString;
	exports.isEmptyString = isEmptyString;
	exports.isNotEmptyString = isNotEmptyString;
	exports.isString = isString$1;
	exports.isNotString = isNotString$1;
	exports.isSymbol = isSymbol;
	exports.isNotSymbol = isNotSymbol;
	exports.isEmpty = isEmpty;
	exports.isNotEmpty = isNotEmpty;
	exports.isNull = isNull$1;
	exports.isNotNull = isNotNull$1;
	exports.isNullOrUndefined = isNullOrUndefined;
	exports.isDefined = isDefined$1;
	exports.isUndefined = isUndefined$1;
	exports.isNotUndefined = isNotUndefined;

	return exports;

}({}));
