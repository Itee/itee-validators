/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global benchmark */


//suite('Array iteration', function() {
//
//    benchmark('_.each', function() {
//        _.each([1, 2, 3], function(el) {
//            return el;
//        });
//    });
//
//    benchmark('native forEach', function() {
//        [1, 2, 3].forEach(function(el) {
//            return el;
//        });
//    });
//
//});

///////////////////////////

//import { isBoolean } from '../../../../builds/itee-validators.esm'
import { createDataSet } from '../../../TestsUtils'

const myArray = [ 1, 2, 3 ]
//const myArray = createDataSet().numbers

//suite('Array iteration', function() {
//
//    benchmark('from const _.each', function() {
//        _.each(myArray, function(el) {
//            return el;
//        });
//    });
//
//    benchmark('_.each', function() {
//        _.each([1, 2, 3], function(el) {
//            return el;
//        });
//    });
//
//    benchmark('from const native forEach', function() {
//        myArray.forEach(function(el) {
//            return el;
//        });
//    });
//
//    benchmark('native forEach', function() {
//        [1, 2, 3].forEach(function(el) {
//            return el;
//        });
//    });
//
//});

/////////////////////////////////

suite( 'Array iteration', function () {

    console.log( 'suite: ' + this )

    benchmark('from const _.each', function() {
        _.each(myArray, function(el) {
            return el;
        });
    });

    benchmark('_.each', function() {

        console.log( '_.each: ' + this )
        console.log( '_.each mainlist: ' + this.mainlist )

        _.each([1, 2, 3], function(el) {
            return el;
        });
    });

    benchmark('from const native forEach', function() {
        myArray.forEach(function(el) {
            return el;
        });
    });

    benchmark('native forEach', function() {
        [1, 2, 3].forEach(function(el) {
            return el;
        });
    });

    benchmark( 'alone _.each', function () {

        console.log( 'benchmark each: ' + this )
        console.log( 'benchmark each list: ' + this.list )
        console.log( 'benchmark each mainlist: ' + this.mainlist )

        _.each( this.list, function ( number ) {
            return number;
        } );

    }, {

        setup: function() {

            this.list = [ 1, 2, 3 ]
//            console.log( 'setup each list: ' + this.list )

        },

        teardown: function() {

//            console.log( 'teardown each list: ' + this.list )
            delete this.list

        }

    } );

    benchmark( 'alone native forEach', function () {
        this.list.forEach( function ( number ) {
            return number;
        } );
    }, {

        setup: function() {

            this.list = [ 1, 2, 3 ]
//            console.log( 'setup each list: ' + this.list )

        },

        teardown: function() {

//            console.log( 'teardown each list: ' + this.list )
            delete this.list

        }

    }  );

}, {

    onStart: function () {
        this.mainlist = [ 5, 4, 3 ];
        console.log( 'suite onStart: ' + this.mainlist )
    },

    onCycle: function ( event ) {
        var suite     = this;
        var benchmark = event.target;
        benchmark.mainlist = this.mainlist;
        console.log( 'suite onCycle: ' + suite.mainlist )
        console.log( 'Cycle completed for ' + suite.name + ': ' + benchmark.name );
    },

    onComplete: function () {
        console.log( 'suite onComplete: ' + this.mainlist )
        this.mainlist = null;
    }

} );

//export default benchmark( 'isBoolean', () => {
//
//    console.log( 'name: ' + this.name )
//    console.log( 'foobar: ' + this.foobar )
//    console.log( 'dataset: ' + this.dataset )
//    console.log( 'dataset fn: ' + createDataSet )
//
//    const _dataSet = createDataSet()
//    for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
//        isBoolean( _dataSet[ i ] )
//    }
//
//}, {
//    setup:    function () {
//
//        console.log( 'Setup of ' + this.name )
//        this.dataset = createDataSet()
//
//    },
//    teardown: function () {
//
//        console.log( 'Teardown of ' + this.name )
//        delete this.dataset
//
//    }
//} )

