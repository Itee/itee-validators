/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global suite */

export { default as isBooleanBenchs } from './booleans/isBoolean.benchs'

//import { isBooleanBenchs } from './booleans/isBoolean.benchs'
//import { default as isBooleanBenchs } from './booleans/isBoolean.benchs'
//import { isBooleanBenchs } from './booleans/booleans.benchs'

//function CoresBenchs () {
//
//    console.log( 'CoresBenchs: this ' + this )
//    console.log( 'CoresBenchs: out start' )
//
//    suite(
//        'Cores',
//        function () {
//
//            console.log( 'CoresBenchs: inner start' )
//            console.log( 'CoresBenchs: this = ' + this )
//            console.log( 'CoresBenchs: inner end' )
//
//            isBooleanBenchs
////            isBooleanBenchs.call( this )
////            isBooleanBenchs.bind( this )
//
//
//        },
//        {
//
//            // called when the suite starts running
//            'onStart': function () {
//                console.log( 'CoresBenchs onStart' )
//                this.foobar = 'toto'
//            },
//
//            // called between running benchmarks
//            'onCycle': function () {
//                console.log( 'CoresBenchs onCycle' )
//                this.foobar = 'qux'
//            },
//
//            // called when aborted
//            'onAbort': function () {
//                console.log( 'CoresBenchs onAbort' )
//            },
//
//            // called when a test errors
//            'onError': function () {
//                console.log( 'CoresBenchs onError' )
//                console.log( 'foobar onError: ' + this.foobar )
//            },
//
//            // called when reset
//            'onReset': function () {
//                console.log( 'CoresBenchs onReset' )
//            },
//
//            // called when the suite completes running
//            'onComplete': function () {
//                console.log( 'CoresBenchs onComplete' )
//                delete this.foobar
//            },
//
//        }
//    )
//
//    console.log( 'CoresBenchs: out end' )
//
//}
//
//export { CoresBenchs }
