'use strict';

var Benchmark = require('benchmark');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Benchmark__default = /*#__PURE__*/_interopDefaultLegacy(Benchmark);

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArray
 * @desc Export functions to validate if a value is an array or not
 * @example {@lang javascript}
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

/**
 * Check if given data is not an array
 *
 * @param data {*} The data to check against the array type
 * @returns {boolean} true if data is not array, false otherwise
 */
function isNotArray ( data ) {
    return !Array.isArray( data )
}


// #if IS_REMOVE_ON_BUILD

function isArray_0 ( data ) {
    return data instanceof Array
}

function isNotArray_0 ( data ) {
    return !isArray( data )
}

// #endif

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee */

// Todo: move into Itee-Utils package

const voids = {
    null:      null,
    undefined: undefined,
    void:      void ( 0 )
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

const strings = ( () => {
    'use strict';

    const dataMap = {
        empty:       '',
        blank:       '      ',
        stringNull:  String(),
        stringEmpty: String( '' ),
        stringBlank: String( '    ' ),
        foobar:      'foobar'
    };

    const voidDataMap = voids;
    for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
        dataMap[ voidDataMap[ i ] ] = `${ voidDataMap[ i ] }`;
    }

    const booleanDataMap = booleans;
    for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
        dataMap[ booleanDataMap[ j ] ] = `${ booleanDataMap[ j ] }`;
    }

    const numericDataMap = numbers;
    for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
        dataMap[ numericDataMap[ k ] ] = `${ numericDataMap[ k ] }`;
    }

    return dataMap

} )();

const functions = {
    anonymousFunction: function () {},
    namedFunction:     function namedFunction () {},
    arrowFunction:     () => {}
};

