this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array or not
	 * @example
	 *
	 * import { isArray } from 'itee-validators'
	 *
	 * if( isArray( value ) ) {
	 *     //...
	 * } else {
	 *     //...
	 * }
	 *
	 */

	/**
	 * Check if given data is an array
	 *
	 * @param data {*} The data to check against the array type
	 * @returns {boolean} true if data is array, false otherwise
	 */
	function isArray ( data ) {
	    return Array.isArray( data )
	}

	// #if IS_REMOVE

	// Not exported alternative for benchmark
	function isArray_0 ( data ) {
	    return data instanceof Array
	}

	// Not exported alternative for benchmark
	function isArray_1 ( data ) {
	    return data.constructor === Array
	}

	// #endif

	////////////////////

	/**
	 * Check if given data is not an array
	 *
	 * @param data {*} The data to check against the array type
	 * @returns {boolean} true if data is not array, false otherwise
	 */
	function isNotArray ( data ) {
	    return !Array.isArray( data )
	}

	// #if IS_REMOVE

	function isNotArray_0 ( data ) {
	    return !isArray( data )
	}

	// #endif

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	const isArraySuite = suite( 'isArray', () => {

	    benchmark( 'isArray()', Itee.TestsUtils.iterateOverDataMap( isArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isArray_0()', Itee.TestsUtils.iterateOverDataMap( isArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isArray_1()', Itee.TestsUtils.iterateOverDataMap( isArray_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotArraySuite = suite( 'isNotArray', () => {

	    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an empty array
	 *
	 * @param data {*} The data to check against the empty array
	 * @returns {boolean} true if data is an empty array, false otherwise
	 */
	function isEmptyArray ( data ) {

	    if ( isNotArray( data ) ) { return false }

	    return (data.length === 0)

	}

	///////

	/**
	 * Check if given data is not an empty array
	 *
	 * @param data {*} The data to check against the empty array
	 * @returns {boolean} true if data is not an empty array, false otherwise
	 */
	function isNotEmptyArray ( data ) {

	    if ( isNotArray( data ) ) { return true }

	    return (data.length > 0)

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an array of array
	 *
	 * @param data {*} The data to check against the array of array type
	 * @returns {boolean} true if data is an array of array, false otherwise
	 */
	function isArrayOfArray ( data ) {

	    if ( isNotArray( data ) ) { return false }
	    if ( isEmptyArray( data ) ) { return false }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotArray( data[ index ] ) ) {
	            return false
	        }
	    }

	    return true

	}

	////////

	/**
	 * Check if given data is not an array of array
	 *
	 * @param data {*} The data to check against the array of array type
	 * @returns {boolean} true if data is not an array of array, false otherwise
	 */
	function isNotArrayOfArray ( data ) {

	    if ( isNotArray( data ) ) { return true }
	    if ( isEmptyArray( data ) ) { return true }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
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

	const isArrayOfArraySuite = suite( 'isArrayOfArray', () => {

	    benchmark( 'isArrayOfArray()', Itee.TestsUtils.iterateOverDataMap( isArrayOfArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotArrayOfArraySuite = suite( 'isNotArrayOfArray', () => {

	    benchmark( 'isNotArrayOfArray()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an array with multiples values
	 *
	 * @param data {*} The data to check against the single valued array
	 * @returns {boolean} true if data is an array with multiples values, false otherwise
	 */
	function isArrayOfMultiElement ( data ) {

	    if ( isNotArray( data ) ) { return false }

	    return (data.length > 1)

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

	const isArrayOfMultiElementSuite = suite( 'isArrayOfMultiElement', () => {

	    benchmark( 'isArrayOfMultiElement()', Itee.TestsUtils.iterateOverDataMap( isArrayOfMultiElement ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/voids
	 * @desc Export function to validate if a value is a void
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is null
	 *
	 * @param data {*} The data to check against the nullity
	 * @returns {boolean} true if data is null, false otherwise.
	 */
	function isNull ( data ) {
	    return (data === null)
	}

	///

	/**
	 * Check if given data is not null
	 *
	 * @param data {*} The data to check against the nullity
	 * @returns {boolean} true if data is not null, false otherwise.
	 */
	function isNotNull ( data ) {
	    return (data !== null)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are null
	 *
	 * @param data {*} The data to check against the array of array type
	 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
	 */
	function isArrayOfNull ( data ) {

	    if ( isNotArray( data ) ) { return false }
	    if ( isEmptyArray( data ) ) { return false }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotNull( data[ index ] ) ) {
	            return false
	        }
	    }

	    return true

	}

	/////

	/**
	 * Check if given data is not an empty array where all values are not null
	 *
	 * @param data {*} The data to check against the array of array type
	 * @returns {boolean} true if data is not an empty array where all values are not null, false otherwise
	 */
	function isNotArrayOfNull ( data ) {

	    if ( isNotArray( data ) ) { return true }
	    if ( isEmptyArray( data ) ) { return true }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotNull( data[ index ] ) ) {
	            return true
	        }
	    }

	    return false

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

	const isArrayOfNullSuite = suite( 'isArrayOfNull', () => {

	    benchmark( 'isArrayOfNull()', Itee.TestsUtils.iterateOverDataMap( isArrayOfNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotArrayOfNullSuite = suite( 'isNotArrayOfNull', () => {

	    benchmark( 'isNotArrayOfNull()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/voids
	 * @desc Export function to validate if a value is a void
	 * @example todo
	 *
	 */


	/**
	 * Check if given data is not null and not undefined
	 *
	 * @param data {*} The data to check against the existence
	 * @returns {boolean} true if data is not null and not undefined, false otherwise.
	 */
	function isDefined ( data ) {
	    return ((data !== null) && (typeof data !== 'undefined'))
	}

	/////

	/**
	 * Check if given data is null or undefined
	 *
	 * @param data {*} The data to check against the existence
	 * @returns {boolean} true if data is null or undefined, false otherwise.
	 */
	function isNotDefined ( data ) {
	    return ((data === null) || (typeof data === 'undefined'))
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/objects
	 * @desc Export function to validate if a value is an object
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an object
	 *
	 * @param data {*} The data to check against the object type
	 * @returns {boolean} true if data is object, false otherwise
	 */
	function isObject ( data ) {

	    if ( isNotDefined( data ) ) { return false }

	    return (data.constructor === Object)
	}

	////

	/**
	 * Check if given data is not an object
	 *
	 * @param data {*} The data to check against the object type
	 * @returns {boolean} true if data is not an object, false otherwise
	 */
	function isNotObject ( data ) {
	    return !isObject( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an array where all values are of object type
	 *
	 * @param data {*} The data to check against the array of object type
	 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
	 */
	function isArrayOfObject ( data ) {

	    if ( isNotArray( data ) ) { return false }
	    if ( isEmptyArray( data ) ) { return false }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotObject( data[ index ] ) ) {
	            return false
	        }
	    }

	    return true

	}

	////

	/**
	 * Check if given data is not an array where all values are of object type
	 *
	 * @param data {*} The data to check against the array of object type
	 * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
	 */
	function isNotArrayOfObject ( data ) {

	    if ( isNotArray( data ) ) { return true }
	    if ( isEmptyArray( data ) ) { return true }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotObject( data[ index ] ) ) {
	            return true
	        }
	    }

	    return false

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

	const isArrayOfObjectSuite = suite( 'isArrayOfObject', () => {

	    benchmark( 'isArrayOfObject()', Itee.TestsUtils.iterateOverDataMap( isArrayOfObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotArrayOfObjectSuite = suite( 'isNotArrayOfObject', () => {

	    benchmark( 'isNotArrayOfObject()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an array with a single value
	 *
	 * @param data {*} The data to check against the single valued array
	 * @returns {boolean} true if data is an array with a single value, false otherwise
	 */
	function isArrayOfSingleElement ( data ) {

	    if ( isNotArray( data ) ) { return false }

	    if ( data.length !== 1 ) {
	        return false
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

	const isArrayOfSingleElementSuite = suite( 'isArrayOfSingleElement', () => {

	    benchmark( 'isArrayOfSingleElement()', Itee.TestsUtils.iterateOverDataMap( isArrayOfSingleElement ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/strings
	 * @desc Export function to validate if a value is a string
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a string
	 *
	 * @param data {*} The data to check against the string type
	 * @returns {boolean} true if data is a string, false otherwise.
	 */
	function isString ( data ) {
	    return (typeof data === 'string' || data instanceof String)
	}

	// #if IS_REMOVE
	function isString_0 ( val ) {
	    return (typeof val === 'string')
	}

	function isString_1 ( val ) {
	    return (typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call( val ) === '[object String]'))
	}

	function isString_2 ( val ) {
	    return (Object.prototype.toString.call( val ) === '[object String]')
	}

	function isString_3 ( val ) {
	    return (val !== null && val !== undefined && val.constructor === String)
	}

	function isString_4 ( val ) {
	    return (val === val + '')
	}

	// #endif


	//////

	/**
	 * Check if given data is not a string
	 *
	 * @param data {*} The data to check against the string type
	 * @returns {boolean} true if data is not a string, false otherwise.
	 */
	function isNotString ( data ) {
	    return !isString( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are string
	 *
	 * @param data {*} The data to check against the array of strings
	 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
	 */
	function isArrayOfString ( data ) {

	    if ( isNotArray( data ) ) { return false }
	    if ( isEmptyArray( data ) ) { return false }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotString( data[ index ] ) ) {
	            return false
	        }
	    }

	    return true

	}

	// #if IS_REMOVE
	function isArrayOfString_1 ( data ) {

	    if ( !Array.isArray( data ) ) {
	        return false
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return false
	    }

	    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
	        if ( typeof data[ index ] !== 'string' ) {
	            return false
	        }
	    }

	    return true

	}

	// #endif


	/////

	/**
	 * Check if given data is not an empty array where all values are not string
	 *
	 * @param data {*} The data to check against the array of strings
	 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
	 */
	function isNotArrayOfString ( data ) {

	    if ( isNotArray( data ) ) { return true }
	    if ( isEmptyArray( data ) ) { return true }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotString( data[ index ] ) ) {
	            return true
	        }
	    }

	    return false

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

	const isArrayOfStringSuite = suite( 'isArrayOfString', () => {

	    benchmark( 'isArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isArrayOfString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isArrayOfString_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotArrayOfStringSuite = suite( 'isNotArrayOfString', () => {

	    benchmark( 'isNotArrayOfString()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/voids
	 * @desc Export function to validate if a value is a void
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is undefined
	 *
	 * @param data {*} The data to check against the undefiness
	 * @returns {boolean} true if data is undefined, false otherwise.
	 */
	function isUndefined ( data ) {
	    return (typeof data === 'undefined')
	}

	///

	/**
	 * Check if given data is defined
	 *
	 * @param data {*} The data to check against the undefiness
	 * @returns {boolean} true if data is defined, false otherwise.
	 */
	function isNotUndefined ( data ) {
	    return (typeof data !== 'undefined')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/arrays
	 * @desc Export function to validate if a value is an array of array or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are undefined
	 *
	 * @param data {*} The data to check against the array of undefined
	 * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
	 */
	function isArrayOfUndefined ( data ) {

	    if ( isNotArray( data ) ) { return false }
	    if ( isEmptyArray( data ) ) { return false }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotUndefined( data[ index ] ) ) {
	            return false
	        }
	    }

	    return true

	}

	////

	/**
	 * Check if given data is not an empty array where all values are defined
	 *
	 * @param data {*} The data to check against the array of undefined
	 * @returns {boolean} true if data is not an empty array where all values are defined, false otherwise
	 */
	function isNotArrayOfUndefined ( data ) {

	    if ( isNotArray( data ) ) { return true }
	    if ( isEmptyArray( data ) ) { return true }

	    for ( let index = 0, dataLength = data.length ; index < dataLength ; index++ ) {
	        if ( isNotUndefined( data[ index ] ) ) {
	            return true
	        }
	    }

	    return false

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

	const isArrayOfUndefinedSuite = suite( 'isArrayOfUndefined', () => {

	    benchmark( 'isArrayOfUndefined()', Itee.TestsUtils.iterateOverDataMap( isArrayOfUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotArrayOfUndefinedSuite = suite( 'isNotArrayOfUndefined', () => {

	    benchmark( 'isNotArrayOfUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotArrayOfUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	const isEmptyArraySuite = suite( 'isEmptyArray', () => {

	    benchmark( 'isEmptyArray()', Itee.TestsUtils.iterateOverDataMap( isEmptyArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotEmptyArraySuite = suite( 'isNotEmptyArray', () => {

	    benchmark( 'isNotEmptyArray()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/booleans
	 * @desc Export function to validate if a value is a boolean or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a boolean
	 *
	 * @param data {*} The data to check against the booleaness
	 * @returns {boolean} true if data is a boolean, false otherwise.
	 */
	function isBoolean ( data ) {
	    return (typeof data === 'boolean')
	}

	// #if IS_REMOVE
	function isBoolean_alt ( value ) {

	    return typeof value === 'boolean' || (typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean')

	}

	// #endif

	//////

	/**
	 * Check if given data is not a boolean
	 *
	 * @param data {*} The data to check against the booleaness
	 * @returns {boolean} true if data is not a boolean, false otherwise.
	 */
	function isNotBoolean ( data ) {
	    return (typeof data !== 'boolean')
	}

	// #if IS_REMOVE
	function isNotBoolean_negbase ( data ) {
	    return !isBoolean( data )
	}

	// #endif

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isBooleanSuite = suite( 'isBoolean', () => {

	    benchmark( 'isBoolean()', Itee.TestsUtils.iterateOverDataMap( isBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isBoolean_alt()', Itee.TestsUtils.iterateOverDataMap( isBoolean_alt ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotBooleanSuite = suite( 'isNotBoolean', () => {

	    benchmark( 'isNotBoolean()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isNotBoolean_negbase()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/functions
	 * @desc Export function to validate if a value is a function or not
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a function
	 *
	 * @param data {*} The data to check against the functionality
	 * @returns {boolean} true if data is a function, false otherwise.
	 */
	function isFunction ( data ) {
	    return (typeof data === 'function')
	}

	///

	/**
	 * Check if given data is not a function
	 *
	 * @param data {*} The data to check against the functionality
	 * @returns {boolean} true if data is not a function, false otherwise.
	 */
	function isNotFunction ( data ) {
	    return (typeof data !== 'function')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isFunctionSuite = suite( 'isFunction', () => {

	    benchmark( 'isFunction()', Itee.TestsUtils.iterateOverDataMap( isFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotFunctionSuite = suite( 'isNotFunction', () => {

	    benchmark( 'isNotFunction()', Itee.TestsUtils.iterateOverDataMap( isNotFunction ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/numbers/isZero
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if the given data is zero
	 *
	 * @param data {*} The data to check against the zero value
	 * @returns {boolean} true if data is zero, false otherwise
	 */
	function isZero ( data ) {
	    return (data === 0)
	}

	/**
	 * Check if the given data is a positive zero
	 *
	 * @param data {*} The data to check against the positive zero value
	 * @returns {boolean} true if data is a positive zero, false otherwise
	 */
	function isZeroPositive ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
	}

	/**
	 * Check if the given data is a negative zero
	 *
	 * @param data {*} The data to check against the negative zero value
	 * @returns {boolean} true if data is a negative zero, false otherwise
	 */
	function isZeroNegative ( data ) {
	    return (data === 0 && (1 / data) === Number.NEGATIVE_INFINITY)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/numbers/isNumber
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a number
	 *
	 * @param data {*} The data to check against the maximum safe integer state
	 * @returns {boolean} true if data is a number, false otherwise.
	 */
	function isNumber ( data ) {

	    if ( isNotDefined( data ) ) { return false }

	    return (data.constructor === Number)

	}

	// #if IS_REMOVE
	function isNumber_0 ( data ) {
	    return (typeof data === 'number' && !Number.isNaN( data ))
	}

	function isNumber_1 ( data ) {
	    return (Number( data ) === data)
	}

	// #endif


	/**
	 * Check if the data is a positive number
	 *
	 * @param data {*} The data to check against the positivity
	 * @returns {boolean} true if data is a positive number, false otherwise.
	 */
	function isNumberPositive ( data ) {

	    if ( isNotNumber( data ) ) { return false }

	    return (data > 0 || isZeroPositive( data ) || isInfinitePositive( data ))

	}

	/**
	 * Check if the data is a negative number
	 *
	 * @param data {*} The data to check against the negativity
	 * @returns {boolean} true if data is a negative number, false otherwise.
	 */
	function isNumberNegative ( data ) {
	    return (isNumber( data ) && data < 0)
	}

	//////

	/**
	 * Check if given data is not a number
	 *
	 * @param data {*} The data to check against the number type
	 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
	 */
	function isNotNumber ( data ) {
	    return !(isNumber( data ))
	}


	/////////

	/**
	 * Check if the given data is an integer number
	 *
	 * @param data {*} The data to check against the integer state
	 * @returns {boolean} true if data is an integer, false otherwise
	 */
	function isInteger ( data ) {
	    return Number.isInteger(data)
	}

	// #if IS_REMOVE
	function isInteger_0 ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
	}

	function isInteger_1 ( data ) {
	    return data % 1 === 0
	}

	function isInteger_2 ( n ) {
	    return n === +n && n === (n | 0)
	}

	function isInteger_3 ( nVal ) {
	    return typeof nVal === 'number' && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal
	}
	// #endif


	////////

	/**
	 * Check if given data is a floating point number
	 *
	 * @param data {*} The data to check against the floating point
	 * @returns {boolean} true if data is a float, false otherwise
	 */
	function isFloat ( data ) {

	    if ( isNotNumber( data ) ) { return false }
	    if ( Number.isNaN( data ) ) { return false }
	    if ( isInfinite( data ) ) { return false}

	    return data % 1 !== 0

	}

	// #if IS_REMOVE
	function isFloat_1 ( n ) {
	    return n === +n && n !== (n | 0)
	}

	function isFloat_2 ( x ) {
	    return !!(x % 1)
	}

	// #endif


	////////

	/**
	 * Check if given data is not a number
	 *
	 * @param data {*} The data to check against the maximum safe integer state
	 * @returns {boolean} true if data is not a number, false otherwise.
	 */
	function isNaN ( data ) {
	    return Number.isNaN( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/numbers/isInfinite
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if the given data is an infinite number
	 *
	 * @param data {*} The data to check against the infinite state
	 * @returns {boolean} true if data is infinite, false otherwise
	 */
	function isInfinite ( data ) {

	    if ( isNotNumber( data ) ) { return false }
	    if ( Number.isNaN( data ) ) { return false }

	    return !Number.isFinite( data )
	}

	/**
	 * Check if the given data is an infinite negative number
	 *
	 * @param data {*} The data to check against the negative infinite state
	 * @returns {boolean} true if data is negative infinite, false otherwise
	 */
	function isInfiniteNegative ( data ) {
	    return (data === Number.NEGATIVE_INFINITY)
	}

	/**
	 * Check if the given data is an infinite positive number
	 *
	 * @param data {*} The data to check against the positive infinite state
	 * @returns {boolean} true if data is positive infinite, false otherwise
	 */
	function isInfinitePositive ( data ) {
	    return (data === Number.POSITIVE_INFINITY)
	}

	///

	/**
	 * Check if the given data is a finite number
	 *
	 * @param data {*} The data to check against the finite state
	 * @returns {boolean} true if data is finite, false otherwise
	 */
	function isFinite$1 ( data ) {
	    return Number.isFinite( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isInfiniteSuite = suite( 'isInfinite', () => {

	    benchmark( 'isInfinite()', Itee.TestsUtils.iterateOverDataMap( isInfinite ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isInfinitePositiveSuite = suite( 'isInfinitePositive', () => {

	    benchmark( 'isInfinitePositive()', Itee.TestsUtils.iterateOverDataMap( isInfinitePositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isInfiniteNegativeSuite = suite( 'isInfiniteNegative', () => {

	    benchmark( 'isInfiniteNegative()', Itee.TestsUtils.iterateOverDataMap( isInfiniteNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isFiniteSuite = suite( 'isFinite', () => {

	    benchmark( 'isFinite()', Itee.TestsUtils.iterateOverDataMap( isFinite$1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/numbers/isMax
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if the given data is a maximum positive number
	 *
	 * @param data {*} The data to check against the positive maximum state
	 * @returns {boolean} true if data is positive maximum, false otherwise
	 */
	function isMaxPositive ( data ) {
	    return (data === Number.MAX_VALUE)
	}

	/**
	 * Check if the given data is a maximum negative number
	 *
	 * @param data {*} The data to check against the maximum infinite state
	 * @returns {boolean} true if data is negative maximum, false otherwise
	 */
	function isMaxNegative ( data ) {
	    return (data === -Number.MAX_VALUE)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isMaxPositiveSuite = suite( 'isMaxPositive', () => {

	    benchmark( 'isMaxPositive()', Itee.TestsUtils.iterateOverDataMap( isMaxPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isMaxNegativeSuite = suite( 'isMaxNegative', () => {

	    benchmark( 'isMaxNegative()', Itee.TestsUtils.iterateOverDataMap( isMaxNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isNumberSuite = suite( 'isNumber', () => {

	    benchmark( 'isNumber()', Itee.TestsUtils.iterateOverDataMap( isNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isNumber_0()', Itee.TestsUtils.iterateOverDataMap( isNumber_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isNumber_1()', Itee.TestsUtils.iterateOverDataMap( isNumber_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotNumberSuite = suite( 'isNotNumber', () => {

	    benchmark( 'isNotNumber()', Itee.TestsUtils.iterateOverDataMap( isNotNumber ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNumberPositiveSuite = suite( 'isNumberPositive', () => {

	    benchmark( 'isNumberPositive()', Itee.TestsUtils.iterateOverDataMap( isNumberPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNumberNegativeSuite = suite( 'isNumberNegative', () => {

	    benchmark( 'isNumberNegative()', Itee.TestsUtils.iterateOverDataMap( isNumberNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isIntegerSuite = suite( 'isInteger', () => {

	    benchmark( 'isInteger()', Itee.TestsUtils.iterateOverDataMap( isInteger ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isInteger_0()', Itee.TestsUtils.iterateOverDataMap( isInteger_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isInteger_1()', Itee.TestsUtils.iterateOverDataMap( isInteger_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isInteger_2()', Itee.TestsUtils.iterateOverDataMap( isInteger_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isInteger_3()', Itee.TestsUtils.iterateOverDataMap( isInteger_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isFloatSuite = suite( 'isFloat', () => {

	    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isFloat()', Itee.TestsUtils.iterateOverDataMap( isFloat_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNaNSuite = suite( 'isNaN', () => {

	    benchmark( 'isNaN()', Itee.TestsUtils.iterateOverDataMap( isNaN ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isZeroSuite = suite( 'isZero', () => {

	    benchmark( 'isZero()', Itee.TestsUtils.iterateOverDataMap( isZero ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isZeroPositiveSuite = suite( 'isZeroPositive', () => {

	    benchmark( 'isZeroPositive()', Itee.TestsUtils.iterateOverDataMap( isZeroPositive ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isZeroNegativeSuite = suite( 'isZeroNegative', () => {

	    benchmark( 'isZeroNegative()', Itee.TestsUtils.iterateOverDataMap( isZeroNegative ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/objects
	 * @desc Export function to validate if a value is an object
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an empty object
	 *
	 * @param data {*} The data to check against the emptiness of the object
	 * @returns {boolean} true if data is an empty object, false otherwise
	 */
	function isEmptyObject ( data ) {

	    if ( isNotObject( data ) ) { return false }

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

	////

	/**
	 * Check if given data is not an empty object
	 *
	 * @param data {*} The data to check against the emptiness of the object
	 * @returns {boolean} true if data is not an empty object, false otherwise
	 */
	function isNotEmptyObject ( data ) {
	    return !(isEmptyObject( data ))
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isEmptyObjectSuite = suite( 'isEmptyObject', () => {

	    benchmark( 'isEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotEmptyObjectSuite = suite( 'isNotEmptyObject', () => {

	    benchmark( 'isNotEmptyObject()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isObjectSuite = suite( 'isObject', () => {

	    benchmark( 'isObject()', Itee.TestsUtils.iterateOverDataMap( isObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotObjectSuite = suite( 'isNotObject', () => {

	    benchmark( 'isNotObject()', Itee.TestsUtils.iterateOverDataMap( isNotObject ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/strings
	 * @desc Export function to validate if a value is a string
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is an empty string
	 *
	 * @param data {*} The data to check against the emptiness of the string
	 * @returns {boolean} true if data is an empty string, false otherwise.
	 */
	function isEmptyString ( data ) {

	    if ( isNotString( data ) ) {
	        return false
	    }

	    return (data.length === 0)

	}

	////

	/**
	 * Check if given data is not an empty string
	 *
	 * @param data {*} The data to check against the emptiness of the string
	 * @returns {boolean} true if data is not an empty string, false otherwise.
	 */
	function isNotEmptyString ( data ) {

	    return !(isEmptyString(data))

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/strings
	 * @desc Export function to validate if a value is a string
	 * @example todo
	 *
	 */

	/**
	 * Check if the given data is a blank string
	 *
	 * @param data {*} The data to check against the blankness of the string
	 * @returns {boolean} true if data is a blank string, false otherwise.
	 */
	function isBlankString ( data ) {

	    if ( isNotString( data ) ) { return false }
	    if ( isEmptyString( data ) ) { return false }

	    return (!/\S/.test( data ))
	}

	////

	/**
	 * Check if the given data is not a blank string
	 *
	 * @param data {*} The data to check against the blankness of the string
	 * @returns {boolean} true if data is not a blank string, false otherwise.
	 */
	function isNotBlankString ( data ) {

	    return !(isBlankString( data ))

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isBlankStringSuite = suite( 'isBlankString', () => {

	    benchmark( 'isBlankString()', Itee.TestsUtils.iterateOverDataMap( isBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotBlankStringSuite = suite( 'isNotBlankString', () => {

	    benchmark( 'isNotBlankString()', Itee.TestsUtils.iterateOverDataMap( isNotBlankString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isEmptyStringSuite = suite( 'isEmptyString', () => {

	    benchmark( 'isEmptyString()', Itee.TestsUtils.iterateOverDataMap( isEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotEmptyStringSuite = suite( 'isNotEmptyString', () => {

	    benchmark( 'isNotEmptyString()', Itee.TestsUtils.iterateOverDataMap( isNotEmptyString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isStringSuite = suite( 'isString', () => {

	    benchmark( 'isString()', Itee.TestsUtils.iterateOverDataMap( isString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_0()', Itee.TestsUtils.iterateOverDataMap( isString_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_1()', Itee.TestsUtils.iterateOverDataMap( isString_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_2()', Itee.TestsUtils.iterateOverDataMap( isString_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_3()', Itee.TestsUtils.iterateOverDataMap( isString_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_4()', Itee.TestsUtils.iterateOverDataMap( isString_4 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotStringSuite = suite( 'isNotString', () => {

	    benchmark( 'isNotString()', Itee.TestsUtils.iterateOverDataMap( isNotString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/symbols
	 * @desc Export function to validate if a value is a symbol
	 * @example todo
	 *
	 */

	/**
	 * Check if given data is a symbol
	 *
	 * @param data {*} The data to check against the symbol type
	 * @returns {boolean} true if data is a symbol, false otherwise.
	 */
	function isSymbol ( data ) {
	    return (typeof data === 'symbol')
	}

	/////

	/**
	 * Check if given data is not a symbol
	 *
	 * @param data {*} The data to check against the symbol type
	 * @returns {boolean} true if data is not a symbol, false otherwise.
	 */
	function isNotSymbol ( data ) {
	    return (typeof data !== 'symbol')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isSymbolSuite = suite( 'isSymbol', () => {

	    benchmark( 'isSymbol()', Itee.TestsUtils.iterateOverDataMap( isSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotSymbolSuite = suite( 'isNotSymbol', () => {

	    benchmark( 'isNotSymbol()', Itee.TestsUtils.iterateOverDataMap( isNotSymbol ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/voids
	 * @desc Export function to validate if a value is a void
	 * @example todo
	 *
	 */

	/**
	 * Check emptiness of given data
	 *
	 * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
	 *
	 * @param data {*} The data to check against the emptiness
	 * @returns {boolean} true if data is considered as empty, false otherwise.
	 */
	function isEmpty ( data ) {

	    if ( isNotDefined( data ) ) { return false }
	    if ( isEmptyString( data ) ) { return true}
	    if ( isEmptyArray( data ) ) { return true }
	    if ( isEmptyObject( data ) ) { return true }

	    return false

	}

	///

	/**
	 * Check fullness of given data
	 *
	 * @param data {*} The data to check against the emptiness
	 * @returns {boolean} true if data is considered as not empty, false otherwise.
	 */
	function isNotEmpty ( data ) {
	    return !isEmpty( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isEmptySuite = suite( 'isEmpty', () => {

	    benchmark( 'isEmpty()', Itee.TestsUtils.iterateOverDataMap( isEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotEmptySuite = suite( 'isNotEmpty', () => {

	    benchmark( 'isNotEmpty()', Itee.TestsUtils.iterateOverDataMap( isNotEmpty ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isNullSuite = suite( 'isNull', () => {

	    benchmark( 'isNull()', Itee.TestsUtils.iterateOverDataMap( isNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotNullSuite = suite( 'isNotNull', () => {

	    benchmark( 'isNotNull()', Itee.TestsUtils.iterateOverDataMap( isNotNull ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isDefinedSuite = suite( 'isDefined', () => {

	    benchmark( 'isDefined()', Itee.TestsUtils.iterateOverDataMap( isDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotDefinedSuite = suite( 'isNotDefined', () => {

	    benchmark( 'isNotDefined()', Itee.TestsUtils.iterateOverDataMap( isNotDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	const isUndefinedSuite = suite( 'isUndefined', () => {

	    benchmark( 'isUndefined()', Itee.TestsUtils.iterateOverDataMap( isUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	const isNotUndefinedSuite = suite( 'isNotUndefined', () => {

	    benchmark( 'isNotUndefined()', Itee.TestsUtils.iterateOverDataMap( isNotUndefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

}());
