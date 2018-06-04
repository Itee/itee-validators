/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

/* global benchmark */

import { isBoolean } from '../../../../builds/itee-validators.esm'
import { createDataSet } from '../../../TestsUtils'

//export default benchmark( 'isBoolean', () => {
//
//    const _dataSet = createDataSet()
//    for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
//        isBoolean( _dataSet[ i ] )
//    }
//
//} )

function BooleanBenchs () {

    benchmark( 'isBoolean',
        () => {

            const _dataSet = this.dataset
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                isBoolean( _dataSet[ i ] )
            }

        },
        {
            setup:    function () {

                console.log( 'Setup of ' + this.name )
                this.dataset = createDataSet()

            },
            teardown: function () {
                delete this.dataset
            }
        } )

}

export { BooleanBenchs }

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

//function BooleanBenchs () {
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
//export { BooleanBenchs }
