this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	    negativeFloat:          -1.01,
	    negativeInt:            -1,
	    negativeZero:           -0,
	    nan:                    Number.NaN,
	    positiveZero:           0,
	    positiveInt:            1,
	    positiveFloat:          1.01,
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

	// #endif

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayUnits () {

	    describe( 'isArray()', () => {

	        it( 'should return true only when the value is a array', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {
	                        expect( isArray( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArray( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotArray()', () => {

	        it( 'should return false only when the value is a array', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotArray( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotArray( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfArrayUnits () {

	    describe( 'isArrayOfArray()', () => {

	        it( 'should return true only when the value is a array of arrays', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isArrayOfArray( dataSet[ key ] );
	                        if ( key === 'arrays' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotArrayOfArray()', () => {

	        it( 'should return false only when the value is a array of arrays', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotArrayOfArray( dataSet[ key ] );
	                        if ( key === 'arrays' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfMultiElement method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfMultiElementUnits () {

	    describe( 'isArrayOfMultiElement()', () => {

	        it( 'should return true only when the value is a multi valued array', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const value  = dataSet[ key ];
	                        const result = isArrayOfMultiElement( value );
	                        if ( value.length > 1 ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfNull method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfNullUnits () {

	    describe( 'isArrayOfNull()', () => {

	        it( 'should return true only when the value is an array of null', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isArrayOfNull( dataSet[ key ] );
	                        if ( key === 'null' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotArrayOfNull()', () => {

	        it( 'should return false only when the value is an array of null', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotArrayOfNull( dataSet[ key ] );
	                        if ( key === 'null' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfObject method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfObjectUnits () {

	    describe( 'isArrayOfObject()', () => {

	        it( 'should return true only when the value is a array of objects', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isArrayOfObject( dataSet[ key ] );
	                        if ( key === 'objects' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotArrayOfObject()', () => {

	        it( 'should return false only when the value is a array of objects', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotArrayOfObject( dataSet[ key ] );
	                        if ( key === 'objects' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfSingleElement method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfSingleElementUnits () {

	    describe( 'isArrayOfSingleElement()', () => {

	        it( 'should return true only when the value is a single valued array of number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isArrayOfSingleElement( dataSet[ key ] );
	                        if ( key === 'singleValued' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * Check if given data is a string
	 *
	 * @param data {*} The data to check against the string type
	 * @returns {boolean} true if data is a string, false otherwise.
	 */
	function isString ( data ) {
	    return (typeof data === 'string' || data instanceof String)
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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfString method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfStringUnits () {

	    describe( 'isArrayOfString()', () => {

	        it( 'should return true only when the value is a array of strings', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isArrayOfString( dataSet[ key ] );
	                        if ( key === 'strings' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotArrayOfString()', () => {

	        it( 'should return false only when the value is a array of strings', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotArrayOfString( dataSet[ key ] );
	                        if ( key === 'strings' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

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
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isArrayOfUndefined method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isArrayOfUndefinedUnits () {

	    describe( 'isArrayOfUndefined()', () => {

	        it( 'should return true only when the value is a array of undefined', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isArrayOfUndefined( dataSet[ key ] );
	                        if ( key === 'undefined' || key === 'void' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotArrayOfUndefined()', () => {

	        it( 'should return false only when the value is a array of undefined', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotArrayOfUndefined( dataSet[ key ] );
	                        if ( key === 'undefined' || key === 'void' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isEmptyArray method.
	 * @requires {@link module:sources/cores/arrays}
	 *
	 */

	function isEmptyArrayUnits () {

	    describe( 'isEmptyArray()', () => {

	        it( 'should return true only when the value is an empty array object', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isEmptyArray( dataSet[ key ] );
	                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotEmptyArray()', () => {

	        it( 'should return false only when the value is an empty array object', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'arrays' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotEmptyArray( dataSet[ key ] );
	                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

	    } );

	}

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

	// #endif

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/arrays
	 * @desc Export the units tests about isBoolean method.
	 * @requires {@link module:sources/cores/booleans}
	 *
	 */

	function isBooleanUnits () {

	    describe( 'isBoolean()', () => {

	        it( 'should return true only when the value is a boolean', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'booleans' ) {

	                    for ( let key in dataSet ) {
	                        expect( isBoolean( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isBoolean( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotBoolean()', () => {

	        it( 'should return false only when the value is a boolean', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'booleans' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotBoolean( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotBoolean( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

	    } );

	}

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
	 * @module tests/cores/functions
	 * @desc Export the units tests about isFunction method.
	 * @requires {@link module:sources/cores/functions}
	 *
	 */

	function isFunctionUnits () {

	    describe( 'isFunction()', () => {

	        it( 'should return true only when the value is a functions', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'functions' ) {

	                    for ( let key in dataSet ) {
	                        expect( isFunction( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isFunction( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotFunction()', () => {

	        it( 'should return false only when the value is a functions', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'functions' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotFunction( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotFunction( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

	    } );

	}

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isInfinite method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isInfiniteUnits () {

	    describe( 'isInfinite()', () => {

	        it( 'should return true only when the value is an infinite number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeInfinity', 'positiveInfinity' ];

	                    for ( let key in dataSet ) {

	                        const result = isInfinite( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isInfinite( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isInfinitePositive()', () => {

	        it( 'should return true only when the value is a positive infinite number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    for ( let key in dataSet ) {

	                        const result = isInfinitePositive( dataSet[ key ] );
	                        if ( key === 'positiveInfinity' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isInfinitePositive( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isInfiniteNegative()', () => {

	        it( 'should return true only when the value is a negative infinite number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    for ( let key in dataSet ) {

	                        const result = isInfiniteNegative( dataSet[ key ] );
	                        if ( key === 'negativeInfinity' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isInfiniteNegative( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isFinite()', () => {

	        it( 'should return true only when the value is a finite number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeInfinity', 'nan', 'positiveInfinity' ];

	                    for ( let key in dataSet ) {

	                        const result = isFinite$1( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isFinite$1( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

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
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMaxPositiveUnits () {

	    describe( 'isMaxPositive()', () => {

	        it( 'should return true only when the value is equal to positive max number value', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'positiveMaxValue' ];

	                    for ( let key in dataSet ) {

	                        const result = isMaxPositive( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isMaxPositive( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isMaxNegative()', () => {

	        it( 'should return true only when the value is equal to negative max number value', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeMaxValue' ];

	                    for ( let key in dataSet ) {

	                        const result = isMaxNegative( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isMaxNegative( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/numbers/isSafeInteger
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if the given data is a maximum safe integer number
	 *
	 * @param data {*} The data to check against the maximum safe integer state
	 * @returns {boolean} true if data is a maximum safe integer, false otherwise
	 */
	function isMaxSafeInteger ( data ) {
	    return (data === Number.MAX_SAFE_INTEGER)
	}

	/**
	 * Check if the given data is a minimum safe integer number
	 *
	 * @param data {*} The data to check against the minimum safe integer state
	 * @returns {boolean} true if data is a minimum safe integer, false otherwise
	 */
	function isMinSafeInteger ( data ) {
	    return (data === Number.MIN_SAFE_INTEGER)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMaxSafeInteger method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMaxSafeIntegerUnits () {

	    describe( 'isMaxSafeInteger()', () => {

	        it( 'should return true only when the value is a the max safe integer value', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'positiveMaxSafeInteger' ];

	                    for ( let key in dataSet ) {

	                        const result = isMaxSafeInteger( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isMaxSafeInteger( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isMinSafeInteger()', () => {

	        it( 'should return true only when the value is a the min safe integer value', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeMinSafeInteger' ];

	                    for ( let key in dataSet ) {

	                        const result = isMinSafeInteger( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isMinSafeInteger( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module cores/numbers/isMin
	 * @desc Export function to validate if a value is a finite number
	 * @example todo
	 *
	 */

	/**
	 * Check if the given data is a minimum positive number
	 *
	 * @param data {*} The data to check against the positive minimum state
	 * @returns {boolean} true if data is positive minimum, false otherwise
	 */
	function isMinPositive ( data ) {
	    return (data === Number.MIN_VALUE)
	}

	/**
	 * Check if the given data is a minimum negative number
	 *
	 * @param data {*} The data to check against the minimum infinite state
	 * @returns {boolean} true if data is negative minimum, false otherwise
	 */
	function isMinNegative ( data ) {
	    return (data === -Number.MIN_VALUE)
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isMinPositive method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isMinPositiveUnits () {

	    describe( 'isMinPositive()', () => {

	        it( 'should return true only when the value is equal to positive minimum number value', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'positiveMinValue' ];

	                    for ( let key in dataSet ) {

	                        const result = isMinPositive( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isMinPositive( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isMinNegative()', () => {

	        it( 'should return true only when the value is equal to negative minimum number value', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeMinValue' ];

	                    for ( let key in dataSet ) {

	                        const result = isMinNegative( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isMinNegative( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isNumber method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isNumberUnits () {

	    describe( 'isNumber()', () => {

	        it( 'should return true only when the value is a number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNumber( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNumber( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotNumber()', () => {

	        it( 'should return false only when the value is a number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotNumber( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotNumber( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNumberPositive()', () => {

	        it( 'should return true only when the value is a positive number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [
	                        'positiveZero',
	                        'positiveInt',
	                        'positiveFloat',
	                        'positivePow',
	                        'positiveHexa',
	                        'positiveMinValue',
	                        'positiveMaxSafeInteger',
	                        'positiveMaxValue',
	                        'positiveInfinity'
	                    ];

	                    for ( let key in dataSet ) {

	                        const result = isNumberPositive( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNumberPositive( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNumberNegative()', () => {

	        it( 'should return true only when the value is a negative number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [
	                        'negativeInfinity',
	                        'negativeMaxValue',
	                        'negativeMinSafeInteger',
	                        'negativeMinValue',
	                        'negativeHexa',
	                        'negativePow',
	                        'negativeFloat',
	                        'negativeInt',
	                        'negativeNullFloat',
	                        'negativeNullInt'
	                    ];

	                    for ( let key in dataSet ) {

	                        const result = isNumberNegative( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNumberNegative( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isInteger()', () => {

	        it( 'should return true only when the value is an integer number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [
	                        'negativeMaxValue',
	                        'negativeMinSafeInteger',
	                        'negativeHexa',
	                        'negativePow',
	                        'negativeInt',
	                        'negativeZero',
	                        'positiveZero',
	                        'positiveInt',
	                        'positivePow',
	                        'positiveHexa',
	                        'positiveMaxSafeInteger',
	                        'positiveMaxValue'
	                    ];

	                    for ( let key in dataSet ) {

	                        const result = isInteger( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isInteger( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isFloat()', () => {

	        it( 'should return true only when the value is a float number', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeMinValue', 'negativeFloat', 'positiveFloat', 'positiveMinValue' ];

	                    for ( let key in dataSet ) {

	                        const result = isFloat( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isFloat( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    //todo isNaN

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/numbers
	 * @desc Export the units tests about isZero method.
	 * @requires {@link module:sources/cores/numbers}
	 *
	 */

	function isZeroUnits () {

	    describe( 'isZero()', () => {

	        it( 'should return true only when the value is zero', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeZero', 'positiveZero' ];

	                    for ( let key in dataSet ) {

	                        const result = isZero( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isZero( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isZeroPositive()', () => {

	        it( 'should return true only when the value is a positive zero', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'positiveZero' ];

	                    for ( let key in dataSet ) {

	                        const result = isZeroPositive( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isZeroPositive( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isZeroNegative()', () => {

	        it( 'should return true only when the value is a negative zero', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'numbers' ) {

	                    const allowed = [ 'negativeZero' ];

	                    for ( let key in dataSet ) {

	                        const result = isZeroNegative( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isZeroNegative( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

	        isInfiniteUnits.call( this );
	        isMaxPositiveUnits.call( this );
	        isMaxSafeIntegerUnits.call( this );
	        isMinPositiveUnits.call( this );
	        isNumberUnits.call( this );
	        isZeroUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/objects
	 * @desc Export the units tests about isObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isObjectUnits () {

	    describe( 'isObject()', () => {

	        it( 'should return true only when the value is an object', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'objects' ) {

	                    for ( let key in dataSet ) {
	                        expect( isObject( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isObject( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotObject()', () => {

	        it( 'should return false only when the value is an object', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'objects' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotObject( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotObject( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * @module tests/cores/objects
	 * @desc Export the units tests about isEmptyObject method.
	 * @requires {@link module:sources/cores/objects}
	 *
	 */

	function isEmptyObjectUnits () {

	    describe( 'isEmptyObject()', () => {

	        it( 'should return true only when the value is an empty object', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'objects' ) {

	                    for ( let key in dataSet ) {

	                        const result = isEmptyObject( dataSet[ key ] );
	                        if ( key === 'empty' || key === 'instance' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isEmptyObject( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotEmptyObject()', () => {

	        it( 'should return false only when the value is an empty object', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'objects' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotEmptyObject( dataSet[ key ] );
	                        if ( key === 'empty' || key === 'instance' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotEmptyObject( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	        isEmptyObjectUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/strings
	 * @desc Export the units tests about isString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isStringUnits () {

	    describe( 'isString()', () => {

	        it( 'should return true only when the value is a string', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    for ( let key in dataSet ) {
	                        expect( isString( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isString( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotString()', () => {

	        it( 'should return false only when the value is a string', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotString( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotString( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * @module tests/cores/strings
	 * @desc Export the units tests about isEmptyString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isEmptyStringUnits () {

	    describe( 'isEmptyString()', () => {

	        it( 'should return true only when the value is an empty string', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

	                    for ( let key in dataSet ) {

	                        const result = isEmptyString( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isEmptyString( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotEmptyString()', () => {

	        it( 'should return false only when the value is an empty string', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

	                    for ( let key in dataSet ) {

	                        const result = isNotEmptyString( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotEmptyString( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

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
	 * @module tests/cores/strings
	 * @desc Export the units tests about isBlankString method.
	 * @requires {@link module:sources/cores/strings}
	 *
	 */

	function isBlankStringUnits () {

	    describe( 'isBlankString()', () => {

	        it( 'should return true only when the value is a blank string', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    const allowed = [ 'blank', 'stringBlank' ];

	                    for ( let key in dataSet ) {

	                        const result = isBlankString( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isBlankString( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotBlankString()', () => {

	        it( 'should return false only when the value is a blank string', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    const allowed = [ 'blank', 'stringBlank' ];

	                    for ( let key in dataSet ) {

	                        const result = isNotBlankString( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotBlankString( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	        isEmptyStringUnits.call( this );
	        isBlankStringUnits.call( this );

	    } );

	}

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
	 * @module tests/cores/symbols
	 * @desc Export the units tests about isSymbol method.
	 * @requires {@link module:sources/cores/symbols}
	 *
	 */

	function isSymbolUnits () {

	    describe( 'isSymbol()', () => {

	        it( 'should return true only when the value is a symbols', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'symbols' ) {

	                    for ( let key in dataSet ) {
	                        expect( isSymbol( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isSymbol( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotSymbol()', () => {

	        it( 'should return false only when the value is a symbols', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'symbols' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotSymbol( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotSymbol( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

	    } );

	}

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
	 * @module tests/cores/voids
	 * @desc Export the units tests about isEmpty method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isEmptyUnits () {

	    describe( 'isEmpty()', () => {

	        it( 'should return true only when the value is an empty container (string, array, object)', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

	                    for ( let key in dataSet ) {

	                        const result = isEmpty( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else if ( mapKey === 'arrays' ) {

	                    const allowed = [ 'emptyArray', 'emptyArrayObject' ];

	                    for ( let key in dataSet ) {

	                        const result = isEmpty( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else if ( mapKey === 'objects' ) {

	                    const allowed = [ 'empty', 'instance' ];

	                    for ( let key in dataSet ) {

	                        const result = isEmpty( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isEmpty( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotEmpty()', () => {

	        it( 'should return false only when the value is an empty container (string, array, object)', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'strings' ) {

	                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

	                    for ( let key in dataSet ) {

	                        const result = isNotEmpty( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else if ( mapKey === 'arrays' ) {

	                    const allowed = [ 'emptyArray', 'emptyArrayObject' ];

	                    for ( let key in dataSet ) {

	                        const result = isNotEmpty( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else if ( mapKey === 'objects' ) {

	                    const allowed = [ 'empty', 'instance' ];

	                    for ( let key in dataSet ) {

	                        const result = isNotEmpty( dataSet[ key ] );
	                        if ( allowed.includes( key ) ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotEmpty( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isNull method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isNullUnits () {

	    describe( 'isNull()', () => {

	        it( 'should return true only when the value is null', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'voids' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNull( dataSet[ key ] );
	                        if ( key === 'null' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNull( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotNull()', () => {

	        it( 'should return false only when the value is null', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'voids' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotNull( dataSet[ key ] );
	                        if ( key === 'null' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotNull( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isDefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isDefinedUnits () {

	    describe( 'isDefined()', () => {

	        it( 'should return false only when the value is null or undefined', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'voids' ) {

	                    for ( let key in dataSet ) {
	                        expect( isDefined( dataSet[ key ] ) ).to.be.false;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isDefined( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotDefined()', () => {

	        it( 'should return true only when the value is null or undefined', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'voids' ) {

	                    for ( let key in dataSet ) {
	                        expect( isNotDefined( dataSet[ key ] ) ).to.be.true;
	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotDefined( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/cores/voids
	 * @desc Export the units tests about isUndefined method.
	 * @requires {@link module:sources/cores/voids}
	 */

	function isUndefinedUnits () {

	    describe( 'isUndefined()', () => {

	        it( 'should return true only when the value is undefined', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'voids' ) {

	                    for ( let key in dataSet ) {

	                        const result = isUndefined( dataSet[ key ] );
	                        if ( key === 'undefined' || key === 'void' ) {
	                            expect( result ).to.be.true;
	                        } else {
	                            expect( result ).to.be.false;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isUndefined( dataSet[ key ] ) ).to.be.false;
	                    }

	                }

	            }

	        } );

	    } );

	    describe( 'isNotUndefined()', () => {

	        it( 'should return false only when the value is undefined', () => {

	            const dataMap = this._dataMap;
	            for ( let mapKey in dataMap ) {

	                const dataSet = dataMap[ mapKey ];
	                if ( mapKey === 'voids' ) {

	                    for ( let key in dataSet ) {

	                        const result = isNotUndefined( dataSet[ key ] );
	                        if ( key === 'undefined' || key === 'void' ) {
	                            expect( result ).to.be.false;
	                        } else {
	                            expect( result ).to.be.true;
	                        }

	                    }

	                } else {

	                    for ( let key in dataSet ) {
	                        expect( isNotUndefined( dataSet[ key ] ) ).to.be.true;
	                    }

	                }

	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

	        isEmptyUnits.call( this );
	        isDefinedUnits.call( this );
	        isNullUnits.call( this );
	        isUndefinedUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module physics/temperatues
	 * @desc Export constants about temperatures
	 * @example todo
	 *
	 */

	const ABSOLUTE_ZERO_KELVIN     = 0.00000000045;
	const ABSOLUTE_ZERO_CELSIUS    = -273.14999999955;
	const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isCelsius ( data ) {
	    return (isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS)
	}

	///

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isNotCelsius ( data ) {
	    return !isCelsius( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isCelsius method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isCelsiusUnits () {

	    describe( 'isCelsius()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isCelsius(0) ).to.be.true;

	        } );

	        it.skip( 'should be implemented', () => {

	            expect( isNotCelsius(0) ).to.be.false;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isFahrenheit ( data ) {
	    return (isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT)
	}

	///

	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isNotFahrenheit ( data ) {
	    return !isFahrenheit( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isFahrenheit method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isFahrenheitUnits () {

	    describe( 'isFahrenheit()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isFahrenheit(0) ).to.be.true;

	        } );

	        it.skip( 'should be implemented', () => {

	            expect( isNotFahrenheit(0) ).to.be.false;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isKelvin ( data ) {
	    return (isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN)
	}

	///


	/**
	 *
	 * @param data
	 * @return {boolean}
	 */
	function isNotKelvin ( data ) {
	    return !isKelvin( data )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isKelvin method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isKelvinUnits () {

	    describe( 'isKelvin()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isKelvin(0) ).to.be.true;

	        } );

	        it.skip( 'should be implemented', () => {

	            expect( isNotKelvin(0) ).to.be.false;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module physics/temperatues
	 * @desc Export function to validate if a value is a temperature
	 * @example todo
	 *
	 */

	/**
	 *
	 * @param data
	 * @return {boolean|*|boolean}
	 */
	function isTemperature ( data ) {
	    return (isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ))
	}

	///

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
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @module tests/physics/temperatures
	 * @desc Export the units tests about isTemperature method.
	 * @requires {@link module:sources/physics/temperatures}
	 *
	 */

	function isTemperatureUnits () {

	    describe( 'isTemperature()', () => {

	        it.skip( 'should be implemented', () => {

	            expect( isTemperature(0) ).to.be.true;

	        } );

	        it.skip( 'should be implemented', () => {

	            expect( isNotTemperature(0) ).to.be.false;

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
	        isTemperatureUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 */

	function _physicsUnits () {

	    describe( 'Physics', () => {

	        _temperaturesUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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
