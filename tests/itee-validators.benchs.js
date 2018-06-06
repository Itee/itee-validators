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
	 */

	const myArray = [ 1, 2, 3 ];
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

	    console.log( 'suite: ' + this );

	    benchmark('from const _.each', function() {
	        _.each(myArray, function(el) {
	            return el;
	        });
	    });

	    benchmark('_.each', function() {

	        console.log( '_.each: ' + this );
	        console.log( '_.each mainlist: ' + this.mainlist );

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

	        console.log( 'benchmark each: ' + this );
	        console.log( 'benchmark each list: ' + this.list );
	        console.log( 'benchmark each mainlist: ' + this.mainlist );

	        _.each( this.list, function ( number ) {
	            return number;
	        } );

	    }, {

	        setup: function() {

	            this.list = [ 1, 2, 3 ];
	//            console.log( 'setup each list: ' + this.list )

	        },

	        teardown: function() {

	//            console.log( 'teardown each list: ' + this.list )
	            delete this.list;

	        }

	    } );

	    benchmark( 'alone native forEach', function () {
	        this.list.forEach( function ( number ) {
	            return number;
	        } );
	    }, {

	        setup: function() {

	            this.list = [ 1, 2, 3 ];
	//            console.log( 'setup each list: ' + this.list )

	        },

	        teardown: function() {

	//            console.log( 'teardown each list: ' + this.list )
	            delete this.list;

	        }

	    }  );

	}, {

	    onStart: function () {
	        this.mainlist = [ 5, 4, 3 ];
	        console.log( 'suite onStart: ' + this.mainlist );
	    },

	    onCycle: function ( event ) {
	        var suite     = this;
	        var benchmark = event.target;
	        benchmark.mainlist = this.mainlist;
	        console.log( 'suite onCycle: ' + suite.mainlist );
	        console.log( 'Cycle completed for ' + suite.name + ': ' + benchmark.name );
	    },

	    onComplete: function () {
	        console.log( 'suite onComplete: ' + this.mainlist );
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
