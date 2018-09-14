this.Itee = this.Itee || {};
(function () {
    'use strict';

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     * @module sources/cores/voids
     * @description Export the validation methods about voids notions
     */

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
                void:             (() => {

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
     */

    function isString_1 ( val ) {
        return (typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call( val ) === '[object String]'))
    }

    function isString_2 ( val ) {
        return (Object.prototype.toString.call( val ) === "[object String]")
    }

    function isString_3 ( val ) {
        return (val !== null && val !== undefined && val.constructor === String)
    }

    new Benchmark
        .Suite( 'Itee#Validators#Strings#isString()' )
        .add( 'typeof', () => {

            const _dataSet = createDataMap();

        } )
        .add( 'typeof || instanceof', () => {

            const _dataSet = createDataMap();

        } )
        .add( 'Object.prototype.toString', () => {

            const _dataSet = createDataMap();
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                isString_1( _dataSet[ i ] );
            }

        } )
        .add( 'constructor', () => {

            const _dataSet = createDataMap();
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                isString_2( _dataSet[ i ] );
            }

        } )
        .add( 'typeof || !!val || toString', () => {

            const _dataSet = createDataMap();
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                isString_3( _dataSet[ i ] );
            }

        } )
        .add( 'val+""', () => {

            const _dataSet = createDataMap();

        } )
        // add listeners
        .on( 'cycle', event => {
            console.log( String( event.target ) );
        } )
        .on( 'complete', function onComplet () {
            console.log( `Fastest is ${this.filter( 'fastest' ).map( 'name' )}` );
        } )
        // run async
        .run();

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     */

    //import './cores/cores.benchs'
    //import './maths/maths.benchs'
    //import './physics/physics.benchs'

    /* global suite, benchmark */

    //import { CoresBenchs } from './cores/cores.benchs'
    //import { MathsBenchs } from './maths/maths.benchs'
    //import { PhysicsBenchs } from './physics/physics.benchs'

    //const root = typeof window !== 'undefined' ? window :
    //    typeof global !== 'undefined' ? global :
    //        Function( 'return this' )();

    //suite( 'Itee#Validators', () => {
    //
    //    console.log( 'Main bench: start' )
    //
    //    // Will display the max ops/sec as base
    //    benchmark( '', () => {} )
    //
    //    CoresBenchs.call( root )
    //    //    MathsBenchs.call(root)
    //    //    PhysicsBenchs.call(root)
    //
    //    console.log( 'Main bench: end' )
    //
    //}, {
    //
    //    // called when the suite starts running
    //    'onStart': function () {
    //        console.log( 'Validators onStart' )
    //        this.foobar = 'titi'
    //    },
    //
    //    // called between running benchmarks
    //    'onCycle': function () {
    //        console.log( 'Validators onCycle' )
    //        this.foobar = 'kiki'
    //    },
    //
    //    // called when aborted
    //    'onAbort': function () {
    //        console.log( 'Validators onAbort' )
    //    },
    //
    //    // called when a test errors
    //    'onError': function () {
    //        console.log( 'Validators onError' )
    //        console.log( 'foobar onError' + this.foobar )
    //    },
    //
    //    // called when reset
    //    'onReset': function () {
    //        console.log( 'Validators onReset' )
    //    },
    //
    //    // called when the suite completes running
    //    'onComplete': function () {
    //        console.log( 'Validators onComplete' )
    //        delete this.foobar
    //    },
    //
    //} )

    ////////////////
    //
    //suite(
    //    'ROOT iteration',
    //    function () {
    //
    //        benchmark( '_.each', function () {
    //
    //            _.each( this.list, function ( number ) {
    //                return number
    //            } )
    //
    //        }, {
    //            setup:    function () {
    //
    //                console.log( 'Setup of ' + this.name )
    //                console.log( 'this.mainlist: ' + this.mainlist )
    //                this.list = [ 5, 4, 3 ]
    //
    //            },
    //            teardown: function () {
    //
    //                delete this.list
    //
    //            }
    //        } )
    //
    //    },
    //    {
    //        // called when the suite starts running
    //        onStart: function () {
    //            console.log( 'ROOT onStart' )
    //            this.mainlist = [ 5, 4, 3 ];
    //        },
    //
    //        // called between running benchmarks
    //        onCycle: function ( event ) {
    //
    //            var suite     = this;
    //            var benchmark = event.target;
    //            console.log( 'ROOT onCycle for ' + suite.name + ': ' + benchmark.name );
    //            console.log( 'this.mainlist=' + this.mainlist )
    //
    //        },
    //
    //        // called when aborted
    //        onAbort: function () {
    //            console.log( 'ROOT onAbort' )
    //        },
    //
    //        // called when a test errors
    //        onError: function () {
    //            console.log( 'ROOT onError' )
    //        },
    //
    //        // called when reset
    //        onReset: function () {
    //            console.log( 'ROOT onReset' )
    //        },
    //
    //        // called when the suite completes running
    //        onComplete: function () {
    //            console.log( 'ROOT onComplete' )
    //            delete this.mainlist
    //        },
    //
    //    }
    //)

    ///////////////

    //suite('Array iteration', function() {
    //    benchmark('_.each', function() {
    //        _.each(this.list, function(number) {
    //            return number;
    //        });
    //    });
    //
    //    benchmark('native forEach', function() {
    //        this.list.forEach(function(number) {
    //            return number;
    //        });
    //    });
    //}, {
    //    onCycle: function(event) {
    //        var suite = this;
    //        var benchmark = event.target;
    //        console.log('Cycle completed for ' + suite.name + ': ' + benchmark.name);
    //    },
    //    onStart: function() {
    //        this.list = [5, 4, 3];
    //    },
    //    onComplete: function() {
    //        this.list = null;
    //    }
    //});

    ////////////////////////

    //suite('Array iteration', function() {
    //
    //    console.log('suite: ' + this.list)
    //
    //    benchmark('_.each', function() {
    //        console.log('each: ' + this.list)
    //        _.each(this.list, function(number) {
    //            return number;
    //        });
    //    });
    //
    //    benchmark('native forEach', function() {
    //        console.log('forEach: ' + this.list)
    //        this.list.forEach(function(number) {
    //            return number;
    //        });
    //    });
    //
    //}, {
    //    onCycle: function(event) {
    //        var suite = this;
    //        var benchmark = event.target;
    //        console.log('Cycle completed for ' + suite.name + ': ' + benchmark.name);
    //    },
    //    onStart: function() {
    //        this.list = [5, 4, 3];
    //    },
    //    onComplete: function() {
    //        this.list = null;
    //    }
    //});

}());
