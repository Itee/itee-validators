/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global suite */

//export * from './arrays/arrays.benchs'
//export * from './booleans/booleans.benchs'
//export * from './functions/functions.benchs'
//export * from './numbers/numbers.benchs'
//export * from './objects/objects.benchs'
//export * from './strings/strings.benchs'
//export * from './symbols/symbols.benchs'
//export * from './voids/voids.benchs'

import { BooleanBenchs } from './booleans/booleans.benchs'

function CoresBenchs () {

    suite(
        'Cores',
        function () {

            //            BooleanBenchs
            BooleanBenchs()
            //            BooleanBenchs.call( this )

        },
        {

            // called when the suite starts running
            'onStart': function () {
                console.log( 'CoresBenchs onStart' )
                this.foobar = 'toto'
            },

            // called between running benchmarks
            'onCycle': function () {
                console.log( 'CoresBenchs onCycle' )

                this.foobar = 'qux'
            },

            // called when aborted
            'onAbort': function () {
                console.log( 'CoresBenchs onAbort' )
            },

            // called when a test errors
            'onError': function () {
                console.log( 'CoresBenchs onError' )
            },

            // called when reset
            'onReset': function () {
                console.log( 'CoresBenchs onReset' )
            },

            // called when the suite completes running
            'onComplete': function () {
                console.log( 'CoresBenchs onComplete' )
                delete this.foobar
            }

        }
    )

}

export { CoresBenchs }
