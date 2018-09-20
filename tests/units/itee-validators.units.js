/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe */

import { _coresUnits }   from './cores/_cores.units'
import { _mathsUnits }   from './maths/_maths.units'
import { _physicsUnits } from './physics/_physics.units'


const root = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global :
        Function( 'return this' )()

describe( 'Itee#Validators', () => {

    _coresUnits.call( root )
    _mathsUnits.call( root )
    _physicsUnits.call( root )

} )
