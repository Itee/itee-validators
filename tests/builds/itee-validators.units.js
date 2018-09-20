this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/* global Itee */

	const voids = {
	    null:      null,
	    undefined: undefined,
	    void:      void(0)
	};

	const booleans = {
	    true:  true,
	    false: false
	};

	const numbers = {
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

	const strings = (() => {

	    const dataMap = {
	        empty:       '',
	        blank:       '      ',
	        stringNull:  new String(),
	        stringEmpty: new String( '' ),
	        stringBlank: new String( '    ' ),
	        foobar:      'foobar'
	    };

	    const voidDataMap = voids;
	    for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
	        dataMap[ voidDataMap[ i ] ] = `${voidDataMap[ i ]}`;
	    }

	    const booleanDataMap = booleans;
	    for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
	        dataMap[ booleanDataMap[ j ] ] = `${booleanDataMap[ j ]}`;
	    }

	    const numericDataMap = numbers;
	    for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
	        dataMap[ numericDataMap[ k ] ] = `${numericDataMap[ k ]}`;
	    }

	    return dataMap

	})();

	const functions = {
	    anonymousFunction: function () {},
	    namedFunction:     function namedFunction () {},
	    arrowFunction:     () => {}
	};

	const arrays = (() => {

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
	        undefined: (() => {

	            const undefinedArray = [];

	            for ( let index = 0 ; index < 3 ; index++ ) {
	                undefinedArray.push( undefined );
	            }

	            return undefinedArray

	        })(),
	        void: (() => {

	            const undefinedArray = [];

	            for ( let index = 0 ; index < 3 ; index++ ) {
	                undefinedArray.push( void(0) );
	            }

	            return undefinedArray

	        })(),
	        voids: (() => {

	            const array = [];

	            const voidDataMap = voids;
	            for ( let key in voidDataMap ) {
	                array.push( voidDataMap[ key ] );
	            }

	            return array

	        })(),
	        booleans: (() => {

	            const array = [];

	            const booleanDataMap = booleans;
	            for ( let key in booleanDataMap ) {
	                array.push( booleanDataMap[ key ] );
	            }

	            return array

	        })(),
	        numbers: (() => {

	            const array = [];

	            const numericDataMap = numbers;
	            for ( let key in numericDataMap ) {
	                array.push( numericDataMap[ key ] );
	            }

	            return array

	        })(),
	        strings: (() => {

	            const array = [];

	            const stringDataMap = strings;
	            for ( let key in stringDataMap ) {
	                array.push( stringDataMap[ key ] );
	            }

	            return array

	        })(),
	        functions: (() => {

	            const array = [];

	            const functionDataMap = functions;
	            for ( let key in functionDataMap ) {
	                array.push( functionDataMap[ key ] );
	            }

	            return array

	        })(),
	        objects: [
	            {
	                foo: 'bar'
	            },
	            {
	                baz: 'qux'
	            }
	        ],
	        arrays: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
	    };

	    return dataMap

	})();

	const typedArrays = {
	    int8Array:    new Int8Array( [ 1, 2, 3 ] ),
	    uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
	    int16Array:   new Int16Array( [ 1, 2, 3 ] ),
	    uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
	    int32Array:   new Int32Array( [ 1, 2, 3 ] ),
	    uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
	    float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
	    float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
	};

	const objects = {
	    empty:     {},
	    instance:  new Object(),
	    null:      { null: null },
	    undefined: { undefined: undefined },
	    foo:       { foo: 'bar' }
	};

	const globalDataMap = {
	    voids,
	    booleans,
	    numbers,
	    strings,
	    functions,
	    arrays,
	    typedArrays,
	    objects
	};

	const TestsUtils = {

	    DataMap: undefined,

	    createDataMap: function ( dataMapOptions ) {

	        if ( dataMapOptions === undefined ) {

	            dataMapOptions = {
	                voids:       [],
	                booleans:    [],
	                numbers:     [],
	                strings:     [],
	                functions:   [],
	                arrays:      [],
	                typedArrays: [],
	                objects:     []
	            };

	        }

	        let dataMap = {};

	        for ( let optionKey in dataMapOptions ) {

	            const map = globalDataMap[ optionKey ];
	            if ( map === undefined ) {
	                throw ReferenceError( `The global data map does not contain element for key: ${optionKey}` )
	            }

	            const option = dataMapOptions[ optionKey ];

	            dataMap[ optionKey ] = {};

	            if ( option.length === 0 ) {

	                for ( let valueKey in map ) {
	                    dataMap[ optionKey ][ valueKey ] = map[ valueKey ];
	                }

	            } else {

	                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
	                    dataMap[ optionKey ][ option[ i ] ] = map[ option[ i ] ];
	                }

	            }

	        }

	        return dataMap

	    },

	    createDataMapBenchmarkOptions: function ( dataMapOptions ) {

	        Itee.TestsUtils.DataMap = Itee.TestsUtils.createDataMap( dataMapOptions );

	        return {

	            setup: function onSetup () {
	                this.datamap = Itee.TestsUtils.DataMap;
	            },

	            teardown: function onTeardown () {
	                delete this.datamap;
	            }

	        }

	    },

	    iterateOverDataMap: function ( func ) {

	        return function _iterateOverDataMap () {

	            const datamap = this.datamap;
	            for ( let datasetKey in datamap ) {

	                const dataset = datamap[ datasetKey ];
	                for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

	                    return func( dataset[ i ] )

	                }

	            }

	        }

	    },

	    createDataSet: function ( dataSetOptions ) {

	        if ( dataSetOptions === undefined ) {

	            dataSetOptions = {
	                voids:       [],
	                booleans:    [],
	                numbers:     [],
	                strings:     [],
	                functions:   [],
	                arrays:      [],
	                typedArrays: [],
	                objects:     []
	            };

	        }

	        let dataSet = [];

	        for ( let optionKey in dataSetOptions ) {

	            const map    = globalDataMap[ optionKey ];
	            const option = dataSetOptions[ optionKey ];

	            if ( option.length === 0 ) {

	                for ( let valueKey in map ) {
	                    dataSet.push( map[ valueKey ] );
	                }

	            } else {

	                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
	                    dataSet.push( map[ option[ i ] ] );
	                }

	            }

	        }

	        return dataSet

	    },

	    createDataSetBenchmarkOptions: function ( datasetName ) {

	        return {

	            setup: function onSetup () {
	                this.dataset = Itee.TestsUtils.createDataMap()[ datasetName ];
	            },

	            teardown: function onTeardown () {
	                delete this.dataset;
	            }

	        }

	    },

	    iterateOverDataSet: function ( func ) {

	        return function () {

	            const dataset = this.dataset;
	            for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

	                return func( dataset[ i ] )

	            }

	        }

	    }

	};

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
	 *
	 * @param data {any} The data to check against the array type
	 * @returns {boolean} true if data is array, false otherwise
	 */
	function isArray ( data ) {
	    return Array.isArray( data )
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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is not an array
	 *
	 * @param data {any} The data to check against the array type
	 * @returns {boolean} true if data is not array, false otherwise
	 */
	function isNotArray ( data ) {
	    return !Array.isArray( data )
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

	/**
	 * Check if given data is an array of array
	 *
	 * @param data {any} The data to check against the array of array type
	 * @returns {boolean} true if data is an array of array, false otherwise
	 */
	function isArrayOfArray ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return false
	    }

	    for ( let index = 0 ; index < dataLength ; index += 1 ) {
	        if ( isNotArray( data[ index ] ) ) {
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
	 * @desc Export the units tests about isArrayOfArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfArrayUnits () {

	    describe( 'isArrayOfArray()', () => {

	        it( 'should return false when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true only when the value is an array of arrays', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isArrayOfArray( values[key] );
	                if ( key === 'arrays' ) {
	                    expect( result ).to.be.true;
	                } else {
	                    expect( result ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is an array with multiples values
	 *
	 * @param data {any} The data to check against the single valued array
	 * @returns {boolean} true if data is an array with multiples values, false otherwise
	 */
	function isArrayOfMultiElement ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    if ( data.length <= 1 ) {
	        return false
	    }

	    return true

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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true only when the value is a multi valued array of number', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const value = values[ key ];
	                if ( value.length > 1 ) {
	                    expect( isArrayOfMultiElement( value ) ).to.be.true;
	                } else {
	                    expect( isArrayOfMultiElement( value ) ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfMultiElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is not an empty array where all values are null
	 *
	 * @param data {any} The data to check against the array of array type
	 * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
	 */
	function isArrayOfNull ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return false
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        if ( isNotNull( data[ index ] ) ) {
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
	 * @desc Export the units tests about isArrayOfNull method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfNullUnits () {

	    describe( 'isArrayOfNull()', () => {

	        it( 'should return false when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true only when the value is an array of null', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                if ( key === 'null' ) {
	                    expect( isArrayOfNull( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is an object
	 *
	 * @param data {any} The data to check against the object type
	 * @returns {boolean} true if data is object, false otherwise
	 */
	function isObject ( data ) {
	    return (isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ))
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is an array where all values are of object type
	 *
	 * @param data {any} The data to check against the array of object type
	 * @returns {boolean} true if data is an array where all values are of object type, false otherwise
	 */
	function isArrayOfObject ( data ) {

	    if ( isNotArray( data ) ) {
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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true only when the value is an array of objects', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                if ( key === 'objects' ) {
	                    expect( isArrayOfObject( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is an array with a single value
	 *
	 * @param data {any} The data to check against the single valued array
	 * @returns {boolean} true if data is an array with a single value, false otherwise
	 */
	function isArrayOfSingleElement ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    if ( data.length !== 1 ) {
	        return false
	    }

	    return true

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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true only when the value is a single valued array of number', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                if ( key === 'singleValued' ) {
	                    expect( isArrayOfSingleElement( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfSingleElement( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is not a string
	 *
	 * @param data {*} The data to check against the string type
	 * @returns {boolean} true if data is not a string, false otherwise.
	 */
	function isNotString ( data ) {
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
	 * Check if given data is not an empty array where all values are string
	 *
	 * @param data {any} The data to check against the array of strings
	 * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
	 */
	function isArrayOfString ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return false
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        // Todo: Use isNotString in Safe mode (check String object too) !!!
	        if ( isNotString( data[ index ] ) ) {
	            return false
	        }
	    }

	    return true

	}
	// #endif

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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it.skip( 'should return true only when the value is an array of string', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isArrayOfString(values[key]);
	                if ( key === 'strings' ) {
	                    expect( result ).to.be.true;
	                } else {
	                    expect( result ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfString( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is not null and not undefined
	 *
	 * @param data {any} The data to check against the existence
	 * @returns {boolean} true if data is not null and not undefined, false otherwise.
	 */
	function isDefined ( data ) {
	    return ((data !== null) && (typeof data !== 'undefined'))
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
	 *
	 * @param data {any} The data to check against the array of undefined
	 * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
	 */
	function isArrayOfUndefined ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return false
	    }

	    for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
	        // Todo: Use isNotUndefined !!!
	        if ( isDefined( data[ index ] ) ) {
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
	 * @desc Export the units tests about isArrayOfUndefined method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfUndefinedUnits () {

	    describe( 'isArrayOfUndefined()', () => {

	        it( 'should return false when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it.skip( 'should return true only when the value is an array of undefined', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isArrayOfUndefined(values[key]);
	                if ( key === 'undefined' ) {
	                    expect( result ).to.be.true;
	                } else {
	                    expect( result ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isArrayOfUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 *
	 * @param data {any} The data to check against the empty array
	 * @returns {boolean} true if data is an empty array, false otherwise
	 */
	function isEmptyArray ( data ) {

	    if ( isNotArray( data ) ) {
	        return false
	    }

	    return (data.length === 0)

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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return true only when the value is an empty array object', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
	                    expect( isEmptyArray( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isEmptyArray( values[ key ] ) ).to.be.false;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return false when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isEmptyArray( values[ key ] ) ).to.be.false;
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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isNotArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * Check if given data is not an array of array
	 *
	 * @param data {any} The data to check against the array of array type
	 * @returns {boolean} true if data is not an array of array, false otherwise
	 */
	function isNotArrayOfArray ( data ) {

	    if ( isNotArray( data ) ) {
	        return true
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return true
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        if (isArray( data[ index ] ) ) {
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
	 * @desc Export the units tests about isNotArrayOfArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfArrayUnits () {

	    describe( 'isNotArrayOfArray()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false only when the value is an array of arrays', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isNotArrayOfArray( values[ key ] );
	                if ( key === 'arrays' ) {
	                    expect( result ).to.be.false;
	                } else {
	                    expect( result ).to.be.true;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNotArrayOfArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * Check if given data is null
	 *
	 * @param data {any} The data to check against the nullity
	 * @returns {boolean} true if data is null, false otherwise.
	 */
	function isNull ( data ) {
	    return (data === null)
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
	 * Check if given data is not an empty array where all values are not null
	 *
	 * @param data {any} The data to check against the array of array type
	 * @returns {boolean} true if data is not an empty array where all values are not null, false otherwise
	 */
	function isNotArrayOfNull ( data ) {

	    if ( isNotArray( data ) ) {
	        return true
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return true
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        // Todo: Must be isNotNull because in case we have a single null in the array it match
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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfNull method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfNullUnits () {

	    describe( 'isNotArrayOfNull()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it.skip( 'should return false only when the value is an array of null', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isNotArrayOfNull( values[ key ] );
	                if ( key === 'null' ) {
	                    expect( result ).to.be.false;
	                } else {
	                    expect( result ).to.be.true;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNotArrayOfNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * Check if given data is not an array where all values are of object type
	 *
	 * @param data {any} The data to check against the array of object type
	 * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
	 */
	function isNotArrayOfObject ( data ) {

	    if ( isNotArray( data ) ) {
	        return true
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return true
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        // Todo: Must be isNotObject because in case we have a single undefined in the array it match
	        if ( isObject( data[ index ] ) ) {
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
	 * @desc Export the units tests about isNotArrayOfObject method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfObjectUnits () {

	    describe( 'isNotArrayOfObject()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it.skip( 'should return false only when the value is an array of object', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isNotArrayOfObject( values[ key ] );
	                if ( key === 'objects' ) {
	                    expect( result ).to.be.false;
	                } else {
	                    expect( result ).to.be.true;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNotArrayOfObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * Check if given data is a string
	 *
	 * @param data {any} The data to check against the string type
	 * @returns {boolean} true if data is a string, false otherwise.
	 */
	function isString ( data ) {
	    return (typeof data === 'string' || data instanceof String)
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

	/**
	 * Check if given data is not an empty array where all values are not string
	 *
	 * @param data {any} The data to check against the array of strings
	 * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
	 */
	function isNotArrayOfString ( data ) {

	    if ( isNotArray( data ) ) {
	        return true
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return true
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isNotArrayOfString method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfStringUnits () {

	    describe( 'isNotArrayOfString()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false only when the value is an array of string', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isNotArrayOfString( values[ key ] );
	                if ( key === 'strings' ) {
	                    expect( result ).to.be.false;
	                } else {
	                    expect( result ).to.be.true;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNotArrayOfString( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * Check if given data is undefined
	 *
	 * @param data {any} The data to check against the undefiness
	 * @returns {boolean} true if data is undefined, false otherwise.
	 */
	function isUndefined ( data ) {
	    return (typeof data === 'undefined')
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
	 * Check if given data is not an empty array where all values are defined
	 *
	 * @param data {any} The data to check against the array of undefined
	 * @returns {boolean} true if data is not an empty array where all values are defined, false otherwise
	 */
	function isNotArrayOfUndefined ( data ) {

	    if ( isNotArray( data ) ) {
	        return true
	    }

	    const dataLength = data.length;
	    if ( dataLength === 0 ) {
	        return true
	    }

	    for ( let index = 0 ; index < dataLength ; index++ ) {
	        // Todo: Must be isNotUndefined because in case we have a single undefined in the array it match
	        if ( isUndefined( data[ index ] ) ) {
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
	 * @desc Export the units tests about isNotArrayOfUndefined method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isNotArrayOfUndefinedUnits () {

	    describe( 'isNotArrayOfUndefined()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it.skip( 'should return false only when the value is an array of undefined', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isNotArrayOfUndefined( values[ key ] );
	                if ( key === 'undefined' ) {
	                    expect( result ).to.be.false;
	                } else {
	                    expect( result ).to.be.true;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNotArrayOfUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * Check if given data is not an empty array
	 *
	 * @param data {any} The data to check against the empty array
	 * @returns {boolean} true if data is not an empty array, false otherwise
	 */
	function isNotEmptyArray ( data ) {

	    if ( isNotArray( data ) ) {
	        return true
	    }

	    return (data.length > 0)
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

	            const values = this._dataMap.voids;
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        //////////////// Specific part

	        it( 'should return false only when the value is an empty array', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {

	                const result = isNotEmptyArray( values[ key ] );
	                if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
	                    expect( result ).to.be.false;
	                } else {
	                    expect( result ).to.be.true;
	                }

	            }

	        } );

	        /////////////////

	        it( 'should return true when the value is an typed array', () => {

	            const values = this._dataMap.typedArrays;
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNotEmptyArray( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _arraysUnits () {

	    describe( 'Arrays', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
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
	// #endif

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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is not a boolean
	 *
	 * @param data {any} The data to check against the booleaness
	 * @returns {boolean} true if data is not a boolean, false otherwise.
	 */
	function isNotBoolean ( data ) {
	    return (typeof data !== 'boolean')
	}
	// #endif

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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isNotBoolean( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _booleansUnits () {

	    describe( 'Booleans', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

	        } );

	        isBooleanUnits.call( this );
	        isNotBooleanUnits.call( this );

	    } );

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
	 * Check if given data is a function
	 *
	 * @param data {any} The data to check against the functionality
	 * @returns {boolean} true if data is a function, false otherwise.
	 */
	function isFunction ( data ) {
	    return (typeof data === 'function')
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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * @module tests/cores/functions
	 * @desc Export the units tests about isNotFunction method.
	 * @requires {@link module:sources/cores/functions}
	 *
	 */

	function isNotFunctionUnits () {

	    describe( 'isNotFunction()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap[ 'booleans' ];
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap[ 'numbers' ];
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isNotFunction( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _functionsUnits () {

	    describe( 'Functions', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

	        } );

	        isFunctionUnits.call( this );
	        isNotFunctionUnits.call( this );

	    } );

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isFinite method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isFiniteUnits () {

	    describe( 'isFinite()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isFinite$1( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if given data is a floating point number
	 *
	 * @param data {any} The data to check against the floating point
	 * @returns {boolean} true if data is a float, false otherwise
	 */
	function isFloat ( data ) {
	    return data % 1 !== 0
	}
	// #endif

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

	        it.skip( 'should be implemented', () => {

	            expect( isFloat( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is an infinite number
	 *
	 * @param data {any} The data to check against the infinite state
	 * @returns {boolean} true if data is infinite, false otherwise
	 */
	function isInfinite ( data ) {
	    return !Number.isFinite( data )
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

	        it.skip( 'should be implemented', () => {

	            expect( isInfinite( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is an infinite negative number
	 *
	 * @param data {any} The data to check against the negative infinite state
	 * @returns {boolean} true if data is negative infinite, false otherwise
	 */
	function isInfiniteNegative ( data ) {
	    return (data === Number.NEGATIVE_INFINITY)
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

	        it.skip( 'should be implemented', () => {

	            expect( isInfiniteNegative( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * @desc Export the units tests about isInfinitePositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isInfinitePositiveUnits () {

	    describe( 'isInfinitePositive()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isInfinitePositive( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is an integer number
	 *
	 * @param data {any} The data to check against the integer state
	 * @returns {boolean} true if data is an integer, false otherwise
	 */
	function isInteger ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
	}
	// #endif

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

	        it.skip( 'should be implemented', () => {

	            expect( isInteger( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMaxNegativeUnits () {

	    describe( 'isMaxNegative()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isMaxNegative( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is a maximum positive number
	 *
	 * @param data {any} The data to check against the positive maximum state
	 * @returns {boolean} true if data is positive maximum, false otherwise
	 */
	function isMaxPositive ( data ) {
	    return (data === Number.MAX_VALUE)
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

	        it.skip( 'should be implemented', () => {

	            expect( isMaxPositive( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is a maximum safe integer number
	 *
	 * @param data {any} The data to check against the maximum safe integer state
	 * @returns {boolean} true if data is a maximum safe integer, false otherwise
	 */
	function isMaxSafeInteger ( data ) {
	    return (data === Number.MAX_SAFE_INTEGER)
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

	        it.skip( 'should be implemented', () => {

	            expect( isMaxSafeInteger( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMinNegativeUnits () {

	    describe( 'isMinNegative()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isMinNegative( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is a minimum positive number
	 *
	 * @param data {any} The data to check against the positive minimum state
	 * @returns {boolean} true if data is positive minimum, false otherwise
	 */
	function isMinPositive ( data ) {
	    return (data === Number.MIN_VALUE)
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

	        it.skip( 'should be implemented', () => {

	            expect( isMinPositive( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is a minimum safe integer number
	 *
	 * @param data {any} The data to check against the minimum safe integer state
	 * @returns {boolean} true if data is a minimum safe integer, false otherwise
	 */
	function isMinSafeInteger ( data ) {
	    return (data === Number.MIN_SAFE_INTEGER)
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

	        it.skip( 'should be implemented', () => {

	            expect( isMinSafeInteger( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if given data is not a number
	 *
	 * @param data {any} The data to check against the number type
	 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
	 */
	function isNotNumber ( data ) {
	    return (typeof data !== 'number' || Number.isNaN( data ))
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

	        it.skip( 'should be implemented', () => {

	            expect( isNotNumber( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is not numerical
	 *
	 * @param data {any} The data to check against the numerical type
	 * @returns {boolean} true if data is not numeric, false otherwise
	 */
	function isNotNumeric ( data ) {
	    return (typeof data !== 'number')
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

	        it.skip( 'should be implemented', () => {

	            expect( isNotNumeric( 0 ) ).to.be.true;

	        } );

	    } );

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
	 *
	 * @param data {any} The data to check against the maximum safe integer state
	 * @returns {boolean} true if data is a number, false otherwise.
	 */
	function isNumber ( data ) {
	    return (typeof data === 'number' && !Number.isNaN( data ))
	}
	// #endif

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

	        it.skip( 'should be implemented', () => {

	            expect( isNumber( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumberNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNumberNegativeUnits () {

	    describe( 'isNumberNegative()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isNumberNegative( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the data is a positive number
	 *
	 * @param data {any} The data to check against the positivity
	 * @returns {boolean} true if data is a positive number, false otherwise.
	 */
	function isNumberPositive ( data ) {
	    return (isNumber( data ) && data > 0)
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

	        it.skip( 'should be implemented', () => {

	            expect( isNumberPositive( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is numerical
	 *
	 * @param data {any} The data to check against the numerical type
	 * @returns {boolean} true if data is numeric, false otherwise
	 */
	function isNumeric ( data ) {
	    return (typeof data === 'number')
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

	        it.skip( 'should be implemented', () => {

	            expect( isNumeric( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is zero
	 *
	 * @param data {*} The data to check against the zero value
	 * @returns {boolean} true if data is zero, false otherwise
	 */
	function isZero ( data ) {
	    return (data === 0)
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

	        it.skip( 'should be implemented', () => {

	            expect( isZero( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZeroNegative method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isZeroNegativeUnits () {

	    describe( 'isZeroNegative()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isZeroNegative( 0 ) ).to.be.true;

	        } );

	    } );

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
	 * Check if the given data is a positive zero
	 *
	 * @param data {any} The data to check against the positive zero value
	 * @returns {boolean} true if data is a positive zero, false otherwise
	 */
	function isZeroPositive ( data ) {
	    return (data === 0 && (1 / data) === Number.POSITIVE_INFINITY)
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

	        it.skip( 'should be implemented', () => {

	            expect( isZeroPositive( 0 ) ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _numbersUnits () {

	    describe( 'Numbers', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isObject( values[ key ] ) ).to.be.false;
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

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotObject( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 *
	 * @param data {any} The data to check against the emptiness of the object
	 * @returns {boolean} true if data is an empty object, false otherwise
	 */
	function isEmptyObject ( data ) {
	    return (isObject( data ) && isEmpty( data ))
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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isEmptyObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

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
	 * @module tests/cores/objects
	 * @desc Export the units tests about isNotEmptyObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isNotEmptyObjectUnits () {

	    describe( 'isNotEmptyObject()', () => {

	        it( 'should return false when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotEmptyObject( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _objectsUnits () {

	    describe( 'Objects', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isString( values[ key ] ) ).to.be.false;
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

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotString( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 *
	 * @param data {any} The data to check against the emptiness of the string
	 * @returns {boolean} true if data is an empty string, false otherwise.
	 */
	function isEmptyString ( data ) {

	    if( isNotString(data) ) {
	        return false
	    }

	    return (data.length === 0)

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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isEmptyString( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is not an empty string
	 *
	 * @param data {any} The data to check against the emptiness of the string
	 * @returns {boolean} true if data is not an empty string, false otherwise.
	 */
	function isNotEmptyString ( data ) {

	    if( isNotString(data) ) {
	        return false
	    }

	    return (data.length > 0)

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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotEmptyString( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if the given data is a blank string
	 *
	 * @param data {any} The data to check against the blankness of the string
	 * @returns {boolean} true if data is a blank string, false otherwise.
	 */
	function isBlankString ( data ) {

	    if( isNotString(data) ) {
	        return false
	    }

	    return (!/\S/.test( data ))
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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isBlankString( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if the given data is not a blank string
	 *
	 * @param data {any} The data to check against the blankness of the string
	 * @returns {boolean} true if data is not a blank string, false otherwise.
	 */
	function isNotBlankString ( data ) {

	    if( isNotString(data) ) {
	        return false
	    }

	    return (/\S/.test( data ))
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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotBlankString( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _stringsUnits () {

	    describe( 'Strings', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
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

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isSymbol( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * @desc Export the units tests about isNotSymbol method.
	 * @requires {@link module:sources/cores/symbols}
	 *
	 */

	function isNotSymbolUnits () {

	    describe( 'isNotSymbol()', () => {

	        it( 'should return true when the value is a void', () => {

	            const values = this._dataMap.voids;
	            for( let key in values ) {
	                expect( isNotSymbol( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _symbolsUnits () {

	    describe( 'Symbols', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

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

	        it( 'should return false when the value is null', () => {

	            const value = this._dataMap.voids.null;
	            expect( isDefined( value ) ).to.be.false;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isDefined( value ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isDefined( value ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for( let key in values ) {
	                expect( isDefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for( let key in values ) {
	                expect( isDefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isDefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isDefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isDefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isDefined( values[ key ] ) ).to.be.true;
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

	    describe.skip( 'isEmpty()', () => {

	        // Specific dataset

	        it( 'should return false when the value is null', () => {

	            const value = this._dataMap.voids.null;
	            expect( isEmpty( value ) ).to.be.false;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isEmpty( value ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isEmpty( value ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for( let key in values ) {
	                expect( isEmpty( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for( let key in values ) {
	                expect( isEmpty( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true only when the value is an empty string', () => {

	            const values  = this._dataMap.strings;
	            const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];
	            for ( let key in values ) {

	                if ( allowed.includes( key ) ) {
	                    expect( isEmpty( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isEmpty( values[ key ] ) ).to.be.false;
	                }
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isEmpty( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true only when the value is an empty array', () => {

	            const values  = this._dataMap.arrays;
	            const allowed = [ 'emptyArray', 'emptyArrayObject' ];
	            for ( let key in values ) {

	                if ( allowed.includes( key ) ) {
	                    expect( isEmpty( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isEmpty( values[ key ] ) ).to.be.false;
	                }
	            }

	        } );

	        it( 'should return true only when the value is an empty object', () => {

	            const values  = this._dataMap.objects;
	            const allowed = [ 'empty', 'instance' ];
	            for ( let key in values ) {

	                if ( allowed.includes( key ) ) {
	                    expect( isEmpty( values[ key ] ) ).to.be.true;
	                } else {
	                    expect( isEmpty( values[ key ] ) ).to.be.false;
	                }
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

	    describe.skip( 'isNotEmpty()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const value = this._dataMap.voids.null;
	            expect( isNotEmpty( value ) ).to.be.true;

	        } );

	        it( 'should return true when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isNotEmpty( value ) ).to.be.true;

	        } );

	        it( 'should return true when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isNotEmpty( value ) ).to.be.true;

	        } );

	        // Global dataset

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for( let key in values ) {
	                expect( isNotEmpty( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for( let key in values ) {
	                expect( isNotEmpty( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false only when the value is an empty string', () => {

	            const values  = this._dataMap.strings;
	            const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];
	            for ( let key in values ) {

	                if ( allowed.includes( key ) ) {
	                    expect( isNotEmpty( values[ key ] ) ).to.be.false;
	                } else {
	                    expect( isNotEmpty( values[ key ] ) ).to.be.true;
	                }
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNotEmpty( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false only when the value is an empty array', () => {

	            const values  = this._dataMap.arrays;
	            const allowed = [ 'emptyArray', 'emptyArrayObject' ];
	            for ( let key in values ) {

	                if ( allowed.includes( key ) ) {
	                    expect( isNotEmpty( values[ key ] ) ).to.be.false;
	                } else {
	                    expect( isNotEmpty( values[ key ] ) ).to.be.true;
	                }
	            }

	        } );

	        it( 'should return false only when the value is an empty object', () => {

	            const values  = this._dataMap.objects;
	            const allowed = [ 'empty', 'instance' ];
	            for ( let key in values ) {

	                if ( allowed.includes( key ) ) {
	                    expect( isNotEmpty( values[ key ] ) ).to.be.false;
	                } else {
	                    expect( isNotEmpty( values[ key ] ) ).to.be.true;
	                }
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

	        it( 'should return false when the value is null', () => {

	            const value = this._dataMap.voids.null;
	            expect( isNotNull( value ) ).to.be.false;

	        } );

	        it( 'should return true when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isNotNull( value ) ).to.be.true;

	        } );

	        it( 'should return true when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isNotNull( value ) ).to.be.true;

	        } );

	        // Global dataset

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for ( let key in values ) {
	                expect( isNotNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for ( let key in values ) {
	                expect( isNotNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isNotNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNotNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isNotNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isNotNull( values[ key ] ) ).to.be.true;
	            }

	        } );

	    } );

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
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNotUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNotUndefinedUnits () {

	    describe( 'isNotUndefined()', () => {

	        // Specific dataset

	        it( 'should return true when the value is null', () => {

	            const value = this._dataMap.voids.null;
	            expect( isNotUndefined( value ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isNotUndefined( value ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isNotUndefined( value ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return true when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for( let key in values ) {
	                expect( isNotUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for( let key in values ) {
	                expect( isNotUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isNotUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNotUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isNotUndefined( values[ key ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isNotUndefined( values[ key ] ) ).to.be.true;
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

	            const value = this._dataMap.voids.null;
	            expect( isNull( value ) ).to.be.true;

	        } );

	        it( 'should return false when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isNull( value ) ).to.be.false;

	        } );

	        it( 'should return false when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isNull( value ) ).to.be.false;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for ( let key in values ) {
	                expect( isNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for ( let key in values ) {
	                expect( isNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for ( let key in values ) {
	                expect( isNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for ( let key in values ) {
	                expect( isNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for ( let key in values ) {
	                expect( isNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for ( let key in values ) {
	                expect( isNull( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

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
	 * Check if given data is null or undefined
	 *
	 * @param data {any} The data to check against the existence
	 * @returns {boolean} true if data is null or undefined, false otherwise.
	 */
	function isNullOrUndefined ( data ) {
	    return ((data === null) || (typeof data === 'undefined'))
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

	            const value = this._dataMap.voids.null;
	            expect( isNullOrUndefined( value ) ).to.be.true;

	        } );

	        it( 'should return true when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isNullOrUndefined( value ) ).to.be.true;

	        } );

	        it( 'should return true when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isNullOrUndefined( value ) ).to.be.true;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for( let key in values ) {
	                expect( isNullOrUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for( let key in values ) {
	                expect( isNullOrUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isNullOrUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isNullOrUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isNullOrUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isNullOrUndefined( values[ key ] ) ).to.be.false;
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

	        it( 'should return false when the value is null', () => {

	            const value = this._dataMap.voids.null;
	            expect( isUndefined( value ) ).to.be.false;

	        } );

	        it( 'should return true when the value is undefined', () => {

	            const value = this._dataMap.voids.undefined;
	            expect( isUndefined( value ) ).to.be.true;

	        } );

	        it( 'should return true when the value is void(0)', () => {

	            const value = this._dataMap.voids.void;
	            expect( isUndefined( value ) ).to.be.true;

	        } );

	        // Global dataset

	        it( 'should return false when the value is a boolean', () => {

	            const values = this._dataMap.booleans;
	            for( let key in values ) {
	                expect( isUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const values = this._dataMap.numbers;
	            for( let key in values ) {
	                expect( isUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const values = this._dataMap.strings;
	            for( let key in values ) {
	                expect( isUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const values = this._dataMap.functions;
	            for( let key in values ) {
	                expect( isUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const values = this._dataMap.arrays;
	            for( let key in values ) {
	                expect( isUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const values = this._dataMap.objects;
	            for( let key in values ) {
	                expect( isUndefined( values[ key ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _voidsUnits () {

	    describe( 'Voids', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

	        } );

	        isDefinedUnits.call( this );
	        isEmptyUnits.call( this );
	        isNotEmptyUnits.call( this );
	        isNotNullUnits.call( this );
	        isNotUndefinedUnits.call( this );
	        isNullOrUndefinedUnits.call( this );
	        isNullUnits.call( this );
	        isUndefinedUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _coresUnits () {

	    describe( 'Cores', () => {

	        _arraysUnits.call( this );
	        _booleansUnits.call( this );
	        _functionsUnits.call( this );
	        _numbersUnits.call( this );
	        _objectsUnits.call( this );
	        _stringsUnits.call( this );
	        _symbolsUnits.call( this );
	        _voidsUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/* global describe */

	function _mathsUnits () {

	    describe( 'Maths', () => {

	        console.log( 'MathsUnits' );

	    } );

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

	/* global describe, expect, it */

	//import { isCelsius } from '../../../../sources/physics/temperatures'

	function isCelsiusUnits () {

	    describe( 'isCelsius()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isFahrenheit } from '../../../../sources/physics/temperatures'

	function isFahrenheitUnits () {

	    describe( 'isFahrenheit()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isKelvin } from '../../../../sources/physics/temperatures'

	function isKelvinUnits () {

	    describe( 'isKelvin()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isNotCelsius } from '../../../../sources/physics/temperatures'

	function isNotCelsiusUnits () {

	    describe( 'isNotCelsius()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isNotFahrenheit } from '../../../../sources/physics/temperatures'

	function isNotFahrenheitUnits () {

	    describe( 'isNotFahrenheit()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isNotKelvin } from '../../../../sources/physics/temperatures'

	function isNotKelvinUnits () {

	    describe( 'isNotKelvin()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isNotTemperature } from '../../../../sources/physics/temperatures'

	function isNotTemperatureUnits () {

	    describe( 'isNotTemperature()', () => {

	        it.skip( 'should be implemented', () => {

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

	/* global describe, expect, it */

	//import { isTemperature } from '../../../../sources/physics/temperatures'

	function isTemperatureUnits () {

	    describe( 'isTemperature()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( true ).to.be.true;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	function _temperaturesUnits () {

	    describe( 'Temperatures', () => {

	        beforeEach( () => {

	            this._dataMap = TestsUtils.createDataMap();

	        } );

	        afterEach( () => {

	            delete this._dataMap;

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

	function _physicsUnits () {

	    describe( 'Physics', () => {

	        _temperaturesUnits.call( this );

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

	    _coresUnits.call( root );
	    _mathsUnits.call( root );
	    _physicsUnits.call( root );

	} );

}());
