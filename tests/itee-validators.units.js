this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function createDataSet() {

	    const voidDataSet = [
	        null,
	        undefined,
	        void(0)
	    ];

	    const booleanDataSet = [
	        true,
	        false
	    ];

	    const numericDataSet = [
	        Number.NEGATIVE_INFINITY,
	        -Number.MAX_VALUE,
	        Number.MIN_SAFE_INTEGER,
	        -Number.MIN_VALUE,
	        -0x123456,
	        -2e+2,
	        -1.0,
	        -1,
	        -0.0,
	        -0,
	        Number.NaN,
	        0,
	        0.0,
	        1,
	        1.0,
	        2e+2,
	        0x123456,
	        Number.MIN_VALUE,
	        Number.MAX_SAFE_INTEGER,
	        Number.MAX_VALUE,
	        Number.POSITIVE_INFINITY
	    ];

	    const stringDataSet = (() => {
	        'use strict';

	        const dataSet = [];

	        dataSet.push( '' );
	        dataSet.push( '      ' );

	        for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
	            dataSet.push( `${voidDataSet[ i ]}` );
	        }

	        for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
	            dataSet.push( `${booleanDataSet[ j ]}` );
	        }

	        for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
	            dataSet.push( `${numericDataSet[ k ]}` );
	        }

	        dataSet.push( 'foobar' );

	        return dataSet

	    })();

	    const functionDataSet = [
	        function emptyFct () {},
	        () => {}
	    ];

	    const arrayDataSet = (() => {
	        'use strict';

	        const dataSet = [];

	        dataSet.push( [] );

	        for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
	            dataSet.push( [ voidDataSet[ i ] ] );
	        }
	        dataSet.push( voidDataSet );

	        for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
	            dataSet.push( [ booleanDataSet[ j ] ] );
	        }
	        dataSet.push( booleanDataSet );

	        for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
	            dataSet.push( [ numericDataSet[ k ] ] );
	        }
	        dataSet.push( numericDataSet );

	        for ( let k = 0, o = functionDataSet.length ; k < o ; k++ ) {
	            dataSet.push( [ functionDataSet[ k ] ] );
	        }
	        dataSet.push( functionDataSet );

	        return dataSet

	    })();

	    const objectDataSet = [
	        {},
	        { null: null },
	        { undefined: undefined }
	    ];

	    return {
	        voids:     voidDataSet,
	        booleans:  booleanDataSet,
	        numbers:   numericDataSet,
	        strings:   stringDataSet,
	        functions: functionDataSet,
	        arrays:    arrayDataSet,
	        objects:   objectDataSet,
	    }

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/voids
	 * @desc Export the validation methods about voids notions
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

	function isNotNull_1 ( data ) {
	    return !(data === null)
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
	 * @module sources/cores/strings
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
	 * @module sources/cores/objects
	 * @desc Export the validation methods about objects
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
	 * @module sources/cores/arrays
	 * @desc Export the validation methods about Arrays
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

	function isNotArray_1 ( data ) {
	    return !isArray( data )
	}

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

	    const dataLength = data.length;
	    if( dataLength === 0 ) {
	        return false
	    }

	    for ( let index = 0 ; index < dataLength ; index += 1 ) {
	        if ( data[ index ] !== null ) {
	            return false
	        }
	    }

	    return true

	}

	function isArrayOfNull_1 ( data ) {

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
	 * Check if given data is an array with a single value
	 *
	 * @param data {any} The data to check against the single valued array
	 * @returns {boolean} true if data is an array with a single value, false otherwise
	 */
	function isArrayOfSingleElement ( data ) {

	    return ( isArray( data ) && data.length === 1 )

	}

	/**
	 * Check if given data is an array with multiples values
	 *
	 * @param data {any} The data to check against the single valued array
	 * @returns {boolean} true if data is an array with multiples values, false otherwise
	 */
	function isArrayOfMultiElement ( data ) {

	    return ( isArray( data ) && data.length > 1 )

	}

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayUnits () {

	    describe( 'isArray()', () => {

	        it( 'should be implemented', () => {

	            expect( isArray( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfArrayUnits () {

	    describe( 'isArrayOfArray()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfArray( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfMultiElement method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfMultiElementUnits () {

	    describe( 'isArrayOfMultiElement()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfMultiElement( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfNull method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfNullUnits () {

	    describe( 'isArrayOfNull()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfNull( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfObject method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfObjectUnits () {

	    describe( 'isArrayOfObject()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfObject( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfSingleElement method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfSingleElementUnits () {

	    describe( 'isArrayOfSingleElement()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfSingleElement( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfString method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfStringUnits () {

	    describe( 'isArrayOfString()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfString( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfUndefined method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfUndefinedUnits () {

	    describe( 'isArrayOfUndefined()', () => {

	        it( 'should be implemented', () => {

	            expect( isArrayOfUndefined( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isEmptyArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isEmptyArrayUnits () {

	    describe( 'isEmptyArray()', () => {

	        it( 'should be implemented', () => {

	            expect( isEmptyArray( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayUnits () {

	    describe( 'isNotArray()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotArray( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfArrayUnits () {

	    describe( 'isNotArrayOfArray()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotArrayOfArray( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfNull method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfNullUnits () {

	    describe( 'isNotArrayOfNull()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotArrayOfNull( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfObject method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfObjectUnits () {

	    describe( 'isNotArrayOfObject()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotArrayOfObject( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfString method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfStringUnits () {

	    describe( 'isNotArrayOfString()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotArrayOfString( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfUndefined method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfUndefinedUnits () {

	    describe( 'isNotArrayOfUndefined()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotArrayOfUndefined( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotEmptyArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotEmptyArrayUnits () {

	    describe( 'isNotEmptyArray()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotEmptyArray( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function ArraysUnits () {

	    describe( 'Arrays', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isArrayUnits.call( this );
	        isArrayOfArrayUnits.call( this );
	        isArrayOfMultiElementUnits.call( this );
	        isArrayOfNullUnits.call( this );
	        isArrayOfObjectUnits.call( this );
	        isArrayOfArrayUnits.call( this );
	        isArrayOfSingleElementUnits.call( this );
	        isArrayOfStringUnits.call( this );
	        isArrayOfUndefinedUnits.call( this );
	        isEmptyArrayUnits.call( this );
	        isNotArrayUnits.call( this );
	        isNotArrayOfArrayUnits.call( this );
	        isNotArrayOfNullUnits.call( this );
	        isNotArrayOfObjectUnits.call( this );
	        isNotArrayOfStringUnits.call( this );
	        isNotArrayOfUndefinedUnits.call( this );
	        isNotEmptyArrayUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/booleans
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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isBoolean method.
	 * @requires {@link module:sources/cores/booleans}
	 *
	 */

	function isBooleanUnits () {

	    describe( 'isBoolean()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ 0 ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isBoolean method.
	 * @requires {@link module:sources/cores/booleans}
	 */

	function isNotBooleanUnits () {

	    describe( 'isNotBoolean()', () => {

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ 0 ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function BooleansUnits () {

	    describe( 'Booleans', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isBooleanUnits.call( this );
	        isNotBooleanUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/functions
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
	 * @module tests/cores/functions
	 * @desc Export the units tests about isFunction method.
	 * @requires {@link module:sources/cores/functions}
	 *
	 */

	function isFunctionUnits () {

	    describe( 'isFunction()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ 0 ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/functions
	 * @desc Export the units tests about isNotFunction method.
	 * @requires {@link module:sources/cores/functions}
	 *
	 */

	function isNotFunctionUnits () {

	    describe( 'isNotFunction()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ 0 ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotFunction( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function FunctionsUnits () {

	    describe( 'Functions', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isFunctionUnits.call( this );
	        isNotFunctionUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/numbers
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
	 * Check if the given data is an integer number
	 *
	 * @param data {any} The data to check against the integer state
	 * @returns {boolean} true if data is an integer, false otherwise
	 */
	function isInteger ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
	}

	function isInteger_1 ( data ) {
	    return data % 1 === 0
	}

	function isInteger_2 ( n ) {
	    return n === +n && n === (n | 0);
	}

	function isInteger_3 ( nVal ) {
	    return typeof nVal === "number" && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal;
	}

	/**
	 * Check if given data is a floating point number
	 *
	 * @param data {any} The data to check against the floating point
	 * @returns {boolean} true if data is a float, false otherwise
	 */
	function isFloat ( data ) {
	    return data % 1 !== 0
	}

	function isFloat_1 ( n ) {
	    return n === +n && n !== (n | 0)
	}

	function isFloat_2 ( x ) {
	    return !!(x % 1)
	}

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isFinite method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isFiniteUnits () {

	    describe( 'isFinite()', () => {

	        it( 'should be implemented', () => {

	            expect( isFinite( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isFloatUnits () {

	    describe( 'isFloat()', () => {

	        it( 'should be implemented', () => {

	            expect( isFloat( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfinite method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isInfiniteUnits () {

	    describe( 'isInfinite()', () => {

	        it( 'should be implemented', () => {

	            expect( isInfinite( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfiniteNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isInfiniteNegativeUnits () {

	    describe( 'isInfiniteNegative()', () => {

	        it( 'should be implemented', () => {

	            expect( isInfiniteNegative( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfinitePositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isInfinitePositiveUnits () {

	    describe( 'isInfinitePositive()', () => {

	        it( 'should be implemented', () => {

	            expect( isInfinitePositive( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isIntegerUnits () {

	    describe( 'isInteger()', () => {

	        it( 'should be implemented', () => {

	            expect( isInteger( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMaxNegativeUnits () {

	    describe( 'isMaxNegative()', () => {

	        it( 'should be implemented', () => {

	            expect( isMaxNegative( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMaxPositiveUnits () {

	    describe( 'isMaxPositive()', () => {

	        it( 'should be implemented', () => {

	            expect( isMaxPositive( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxSafeInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMaxSafeIntegerUnits () {

	    describe( 'isMaxSafeInteger()', () => {

	        it( 'should be implemented', () => {

	            expect( isMaxSafeInteger( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMinNegativeUnits () {

	    describe( 'isMinNegative()', () => {

	        it( 'should be implemented', () => {

	            expect( isMinNegative( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMinPositiveUnits () {

	    describe( 'isMinPositive()', () => {

	        it( 'should be implemented', () => {

	            expect( isMinPositive( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinSafeInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMinSafeIntegerUnits () {

	    describe( 'isMinSafeInteger()', () => {

	        it( 'should be implemented', () => {

	            expect( isMinSafeInteger( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNotNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNotNumberUnits () {

	    describe( 'isNotNumber()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotNumber( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNotNumeric method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNotNumericUnits () {

	    describe( 'isNotNumeric()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotNumeric( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNumberUnits () {

	    describe( 'isNumber()', () => {

	        it( 'should be implemented', () => {

	            expect( isNumber( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumberNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNumberNegativeUnits () {

	    describe( 'isNumberNegative()', () => {

	        it( 'should be implemented', () => {

	            expect( isNumberNegative( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumberPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNumberPositiveUnits () {

	    describe( 'isNumberPositive()', () => {

	        it( 'should be implemented', () => {

	            expect( isNumberPositive( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumeric method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNumericUnits () {

	    describe( 'isNumeric()', () => {

	        it( 'should be implemented', () => {

	            expect( isNumeric( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZero method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isZeroUnits () {

	    describe( 'isZero()', () => {

	        it( 'should be implemented', () => {

	            expect( isZero( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZeroNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isZeroNegativeUnits () {

	    describe( 'isZeroNegative()', () => {

	        it( 'should be implemented', () => {

	            expect( isZeroNegative( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZeroPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isZeroPositiveUnits () {

	    describe( 'isZeroPositive()', () => {

	        it( 'should be implemented', () => {

	            expect( isZeroPositive( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function NumbersUnits () {

	    describe( 'Numbers', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isFiniteUnits.call( this );
	        isFloatUnits.call( this );
	        isInfiniteUnits.call( this );
	        isInfiniteNegativeUnits.call( this );
	        isInfinitePositiveUnits.call( this );
	        isIntegerUnits.call( this );
	        isMaxNegativeUnits.call( this );
	        isMaxPositiveUnits.call( this );
	        isMaxSafeIntegerUnits.call( this );
	        isMinNegativeUnits.call( this );
	        isMinPositiveUnits.call( this );
	        isMinSafeIntegerUnits.call( this );
	        isNotNumberUnits.call( this );
	        isNotNumericUnits.call( this );
	        isNumberUnits.call( this );
	        isNumberNegativeUnits.call( this );
	        isNumberPositiveUnits.call( this );
	        isNumericUnits.call( this );
	        isZeroUnits.call( this );
	        isZeroNegativeUnits.call( this );
	        isZeroPositiveUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isObjectUnits () {

	    describe( 'isObject()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isObject( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isNotObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isNotObjectUnits () {

	    describe( 'isNotObject()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotObject( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isEmptyObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isEmptyObjectUnits () {

	    describe( 'isEmptyObject()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isEmptyObject( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isNotEmptyObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isNotEmptyObjectUnits () {

	    describe( 'isNotEmptyObject()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmptyObject( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function ObjectsUnits () {

	    describe( 'Objects', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isObjectUnits.call( this );
	        isNotObjectUnits.call( this );
	        isEmptyObjectUnits.call( this );
	        isNotEmptyObjectUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isStringUnits () {

	    describe( 'isString()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isString( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isNotString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isNotStringUnits () {

	    describe( 'isNotString()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotString( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isEmptyString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isEmptyStringUnits () {

	    describe( 'isEmptyString()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isEmptyString( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isNotEmptyString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isNotEmptyStringUnits () {

	    describe( 'isNotEmptyString()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmptyString( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isBlankString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isBlankStringUnits () {

	    describe( 'isBlankString()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBlankString( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isNotBlankString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isNotBlankStringUnits () {

	    describe( 'isNotBlankString()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBlankString( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function StringsUnits () {

	    describe( 'Strings', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isStringUnits.call( this );
	        isNotStringUnits.call( this );
	        isEmptyStringUnits.call( this );
	        isNotEmptyStringUnits.call( this );
	        isBlankStringUnits.call( this );
	        isNotBlankStringUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/symbols
	 * @desc Export the validation methods about symbols
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
	 * @module tests/cores/symbols
	 * @desc Export the units tests about isSymbol method.
	 * @requires {@link module:sources/cores/symbols}
	 *
	 */

	function isSymbolUnits () {

	    describe( 'isSymbol()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isSymbol( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/symbols
	 * @desc Export the units tests about isNotSymbol method.
	 * @requires {@link module:sources/cores/symbols}
	 *
	 */

	function isNotSymbolUnits () {

	    describe( 'isNotSymbol()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotSymbol( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function SymbolsUnits () {

	    describe( 'Symbols', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isSymbolUnits.call( this );
	        isNotSymbolUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isDefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isDefinedUnits () {

	    describe( 'isDefined()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isDefined( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isDefined( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isDefined( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isDefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isDefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isDefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isDefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isDefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isDefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isEmpty method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isEmptyUnits () {

	    describe( 'isEmpty()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isEmpty( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isEmpty( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isEmpty( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotEmpty method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNotEmptyUnits () {

	    describe( 'isNotEmpty()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotEmpty( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotEmpty( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotEmpty( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotNull method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNotNullUnits () {

	    describe( 'isNotNull()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotNull( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotNull( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotNull( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNotUndefinedUnits () {

	    describe( 'isNotUndefined()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotUndefined( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotUndefined( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNotUndefined( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNotUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNull method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNullUnits () {

	    describe( 'isNull()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNull( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNull( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNull( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNull( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNullOrUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNullOrUndefinedUnits () {

	    describe( 'isNullOrUndefined()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNullOrUndefined( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNullOrUndefined( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isNullOrUndefined( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isNullOrUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isUndefinedUnits () {

	    describe( 'isUndefined()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isUndefined( _dataSet[ 0 ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isUndefined( _dataSet[ 1 ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const _dataSet = this.dataSet[ 'voids' ];
	            expect( isUndefined( _dataSet[ 2 ] ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const _dataSet = this.dataSet[ 'booleans' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const _dataSet = this.dataSet[ 'numbers' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const _dataSet = this.dataSet[ 'strings' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const _dataSet = this.dataSet[ 'functions' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const _dataSet = this.dataSet[ 'arrays' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const _dataSet = this.dataSet[ 'objects' ];
	            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
	                expect( isUndefined( _dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function VoidsUnits () {

	    describe( 'Voids', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isDefinedUnits.call( this );
	        isEmptyUnits.call( this );
	        isNotEmptyUnits.call( this );
	        isNotNullUnits.call( this );
	        isNotUndefinedUnits.call( this );
	        isNullUnits.call( this );
	        isNullOrUndefinedUnits.call( this );
	        isUndefinedUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function CoresUnits () {

	    describe( 'Cores', () => {

	        ArraysUnits.call( this );
	        BooleansUnits.call( this );
	        FunctionsUnits.call( this );
	        NumbersUnits.call( this );
	        ObjectsUnits.call( this );
	        StringsUnits.call( this );
	        SymbolsUnits.call( this );
	        VoidsUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/* global describe */

	function MathsUnits () {

	    describe( 'Maths', () => {

	        console.log('MathsUnits');

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/physics/temperatures
	 * @desc Export the validation methods about temperatures
	 * @requires {@link module:sources/cores/numbers}
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
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isCelsius method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isCelsiusUnits () {

	    describe( 'isCelsius()', () => {

	        it( 'should be implemented', () => {

	            expect( isCelsius( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isFahrenheit method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isFahrenheitUnits () {

	    describe( 'isFahrenheit()', () => {

	        it( 'should be implemented', () => {

	            expect( isFahrenheit( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isKelvin method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isKelvinUnits () {

	    describe( 'isKelvin()', () => {

	        it( 'should be implemented', () => {

	            expect( isKelvin( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isNotCelsius method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isNotCelsiusUnits () {

	    describe( 'isNotCelsius()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotCelsius( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isNotFahrenheit method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isNotFahrenheitUnits () {

	    describe( 'isNotFahrenheit()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotFahrenheit( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isNotKelvin method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isNotKelvinUnits () {

	    describe( 'isNotKelvin()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotKelvin( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isNotTemperature method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isNotTemperatureUnits () {

	    describe( 'isNotTemperature()', () => {

	        it( 'should be implemented', () => {

	            expect( isNotTemperature( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isTemperature method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isTemperatureUnits () {

	    describe( 'isTemperature()', () => {

	        it( 'should be implemented', () => {

	            expect( isTemperature( [] ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function TemperaturesUnits () {

	    describe( 'Temperatures', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isCelsiusUnits.call( this );
	        isFahrenheitUnits.call( this );
	        isKelvinUnits.call( this );
	        isNotCelsiusUnits.call( this );
	        isNotFahrenheitUnits.call( this );
	        isNotKelvinUnits.call( this );
	        isNotTemperatureUnits.call( this );
	        isTemperatureUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function PhysicsUnits () {

	    describe( 'Physics', () => {

	        TemperaturesUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	const root = typeof window !== 'undefined' ? window :
	    typeof global !== 'undefined' ? global :
	        Function( 'return this' )();

	describe( 'Itee#Validators', () => {

	    CoresUnits.call( root );
	    MathsUnits.call( root );
	    PhysicsUnits.call( root );

	} );

}());
