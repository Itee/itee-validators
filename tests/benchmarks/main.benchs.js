/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global _ suite benchmark */

//
////import './cores/cores.benchs'
////import './maths/maths.benchs'
////import './physics/physics.benchs'
//
///* global suite, benchmark */
//
//import { CoresBenchs } from './cores/cores.benchs'
////import { MathsBenchs } from './maths/maths.benchs'
////import { PhysicsBenchs } from './physics/physics.benchs'
//
//const root = typeof window !== 'undefined' ? window :
//    typeof global !== 'undefined' ? global :
//        Function( 'return this' )();
//
//console.log( 'root: ' + root )
//root[ 'foobar' ] = 'quxtoto'
//
//suite( 'Itee#Validators', () => {
//
//    benchmark( '', () => {} )
//
//    CoresBenchs.call(root)
////    MathsBenchs.call(root)
////    PhysicsBenchs.call(root)
//
//} )
//
////suite(
////    'ROOT iteration',
////    function () {
////
////        benchmark( '_.each', function () {
////            _.each( this.list, function ( number ) {
////                return number;
////            } );
////        }, {
////            setup:    function () {
////
////                console.log( 'Setup of ' + this.name )
////                console.log( 'this.mainlist:' + this.mainlist )
////                this.list = [ 5, 4, 3 ];
////
////            },
////            teardown: function () {
////                delete this.list
////            }
////        } )
////
////    },
////    {
////        onStart:    function () {
////
////            console.log( 'onStart:' + this.name )
////            this.mainlist = [ 5, 4, 3 ];
////
////        },
////        onCycle:    function ( event ) {
////
////            var suite     = this;
////            var benchmark = event.target;
////            console.log( 'onCycle for ' + suite.name + ': ' + benchmark.name );
////            console.log( 'this.mainlist=' + this.mainlist )
////
////        },
////        onComplete: function () {
////
////            this.mainlist = null;
////
////        }
////    }
////)
//
//
//

///////////////

suite( 'Array iteration', function () {

    benchmark( '_.each', function () {

        _.each( this.list, function ( number ) {

            return number

        } )

    } )

    benchmark( 'native forEach', function () {
        this.list.forEach( function ( number ) {
            return number
        } )
    } )
}, {
    onCycle: function ( event ) {
        var suite     = this
        var benchmark = event.target
        console.log( 'Cycle completed for ' + suite.name + ': ' + benchmark.name )
    },
    onStart: function () {
        this.list = [ 5, 4, 3 ]
    },
    onComplete: function () {
        this.list = null
    }
} )
