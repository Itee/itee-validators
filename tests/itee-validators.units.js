this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function createDataMap () {

	    const voidDataMap = {
	        null:      null,
	        undefined: undefined,
	        void:      void(0)
	    };

	    const booleanDataMap = {
	        true:  true,
	        false: false
	    };

	    const numericDataMap = {
	        negativeInfinity:       Number.NEGATIVE_INFINITY,
	        negativeMaxValue:       -Number.MAX_VALUE,
	        negativeMinSafeInteger: Number.MIN_SAFE_INTEGER,
	        negativeMinValue:       -Number.MIN_VALUE,
	        negativeHexa:           -0x123456,
	        negativePow:            -2e+2,
	        negativeFloat:          -1.0,
	        negativeInt:            -1,
	        negativeNullDouble:     -0.0,
	        negativeNullInt:        -0,
	        nan:                    Number.NaN,
	        positiveNullInt:        0,
	        positiveNullFloat:      0.0,
	        positiveInt:            1,
	        positiveFloat:          1.0,
	        positivePow:            2e+2,
	        positiveHexa:           0x123456,
	        positiveMinValue:       Number.MIN_VALUE,
	        positiveMaxSafeInteger: Number.MAX_SAFE_INTEGER,
	        positiveMaxValue:       Number.MAX_VALUE,
	        positiveInfinity:       Number.POSITIVE_INFINITY
	    };

	    const stringDataMap = (() => {

	        const dataMap = {
	            empty:       '',
	            blank:       '      ',
	            stringNull:  new String(),
	            stringEmpty: new String( '' ),
	            stringBlank: new String( '    ' ),
	            foobar:      'foobar'
	        };

	        for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
	            dataMap[ voidDataMap[ i ] ] = `${voidDataMap[ i ]}`;
	        }

	        for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
	            dataMap[ booleanDataMap[ j ] ] = `${booleanDataMap[ j ]}`;
	        }

	        for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
	            dataMap[ numericDataMap[ k ] ] = `${numericDataMap[ k ]}`;
	        }

	        return dataMap

	    })();

	    const functionDataMap = {
	        classicFunction: function emptyFct () {},
	        arrowFunction:   () => {}
	    };

	    const arrayDataMap = (() => {

	        const dataMap = {
	            emptyArray:       [],
	            emptyArrayObject: new Array(),
	            singleValued:     [ 0 ],
	            multiValued:      [ 0, 1, 2 ],
	            null:             (() => {

	                const nullArray = [];

	                for ( let index = 0 ; index < 3 ; index++ ) {
	                    nullArray.push( null );
	                }

	                return nullArray

	            })(),
	            undefined:        (() => {

	                const undefinedArray = [];

	                for ( let index = 0 ; index < 3 ; index++ ) {
	                    undefinedArray.push( undefined );
	                }

	                return undefinedArray

	            })(),
	            void:        (() => {

	                const undefinedArray = [];

	                for ( let index = 0 ; index < 3 ; index++ ) {
	                    undefinedArray.push( void(0) );
	                }

	                return undefinedArray

	            })(),
	            voids:            (() => {

	                const array = [];

	                for ( let key in voidDataMap ) {
	                    array.push( voidDataMap[ key ] );
	                }

	                return array

	            })(),
	            booleans:         (() => {

	                const array = [];

	                for ( let key in booleanDataMap ) {
	                    array.push( booleanDataMap[ key ] );
	                }

	                return array

	            })(),
	            numbers:          (() => {

	                const array = [];

	                for ( let key in numericDataMap ) {
	                    array.push( numericDataMap[ key ] );
	                }

	                return array

	            })(),
	            strings:          (() => {

	                const array = [];

	                for ( let key in stringDataMap ) {
	                    array.push( stringDataMap[ key ] );
	                }

	                return array

	            })(),
	            functions:        (() => {

	                const array = [];

	                for ( let key in functionDataMap ) {
	                    array.push( functionDataMap[ key ] );
	                }

	                return array

	            })(),
	            objects:          [
	                {
	                    foo: 'bar'
	                },
	                {
	                    baz: 'qux'
	                }
	            ],
	            arrays:           [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
	        };

	        return dataMap

	    })();

	    const typedArrayDataMap = {
	        int8Array:    new Int8Array( [ 1, 2, 3 ] ),
	        uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
	        int16Array:   new Int16Array( [ 1, 2, 3 ] ),
	        uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
	        int32Array:   new Int32Array( [ 1, 2, 3 ] ),
	        uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
	        float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
	        float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
	    };

	    const objectDataMap = [
	        {},
	        new Object(),
	        { null: null },
	        { undefined: undefined },
	        { foo: 'bar' }
	    ];

	    return {
	        voids:       voidDataMap,
	        booleans:    booleanDataMap,
	        numbers:     numericDataMap,
	        strings:     stringDataMap,
	        functions:   functionDataMap,
	        arrays:      arrayDataMap,
	        typedArrays: typedArrayDataMap,
	        objects:     objectDataMap,
	    }

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/voids
	 * @description Export the validation methods about voids notions
	 */

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
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/strings
	 * @description Export the validation methods about strings
	 *
	 */

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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
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

	    return ( data.length === 0 )

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

	    return ( data.length > 0 )
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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return false
	    }

	    let subData = undefined;
	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        subData = data[ index ];
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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
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

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return true
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        let subData = data[ index ];
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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayUnits () {

	    describe( 'isArray()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArray( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'strings' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfArray( dataSet[ 'arrays' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfMultiElement( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfMultiElement( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfMultiElement( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfMultiElement( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'null' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'strings' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfNull( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'strings' ] ) ).to.be.false;

	        } );
	        
	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'objects' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfObject( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'strings' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfSingleElement( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'strings' ] ) ).to.be.true;

	        } );
	        
	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfString( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'undefined' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'strings' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isArrayOfUndefined( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'emptyArray' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'emptyArrayObject' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'singleValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'multiValued' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'voids' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'booleans' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'numbers' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'strings' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'functions' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isEmptyArray( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotArray( dataSet[ i ] ) ).to.be.true;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'emptyArray' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'emptyArrayObject' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'null' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'undefined' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'voids' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'booleans' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'numbers' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'strings' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'functions' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'objects' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfArray( dataSet[ 'arrays' ] ) ).to.be.false;

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'emptyArray' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'emptyArrayObject' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'null' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'undefined' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of void(0)', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'void' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'booleans' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'numbers' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'strings' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'functions' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'objects' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfNull( dataSet[ 'arrays' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'emptyArray' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'emptyArrayObject' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'null' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'undefined' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'voids' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'booleans' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'numbers' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'strings' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'functions' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'objects' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfObject( dataSet[ 'arrays' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'emptyArray' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'emptyArrayObject' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'null' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'undefined' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'voids' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'booleans' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'numbers' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'strings' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'functions' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'objects' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfString( dataSet[ 'arrays' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'emptyArray' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'emptyArrayObject' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'null' ] ) ).to.be.true;

	        } );

	        it( 'should return false when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'undefined' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an array of void', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'void' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'booleans' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'numbers' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'strings' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'functions' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'objects' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotArrayOfUndefined( dataSet[ 'arrays' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	            }

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

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false when the value is an empty array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'emptyArray' ] ) ).to.be.false;

	        } );

	        it( 'should return false when the value is an empty array object', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'emptyArrayObject' ] ) ).to.be.false;

	        } );

	        it( 'should return true when the value is a single valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'singleValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is a multi valued array of number', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'multiValued' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of null', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'null' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of undefined', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'undefined' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of voids', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'voids' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of booleans', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'booleans' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of numbers', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'numbers' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of strings', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'strings' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of functions', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'functions' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of objects', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'objects' ] ) ).to.be.true;

	        } );

	        it( 'should return true when the value is an array of arrays', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            expect( isNotEmptyArray( dataSet[ 'arrays' ] ) ).to.be.true;

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const dataSet = this._dataSet[ 'typedArrays' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let key in dataSet ) {
	                expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	            }

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

	            this._dataSet = createDataMap();

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
	 * @description Export the validation methods about booleans
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isBoolean method.
	 * @requires {@link module:sources/cores/booleans}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isBoolean method.
	 * @requires {@link module:sources/cores/booleans}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/functions
	 * @description Export the validation methods about functions
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/functions
	 * @desc Export the units tests about isFunction method.
	 * @requires {@link module:sources/cores/functions}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/functions
	 * @desc Export the units tests about isNotFunction method.
	 * @requires {@link module:sources/cores/functions}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/numbers
	 * @description Export the validation methods about numbers
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isFinite method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfinite method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfiniteNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfinitePositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxSafeInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinSafeInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNotNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNotNumeric method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumberNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumberPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumeric method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZero method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZeroNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZeroPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isNotObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isEmptyObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isNotEmptyObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isNotString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isEmptyString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isNotEmptyString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isBlankString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isNotBlankString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/symbols
	 * @description Export the validation methods about symbols
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/symbols
	 * @desc Export the units tests about isSymbol method.
	 * @requires {@link module:sources/cores/symbols}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/symbols
	 * @desc Export the units tests about isNotSymbol method.
	 * @requires {@link module:sources/cores/symbols}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isDefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isEmpty method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotEmpty method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotNull method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNull method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNullOrUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function CoresUnits () {

	    describe( 'Cores', () => {

	        ArraysUnits.call( this );
	//        BooleansUnits.call( this )
	//        FunctionsUnits.call( this )
	//        NumbersUnits.call( this )
	//        ObjectsUnits.call( this )
	//        StringsUnits.call( this )
	//        SymbolsUnits.call( this )
	//        VoidsUnits.call( this )

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
	 * @description Export the validation methods about temperatures
	 * @requires {@link module:sources/cores/numbers}
	 */

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            expect( true ).to.be.true;

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

	            this._dataSet = createDataMap();

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
