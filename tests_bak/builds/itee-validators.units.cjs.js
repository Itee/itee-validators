'use strict';

var mocha = require('mocha');
var chai = require('chai');

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

    mocha.describe( 'isArray()', () => {

        mocha.it( 'should return true only when the value is a array', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isArray( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArray( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotArray()', () => {

        mocha.it( 'should return false only when the value is a array', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArray( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArray( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

function isArrayOfArrayUnits () {

    mocha.describe( 'isArrayOfArray()', () => {

        mocha.it( 'should return true only when the value is a array of arrays', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfArray( dataSet[ key ] );
                        if ( key === 'arrays' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfArray( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotArrayOfArray()', () => {

        mocha.it( 'should return false only when the value is a array of arrays', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfArray( dataSet[ key ] );
                        if ( key === 'arrays' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArrayOfArray( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfMultiElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

function isArrayOfMultiElementUnits () {

    mocha.describe( 'isArrayOfMultiElement()', () => {

        mocha.it( 'should return true only when the value is a multi valued array', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const value  = dataSet[ key ];
                        const result = isArrayOfMultiElement( value );
                        if ( value.length > 1 ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false;
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
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

function isArrayOfNullUnits () {

    mocha.describe( 'isArrayOfNull()', () => {

        mocha.it( 'should return true only when the value is an array of null', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfNull( dataSet[ key ] );
                        if ( key === 'null' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotArrayOfNull()', () => {

        mocha.it( 'should return false only when the value is an array of null', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfNull( dataSet[ key ] );
                        if ( key === 'null' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfObject method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

function isArrayOfObjectUnits () {

    mocha.describe( 'isArrayOfObject()', () => {

        mocha.it( 'should return true only when the value is a array of objects', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfObject( dataSet[ key ] );
                        if ( key === 'objects' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotArrayOfObject()', () => {

        mocha.it( 'should return false only when the value is a array of objects', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfObject( dataSet[ key ] );
                        if ( key === 'objects' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfSingleElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

function isArrayOfSingleElementUnits () {

    mocha.describe( 'isArrayOfSingleElement()', () => {

        mocha.it( 'should return true only when the value is a single valued array of number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfSingleElement( dataSet[ key ] );
                        if ( key === 'singleValued' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false;
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

// #endif

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

    mocha.describe( 'isArrayOfString()', () => {

        mocha.it( 'should return true only when the value is a array of strings', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfString( dataSet[ key ] );
                        if ( key === 'strings' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfString( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotArrayOfString()', () => {

        mocha.it( 'should return false only when the value is a array of strings', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfString( dataSet[ key ] );
                        if ( key === 'strings' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfUndefined method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

function isArrayOfUndefinedUnits () {

    mocha.describe( 'isArrayOfUndefined()', () => {

        mocha.it( 'should return true only when the value is a array of undefined', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfUndefined( dataSet[ key ] );
                        if ( key === 'undefined' || key === 'void' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotArrayOfUndefined()', () => {

        mocha.it( 'should return false only when the value is a array of undefined', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfUndefined( dataSet[ key ] );
                        if ( key === 'undefined' || key === 'void' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'isEmptyArray()', () => {

        mocha.it( 'should return true only when the value is an empty array object', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isEmptyArray( dataSet[ key ] );
                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isEmptyArray( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotEmptyArray()', () => {

        mocha.it( 'should return false only when the value is an empty array object', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotEmptyArray( dataSet[ key ] );
                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Arrays', () => {

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

    mocha.describe( 'isBoolean()', () => {

        mocha.it( 'should return true only when the value is a boolean', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'booleans' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isBoolean( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isBoolean( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotBoolean()', () => {

        mocha.it( 'should return false only when the value is a boolean', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'booleans' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotBoolean( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotBoolean( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Booleans', () => {

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
 * @module sources/cores/functions/isFunction
 * @desc Export function to validate if a value is a function or not
 * @example
 *
 * import { isFunction } from 'itee-validators'
 *
 * if( isFunction( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a function
 *
 * @param data {*} The data to check against the functionality
 * @returns {boolean} true if data is a function, false otherwise.
 */
function isFunction ( data ) {
    return ( typeof data === 'function' )
}

/**
 * Check if given data is not a function
 *
 * @param data {*} The data to check against the functionality
 * @returns {boolean} true if data is not a function, false otherwise.
 */
function isNotFunction ( data ) {
    return ( typeof data !== 'function' )
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

    mocha.describe( 'isFunction()', () => {

        mocha.it( 'should return true only when the value is a functions', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'functions' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isFunction( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isFunction( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotFunction()', () => {

        mocha.it( 'should return false only when the value is a functions', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'functions' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotFunction( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotFunction( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Functions', () => {

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

// #endif

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
function isFinite ( data ) {
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

    mocha.describe( 'isInfinite()', () => {

        mocha.it( 'should return true only when the value is an infinite number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeInfinity', 'positiveInfinity' ];

                    for ( let key in dataSet ) {

                        const result = isInfinite( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isInfinite( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isInfinitePositive()', () => {

        mocha.it( 'should return true only when the value is a positive infinite number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {

                        const result = isInfinitePositive( dataSet[ key ] );
                        if ( key === 'positiveInfinity' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isInfinitePositive( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isInfiniteNegative()', () => {

        mocha.it( 'should return true only when the value is a negative infinite number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {

                        const result = isInfiniteNegative( dataSet[ key ] );
                        if ( key === 'negativeInfinity' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isInfiniteNegative( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isFinite()', () => {

        mocha.it( 'should return true only when the value is a finite number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeInfinity', 'nan', 'positiveInfinity' ];

                    for ( let key in dataSet ) {

                        const result = isFinite( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isFinite( dataSet[ key ] ) ).to.be.false;
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
 * @module sources/cores/numbers/isMax
 * @desc Export function to validate if a value is a maximum javascript number
 * @example
 *
 * import { isMaxPositive } from 'itee-validators'
 *
 * if( isMaxPositive( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is a maximum positive number
 *
 * @param data {*} The data to check against the positive maximum state
 * @returns {boolean} true if data is positive maximum, false otherwise
 */
function isMaxPositive ( data ) {
    return ( data === Number.MAX_VALUE )
}

/**
 * Check if the given data is a maximum negative number
 *
 * @param data {*} The data to check against the maximum infinite state
 * @returns {boolean} true if data is negative maximum, false otherwise
 */
function isMaxNegative ( data ) {
    return ( data === -Number.MAX_VALUE )
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

    mocha.describe( 'isMaxPositive()', () => {

        mocha.it( 'should return true only when the value is equal to positive max number value', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveMaxValue' ];

                    for ( let key in dataSet ) {

                        const result = isMaxPositive( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isMaxPositive( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isMaxNegative()', () => {

        mocha.it( 'should return true only when the value is equal to negative max number value', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMaxValue' ];

                    for ( let key in dataSet ) {

                        const result = isMaxNegative( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isMaxNegative( dataSet[ key ] ) ).to.be.false;
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
 * @module sources/cores/numbers/isMin
 * @desc Export function to validate if a value is a minimum javascript number
 * @example
 *
 * import { isMaxPositive } from 'itee-validators'
 *
 * if( isMaxPositive( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is a minimum positive number
 *
 * @param data {*} The data to check against the positive minimum state
 * @returns {boolean} true if data is positive minimum, false otherwise
 */
function isMinPositive ( data ) {
    return ( data === Number.MIN_VALUE )
}

/**
 * Check if the given data is a minimum negative number
 *
 * @param data {*} The data to check against the minimum infinite state
 * @returns {boolean} true if data is negative minimum, false otherwise
 */
function isMinNegative ( data ) {
    return ( data === -Number.MIN_VALUE )
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

    mocha.describe( 'isMinPositive()', () => {

        mocha.it( 'should return true only when the value is equal to positive minimum number value', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveMinValue' ];

                    for ( let key in dataSet ) {

                        const result = isMinPositive( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isMinPositive( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isMinNegative()', () => {

        mocha.it( 'should return true only when the value is equal to negative minimum number value', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinValue' ];

                    for ( let key in dataSet ) {

                        const result = isMinNegative( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isMinNegative( dataSet[ key ] ) ).to.be.false;
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

    mocha.describe( 'isNumber()', () => {

        mocha.it( 'should return true only when the value is a number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNumber( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNumber( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotNumber()', () => {

        mocha.it( 'should return false only when the value is a number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotNumber( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotNumber( dataSet[ key ] ) ).to.be.true;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNumberPositive()', () => {

        mocha.it( 'should return true only when the value is a positive number', () => {

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
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNumberPositive( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNumberNegative()', () => {

        mocha.it( 'should return true only when the value is a negative number', () => {

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
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNumberNegative( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isInteger()', () => {

        mocha.it( 'should return true only when the value is an integer number', () => {

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
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isInteger( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isFloat()', () => {

        mocha.it( 'should return true only when the value is a float number', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinValue', 'negativeFloat', 'positiveFloat', 'positiveMinValue' ];

                    for ( let key in dataSet ) {

                        const result = isFloat( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isFloat( dataSet[ key ] ) ).to.be.false;
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
 * @module sources/cores/numbers/isSafeInteger
 * @desc Export function to validate if a value is a safe integer number
 * @example
 *
 * import { isMaxSafeInteger } from 'itee-validators'
 *
 * if( isMaxSafeInteger( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if the given data is a maximum safe integer number
 *
 * @param data {*} The data to check against the maximum safe integer state
 * @returns {boolean} true if data is a maximum safe integer, false otherwise
 */
function isMaxSafeInteger ( data ) {
    return ( data === Number.MAX_SAFE_INTEGER )
}

// Todo: Neg

/**
 * Check if the given data is a minimum safe integer number
 *
 * @param data {*} The data to check against the minimum safe integer state
 * @returns {boolean} true if data is a minimum safe integer, false otherwise
 */
function isMinSafeInteger ( data ) {
    return ( data === Number.MIN_SAFE_INTEGER )
}

// Todo: Neg

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

    mocha.describe( 'isMaxSafeInteger()', () => {

        mocha.it( 'should return true only when the value is a the max safe integer value', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveMaxSafeInteger' ];

                    for ( let key in dataSet ) {

                        const result = isMaxSafeInteger( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isMaxSafeInteger( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isMinSafeInteger()', () => {

        mocha.it( 'should return true only when the value is a the min safe integer value', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinSafeInteger' ];

                    for ( let key in dataSet ) {

                        const result = isMinSafeInteger( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isMinSafeInteger( dataSet[ key ] ) ).to.be.false;
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
 * @desc Export the units tests about isZero method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

function isZeroUnits () {

    mocha.describe( 'isZero()', () => {

        mocha.it( 'should return true only when the value is zero', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeZero', 'positiveZero' ];

                    for ( let key in dataSet ) {

                        const result = isZero( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isZero( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isZeroPositive()', () => {

        mocha.it( 'should return true only when the value is a positive zero', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveZero' ];

                    for ( let key in dataSet ) {

                        const result = isZeroPositive( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isZeroPositive( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isZeroNegative()', () => {

        mocha.it( 'should return true only when the value is a negative zero', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeZero' ];

                    for ( let key in dataSet ) {

                        const result = isZeroNegative( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isZeroNegative( dataSet[ key ] ) ).to.be.false;
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

    mocha.describe( 'Numbers', () => {

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
 * @module sources/cores/objects/isEmptyObject
 * @desc Export function to validate if a value is an empty object
 * @example
 *
 * import { isEmptyObject } from 'itee-validators'
 *
 * if( isEmptyObject( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

/**
 * Check if given data is not an empty object
 *
 * @param data {*} The data to check against the emptiness of the object
 * @returns {boolean} true if data is not an empty object, false otherwise
 */
function isNotEmptyObject ( data ) {
    return !( isEmptyObject( data ) )
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

    mocha.describe( 'isEmptyObject()', () => {

        mocha.it( 'should return true only when the value is an empty object', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {

                        const result = isEmptyObject( dataSet[ key ] );
                        if ( key === 'empty' || key === 'instance' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isEmptyObject( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotEmptyObject()', () => {

        mocha.it( 'should return false only when the value is an empty object', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {

                        const result = isNotEmptyObject( dataSet[ key ] );
                        if ( key === 'empty' || key === 'instance' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotEmptyObject( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/objects
 * @desc Export the units tests about isObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

function isObjectUnits () {

    mocha.describe( 'isObject()', () => {

        mocha.it( 'should return true only when the value is an object', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isObject( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isObject( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotObject()', () => {

        mocha.it( 'should return false only when the value is an object', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotObject( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotObject( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Objects', () => {

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
 * @module sources/cores/strings/isEmptyString
 * @desc Export function to validate if a value is a empty string
 * @example
 *
 * import { isEmptyString } from 'itee-validators'
 *
 * if( isEmptyString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    return ( data.length === 0 )

}

/**
 * Check if given data is not an empty string
 *
 * @param data {*} The data to check against the emptiness of the string
 * @returns {boolean} true if data is not an empty string, false otherwise.
 */
function isNotEmptyString ( data ) {

    return !( isEmptyString( data ) )

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module sources/cores/strings/isBlankString
 * @desc Export function to validate if a value is a blank string
 * @example
 *
 * import { isBlankString } from 'itee-validators'
 *
 * if( isBlankString( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    return ( !/\S/.test( data ) )
}

/**
 * Check if the given data is not a blank string
 *
 * @param data {*} The data to check against the blankness of the string
 * @returns {boolean} true if data is not a blank string, false otherwise.
 */
function isNotBlankString ( data ) {

    return !( isBlankString( data ) )

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

    mocha.describe( 'isBlankString()', () => {

        mocha.it( 'should return true only when the value is a blank string', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'blank', 'stringBlank' ];

                    for ( let key in dataSet ) {

                        const result = isBlankString( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isBlankString( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotBlankString()', () => {

        mocha.it( 'should return false only when the value is a blank string', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'blank', 'stringBlank' ];

                    for ( let key in dataSet ) {

                        const result = isNotBlankString( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotBlankString( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/strings
 * @desc Export the units tests about isEmptyString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

function isEmptyStringUnits () {

    mocha.describe( 'isEmptyString()', () => {

        mocha.it( 'should return true only when the value is an empty string', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

                    for ( let key in dataSet ) {

                        const result = isEmptyString( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isEmptyString( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotEmptyString()', () => {

        mocha.it( 'should return false only when the value is an empty string', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

                    for ( let key in dataSet ) {

                        const result = isNotEmptyString( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotEmptyString( dataSet[ key ] ) ).to.be.true;
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
 * @module tests/cores/strings
 * @desc Export the units tests about isString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

function isStringUnits () {

    mocha.describe( 'isString()', () => {

        mocha.it( 'should return true only when the value is a string', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isString( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isString( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotString()', () => {

        mocha.it( 'should return false only when the value is a string', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotString( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotString( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Strings', () => {

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
 * @module sources/cores/symbols/isSymbol
 * @desc Export function to validate if a value is a symbol
 * @example
 *
 * import { isSymbol } from 'itee-validators'
 *
 * if( isSymbol( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
 *
 */

/**
 * Check if given data is a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is a symbol, false otherwise.
 */
function isSymbol ( data ) {
    return ( typeof data === 'symbol' )
}

/**
 * Check if given data is not a symbol
 *
 * @param data {*} The data to check against the symbol type
 * @returns {boolean} true if data is not a symbol, false otherwise.
 */
function isNotSymbol ( data ) {
    return ( typeof data !== 'symbol' )
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

    mocha.describe( 'isSymbol()', () => {

        mocha.it( 'should return true only when the value is a symbols', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'symbols' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isSymbol( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isSymbol( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotSymbol()', () => {

        mocha.it( 'should return false only when the value is a symbols', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'symbols' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotSymbol( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotSymbol( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Symbols', () => {

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
 * @module tests/cores/voids
 * @desc Export the units tests about isDefined method.
 * @requires {@link module:sources/cores/voids}
 */

function isDefinedUnits () {

    mocha.describe( 'isDefined()', () => {

        mocha.it( 'should return false only when the value is null or undefined', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isDefined( dataSet[ key ] ) ).to.be.false;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isDefined( dataSet[ key ] ) ).to.be.true;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotDefined()', () => {

        mocha.it( 'should return true only when the value is null or undefined', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {
                        chai.expect( isNotDefined( dataSet[ key ] ) ).to.be.true;
                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotDefined( dataSet[ key ] ) ).to.be.false;
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
 * @module sources/cores/voids/isEmpty
 * @desc Export function to validate if a value could be considered as empty
 * @example
 *
 * import { isEmpty } from 'itee-validators'
 *
 * if( isEmpty( value ) ) {
 *     //...
 * } else {
 *     //...
 * }
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

    mocha.describe( 'isEmpty()', () => {

        mocha.it( 'should return true only when the value is an empty container (string, array, object)', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

                    for ( let key in dataSet ) {

                        const result = isEmpty( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else if ( mapKey === 'arrays' ) {

                    const allowed = [ 'emptyArray', 'emptyArrayObject' ];

                    for ( let key in dataSet ) {

                        const result = isEmpty( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else if ( mapKey === 'objects' ) {

                    const allowed = [ 'empty', 'instance' ];

                    for ( let key in dataSet ) {

                        const result = isEmpty( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isEmpty( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotEmpty()', () => {

        mocha.it( 'should return false only when the value is an empty container (string, array, object)', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ];

                    for ( let key in dataSet ) {

                        const result = isNotEmpty( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else if ( mapKey === 'arrays' ) {

                    const allowed = [ 'emptyArray', 'emptyArrayObject' ];

                    for ( let key in dataSet ) {

                        const result = isNotEmpty( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else if ( mapKey === 'objects' ) {

                    const allowed = [ 'empty', 'instance' ];

                    for ( let key in dataSet ) {

                        const result = isNotEmpty( dataSet[ key ] );
                        if ( allowed.includes( key ) ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotEmpty( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'isNull()', () => {

        mocha.it( 'should return true only when the value is null', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNull( dataSet[ key ] );
                        if ( key === 'null' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNull( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNull_0()', () => {

        mocha.it( 'should return true only when the value is null', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNull_0( dataSet[ key ] );
                        if ( key === 'null' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNull_0( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotNull()', () => {

        mocha.it( 'should return false only when the value is null', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNotNull( dataSet[ key ] );
                        if ( key === 'null' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotNull( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'isUndefined()', () => {

        mocha.it( 'should return true only when the value is undefined', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isUndefined( dataSet[ key ] );
                        if ( key === 'undefined' || key === 'void' ) {
                            chai.expect( result ).to.be.true;
                        } else {
                            chai.expect( result ).to.be.false;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isUndefined( dataSet[ key ] ) ).to.be.false;
                    }

                }

            }

        } );

    } );

    mocha.describe( 'isNotUndefined()', () => {

        mocha.it( 'should return false only when the value is undefined', () => {

            const dataMap = this._dataMap;
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ];
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNotUndefined( dataSet[ key ] );
                        if ( key === 'undefined' || key === 'void' ) {
                            chai.expect( result ).to.be.false;
                        } else {
                            chai.expect( result ).to.be.true;
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        chai.expect( isNotUndefined( dataSet[ key ] ) ).to.be.true;
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

    mocha.describe( 'Voids', () => {

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

    mocha.describe( 'Cores', () => {

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

function _mathsUnits () {

    mocha.describe( 'Maths', () => {

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( true ).to.be.true;

        } );

    } );

}

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
 * @module tests/physics/temperatures
 * @desc Export the units tests about isCelsius method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

function isCelsiusUnits () {

    mocha.describe( 'isCelsius()', () => {

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isCelsius( 0 ) ).to.be.true;

        } );

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isNotCelsius( 0 ) ).to.be.false;

        } );

    } );

}

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
 * @module tests/physics/temperatures
 * @desc Export the units tests about isFahrenheit method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

function isFahrenheitUnits () {

    mocha.describe( 'isFahrenheit()', () => {

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isFahrenheit( 0 ) ).to.be.true;

        } );

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isNotFahrenheit( 0 ) ).to.be.false;

        } );

    } );

}

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
 * @module tests/physics/temperatures
 * @desc Export the units tests about isKelvin method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

function isKelvinUnits () {

    mocha.describe( 'isKelvin()', () => {

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isKelvin( 0 ) ).to.be.true;

        } );

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isNotKelvin( 0 ) ).to.be.false;

        } );

    } );

}

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
 * @module tests/physics/temperatures
 * @desc Export the units tests about isTemperature method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

function isTemperatureUnits () {

    mocha.describe( 'isTemperature()', () => {

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isTemperature( 0 ) ).to.be.true;

        } );

        mocha.it.skip( 'should be implemented', () => {

            chai.expect( isNotTemperature( 0 ) ).to.be.false;

        } );

    } );

}

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

function _temperaturesUnits () {

    mocha.describe( 'Temperatures', () => {

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

    mocha.describe( 'Physics', () => {

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

mocha.describe( 'Itee#Validators', () => {

    _coresUnits.call( root );
    _mathsUnits.call( root );
    _physicsUnits.call( root );

} );
