this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/booleans
	 * @description Export the validation methods about booleans
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

	// #if IS_REMOVE
	function isBoolean_alt ( value ) {

	    return typeof value === 'boolean' || (typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean')

	}

	// #endif

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
	 */

	suite( 'Array iteration', () => {

	    benchmark( 'isBoolean()', Itee.TestsUtils.iterateOverDataMap( isBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isBoolean_alt()', Itee.TestsUtils.iterateOverDataMap( isBoolean_alt ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isNotBoolean()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */
	//import './cores/strings/isString.benchs'

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