//function isBooleanBenchs () {
//
//    console.log( 'isBooleanBenchs: out start' )
//
//    benchmark( 'isBoolean',
//        () => {
//
//            console.log( 'name: ' + this.name )
//            console.log( 'foobar: ' + this.foobar )
//            console.log( 'dataset: ' + this.dataset )
//            console.log( 'dataset fn: ' + createDataSet )
//
//            const _dataSet = this.dataset
//            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
//                isBoolean( _dataSet[ i ] )
//            }
//
//        },
//        {
//            setup:    function () {
//
//                console.log( 'Setup of ' + this.name )
//                this.dataset = createDataSet()
//
//            },
//            teardown: function () {
//                console.log( 'Teardown of ' + this.name )
//                delete this.dataset
//            }
//        } )
//
//    console.log( 'isBooleanBenchs: out end' )
//
//}

//export { isBooleanBenchs }

//function isBooleanBenchs () {
//
//    console.log( 'isBooleanBenchs: out start' )
//
//    return benchmark( 'isBoolean',
//        () => {
//
//            console.log( 'name: ' + this.name )
//            console.log( 'foobar: ' + this.foobar )
//            console.log( 'dataset: ' + this.dataset )
//            console.log( 'dataset fn: ' + createDataSet() )
//
//            const _dataSet = this.dataset
//            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
//                isBoolean( _dataSet[ i ] )
//            }
//
//        },
//        {
//            setup:    function () {
//
//                console.log( 'Setup of ' + this.name )
//                this.dataset = createDataSet()
//
//            },
//            teardown: function () {
//                console.log( 'Teardown of ' + this.name )
//                delete this.dataset
//            }
//        } )
//
//    console.log( 'isBooleanBenchs: out end' )
//
//}
//
//export { isBooleanBenchs }

//export default new Benchmark
//    .Suite( 'Itee#Validators#Booleans#isBoolean()',
//        {
//
//            // called when the suite starts running
//            'onStart': function () {
//                console.log( 'onStart' + this )
//            },
//
//            // called between running benchmarks
//            'onCycle': function () {
//                console.log( 'onCycle' + this )
//            },
//
//            // called when aborted
//            'onAbort': function () {
//                console.log( 'onAbort' )
//            },
//
//            // called when a test errors
//            'onError': function () {
//                console.log( 'onError' )
//            },
//
//            // called when reset
//            'onReset': function () {
//                console.log( 'onReset' )
//            },
//
//            // called when the suite completes running
//            'onComplete': function () {
//                console.log( 'onComplete' + this )
//            },
//
//        } )
//    .add( 'typeof', () => {
//
//        const _dataSet = createDataSet()
//        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
//            isBoolean( _dataSet[ i ] )
//        }
//
//    } )

//function isBooleanBenchs () {
//
//    return new Benchmark
//        .Suite( 'Itee#Validators#Booleans#isBoolean()',
//            {
//
//                // called when the suite starts running
//                'onStart': function () {
//                    console.log( 'onStart' )
//                },
//
//                // called between running benchmarks
//                'onCycle': function () {
//                    console.log( 'onCycle' )
//                },
//
//                // called when aborted
//                'onAbort': function () {
//                    console.log( 'onAbort' )
//                },
//
//                // called when a test errors
//                'onError': function () {
//                    console.log( 'onError' )
//                },
//
//                // called when reset
//                'onReset': function () {
//                    console.log( 'onReset' )
//                },
//
//                // called when the suite completes running
//                'onComplete': function () {
//                    console.log( 'onComplete' )
//                },
//
//            } )
//        .add( 'typeof', () => {
//
//            const _dataSet = createDataSet()
//            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
//                isBoolean( _dataSet[ i ] )
//            }
//
//        } )
//
//}
//
//export { isBooleanBenchs }

// add tests
//export default new Benchmark.Suite
//                            .add( 'RegExp#test', function () {
//                                /o/.test( 'Hello World!' );
//                            } )
//    .add( 'String#indexOf', function () {
//        'Hello World!'.indexOf( 'o' ) > -1;
//    } )
//    .add( 'String#match', function () {
//        !!'Hello World!'.match( /o/ );
//    } )
//    // add listeners
//    .on( 'cycle', function ( event ) {
//        console.log( String( event.target ) );
//    } )
//    .on( 'complete', function () {
//        console.log( 'Fastest is ' + this.filter( 'fastest' ).map( 'name' ) );
//    } )
//    // run async
//    .run( { 'async': true } );