const arrays = ( () => {
    'use strict';

    const dataMap = {
        emptyArray:       [],
        emptyArrayObject: new Array(),
        singleValued:     [ 0 ],
        multiValued:      [ 0, 1, 2 ],
        null:             ( () => {

            const nullArray = [];

            for ( let index = 0 ; index < 3 ; index++ ) {
                nullArray.push( null );
            }

            return nullArray

        } )(),
        undefined:        ( () => {

            const undefinedArray = [];

            for ( let index = 0 ; index < 3 ; index++ ) {
                undefinedArray.push( undefined );
            }

            return undefinedArray

        } )(),
        void:             ( () => {

            const undefinedArray = [];

            for ( let index = 0 ; index < 3 ; index++ ) {
                undefinedArray.push( void ( 0 ) );
            }

            return undefinedArray

        } )(),
        voids:            ( () => {

            const array = [];

            const voidDataMap = voids;
            for ( let key in voidDataMap ) {
                array.push( voidDataMap[ key ] );
            }

            return array

        } )(),
        booleans:         ( () => {

            const array = [];

            const booleanDataMap = booleans;
            for ( let key in booleanDataMap ) {
                array.push( booleanDataMap[ key ] );
            }

            return array

        } )(),
        numbers:          ( () => {

            const array = [];

            const numericDataMap = numbers;
            for ( let key in numericDataMap ) {
                array.push( numericDataMap[ key ] );
            }

            return array

        } )(),
        strings:          ( () => {

            const array = [];

            const stringDataMap = strings;
            for ( let key in stringDataMap ) {
                array.push( stringDataMap[ key ] );
            }

            return array

        } )(),
        functions:        ( () => {

            const array = [];

            const functionDataMap = functions;
            for ( let key in functionDataMap ) {
                array.push( functionDataMap[ key ] );
            }

            return array

        } )(),
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

} )();

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
                throw ReferenceError( `The global data map does not contain element for key: ${ optionKey }` )
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

    createBenchmarkOptions: function ( dataMapOptions ) {

        TestsUtils.DataMap = TestsUtils.createDataMap( dataMapOptions );

        return {

            // called when the benchmark starts running
            'onStart': function onStartBench ( event ) {
                this.benchDataMap = TestsUtils.DataMap;

//                console.log( `${ this.constructor.name } [${ this.name }]` )
//                console.group( `${ this.constructor.name } [${ this.name }] onStart` )
//                console.log( `TestsUtils: ${ ( ( TestsUtils === undefined ) ? 'not exist' : 'exist' ) }` )
//                console.log( `Datamap: ${ ( ( this.datamap === undefined ) ? 'not exist' : 'exist' ) }` )
//                console.groupEnd()
            },

            // called after each run cycle
            'onCycle': function onCycleBench ( event ) {
//                console.log( `${ this.constructor.name } [${ this.name }] onCycle` )
            },

            // called when aborted
            'onAbort': function onAbortBench ( event ) {
                console.log( `${ this.constructor.name } [${ this.name }] onAbort` );
            },

            // called when a test errors
            'onError': function onErrorBench ( event ) {
                console.log( `${ this.constructor.name } [${ this.name }] onError` );
            },

            // called when reset
            'onReset': function onResetBench ( event ) {
                console.log( `${ this.constructor.name } [${ this.name }] onReset` );
            },

            // called when the benchmark completes running
            'onComplete': function onCompleteBench ( event ) {
//                console.log( `${ this.constructor.name } [${ this.name }] onComplete` )
                delete this.benchDataMap;
            },

            // compiled/called before the test loop
            'setup': function setupBench ( event ) {
//                console.log( `${ this.constructor.name } [${ this.name }] setup` )
            },

            // compiled/called after the test loop
            'teardown': function teardownBench ( event ) {
//                console.log( `${ this.constructor.name } [${ this.name }] teardown` )
            }
        }

    },

    createSuiteOptions: function ( dataMapOptions ) {

        // #if IS_BACKEND_SPECIFIC
        return  {

            // called when the suite starts running
            'onStart': function onStartSuite ( event ) {
                console.log( `${ this.constructor.name } [${ this.name }] onStart` );
            },

            // called between running benchmarks
            'onCycle': function onCycleSuite ( event ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onCycle` )
                console.log( String( event.target ) );
            },

            // called when aborted
            'onAbort': function onAbortSuite ( event ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onAbort` )
            },

            // called when a test errors
            'onError': function onErrorSuite ( event ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onError` )
            },

            // called when reset
            'onReset': function onResetSuite ( event ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onReset` )
            },

            // called when the suite completes running
            'onComplete': function onCompleteSuite ( event ) {
                //                console.log( `${ this.constructor.name } [${ this.name }] onComplete` )
                console.log( `Fastest is ${ this.filter( 'fastest' ).map( 'name' ) }\n` );
                //                delete this.suiteDataMap
            }
        }
        // #endif

        

    },

    iterateOverDataMap: function ( func ) {

        return function _iterateOverDataMap () {
//            console.group( 'iterateOverDataMap' )
//            console.log( `Suite Datamap: ${ ( ( this.suiteDataMap === undefined ) ? 'not exist' : 'exist' ) }` )
//            console.log( `Bench Datamap: ${ ( ( this.benchDataMap === undefined ) ? 'not exist' : 'exist' ) }` )
//            console.groupEnd()

            const datamap = this.benchDataMap;
            for ( let datasetKey in datamap ) {

                const dataset = datamap[ datasetKey ];

                if ( Array.isArray( dataset ) ) {

                    for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

                        const data = dataset[ i ];
                        func( data );

                    }

                } else {

                    for ( let dataKey in dataset ) {

                        const data = dataset[ dataKey ];
                        func( data );

                    }

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
                this.dataset = TestsUtils.createDataSet()[ datasetName ];
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

                func( dataset[ i ] );

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

//const isArraySuite = suite( 'isArray', () => {
//
//    benchmark( 'isArray()', Itee.TestsUtils.iterateOverDataMap( isArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
//    benchmark( 'isArray_0()', Itee.TestsUtils.iterateOverDataMap( isArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
//
//} )
//
//const isNotArraySuite = suite( 'isNotArray', () => {
//
//    benchmark( 'isNotArray()', Itee.TestsUtils.iterateOverDataMap( isNotArray ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
//    benchmark( 'isNotArray_0()', Itee.TestsUtils.iterateOverDataMap( isNotArray_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() )
//
//} )

const isArraySuite = Benchmark__default["default"].Suite( 'isArray', TestsUtils.createSuiteOptions() )
                              .add( 'isArray', TestsUtils.iterateOverDataMap( isArray ), TestsUtils.createBenchmarkOptions() )
                              .add( 'isArray_0', TestsUtils.iterateOverDataMap( isArray_0 ), TestsUtils.createBenchmarkOptions() );

const isNotArraySuite = Benchmark__default["default"].Suite( 'isNotArray', TestsUtils.createSuiteOptions() )
                                 .add( 'isNotArray', TestsUtils.iterateOverDataMap( isNotArray ), TestsUtils.createBenchmarkOptions() )
                                 .add( 'isNotArray_0', TestsUtils.iterateOverDataMap( isNotArray_0 ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isEmptyArray
 * @desc Export function to validate if a value is an array of null length or not
 * @example
 *
 * import { isEmptyArray } from 'itee-validators'
 *
 * if( isEmptyArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    return ( data.length === 0 )

}

/**
 * Check if given data is not an empty array
 *
 * @param data {*} The data to check against the empty array
 * @returns {boolean} true if data is not an empty array, false otherwise
 */
function isNotEmptyArray ( data ) {

    if ( isNotArray( data ) ) { return true }

    return ( data.length > 0 )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfArray
 * @desc Export function to validate if a value is an array of array or not
 * @example
 *
 * import { isArrayOfArray } from 'itee-validators'
 *
 * if( isArrayOfArray( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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


const isArrayOfArraySuite = Benchmark__default["default"].Suite( 'isArrayOfArray', TestsUtils.createSuiteOptions() )
                                     .add( 'isArrayOfArray', TestsUtils.iterateOverDataMap( isArrayOfArray ), TestsUtils.createBenchmarkOptions() );

const isNotArrayOfArraySuite = Benchmark__default["default"].Suite( 'isNotArrayOfArray', TestsUtils.createSuiteOptions() )
                                        .add( 'isNotArrayOfArray', TestsUtils.iterateOverDataMap( isNotArrayOfArray ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfMultiElement
 * @desc Export function to validate if a value is an array with more than one value
 * @example
 *
 * import { isArrayOfMultiElement } from 'itee-validators'
 *
 * if( isArrayOfMultiElement( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    return ( data.length > 1 )

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


const isArrayOfMultiElementSuite = Benchmark__default["default"].Suite( 'isArrayOfMultiElement', TestsUtils.createSuiteOptions() )
                                            .add( 'isArrayOfMultiElement', TestsUtils.iterateOverDataMap( isArrayOfMultiElement ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isNull
 * @desc Export function to validate if a value is null or not
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is null, false otherwise.
 */
function isNull ( data ) {
    return ( data === null )
}

// #if IS_REMOVE_ON_BUILD

function isNull_0 ( value ) {
    return Object.is( value, null )
}

// #endif

/**
 * Check if given data is not null
 *
 * @param data {*} The data to check against the nullity
 * @returns {boolean} true if data is not null, false otherwise.
 */
function isNotNull ( data ) {
    return ( data !== null )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfNull
 * @desc Export function to validate if a value is an array of null values or not
 * @example
 *
 * import { isArrayOfNull } from 'itee-validators'
 *
 * if( isArrayOfNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * } *
 */

/**
 * Check if given data is not an empty array where all values are null
 *
 * @param data {*} The data to check against the array of null type
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

/**
 * Check if given data is not an empty array where all values are not null
 *
 * @param data {*} The data to check against the array of null type
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

const isArrayOfNullSuite = Benchmark__default["default"].Suite( 'isArrayOfNull', TestsUtils.createSuiteOptions() )
                                    .add( 'isArrayOfNull', TestsUtils.iterateOverDataMap( isArrayOfNull ), TestsUtils.createBenchmarkOptions() );

const isNotArrayOfNullSuite = Benchmark__default["default"].Suite( 'isNotArrayOfNull', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotArrayOfNull', TestsUtils.iterateOverDataMap( isNotArrayOfNull ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isDefined
 * @desc Export function to validate if a value is a defined or not
 * @example
 *
 * import { isDefined } from 'itee-validators'
 *
 * if( isDefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is not null and not undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is not null and not undefined, false otherwise.
 */
function isDefined ( data ) {
    return ( ( data !== null ) && ( typeof data !== 'undefined' ) )
}

/**
 * Check if given data is null or undefined
 *
 * @param data {*} The data to check against the existence
 * @returns {boolean} true if data is null or undefined, false otherwise.
 */
function isNotDefined ( data ) {
    return ( ( data === null ) || ( typeof data === 'undefined' ) )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/objects/isObject
 * @desc Export function to validate if a value is an object
 * @example
 *
 * import { isObject } from 'itee-validators'
 *
 * if( isObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    return ( data.constructor === Object )
}

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
 * @module sources/cores/arrays/isArrayOfObject
 * @desc Export function to validate if a value is an array of objects or not
 * @example
 *
 * import { isArrayOfObject } from 'itee-validators'
 *
 * if( isArrayOfObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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


const isArrayOfObjectSuite = Benchmark__default["default"].Suite( 'isArrayOfObject', TestsUtils.createSuiteOptions() )
                                      .add( 'isArrayOfObject', TestsUtils.iterateOverDataMap( isArrayOfObject ), TestsUtils.createBenchmarkOptions() );

const isNotArrayOfObjectSuite = Benchmark__default["default"].Suite( 'isNotArrayOfObject', TestsUtils.createSuiteOptions() )
                                         .add( 'isNotArrayOfObject', TestsUtils.iterateOverDataMap( isNotArrayOfObject ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfSingleElement
 * @desc Export function to validate if a value is an array of single value or not
 * @example
 *
 * import { isArrayOfSingleElement } from 'itee-validators'
 *
 * if( isArrayOfSingleElement( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

const isArrayOfSingleElementSuite = Benchmark__default["default"].Suite( 'isArrayOfSingleElement', TestsUtils.createSuiteOptions() )
                                             .add( 'isArrayOfSingleElement', TestsUtils.iterateOverDataMap( isArrayOfSingleElement ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isString
 * @desc Export function to validate if a value is a string
 * @example
 *
 * import { isString } from 'itee-validators'
 *
 * if( isString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is a string, false otherwise.
 */
function isString ( data ) {
    return ( typeof data === 'string' || data instanceof String )
}

/**
 * Check if given data is not a string
 *
 * @param data {*} The data to check against the string type
 * @returns {boolean} true if data is not a string, false otherwise.
 */
function isNotString ( data ) {
    return !isString( data )
}

// #if IS_REMOVE_ON_BUILD

function isString_0 ( val ) {
    return ( typeof val === 'string' )
}

function isString_1 ( val ) {
    return ( typeof val === 'string' || ( ( !!val && typeof val === 'object' ) && Object.prototype.toString.call( val ) === '[object String]' ) )
}

function isString_2 ( val ) {
    return ( Object.prototype.toString.call( val ) === '[object String]' )
}

function isString_3 ( val ) {
    return ( val !== null && val !== undefined && val.constructor === String )
}

function isString_4 ( val ) {
    return ( val === val + '' )
}

// #endif

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfString
 * @desc Export function to validate if a value is an array of string or not
 * @example
 *
 * import { isArrayOfString } from 'itee-validators'
 *
 * if( isArrayOfString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

// #if IS_REMOVE_ON_BUILD

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

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const isArrayOfStringSuite = Benchmark__default["default"].Suite( 'isArrayOfString', TestsUtils.createSuiteOptions() )
                                      .add( 'isArrayOfString', TestsUtils.iterateOverDataMap( isArrayOfString ), TestsUtils.createBenchmarkOptions() );

const isNotArrayOfStringSuite = Benchmark__default["default"].Suite( 'isNotArrayOfString', TestsUtils.createSuiteOptions() )
                                         .add( 'isNotArrayOfString', TestsUtils.iterateOverDataMap( isNotArrayOfString ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/voids/isUndefined
 * @desc Export function to validate if a value is a void
 * @example
 *
 * import { isNull } from 'itee-validators'
 *
 * if( isNull( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is undefined
 *
 * @param data {*} The data to check against the undefiness
 * @returns {boolean} true if data is undefined, false otherwise.
 */
function isUndefined ( data ) {
    return ( typeof data === 'undefined' )
}

/**
 * Check if given data is defined
 *
 * @param data {*} The data to check against the undefiness
 * @returns {boolean} true if data is defined, false otherwise.
 */
function isNotUndefined ( data ) {
    return ( typeof data !== 'undefined' )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/arrays/isArrayOfUndefined
 * @desc Export function to validate if a value is an array of undefined values or not
 * @example
 *
 * import { isArrayOfUndefined } from 'itee-validators'
 *
 * if( isArrayOfUndefined( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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


const isArrayOfUndefinedSuite = Benchmark__default["default"].Suite( 'isArrayOfUndefined', TestsUtils.createSuiteOptions() )
                                         .add( 'isArrayOfUndefined', TestsUtils.iterateOverDataMap( isArrayOfUndefined ), TestsUtils.createBenchmarkOptions() );

const isNotArrayOfUndefinedSuite = Benchmark__default["default"].Suite( 'isNotArrayOfUndefined', TestsUtils.createSuiteOptions() )
                                            .add( 'isNotArrayOfUndefined', TestsUtils.iterateOverDataMap( isNotArrayOfUndefined ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const isEmptyArraySuite = Benchmark__default["default"].Suite( 'isEmptyArray', TestsUtils.createSuiteOptions() )
                                            .add( 'isEmptyArray', TestsUtils.iterateOverDataMap( isEmptyArray ), TestsUtils.createBenchmarkOptions() );

const isNotEmptyArraySuite = Benchmark__default["default"].Suite( 'isNotEmptyArray', TestsUtils.createSuiteOptions() )
                                            .add( 'isNotEmptyArray', TestsUtils.iterateOverDataMap( isNotEmptyArray ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/booleans/isBoolean
 * @desc Export function to validate if a value is a boolean or not
 * @example
 *
 * import { isBoolean } from 'itee-validators'
 *
 * if( isBoolean( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is a boolean, false otherwise.
 */
function isBoolean ( data ) {
    return ( typeof data === 'boolean' )
}

/**
 * Check if given data is not a boolean
 *
 * @param data {*} The data to check against the booleaness
 * @returns {boolean} true if data is not a boolean, false otherwise.
 */
function isNotBoolean ( data ) {
    return ( typeof data !== 'boolean' )
}

// #if IS_REMOVE_ON_BUILD

function isBoolean_alt ( data ) {
    return typeof data === 'boolean' || ( typeof data === 'object' && data !== null && typeof data.valueOf() === 'boolean' )
}

function isNotBoolean_negbase ( data ) {
    return !isBoolean( data )
}

// #endif

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

const isBooleanSuite = Benchmark__default["default"].Suite( 'isBoolean', TestsUtils.createSuiteOptions() )
                                .add( 'isBoolean', TestsUtils.iterateOverDataMap( isBoolean ), TestsUtils.createBenchmarkOptions() )
                                .add( 'isBoolean_alt', TestsUtils.iterateOverDataMap( isBoolean_alt ), TestsUtils.createBenchmarkOptions() );

const isNotBooleanSuite = Benchmark__default["default"].Suite( 'isNotBoolean', TestsUtils.createSuiteOptions() )
                                   .add( 'isNotBoolean', TestsUtils.iterateOverDataMap( isNotBoolean ), TestsUtils.createBenchmarkOptions() )
                                   .add( 'isNotBoolean_negbase', TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), TestsUtils.createBenchmarkOptions() );

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
//export * from './functions/_functions.benchs'
//export * from './numbers/_numbers.benchs'
//export * from './objects/_objects.benchs'
//export * from './strings/_strings.benchs'
//export * from './symbols/_symbols.benchs'
//export * from './voids/_voids.benchs'

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isInfinite
 * @desc Export function to validate if a value is a finite or infinite number
 * @example
 *
 * import { isInfinite } from 'itee-validators'
 *
 * if( isInfinite( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is an infinite number
 *
 * @param data {*} The data to check against the infinite state
 * @returns {boolean} true if data is infinite, false otherwise
 */
function isInfinite ( data ) {

    // Todo: is required to check notnumber ?
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
    return ( data === Number.NEGATIVE_INFINITY )
}

/**
 * Check if the given data is an infinite positive number
 *
 * @param data {*} The data to check against the positive infinite state
 * @returns {boolean} true if data is positive infinite, false otherwise
 */
function isInfinitePositive ( data ) {
    return ( data === Number.POSITIVE_INFINITY )
}

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
 * @module sources/cores/numbers/isZero
 * @desc Export function to validate if a value is zero, with a special sign
 * @example
 *
 * import { isZero } from 'itee-validators'
 *
 * if( isZero( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

// Todo: negations

/**
 * Check if the given data is zero
 *
 * @param data {*} The data to check against the zero value
 * @returns {boolean} true if data is zero, false otherwise
 */
function isZero ( data ) {
    //Todo protect truthy values
    return ( data === 0 )
}

/**
 * Check if the given data is a positive zero
 *
 * @param data {*} The data to check against the positive zero value
 * @returns {boolean} true if data is a positive zero, false otherwise
 */
function isZeroPositive ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}

/**
 * Check if the given data is a negative zero
 *
 * @param data {*} The data to check against the negative zero value
 * @returns {boolean} true if data is a negative zero, false otherwise
 */
function isZeroNegative ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.NEGATIVE_INFINITY )
}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/numbers/isNumber
 * @desc Export function to validate if a value is a number, or with special sign
 * @example
 *
 * import { isNumber } from 'itee-validators'
 *
 * if( isNumber( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    return ( data.constructor === Number )

}

/**
 * Check if the data is a positive number
 *
 * @param data {*} The data to check against the positivity
 * @returns {boolean} true if data is a positive number, false otherwise.
 */
function isNumberPositive ( data ) {

    if ( isNotNumber( data ) ) { return false }

    // Todo: Math.sign
    return ( data > 0 || isZeroPositive( data ) || isInfinitePositive( data ) )

}

/**
 * Check if the data is a negative number
 *
 * @param data {*} The data to check against the negativity
 * @returns {boolean} true if data is a negative number, false otherwise.
 */
function isNumberNegative ( data ) {
    return ( isNumber( data ) && data < 0 )
}

/**
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the number type
 * @returns {boolean} true if data is not of type number or not a number, false otherwise.
 */
function isNotNumber ( data ) {
    return !( isNumber( data ) )
}

/**
 * Check if the given data is an integer number
 *
 * @param data {*} The data to check against the integer state
 * @returns {boolean} true if data is an integer, false otherwise
 */
function isInteger ( data ) {
    return Number.isInteger( data )
}

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
 * Check if given data is not a number
 *
 * @param data {*} The data to check against the NaN state
 * @returns {boolean} true if data is not a number, false otherwise.
 */
function isNaN ( data ) {
    return Number.isNaN( data )
}


// #if IS_REMOVE_ON_BUILD

function isNumber_0 ( data ) {
    return ( typeof data === 'number' && !Number.isNaN( data ) )
}

function isNumber_1 ( data ) {
    return ( Number( data ) === data )
}

///

function isInteger_0 ( data ) {
    return ( data === 0 && ( 1 / data ) === Number.POSITIVE_INFINITY )
}

function isInteger_1 ( data ) {
    return data % 1 === 0
}

function isInteger_2 ( n ) {
    return n === +n && n === ( n | 0 )
}

function isInteger_3 ( nVal ) {
    return typeof nVal === 'number' && isFinite( nVal ) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor( nVal ) === nVal
}

///

function isFloat_1 ( n ) {
    return n === +n && n !== ( n | 0 )
}

function isFloat_2 ( x ) {
    return !!( x % 1 )
}

// #endif

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/constants
 * @desc Export constants about temperatures
 *
 */

/**
 * @const
 * @type {number}
 * @default 0.00000000045
 * @desc This value corresponding to the absolute zero kelvin value
 */
const ABSOLUTE_ZERO_KELVIN = 0.00000000045;

/**
 * @const
 * @type {number}
 * @default -273.14999999955
 * @desc This value corresponding to the absolute zero celsius value
 */
const ABSOLUTE_ZERO_CELSIUS = -273.14999999955;

/**
 * @const
 * @type {number}
 * @default -459.67
 * @desc This value corresponding to the absolute zero fahrenheit value
 */
const ABSOLUTE_ZERO_FAHRENHEIT = -459.67;

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatues
 * @desc Export function to validate if a value is a Celsius temperature
 * @example
 *
 * import { isCelsius } from 'itee-validators'
 *
 * if( isCelsius( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 *
 * @param data
 * @return {boolean}
 */
function isCelsius ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_CELSIUS )
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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const isCelsiusSuite = Benchmark__default["default"].Suite( 'isCelsius', TestsUtils.createSuiteOptions() )
                                .add( 'isCelsius', TestsUtils.iterateOverDataMap( isCelsius ), TestsUtils.createBenchmarkOptions() );

const isNotCelsiusSuite = Benchmark__default["default"].Suite( 'isNotCelsius', TestsUtils.createSuiteOptions() )
                                   .add( 'isNotCelsius', TestsUtils.iterateOverDataMap( isNotCelsius ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatues
 * @desc Export function to validate if a value is a Fahrenheit temperature
 * @example
 *
 * import { isFahrenheit } from 'itee-validators'
 *
 * if( isFahrenheit( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 *
 * @param data
 * @return {boolean}
 */
function isFahrenheit ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_FAHRENHEIT )
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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const isFahrenheitSuite = Benchmark__default["default"].Suite( 'isFahrenheit', TestsUtils.createSuiteOptions() )
                                   .add( 'isFahrenheit', TestsUtils.iterateOverDataMap( isFahrenheit ), TestsUtils.createBenchmarkOptions() );

const isNotFahrenheitSuite = Benchmark__default["default"].Suite( 'isNotFahrenheit', TestsUtils.createSuiteOptions() )
                                      .add( 'isNotFahrenheit', TestsUtils.iterateOverDataMap( isNotFahrenheit ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatues
 * @desc Export function to validate if a value is a kelvin temperature
 * @example
 *
 * import { isKelvin } from 'itee-validators'
 *
 * if( isKelvin( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 *
 * @param data
 * @return {boolean}
 */
function isKelvin ( data ) {
    return ( isNumber( data ) && data >= ABSOLUTE_ZERO_KELVIN )
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
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const isKelvinSuite = Benchmark__default["default"].Suite( 'isKelvin', TestsUtils.createSuiteOptions() )
                               .add( 'isKelvin', TestsUtils.iterateOverDataMap( isKelvin ), TestsUtils.createBenchmarkOptions() );

const isNotKelvinSuite = Benchmark__default["default"].Suite( 'isNotKelvin', TestsUtils.createSuiteOptions() )
                                  .add( 'isNotKelvin', TestsUtils.iterateOverDataMap( isNotKelvin ), TestsUtils.createBenchmarkOptions() );

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/physics/temperatues
 * @desc Export function to validate if a value is a temperature
 * @example
 *
 * import { isTemperature } from 'itee-validators'
 *
 * if( isTemperature( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 *
 * @param data {*}
 * @return {boolean}
 */
function isTemperature ( data ) {
    return ( isKelvin( data ) || isCelsius( data ) || isFahrenheit( data ) )
}

/**
 *
 * @param data {*}
 * @return {boolean}
 */
function isNotTemperature ( data ) {
    return ( isNotKelvin( data ) && isNotCelsius( data ) && isNotFahrenheit( data ) )
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

const isTemperatureSuite = Benchmark__default["default"].Suite( 'isTemperature', TestsUtils.createSuiteOptions() )
                                    .add( 'isTemperature', TestsUtils.iterateOverDataMap( isTemperature ), TestsUtils.createBenchmarkOptions() );

const isNotTemperatureSuite = Benchmark__default["default"].Suite( 'isNotTemperature', TestsUtils.createSuiteOptions() )
                                       .add( 'isNotTemperature', TestsUtils.iterateOverDataMap( isNotTemperature ), TestsUtils.createBenchmarkOptions() );

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
 */

var benchmarks = /*#__PURE__*/Object.freeze({
	__proto__: null,
	isArraySuite: isArraySuite,
	isNotArraySuite: isNotArraySuite,
	isArrayOfArraySuite: isArrayOfArraySuite,
	isNotArrayOfArraySuite: isNotArrayOfArraySuite,
	isArrayOfMultiElementSuite: isArrayOfMultiElementSuite,
	isArrayOfNullSuite: isArrayOfNullSuite,
	isNotArrayOfNullSuite: isNotArrayOfNullSuite,
	isArrayOfObjectSuite: isArrayOfObjectSuite,
	isNotArrayOfObjectSuite: isNotArrayOfObjectSuite,
	isArrayOfSingleElementSuite: isArrayOfSingleElementSuite,
	isArrayOfStringSuite: isArrayOfStringSuite,
	isNotArrayOfStringSuite: isNotArrayOfStringSuite,
	isArrayOfUndefinedSuite: isArrayOfUndefinedSuite,
	isNotArrayOfUndefinedSuite: isNotArrayOfUndefinedSuite,
	isEmptyArraySuite: isEmptyArraySuite,
	isNotEmptyArraySuite: isNotEmptyArraySuite,
	isBooleanSuite: isBooleanSuite,
	isNotBooleanSuite: isNotBooleanSuite,
	isCelsiusSuite: isCelsiusSuite,
	isNotCelsiusSuite: isNotCelsiusSuite,
	isFahrenheitSuite: isFahrenheitSuite,
	isNotFahrenheitSuite: isNotFahrenheitSuite,
	isKelvinSuite: isKelvinSuite,
	isNotKelvinSuite: isNotKelvinSuite,
	isTemperatureSuite: isTemperatureSuite,
	isNotTemperatureSuite: isNotTemperatureSuite
});

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

for (const benchmark of Object.values(benchmarks)) {
    benchmark.run();
}
// #endif
